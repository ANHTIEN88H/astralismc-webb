import { useState } from "react";

// ===== 1. DATA (CAM KẾT GIỮ NGUYÊN 100% - KHÔNG THIẾU 1 CHỮ) =====
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
    name: "VIP",
    price: "300 Xu",
    icon: "🌿",
    glow: "#34d399",
    border: "rgba(52,211,153,.5)",
    bg: "rgba(52,211,153,.1)",
    perks: [
      "Prefix trò chuyện nổi bật",
      "Kit nhận đồ hằng ngày",
      "Ưu tiên khi server đầy",
    ],
  },
  {
    name: "MVP",
    price: "700 Xu",
    icon: "💠",
    glow: "#22d3ee",
    border: "rgba(34,211,238,.5)",
    bg: "rgba(34,211,238,.1)",
    badge: "PHỔ BIẾN",
    perks: [
      "Tất cả quyền VIP",
      "Fly trong lobby",
      "Đổi tên màu chat",
      "2x điểm sự kiện",
    ],
  },
  {
    name: "LEGEND",
    price: "1500 Xu",
    icon: "🔥",
    glow: "#f43f5e",
    border: "rgba(244,63,94,.5)",
    bg: "rgba(244,63,94,.1)",
    perks: [
      "Tất cả quyền MVP",
      "Aura nhân vật độc quyền",
      "Truy cập dungeon LEGEND",
      "3x điểm sự kiện",
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

// ===== 2. STYLES (MMORPG + RESPONSIVE + HIGH CONTRAST) =====
const S = {
  section: {
    minHeight: "100vh",
    padding: "30px 10px 80px",
    color: "#fff",
    position: "relative",
    overflowX: "hidden",
  },
  inner: { maxWidth: 1100, margin: "0 auto" },
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
    width: "100%",
  },

  // Nạp xu PE-Friendly
  napLayout: { display: "flex", gap: "20px", flexWrap: "wrap" },
  napLeft: {
    flex: "1 1 100%",
    lgFlex: "1 1 350px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "20px",
  },
  napRight: {
    flex: "1 1 100%",
    lgFlex: "1.2 1 400px",
    background: "#000",
    borderRadius: "20px",
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,0.15)",
    minHeight: "550px",
  },

  rateTable: { width: "100%", borderCollapse: "collapse" },
  rateTh: {
    padding: "10px",
    color: "#f7d77a",
    fontSize: "12px",
    textAlign: "left",
    borderBottom: "2px solid rgba(255,255,255,0.1)",
    textTransform: "uppercase",
    fontFamily: "'Minecraft Overhaul', monospace",
  },
  rateTd: {
    padding: "14px 10px",
    fontSize: "14px",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  // Huy hiệu Phổ Biến 3D
  rankBadge: {
    position: "absolute",
    top: "-18px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "linear-gradient(180deg, #FFD700, #FFA500)",
    color: "#000",
    fontSize: "11px",
    fontWeight: "900",
    padding: "5px 15px",
    borderRadius: "8px",
    border: "2px solid #FFF",
    boxShadow: "0 0 20px rgba(255,165,0,0.7), 0 4px 0 #8B4513",
    fontFamily: "'Minecraft Overhaul', sans-serif",
    zIndex: 10,
  },

  // Rank Cards
  rankCard: (rank) => ({
    position: "relative",
    padding: "45px 20px 30px",
    borderRadius: 28,
    border: `2px solid ${rank.border}`,
    background: rank.bg,
    backdropFilter: "blur(15px)",
    textAlign: "center",
    transition: "0.3s",
  }),

  // Vật phẩm Cards
  itemCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 24,
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
};

export default function Store() {
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
        {/* HEADER */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={S.h1}>ASTRALIS STORE</h1>
          <p style={S.sub}>Ủng hộ server và nhận những đặc quyền tuyệt vời</p>
        </div>

        {/* TABS (Responsive) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 35,
            flexWrap: "wrap",
          }}
        >
          {["nap-xu", "mua-rank", "vat-pham"].map((id) => (
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
                    : "rgba(0,0,0,0.5)",
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
                  : "🗡️ VẬT PHẨM"}
            </button>
          ))}
        </div>

        <div style={S.panel}>
          {/* TAB 1: NẠP XU (ĐÃ KHÔI PHỤC FULL 6 MỐC) */}
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
                    minHeight: 550,
                    border: "none",
                  }}
                  title="Nạp"
                />
              </div>
            </div>
          )}

          {/* TAB 2: MUA RANK (ĐÃ KHÔI PHỤC FULL PERKS) */}
          {activeTab === "mua-rank" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                gap: "25px",
              }}
            >
              {ranks.map((rank) => (
                <div key={rank.name} style={{ ...S.rankCard(rank) }}>
                  {rank.badge && <div style={S.rankBadge}>{rank.badge}</div>}
                  <center>
                    <div
                      style={{
                        width: 110,
                        height: 110,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${rank.glow}40, transparent 70%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <div
                        className="icon-floating"
                        style={{
                          fontSize: 65,
                          filter: `drop-shadow(0 0 15px ${rank.glow})`,
                        }}
                      >
                        {rank.icon}
                      </div>
                    </div>
                  </center>
                  <h3
                    style={{
                      fontFamily: "'Minecraft Overhaul', monospace",
                      fontSize: 32,
                      color: rank.glow,
                      textShadow: `0 0 15px ${rank.glow}50`,
                      marginBottom: 5,
                    }}
                  >
                    {rank.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'Minecraft Overhaul', monospace",
                      fontSize: 18,
                      color: "#fff",
                      fontWeight: "bold",
                      marginBottom: 25,
                    }}
                  >
                    {rank.price} / tháng
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      textAlign: "left",
                      marginBottom: 30,
                    }}
                  >
                    {rank.perks.map((p, i) => (
                      <li
                        key={i}
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          fontSize: 14,
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        <span
                          style={{
                            color: rank.glow,
                            marginRight: 10,
                            fontSize: 16,
                          }}
                        >
                          ✔
                        </span>{" "}
                        {p}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleAction(rank.name)}
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: 14,
                      border: "none",
                      background: rank.glow,
                      color: "#000",
                      fontWeight: "900",
                      cursor: "pointer",
                      fontFamily: "'Minecraft Overhaul', monospace",
                      transition: "0.1s",
                      transform:
                        clickingId === rank.name ? "scale(0.95)" : "scale(1)",
                      boxShadow: `0 5px 0 rgba(0,0,0,0.3), 0 0 20px ${rank.glow}40`,
                    }}
                  >
                    SỞ HỮU NGAY
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VẬT PHẨM (ĐÃ KHÔI PHỤC FULL 3 ITEMS) */}
          {activeTab === "vat-pham" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 25,
              }}
            >
              {items.map((item, idx) => (
                <div key={idx} style={{ ...S.itemCard }}>
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
                        letterSpacing: 1,
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
        </div>
      </div>

      <style>{`
        @keyframes floating { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        .icon-floating { animation: floating 3s ease-in-out infinite; }
        .rank-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.05); }
      `}</style>
    </section>
  );
}
