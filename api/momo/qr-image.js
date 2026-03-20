const fs = require("fs");
const path = require("path");

// Vercel Serverless Function: phục vụ ảnh QR MoMo
// URL: /api/momo/qr-image
module.exports = async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "public", "momo-qr.png");
    const buf = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "image/png");
    res.status(200).send(buf);
  } catch (err) {
    res.status(404).json({
      error: "QR image not found",
      message: String(err?.message || err),
    });
  }
};

