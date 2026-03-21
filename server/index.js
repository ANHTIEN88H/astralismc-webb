const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();

// Allow both form and JSON bodies, because MoMo IPN may use x-www-form-urlencoded.
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

// In-memory storage for testing (replace with DB in production).
// orderId -> { status, transId, resultCode, message, updatedAt }
const payments = new Map();

// Serve the QR image you provided (used for static test UI).
// For production, you should move the image into `public/` or an S3/CDN.
const MOMO_QR_IMAGE_PATH =
  process.env.MOMO_QR_IMAGE_PATH ||
  "C:\\Users\\ANH TIEN\\.cursor\\projects\\d-wedsitesvmc-html\\assets\\c__Users_ANH_TIEN_AppData_Roaming_Cursor_User_workspaceStorage_a0b9f80931ab04de864df419600a3ee5_images_image-de743c96-6b4e-4a7e-bc46-37ff5456e6ca.png";

app.get("/api/momo/qr-image", (req, res) => {
  const abs = path.resolve(MOMO_QR_IMAGE_PATH);
  if (!fs.existsSync(abs)) {
    return res.status(404).json({ error: "QR image not found", exists: false });
  }

  res.setHeader("Content-Type", "image/png");
  fs.createReadStream(abs)
    .on("error", (err) => {
      // eslint-disable-next-line no-console
      console.error("createReadStream /api/momo/qr-image failed:", err);
      res
        .status(500)
        .json({ error: "Failed to read QR image", message: err.message });
    })
    .pipe(res);
});

function hmacSha256Hex(secretKey, raw) {
  return crypto.createHmac("sha256", secretKey).update(raw).digest("hex");
}

function createMomoSignature({
  accessKey,
  secretKey,
  partnerCode,
  requestId,
  orderId,
  amount,
  orderInfo,
  ipnUrl,
  redirectUrl,
  requestType,
  extraData,
}) {
  // MoMo requires a specific signing format.
  const raw = [
    `accessKey=${accessKey}`,
    `amount=${amount}`,
    `extraData=${extraData || ""}`,
    `ipnUrl=${ipnUrl || ""}`,
    `orderId=${orderId}`,
    `orderInfo=${orderInfo || ""}`,
    `partnerCode=${partnerCode}`,
    `redirectUrl=${redirectUrl || ""}`,
    `requestId=${requestId}`,
    `requestType=${requestType}`,
  ].join("&");

  return hmacSha256Hex(secretKey, raw);
}

function verifyIpnSignature({ body, accessKey, secretKey }) {
  // Signature format for MoMo IPN (Hmac_SHA256 sort keys from a-z).
  // MoMo documents this exact concatenation order for given fields.
  const raw = [
    `accessKey=${accessKey}`,
    `amount=${body.amount}`,
    `extraData=${body.extraData || ""}`,
    `message=${body.message || ""}`,
    `orderId=${body.orderId}`,
    `orderInfo=${body.orderInfo || ""}`,
    `orderType=${body.orderType || ""}`,
    `partnerCode=${body.partnerCode}`,
    `payType=${body.payType || ""}`,
    `requestId=${body.requestId}`,
    `responseTime=${body.responseTime}`,
    `resultCode=${body.resultCode}`,
    `transId=${body.transId}`,
  ].join("&");

  const expected = hmacSha256Hex(secretKey, raw);
  return expected === body.signature;
}

function getMomoCreateEndpoint() {
  const env = (process.env.MOMO_ENV || "test").toLowerCase();
  // Use MoMo TEST by default.
  if (env === "production" || env === "prod") {
    return "https://payment.momo.vn/v2/gateway/api/create";
  }
  return "https://test-payment.momo.vn/v2/gateway/api/create";
}

