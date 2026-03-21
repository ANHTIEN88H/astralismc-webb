# 🎯 FONT MINECRAFT OVERHAUL - QUICK CHEATSHEET

## 📌 3 Bước Nhanh Nhất

```html
<!-- 1. Thêm vào index.html -->
<link rel="stylesheet" href="/src/styles/font-minecraft-overhaul.css" />
```

```jsx
// 2. Thay đổi Hero.jsx
- className="pixel-title text-lg text-white md:text-2xl"
+ className="hero-title"
```

```jsx
// 3. Thay đổi ServerStatus.jsx
- style={{ fontFamily: '"Press Start 2P"', fontSize: '28px' }}
+ className="server-status-title"
```

---

## 🎨 FONT COLORS (Trong Các Class)

| Font               | Màu        | Kích Thước | Ví Dụ              |
| ------------------ | ---------- | ---------- | ------------------ |
| **VT323**          | Trắng/Xanh | 20-36px    | "SERVER STATUS"    |
| **Space Mono**     | Trắng      | 12-16px    | "Java IP", buttons |
| **JetBrains Mono** | Trắng      | 11-15px    | "astralismc.xyz"   |

---

## 🏷️ CSS CLASS QUICK LOOKUP

| Component             | Class                  | Áp Dụng Cho                   |
| --------------------- | ---------------------- | ----------------------------- |
| **Tiêu đề Hero**      | `.hero-title`          | `<h1>` "AstralisMC...NETWORK" |
| **Tiêu đề Principal** | `.server-status-title` | `<h1>` "SERVER STATUS"        |
| **Nhãn Card**         | `.card-label-small`    | "Trạng thái", "Java IP"       |
| **Dòng Trạng Thái**   | `.status-line-text`    | "OFFLINE", "ONLINE 24/7"      |
| **Giá Trị Chính**     | `.info-card-value`     | "astralismc.xyz (1.21+)"      |
| **Chữ Nhỏ**           | `.info-card-meta`      | "Phiên bản: 1.21 → 1.21.10"   |
| **Tiêu Đề Section**   | `.section-title`       | "GAME MODES", "STORE"         |
| **Mô Tả Section**     | `.section-description` | Paragraphs mô tả              |
| **Nút Bấm**           | `.btn-copy-ip`         | "⛏ Copy IP", buttons          |

---

## ⚡ 30-SECOND COPY-PASTE TEMPLATES

### Hero Section

```jsx
<h1 className="hero-title">AstralisMC • MINECRAFT NETWORK</h1>
<p className="hero-description">Khám phá thế giới Minecraft...</p>
<button className="btn-copy-ip">⛏ Copy IP</button>
```

### Server Status Card

```jsx
<h1 className="server-status-title">SERVER STATUS</h1>
<p className="server-status-description">Kiểm tra trạng thái server...</p>

<div className="card-label-small">Trạng thái</div>
<div className="status-line-text">OFFLINE</div>
<div className="error-text">HTTP 404</div>
```

### Info Card

```jsx
<div className="info-card-title">Java IP</div>
<p className="info-card-value">astralismc.xyz (1.21+)</p>
<p className="info-card-meta">Phiên bản: 1.21 → 1.21.10</p>
```

### Section

```jsx
<h2 className="section-title">GAME MODES</h2>
<p className="section-description">Chọn từ Survival kinh điển...</p>
```

---

## 🔧 FONTS ĐƯỢC SỬ DỤNG

```css
VT323           → Pixel clean góc cạnh (tiêu đề)
Space Mono      → Geometric bold (nhãn, nút)
JetBrains Mono  → Modern monospace (dữ liệu)
```

---

## ✅ DEPLOYMENT CHECKLIST

- [ ] Copy file `font-minecraft-overhaul.css` vào `/src/styles/`
- [ ] Thêm `<link>` vào `index.html`
- [ ] Thay $n\approx 20-30$ líneas code trong components
- [ ] Hard refresh (`Ctrl+Shift+R`)
- [ ] Test trên mobile: `DevTools` → `Toggle device mode`
- [ ] Kiểm tra DevTools Network: Fonts tải từ Google OK?
- [ ] Xóa tất cả inline `style={{ fontFamily }}` cũ

---

## 🚀 COMMON PITFALLS (Tránh)

