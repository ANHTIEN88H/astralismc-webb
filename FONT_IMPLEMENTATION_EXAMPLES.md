# 🔧 FONT OVERHAUL - IMPLEMENTATION EXAMPLES

## Hướng Dẫn Áp Dụng Fonts Mới Vào React Components

Dưới đây là những ví dụ cụ thể về cách cập nhật từng component để sử dụng hệ thống font mới.

---

## 📝 HERO.jsx - Ví Dụ Trước & Sau

### TRƯỚC (Press Start 2P - quá rối)

```jsx
<motion.h1
  className="pixel-title text-lg text-white md:text-2xl"
  style={{ fontFamily: '"Press Start 2P"', fontSize: '14px' }}
>
  AstralisMC • MINECRAFT NETWORK
</motion.h1>

<p style={{ fontFamily: 'Arial', fontSize: '12px' }}>
  Khám phá thế giới Minecraft...
</p>
```

❌ Mixup: inline style + className, font Press Start quá nhỏ, không nhất quán

### SAU (VT323 + JetBrains Mono - sạch & rõ)

```jsx
<motion.h1 className="hero-title">
  AstralisMC • MINECRAFT NETWORK
</motion.h1>

<p className="hero-description">
  Khám phá thế giới Minecraft hiện đại với Survival kinh điển,
  Skyblock sáng tạo và PvP cháy máy. Anti-cheat, economy,
  custom items & sự kiện hàng tuần.
</p>

<button className="btn-copy-ip">⛏ Copy IP</button>
```

✅ Sạch: chỉ dùng className, không inline style, font tự động scaling

---

## 🖥️ SERVERSTATUS.JSX - Ví Dụ Chi Tiết

### Tiêu Đề Principal

**TRƯỚC:**

```jsx
<h1
  style={{
    fontFamily: '"Press Start 2P"',
    fontSize: "28px",
    color: "#fff",
  }}
>
  SERVER STATUS
</h1>
```

**SAU:**

```jsx
<h1 className="server-status-title">SERVER STATUS</h1>
```

---

### Mô Tả Dưới Tiêu Đề

**TRƯỚC:**

```jsx
<p style={{ color: "#ccc", fontSize: "14px" }}>Kiểm tra trạng thái server...</p>
```

**SAU:**

```jsx
<p className="server-status-description">
  Kiểm tra trạng thái server và thông tin phiên bản.
</p>
```

---

### Status Card (Trạng Thái)

**TRƯỚC:**

```jsx
<div>
  <span style={{ fontSize: "11px" }}>Trạng thái</span>
  <span style={{ fontFamily: "monospace", fontSize: "22px" }}>OFFLINE</span>
  <span style={{ fontSize: "10px", color: "#999" }}>HTTP 404</span>
</div>
```

**SAU:**

```jsx
<div>
  <div className="card-label-small">Trạng thái</div>
  <div className="status-line-text">OFFLINE</div>
  <div className="error-text">HTTP 404</div>
</div>
```

---

### Info Cards (Java IP & Bedrock IP)

**TRƯỚC:**

```jsx
<div className="mini-card-dark">
  <div style={{ fontSize: "12px", color: "#ccc" }}>Java IP</div>
  <p style={{ fontSize: "14px", fontWeight: "bold" }}>astralismc.xyz (1.21+)</p>
  <p style={{ fontSize: "11px", color: "#999" }}>Phiên bản: 1.21 → 1.21.10</p>
</div>
```

**SAU:**

```jsx
<div className="mini-card-dark">
  <div className="info-card-title">Java IP</div>
  <p className="info-card-value">astralismc.xyz (1.21+)</p>
  <p className="info-card-meta">Phiên bản: 1.21 → 1.21.10</p>
</div>
```

---

## 🎮 SECTIONS (GAME MODES, STORE, FEATURES)

### TRƯỚC

```jsx
<h2 style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase' }}>
  GAME MODES
</h2>

<p style={{ fontSize: '13px', color: '#ddd' }}>
  Chọn từ Survival kinh điển, Skyblock sáng tạo...
</p>
```

### SAU

```jsx
<h2 className="section-title">GAME MODES</h2>

<p className="section-description">
  Chọn từ Survival kinh điển, Skyblock sáng tạo...
</p>
```

