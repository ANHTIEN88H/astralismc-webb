// server/mcBridge.js
const http = require("http");

const MC_HOST = "127.0.0.1"; // IP Minecraft server
const MC_PORT = 7070; // Cổng plugin
const MC_API_KEY = "CHANGE_THIS_TO_A_VERY_LONG_RANDOM_SECRET_KEY"; // Khớp config.yml

const ALLOWED_ENDPOINTS = {
  status: "/api/status",
  "online-players": "/api/online-players",
};

/**
 * Gọi sang Minecraft Plugin qua HTTP nội bộ
 * @param {string} endpoint - 'status' hoặc 'online-players'
 * @returns {Promise<object>}
 */
function fetchFromPlugin(endpoint) {
  return new Promise((resolve, reject) => {
    const path = ALLOWED_ENDPOINTS[endpoint];
    if (!path) {
      return reject(new Error("Unknown endpoint"));
    }

    const options = {
      hostname: MC_HOST,
      port: MC_PORT,
      path,
      method: "GET",
      headers: {
        "X-API-Key": MC_API_KEY,
        Accept: "application/json",
      },
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          reject(new Error("Invalid JSON from plugin"));
        }
      });
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error("Request timed out"));
    });

    req.on("error", reject);
    req.end();
  });
}

module.exports = { fetchFromPlugin };
