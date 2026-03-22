import { useState } from "react";

// ===== 1. DATA (Giữ nguyên tuyệt đối 100% của sếp) =====
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
    perks: ["Prefix nổi bật", "Kit hằng ngày", "Ưu tiên slot"],
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
      "2x điểm Event",
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
      "Aura độc quyền",
      "Dungeon VIP",
      "3x điểm Event",
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

// ===== 2. STYLES (Đã fix lỗi cú pháp Object Style) =====
const S = {
  section: {
    minHeight: "100vh",
    padding: "48px 16px 80px",
    color: "#fff",
    position: "relative",
  },
  inner: { maxWidth: 1100, margin: "0 auto" },

  // Header MMORPG cực sáng
  headerWrap: { textAlign: "center", marginBottom: 40 },
  h1: {
    fontFamily: "'Minecraft Overhaul', monospace",
    fontSize: "clamp(30px, 5vw, 60px)",
    fontWeight: 900,
    background: "linear-gradient(180deg,#fff, #f7d77a, #d9a94a)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    filter:
      "drop-shadow(0 0 10px rgba(247,215,122,0.5)) drop-shadow(4px 4px 0px #000)",
  },
  sub: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textShadow: "0 2px 8px #000",
  },

  // Tabs Style co dãn
  tabsBar: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 35,
    flexWrap: "wrap",
  },
  tab: (active) => ({
    padding: "12px 24px",
    borderRadius: 14,
    border: active ? "2px solid #f7d77a" : "1px solid rgba(255,255,255,0.1)",
    background: active ? "rgba(247,215,122,0.15)" : "rgba(0,0,0,0.4)",
    color: active ? "#f7d77a" : "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "'Minecraft Overhaul', monospace",
    transition: "0.2s",
    fontSize: "14px",
  }),

  // Panel Glassmorphism
  panel: {
    background: "rgba(12,10,20,0.95)",
    border: "2px solid rgba(255,255,255,0.08)",
    borderRadius: 32,
    padding: "35px",
    backdropFilter: "blur(20px)",
    boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
  },

  // Style cho Bảng nạp xu (Đã fix PE co dãn)
  napLayout: { display: "flex", gap: "25px", flexWrap: "wrap" },
  napLeft: {
    flex: "1 1 300px",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "20px",
  },
  napRight: {
    flex: "1 1 300px",
    background: "#000",
    borderRadius: "24px",
    overflow: "hidden",
    border: "2px solid rgba(255,255,255,0.15)",
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
    padding: "16px 12px",
    fontSize: "15px",
    color: "#fff",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  // Huy hiệu Phổ Biến MMORPG 3D
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
    boxShadow: "0 0 20px rgba(255,165,0,0.8), 0 4px 0 #8B4513",
    fontFamily: "'Minecraft Overhaul', sans-serif",
    zIndex: 10,
  },

  // Vật phẩm Style (Đã fix co dãn)
  itemsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 25,
  },
  itemCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 24,
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemName: {
    fontFamily: "'Minecraft Overhaul', monospace",
    fontSize: "20px",
    color: "#f7d77a",
    margin: "10px 0",
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
        <div style={S.headerWrap}>
          <h1 style={S.h1}>ASTRALIS STORE</h1>
          <p style={S.sub}>Ủng hộ server và nhận những đặc quyền tuyệt vời</p>
        </div>

        {/* TABS */}
        <div style={S.tabsBar}>
          {["nap-xu", "mua-rank", "vat-pham"].map((id) => (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                handleAction(id);
              }}
              style={{
                ...S.tab(activeTab === id),
                transform: clickingId === id ? "scale(0.92)" : "scale(1)",
              }}
            >
              {id === "nap-xu"
                ? "💎 NẠP XU"
                : id === "mua-rank"
                  ? "🏆 RANK"
                  : "🗡️ ITEM"}
            </button>
          ))}
        </div>

        <div style={S.panel}>
          {/* TAB 1: NẠP XU (ĐÃ KHÔI PHỤC FULL CODE CỦA SẾP) */}
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
                  📊 QUY ĐỔI XU
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
                              ? "rgba(178,108,255,0.1)"
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
                                background: "rgba(251,146,60,0.2)",
                                color: "#fb923c",
                                border: "1px solid #fb923c",
                                padding: "3px 10px",
                                borderRadius: "6px",
                                fontSize: "11px",
                                fontWeight: "bold",
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
                  style={{ width: "100%", height: 550, border: "none" }}
                  title="Nạp"
                />
              </div>
            </div>
          )}

          {/* TAB 2: MUA RANK (GIỮ NGUYÊN HIỆU ỨNG ICON MÊ LY) */}
          {activeTab === "mua-rank" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
              }}
            >
              {ranks.map((rank) => (
                <div
                  key={rank.name}
                  className="rank-card"
                  style={{
                    position: "relative",
                    padding: "45px 25px 35px",
                    borderRadius: 28,
                    border: `2px solid ${rank.border}`,
                    background: rank.bg,
                    backdropFilter: "blur(15px)",
                    textAlign: "center",
                    transition: "0.3s",
                  }}
                >
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
                    }}
                  >
                    SỞ HỮU
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: VẬT PHẨM (ĐÃ KHÔI PHỤC FULL CODE CỦA SẾP) */}
          {activeTab === "vat-pham" && (
            <div style={S.itemsGrid}>
              {items.map((item, idx) => (
                <div key={idx} style={S.itemCard}>
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
                    <div style={S.itemName}>{item.name}</div>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 13,
                        lineHeight: "1.6",
                        fontWeight: "500",
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
        .tab-button:hover { background: rgba(247,215,122,0.1) !important; color: #fff !important; }
        .rank-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.05); }
      `}</style>
    </section>
  );
}