---

## 🔘 BUTTONS

### TRƯỚC

```jsx
<button
  style={{
    fontFamily: '"Press Start 2P"',
    fontSize: "11px",
    fontWeight: "bold",
    textTransform: "uppercase",
  }}
>
  ⛏ Copy IP
</button>
```

### SAU

```jsx
<button className="btn-copy-ip">⛏ Copy IP</button>
```

---

## 📋 MIGRATION CHECKLIST PER COMPONENT

### HERO.jsx

- [ ] Thay `.hero-title` cho h1
- [ ] Thay `.hero-description` cho paragraph chính
- [ ] Thay `.btn-copy-ip` cho buttons

### SERVERSTATUS.JSX

- [ ] Thay `.server-status-title` cho h1 "SERVER STATUS"
- [ ] Thay `.server-status-description` cho paragraph mô tả
- [ ] Thay `.card-label-small` cho nhãn ("Trạng thái")
- [ ] Thay `.status-line-text` cho "OFFLINE/ONLINE"
- [ ] Thay `.error-text` cho "HTTP 404"
- [ ] Thay `.info-card-title` cho "Java IP", "Bedrock IP"
- [ ] Thay `.info-card-value` cho "astralismc.xyz"
- [ ] Thay `.info-card-meta` cho "Phiên bản", "Port"

### FEATURES, GAMEMODES, STORE, etc.

- [ ] Thay `.section-title` cho h2/h3
- [ ] Thay `.section-description` cho paragraphs

### FOOTER, HEADER

- [ ] Tương tự với `.section-title` và `.section-description`

---

## ⚡ QUICK FIND & REPLACE (Regex)

Nếu bạn sử dụng VS Code Find & Replace:

**1. Xóa tất cả `style={{ fontFamily... }}`**

```
Find: style=\{\{\s*fontFamily:\s*"[^"]+"\s*[^}]*\}\}
Replace: (xóa)
Regex: ✅ ON
```

**2. Xóa tất cả `fontSize` inline style**

```
Find: style=\{\{\s*fontSize:\s*"[^"]+"\s*\}\}
Replace: (xóa)
Regex: ✅ ON
```

---

## 🎨 TAILWIND INTEGRATION (Optional)

Nếu bạn cập nhật `tailwind.config.cjs`:

```javascript
export default {
  theme: {
    extend: {
      fontFamily: {
        pixel: ["VT323", "monospace"],
        title: ["Space Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
};
```

Thì bạn có thể dùng Tailwind classes:

```jsx
{
  /* Thay vì .server-status-title class */
}
<h1 className="font-pixel text-2xl md:text-4xl">SERVER STATUS</h1>;

{
  /* Thay vì .info-card-value class */
}
<p className="font-mono font-semibold text-lg">astralismc.xyz</p>;

{
  /* Thay vì .section-title class */
}
<h2 className="font-title font-bold text-xl uppercase">GAME MODES</h2>;
```

---

## 📊 CSS CLASS REFERENCE TABLE

| Class Name                   | Font           | Size    | Weight | Use Case                         |
| ---------------------------- | -------------- | ------- | ------ | -------------------------------- |
| `.hero-title`                | VT323          | 22-36px | 400    | Tiêu đề hero lớn                 |
| `.server-status-title`       | VT323          | 20-32px | 400    | Tiêu đề principal sections       |
| `.section-title`             | Space Mono     | 16px    | 700    | Tiêu đề GAME MODES, STORE, etc   |
| `.section-description`       | JetBrains Mono | 13px    | 400    | Mô tả sections                   |
| `.card-label-small`          | Space Mono     | 11px    | 400    | Nhãn card ("Java IP", "Status")  |
| `.status-line-text`          | VT323          | 20px    | 400    | Trạng thái ("OFFLINE", "ONLINE") |
| `.info-card-title`           | Space Mono     | 12px    | 400    | Tiêu đề info cards               |
| `.info-card-value`           | JetBrains Mono | 15px    | 600    | Nội dung chính IPs & versions    |
| `.info-card-meta`            | JetBrains Mono | 11px    | 400    | Chữ nhỏ chú thích                |
| `.btn-copy-ip`               | Space Mono     | 12px    | 700    | Buttons                          |
| `.hero-description`          | JetBrains Mono | 14px    | 400    | Paragraphs mô tả                 |
| `.server-status-description` | JetBrains Mono | 13px    | 400    | Mô tả server status              |
| `.error-text`                | JetBrains Mono | 12px    | 600    | Thông báo lỗi                    |

