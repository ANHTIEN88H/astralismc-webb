import { useState } from "react";
import Cart from "../components/Cart";

// ===== 1. DATA GỐC (GIỮ NGUYÊN LAYOUT CŨ) =====
const exchangeTable = [
  { price: "10,000đ", tokens: "12 Xu", bonus: null },
  { price: "50,000đ", tokens: "60 Xu", bonus: null },
  { price: "100,000đ", tokens: "120 Xu", bonus: "+10%" },
  { price: "200,000đ", tokens: "240 Xu", bonus: "+15%" },
  { price: "500,000đ", tokens: "600 Xu", bonus: "+20%" },
  { price: "1,000,000đ", tokens: "1200 Xu", bonus: "+25%" },
];

const ranks = [
  {
    name: "AETHER KNIGHT",
    subtitle: "Hiệp Sĩ",
    price: "100.000đ",
    icon: "🛡️",
    glow: "#22d3ee",
    border: "rgba(34,211,238,.52)",
    bg: "rgba(15,23,42,.62)",
    cardShadow: "0 0 24px rgba(34,211,238,.32)",
    buttonGradient: "linear-gradient(90deg,#06b6d4,#0ea5e9,#2563eb)",
    perks: [
      "Tiền tố [Aether] trên chat",
      "Bay (Fly) trong sảnh",
      "x2 kinh nghiệm nghề nghiệp",
      "Bộ giáp khởi đầu đặc biệt",
    ],
  },
  {
    name: "VOID WALKER",
    subtitle: "Hư Vô",
    price: "250.000đ",
    icon: "🌌",
    glow: "#a855f7",
    border: "rgba(168,85,247,.55)",
    bg: "rgba(30,18,48,.64)",
    badge: "PHỔ BIẾN NHẤT",
    cardShadow: "0 0 30px rgba(168,85,247,.34)",
    buttonGradient: "linear-gradient(90deg,#8b5cf6,#a855f7,#d946ef)",
    perks: [
      "Tiền tố [Void] trên chat",
      "Fly trong sảnh + /nick đổi màu",
      "x3 kinh nghiệm nghề nghiệp",
      "Kit khởi đầu Hư Vô",
    ],
  },
  {
    name: "ASTRAL LORD",
    subtitle: "Chúa Tể",
    price: "500.000đ",
    icon: "👑",
    glow: "#f59e0b",
    border: "rgba(251,191,36,.62)",
    bg: "rgba(42,22,10,.66)",
    cardShadow: "0 0 44px rgba(251,146,60,.58), 0 0 92px rgba(251,146,60,.28)",
    buttonGradient: "linear-gradient(90deg,#fbbf24,#f97316,#ea580c)",
    perks: [
      "Tiền tố [Astral] hiệu ứng rực sáng",
      "Fly ở mọi khu vực cho phép",
      "x5 kinh nghiệm nghề nghiệp",
      "Bộ giáp khởi đầu Chúa Tể Astral",
    ],
  },
];

const items = [
  {
    name: "Chìa khóa Thần Bí",
    desc: "Dùng để mở rương Gacha tại Spawn",
    price: "50 Xu",
    icon: "🗝️",
    rarity: "Hiếm",
    rarityColor: "#a78bfa",
  },
  {
    name: "Gói Khởi Đầu MMORPG",
    desc: "Nhận ngay giáp sắt và vũ khí cơ bản",
    price: "120 Xu",
    icon: "🎒",
    rarity: "Thường",
    rarityColor: "#94a3b8",
  },
  {
    name: "Bảo hiểm Túi Đồ",
    desc: "Giữ lại đồ khi chết (Kích hoạt 24h)",
    price: "200 Xu",
    icon: "🛡️",
    rarity: "Sử thi",
    rarityColor: "#fb923c",
  },
];

