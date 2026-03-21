import { useState } from "react";
import "./ServerStatus.css";

export default function ServerStatus() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const IP = "astralismc.xyz";

  // Show toast with auto-dismiss
  const showToastMsg = (message) => {
    setToastMessage(message);
    setShowToast(true);
    const timeoutId = setTimeout(() => {
      setShowToast(false);
    }, 1400);
    return timeoutId;
  };

  // Handle copy IP to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(IP);
      showToastMsg(`Đã copy: ${IP}`);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = IP;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      showToastMsg(`Đã copy: ${IP}`);
    }
  };

  return (
    <>
      <div style={{ width: "min(1100px, 100%)", display: "grid", gap: "18px" }}>
        {/* HEADER AREA */}
        <header
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h1
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "clamp(18px, 2.2vw, 28px)",
                letterSpacing: "1px",
                color: "rgba(255,255,255,.92)",
                textShadow: "0 0 20px rgba(255,79,216,.25)",
                margin: 0,
              }}
            >
              SERVER STATUS
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,.68)",
                fontSize: "14px",
                lineHeight: "1.35",
                margin: 0,
              }}
            >
              Kiểm tra trạng thái server và thông tin phiên bản.
            </p>
          </div>

          <button
            onClick={handleCopy}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 14px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,.14)",
              background: "rgba(20, 10, 38, .40)",
              color: "rgba(255,255,255,.88)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              userSelect: "none",
              transition:
                "transform .15s ease, border-color .15s ease, background .15s ease",
              boxShadow: "0 12px 34px rgba(0,0,0,.22)",
              whiteSpace: "nowrap",
              fontWeight: "600",
              fontSize: "13px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.borderColor = "rgba(255,79,216,.35)";
              e.currentTarget.style.background = "rgba(20, 10, 38, .50)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,.14)";
              e.currentTarget.style.background = "rgba(20, 10, 38, .40)";
            }}
            aria-label="Copy IP"
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              style={{ width: "16px", height: "16px", opacity: 0.9 }}
              aria-hidden="true"
            >
              <path
                d="M9 9h10v10H9V9Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
            <span>
              Copy IP • <span style={{ opacity: 0.92 }}>astralismc.xyz</span>
            </span>
          </button>
        </header>

        {/* MAIN INFORMATION AREA */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.9fr",
            gap: "18px",
            alignItems: "stretch",
          }}
        >
          {/* Left: Status Card - GLASS MORPHISM */}
          <div className="card-glass status-card">
            <div className="status-top">
              <div className="label">Trạng thái</div>
              <div className="auto">Tự động cập nhật mỗi 30 giây</div>
            </div>

            <div className="status-main">
              <div className="status-line">
                <span className="dot" aria-hidden="true"></span>
                <span id="statusText">OFFLINE</span>
              </div>

              <div className="error">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ width: "16px", height: "16px" }}
                  aria-hidden="true"
                >
                  <path
                    d="M7 7l10 10M17 7L7 17"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span id="errorText">HTTP 404</span>
              </div>
            </div>
          </div>

          {/* Right: Server Info Group - GLASS MORPHISM */}
          <div className="group-card-glass">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              {/* Java Info */}
              <div className="mini-card-dark">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "12px",
                    marginBottom: "10px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ width: "16px", height: "16px", opacity: 0.9 }}
                    aria-hidden="true"
                  >
                    <path
                      d="M7 8h8v6a4 4 0 0 1-8 0V8Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M15 10h2a2 2 0 1 1 0 4h-2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M9 6c1.5 1 4.5 1 6 0"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Java IP</span>
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    letterSpacing: "0.2px",
                    margin: "0 0 6px 0",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.95)",
                    textShadow: "0 0 15px rgba(255,79,216,0.2)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  astralismc.xyz (1.21+)
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.62)",
                    fontSize: "12px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Phiên bản: 1.21 → 1.21.10
                </p>
              </div>

              {/* Bedrock Info */}
              <div className="mini-card-dark">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "12px",
                    marginBottom: "10px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ width: "16px", height: "16px", opacity: 0.9 }}
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3l8 5v8l-8 5-8-5V8l8-5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 3v18"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      opacity="0.7"
                    />
                    <path
                      d="M4 8l8 5 8-5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      opacity="0.7"
                    />
                  </svg>
                  <span>Bedrock IP</span>
                </div>
                <p
                  style={{
                    fontWeight: 800,
                    letterSpacing: "0.2px",
                    margin: "0 0 6px 0",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.95)",
                    textShadow: "0 0 15px rgba(255,79,216,0.2)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  astralismc.xyz (1.21+)
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.62)",
                    fontSize: "12px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  Port: 19132
                </p>
              </div>
            </div>

            {/* Players */}
            <div className="players" style={{ marginTop: "14px" }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: "16px", height: "16px", opacity: 0.9 }}
                aria-hidden="true"
              >
                <path
                  d="M9 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M17 12a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 17 12Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  opacity="0.9"
                />
                <path
                  d="M3.5 20a5.5 5.5 0 0 1 11 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M14.2 20a4.2 4.2 0 0 1 6.3 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  opacity="0.9"
                />
              </svg>
              <span>Người chơi đang online</span>
            </div>
          </div>
        </section>
      </div>

      {/* Toast Notification */}
      <div
        className={`toast-motto ${showToast ? "show" : ""}`}
        aria-live="polite"
        aria-atomic="true"
      >
        {toastMessage}
      </div>
    </>
  );
}