---

## 🚀 FULL COMPONENT REFACTOR EXAMPLE

Đây là ví dụ đầy đủ một component được refactor:

### ServerStatus.jsx - BEFORE & AFTER

**BEFORE (với Press Start 2P):**

```jsx
export default function ServerStatus() {
  return (
    <>
      <header style={{ display: "flex", gap: "16px" }}>
        <div>
          <h1
            style={{
              fontFamily: '"Press Start 2P"',
              fontSize: "28px",
              color: "#fff",
              margin: 0,
            }}
          >
            SERVER STATUS
          </h1>
          <p
            style={{
              color: "#ccc",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Kiểm tra trạng thái server
          </p>
        </div>
      </header>

      <section style={{ display: "grid", gap: "18px" }}>
        <div className="status-card">
          <div style={{ fontSize: "11px" }}>Trạng thái</div>
          <div style={{ fontFamily: "monospace", fontSize: "22px" }}>
            OFFLINE
          </div>
        </div>

        <div className="info-cards">
          <div>
            <span style={{ fontSize: "12px" }}>Java IP</span>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              astralismc.xyz (1.21+)
            </p>
            <small style={{ fontSize: "11px" }}>
              Phiên bản: 1.21 → 1.21.10
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
```

😞 Rối: inline styles everywhere, inconsistent font usage

**AFTER (với VT323 + Space Mono + JetBrains Mono):**

```jsx
export default function ServerStatus() {
  return (
    <>
      <header style={{ display: "flex", gap: "16px" }}>
        <div>
          <h1 className="server-status-title">SERVER STATUS</h1>
          <p className="server-status-description">
            Kiểm tra trạng thái server
          </p>
        </div>
      </header>

      <section style={{ display: "grid", gap: "18px" }}>
        <div className="status-card">
          <div className="card-label-small">Trạng thái</div>
          <div className="status-line-text">OFFLINE</div>
        </div>

        <div className="info-cards">
          <div>
            <div className="info-card-title">Java IP</div>
            <p className="info-card-value">astralismc.xyz (1.21+)</p>
            <p className="info-card-meta">Phiên bản: 1.21 → 1.21.10</p>
          </div>
        </div>
      </section>
    </>
  );
}
```

😊 Sạch: chỉ dùng className, consistent, easy to maintain

---

## 📈 KIỂM ĐỊNH CHẤT LƯỢNG (QA)

Sau khi áp dụng, hãy kiểm tra:

```
┌──────────────────────┬─────────┬──────────┐
│ Aspect               │ Trước   │ Sau      │
├──────────────────────┼─────────┼──────────┤
│ Readability          │ ⭐⭐    │ ⭐⭐⭐⭐⭐ │
│ Visual Consistency   │ ⭐⭐    │ ⭐⭐⭐⭐⭐ │
│ Code Maintainability │ ⭐⭐    │ ⭐⭐⭐⭐⭐ │
│ Game Vibe            │ ⭐⭐⭐  │ ⭐⭐⭐⭐⭐ │
│ Performance          │ ⭐⭐⭐  │ ⭐⭐⭐⭐  │
└──────────────────────┴─────────┴──────────┘
```

---

## 💡 TIPS & TRICKS

1. **Sử dụng CSS biến cho màu sắc:**

```css
:root {
  --color-primary: #00d9ff;
  --color-text: #ffffff;
}
```

2. **Tạo một utility CSS cho animation:**

```css
.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

3. **Thử nghiệm font kích thước:**

```css
/* Thay đổi 6px và thử */
.server-status-title {
  font-size: clamp(20px, 2.5vw, 32px);
  /* Thử: clamp(24px, 2.5vw, 38px) để to hơn */
}
```

---

**Happy styling! Hệ thống font mới sẽ làm trang web Minecraft dashboard của bạn trông chuyên nghiệp & dễ đọc hơn!** 🚀