// ===== 2. STYLES GỐC =====
const S = {
  section: {
    minHeight: "100vh",
    padding: "30px 10px 80px",
    color: "#fff",
    position: "relative",
  },
  inner: { maxWidth: 1150, margin: "0 auto" },
  h1: {
    fontFamily: "'Minecraft Overhaul', monospace",
    fontSize: "clamp(26px, 8vw, 55px)",
    fontWeight: 900,
    background: "linear-gradient(180deg,#fff, #f7d77a, #d9a94a)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    filter: "drop-shadow(0 0 10px rgba(247,215,122,0.5))",
    textAlign: "center",
    marginBottom: 10,
  },
  sub: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    textShadow: "0 2px 10px #000",
    textAlign: "center",
  },

  panel: {
    background: "rgba(10,8,22,0.96)",
    border: "2px solid rgba(255,255,255,0.08)",
    borderRadius: 28,
    padding: "clamp(15px, 4vw, 30px)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
  },

  napLayout: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  napLeft: {
    flex: "1 1 450px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
  },
  napRight: {
    flex: "1 1 450px",
    background: "#000",
    borderRadius: "24px",
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,0.15)",
    minHeight: "550px",
    display: "flex",
  },

  rateTable: { width: "100%", borderCollapse: "collapse" },
  rateTh: {
    padding: "12px",
    color: "#f7d77a",
    fontSize: "12px",
    textAlign: "left",
    borderBottom: "2px solid rgba(255,255,255,0.1)",
    textTransform: "uppercase",
    fontFamily: "'Minecraft Overhaul', monospace",
  },
  rateTd: {
    padding: "14px 10px",
    fontSize: "15px",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  rankBadge: {
    position: "absolute",
    top: "-14px",
    right: "14px",
    background: "linear-gradient(180deg, #FFD700, #FFA500)",
    color: "#1f1300",
    fontSize: "11px",
    fontWeight: "900",
    padding: "5px 13px",
    borderRadius: "999px",
    border: "2px solid #FFF4CC",
    boxShadow: "0 0 20px rgba(255,165,0,0.65)",
    fontFamily: "'Minecraft Overhaul', sans-serif",
    zIndex: 10,
  },
};