app.post("/api/momo/create", async (req, res) => {
  try {
    const accessKey = process.env.MOMO_ACCESS_KEY;
    const secretKey = process.env.MOMO_SECRET_KEY;
    const partnerCode = process.env.MOMO_PARTNER_CODE;
    const ipnUrl = process.env.MOMO_IPN_URL;
    const redirectUrl = process.env.MOMO_REDIRECT_URL || "";
    const storeName = process.env.MOMO_STORE_NAME || "AstralisMC";
    const storeId = process.env.MOMO_STORE_ID || "";

    if (!accessKey || !secretKey || !partnerCode || !ipnUrl) {
      return res
        .status(400)
        .json({ error: "Missing MOMO_* env vars. Check .env.example." });
    }

    const { amountVnd, orderInfo, extraData, requestType } = req.body || {};
    const amount = Number(amountVnd);
    if (!Number.isFinite(amount) || amount < 1000) {
      return res.status(400).json({ error: "Invalid amountVnd" });
    }

    const safeOrderInfo =
      typeof orderInfo === "string" ? orderInfo : "MoMo payment";
    const safeExtraData = typeof extraData === "string" ? extraData : "";
    const safeRequestType = requestType || "captureWallet";

    const orderId = `Partner_Transaction_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;
    const requestId = `Request_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;

    const signature = createMomoSignature({
      accessKey,
      secretKey,
      partnerCode,
      requestId,
      orderId,
      amount,
      orderInfo: safeOrderInfo,
      ipnUrl,
      redirectUrl,
      requestType: safeRequestType,
      extraData: safeExtraData,
    });

    const payload = {
      partnerCode,
      requestId,
      orderId,
      amount,
      orderInfo: safeOrderInfo,
      ipnUrl,
      redirectUrl,
      requestType: safeRequestType,
      extraData: safeExtraData,
      // Some MoMo integrations can require these fields.
      // Leave them empty if your account doesn't need them.
      storeName,
      storeId,
      // Passwordless demo: MoMo will validate signature.
      signature,
      lang: "vi",
    };

    // Create payment.
    const momoUrl = getMomoCreateEndpoint();
    const momoResp = await fetch(momoUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const momoJson = await momoResp.json();

    // MoMo returns resultCode/message/qrCodeUrl/payUrl.
    const resultCode = Number(momoJson.resultCode);
    payments.set(orderId, {
      status: resultCode === 0 ? "pending" : "failed",
      transId: null,
      resultCode: resultCode,
      message: momoJson.message || null,
      updatedAt: Date.now(),
    });

    return res.json({
      orderId,
      requestId,
      resultCode: momoJson.resultCode,
      message: momoJson.message,
      qrCodeUrl: momoJson.qrCodeUrl,
      payUrl: momoJson.payUrl,
      deeplink: momoJson.deeplink,
    });
  } catch (err) {
    return res.status(500).json({ error: String(err?.message || err) });
  }
});

app.get("/api/momo/status", (req, res) => {
  const { orderId } = req.query || {};
  if (!orderId) return res.status(400).json({ error: "orderId is required" });

  const record = payments.get(orderId);
  if (!record) return res.json({ orderId, status: "unknown" });
  return res.json({ orderId, ...record });
});

// IPN endpoint: MoMo will call this server-to-server when payment result is ready.
app.post("/api/momo/ipn", (req, res) => {
  try {
    const accessKey = process.env.MOMO_ACCESS_KEY;
    const secretKey = process.env.MOMO_SECRET_KEY;
    if (!accessKey || !secretKey) {
      return res.status(500).send("Missing MOMO keys");
    }

    // MoMo sends fields in request body.
    const body = req.body || {};
    if (!body || !body.orderId || !body.requestId) {
      return res.status(400).send("Invalid IPN payload");
    }

    // Verify signature for security (recommended).
    const ok = verifyIpnSignature({ body, accessKey, secretKey });
    if (!ok) {
      return res.status(403).send("Invalid signature");
    }

    const resultCode = Number(body.resultCode);
    const status = resultCode === 0 ? "success" : "failed";

    payments.set(body.orderId, {
      status,
      transId: body.transId || null,
      resultCode,
      message: body.message || null,
      updatedAt: Date.now(),
    });

    // For testing, we only store status. In production, call your game backend here.
    res.send("OK");
  } catch (err) {
    res.status(500).send(String(err?.message || err));
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`MoMo backend listening on http://localhost:${PORT}`);
});

const { fetchFromPlugin } = require("./mcBridge");

// Route: GET /api/mc/:endpoint
app.get("/api/mc/:endpoint", async (req, res) => {
  const { endpoint } = req.params;

  const allowed = ["status", "online-players"];
  if (!allowed.includes(endpoint)) {
    return res.status(400).json({ error: "Unknown endpoint" });
  }

  try {
    const result = await fetchFromPlugin(endpoint);
    return res.status(result.status).json(result.body);
  } catch (err) {
    return res.status(503).json({
      error: "Cannot connect to Minecraft server",
      details: err.message,
    });
  }
});