❌ **DON'T:**

```jsx
style={{ fontFamily: '"Press Start 2P"' }}  // Still using old font
className="text-xs"  // Ignored by CSS class
<h1 style={{...}}>...</h1>  // Inline style overrides class
```

✅ **DO:**

```jsx
className="server-status-title"  // Use class
className="info-card-value"  // All styling via CSS
<h1 className="server-status-title">...</h1>  // Class only
```

---

## 📊 BEFORE vs AFTER

```
BEFORE: font-family: "Press Start 2P" ou Arial (inline style)
        font-size: 28px (too big, hard to read)
        Looks: Retro game, confusing

AFTER:  font-family: VT323 (via CSS class)
        font-size: responsive clamp (smart sizing)
        Looks: Professional Minecraft dashboard
```

---

## 🎮 FONT VISUAL GUIDE

```
┌─────────────────────────────────────────────────┐
│ [VT323 Font] - Tiêu đề góc cạnh                │
│ Looks like: ▀▄█▬▬ (voxel-style pixels)         │
├─────────────────────────────────────────────────┤
│ [Space Mono] - Nhãn geometric bold              │
│ Looks like: ABCD (modern monospace)             │
├─────────────────────────────────────────────────┤
│ [JetBrains Mono] - Nội dung sạch rõ            │
│ Looks like: a1b2c3 (readable monospace)         │
└─────────────────────────────────────────────────┘
```

---

## 🧪 QA VERIFICATION

Sau khi áp dụng, verify:

```
✅ No inline fontFamily styles trong code
✅ Tất cả classes match những class được định nghĩa
✅ Hard refresh → fonts xuất hiện đúng
✅ Mobile test: fontsize readable ở 480px
✅ Tiếng Việt hiển thị OK (nếu dùng VT323 phải test)
```

---

## 📞 EMERGENCY ROLLBACK

Nếu cần revert nhanh:

```bash
# Xóa file mới
rm /src/styles/font-minecraft-overhaul.css

# Xóa import từ index.html
# (find và xóa line: <link rel="stylesheet" href="/src/styles/font-minecraft-overhaul.css">)

# Restore lại classes cũ hoặc inline styles
```

---

## 🎨 FONT SIZES REFERENCE

```
Hero Title          → clamp(22px, 3vw, 36px)   [big]
Status Title        → clamp(20px, 2.5vw, 32px) [big-mid]
Section Title       → 16px                      [mid]
Card Title          → 12px                      [small]
Card Value          → 15px                      [mid-small]
Card Meta           → 11px                      [tiny]
```

---

## 🔗 FILE STRUCTURE

```
d:\wedsitesvmc-html\
├── src\
│   ├── styles\
│   │   └── font-minecraft-overhaul.css  ← NEW FILE (main CSS)
│   ├── components\
│   │   ├── Hero.jsx                       ← UPDATE
│   │   ├── MinecraftDashboard\
│   │   │   └── ServerStatus.jsx           ← UPDATE
│   │   ├── Features.jsx                   ← UPDATE
│   │   ├── GameModes.jsx                  ← UPDATE
│   │   └── ...
│   └── main.jsx
├── index.html                             ← UPDATE (add <link>)
├── FONT_OVERHAUL_GUIDE.md                ← DOCUMENTATION
├── FONT_IMPLEMENTATION_EXAMPLES.md       ← CODE EXAMPLES
└── FONT_OVERHAUL_CHEATSHEET.md          ← THIS FILE
```

---

## 💾 GIT COMMIT MESSAGE

```
git add .
git commit -m "refactor: overhaul font system - replace Press Start 2P with VT323/Space Mono/JetBrains Mono for better readability"
git push
```

---

## 🌐 BROWSER TESTING

Test trên:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (if available)
- ✅ Mobile Chrome (simulate with DevTools)

Fonts sẽ hiển thị nhất quán trên tất cả browsers.

---

## 📚 FULL DOCS

- `FONT_OVERHAUL_GUIDE.md` - Hướng dẫn chi tiết
- `FONT_IMPLEMENTATION_EXAMPLES.md` - Code examples
- `font-minecraft-overhaul.css` - CSS source code

---

**Pro Tip:** Lưu file này vào bookmarks để tham khảo nhanh! 📌