export default function StorePage() {
  const [activeTab, setActiveTab] = useState("nap-xu");
  const [hoverRow, setHoverRow] = useState(null);
  const [clickingId, setClickingId] = useState(null);

  const handleAction = (id) => {
    setClickingId(id);
    setTimeout(() => setClickingId(null), 150);
  };

  return (
    <section style={S.section}>
      <div style={S.inner}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={S.h1}>ASTRALIS STORE</h1>
          <p style={S.sub}>Ủng hộ server và nhận những đặc quyền tuyệt vời</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 35,
            flexWrap: "wrap",
          }}
        >
          {["nap-xu", "mua-rank", "vat-pham", "gio-hang"].map((id) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                handleAction(id);
              }}
              style={{
                padding: "12px 24px",
                borderRadius: 14,
                border:
                  activeTab === id
                    ? "2px solid #f7d77a"
                    : "1px solid rgba(255,255,255,0.1)",
                background:
                  activeTab === id
                    ? "rgba(247,215,122,0.2)"
                    : "rgba(0,0,0,0.4)",
                color: activeTab === id ? "#f7d77a" : "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "'Minecraft Overhaul', monospace",
                fontSize: "14px",
                transform: clickingId === id ? "scale(0.92)" : "scale(1)",
                transition: "0.2s",
              }}
            >
              {id === "nap-xu"
                ? "💎 NẠP XU"
                : id === "mua-rank"
                  ? "🏆 RANK"
                  : id === "vat-pham"
                    ? "🗡️ VẬT PHẨM"
                    : "🛒 GIỎ HÀNG"}
            </button>
          ))}
        </div>

        <div style={S.panel}>
          {activeTab === "nap-xu" && (
            <div style={S.napLayout}>
              <div style={S.napLeft}>
                <div
                  style={{
                    fontFamily: "'Minecraft Overhaul', monospace",
                    color: "#f7d77a",
                    fontSize: 22,
                    textAlign: "center",
                    marginBottom: 25,
                  }}
                >
                  📊 BẢNG QUY ĐỔI XU
                </div>
                <table style={S.rateTable}>
                  <thead>
                    <tr>
                      <th style={S.rateTh}>Mệnh giá</th>
                      <th style={S.rateTh}>Nhận được</th>
                      <th style={S.rateTh}>Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exchangeTable.map((pkg, i) => (
                      <tr
                        key={i}
                        onMouseEnter={() => setHoverRow(i)}
                        onMouseLeave={() => setHoverRow(null)}
                        style={{
                          background:
                            hoverRow === i
                              ? "rgba(178,108,255,0.12)"
                              : "transparent",
                          transition: "0.2s",
                        }}
                      >
                        <td style={{ ...S.rateTd, fontWeight: "bold" }}>
                          {pkg.price}
                        </td>
                        <td style={S.rateTd}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              color: "#fbbf24",
                              fontWeight: "900",
                            }}
                          >
                            <span>🪙</span> {pkg.tokens}
                          </div>
                        </td>
                        <td style={S.rateTd}>
                          {pkg.bonus && (
                            <span
                              style={{
                                background: "rgba(251,146,60,0.25)",
                                color: "#fb923c",
                                border: "1px solid #fb923c",
                                padding: "3px 10px",
                                borderRadius: "6px",
                                fontSize: "11px",
                                fontWeight: "900",
                              }}
                            >
                              {pkg.bonus}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={S.napRight}>
                <iframe
                  src="https://thanhthao11040772-bit.github.io/cv/"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    minHeight: 550,
                  }}
                  title="Nạp"
                />
              </div>
            </div>
          )}

          {activeTab === "mua-rank" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ranks.map((rank) => (
                <article
                  key={rank.name}
                  className="rank-card relative overflow-hidden rounded-2xl bg-slate-800/60 backdrop-blur-md p-6"
                  style={{
                    border: `1px solid ${rank.border}`,
                    background: rank.bg,
                    boxShadow: rank.cardShadow,
                    transition: "0.3s",
                  }}
                >
                  {rank.badge && <div style={S.rankBadge}>{rank.badge}</div>}

                  <div
                    style={{
                      position: "absolute",
                      top: -52,
                      right: -44,
                      width: 150,
                      height: 150,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${rank.glow}55, transparent 70%)`,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div
                      className="icon-floating"
                      style={{
                        fontSize: 40,
                        filter: `drop-shadow(0 0 12px ${rank.glow})`,
                      }}
                    >
                      {rank.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: 1.2,
                          color: "#cbd5e1",
                          fontWeight: 800,
                        }}
                      >
                        {rank.subtitle}
                      </p>
                      <h3
                        style={{
                          margin: "4px 0 0",
                          fontFamily: "'Minecraft Overhaul', monospace",
                          fontSize: 29,
                          color: rank.glow,
                          textShadow: `0 0 14px ${rank.glow}90`,
                        }}
                      >
                        {rank.name}
                      </h3>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      marginBottom: 18,
                      fontFamily: "'Minecraft Overhaul', monospace",
                      fontSize: 28,
                      color: "#fff",
                      fontWeight: 900,
                    }}
                  >
                    {rank.price}
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      marginBottom: 22,
                    }}
                  >
                    {rank.perks.map((perk) => (
                      <li
                        key={perk}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          padding: "10px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          fontSize: 14,
                          color: "#f1f5f9",
                          fontWeight: "bold",
                        }}
                      >
                        <span style={{ color: "#4ade80", marginTop: 1.5 }}>
                          ✔
                        </span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleAction(rank.name)}
                    className="w-full py-4 rounded-xl font-black tracking-wide uppercase text-white transition-transform duration-150 hover:scale-105 active:scale-95"
                    style={{
                      border: "none",
                      background: rank.buttonGradient,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                      fontFamily: "'Minecraft Overhaul', monospace",
                      cursor: "pointer",
                    }}
                  >
                    MUA NGAY
                  </button>
                </article>
              ))}
            </div>
          )}

          {activeTab === "vat-pham" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 25,
              }}
            >
              {items.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 24,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      className="icon-floating"
                      style={{ fontSize: 45, marginBottom: 15 }}
                    >
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: "900",
                        color: item.rarityColor,
                        textTransform: "uppercase",
                      }}
                    >
                      ◆ {item.rarity}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Minecraft Overhaul', monospace",
                        fontSize: "20px",
                        color: "#f7d77a",
                        margin: "10px 0",
                      }}
                    >
                      {item.name}
                    </div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 13,
                        lineHeight: "1.6",
                        fontWeight: "bold",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 30,
                    }}
                  >
                    <span
                      style={{
                        color: "#34d399",
                        fontWeight: "900",
                        fontSize: 20,
                        fontFamily: "'Minecraft Overhaul', monospace",
                      }}
                    >
                      🪙 {item.price}
                    </span>
                    <button
                      onClick={() => handleAction(item.name)}
                      style={{
                        background: "rgba(178,108,255,0.3)",
                        border: "2px solid #b26cff",
                        color: "#fff",
                        padding: "10px 22px",
                        borderRadius: 12,
                        fontWeight: "900",
                        cursor: "pointer",
                        transition: "0.1s",
                        transform:
                          clickingId === item.name ? "scale(0.9)" : "scale(1)",
                      }}
                    >
                      MUA
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "gio-hang" && <Cart />}
        </div>
      </div>

      <style>{`
        @keyframes floating { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .icon-floating { animation: floating 3s ease-in-out infinite; }
        .rank-card:hover { transform: translateY(-10px); }
      `}</style>
    </section>
  );
}
