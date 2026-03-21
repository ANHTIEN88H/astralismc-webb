# 📋 FONT MINECRAFT OVERHAUL - HƯỚNG DẪN TÍCH HỢP

## 🎨 Tổng Quan Hệ Thống Font Mới

Hệ thống font hoàn toàn tái thiết kế với 3 loại font chính:

| Font               | Google Fonts   | Mục Đích            | Ví Dụ                       |
| ------------------ | -------------- | ------------------- | --------------------------- |
| **VT323**          | Pixel clean    | Tiêu đề lớn, nhãn   | "SERVER STATUS", "OFFLINE"  |
| **Space Mono**     | Geometric bold | Tiêu đề medium, nút | "Java IP", "Copy IP"        |
| **JetBrains Mono** | Monospace sạch | Nội dung & dữ liệu  | "1.21.10", "astralismc.xyz" |

---

## 🚀 QUICK START - 3 Bước Tích Hợp

### **BƯỚC 1: Import CSS trong index.html**

```html
<!-- Thêm dòng này TRƯỚC các <link> khác -->
<link rel="stylesheet" href="/src/styles/font-minecraft-overhaul.css" />
```

**File:** `index.html` (dòng 10-15)

### **BƯỚC 2: Cập Nhật tailwind.config.cjs (Optional)**

Nếu bạn muốn dùng Tailwind utility classes:

```javascript
// tailwind.config.cjs
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

**Import:**

```jsx
<h1 className="font-pixel text-2xl">SERVER STATUS</h1>
<p className="font-mono">astralismc.xyz</p>
```

### **BƯỚC 3: Áp Dụng Class Trong Components**

Xem phần "CODE EXAMPLES" dưới đây.

---

## 💻 CODE EXAMPLES - TỪng Component

### **1. Hero.jsx**

```jsx
<h1 className="hero-title">AstralisMC • MINECRAFT NETWORK</h1>
<p className="hero-description">Khám phá một thế giới Minecraft...</p>
<button className="btn-copy-ip">⛏ Copy IP</button>
```

### **2. ServerStatus.jsx - Tiêu đề**

```jsx
<h1 className="server-status-title">SERVER STATUS</h1>
<p className="server-status-description">Kiểm tra trạng thái server...</p>
```

### **3. ServerStatus.jsx - Card Trạng Thái**

```jsx
<div className="card-label-small">Trạng thái</div>
<div className="status-line-text">OFFLINE</div>
<div className="error-text">HTTP 404</div>
```

### **4. ServerStatus.jsx - Info Cards (Java/Bedrock)**

```jsx
<div className="info-card-title">Java IP</div>
<p className="info-card-value">astralismc.xyz (1.21+)</p>
<p className="info-card-meta">Phiên bản: 1.21 → 1.21.10</p>
```

### **5. Game Modes / Store / Features (Section Headers)**

```jsx
<h2 className="section-title">GAME MODES</h2>
<p className="section-description">Chọn từ Survival kinh điển...</p>
```

---

## 🎯 FONT MAPPING REFERENCE

**Sử dụng bảng này để biết dùng class nào cho từng phần tử:**

```
┌─────────────────────────────────────────────────────────────┐
│ PHẦN TỬ                         │ CLASS                    │
├─────────────────────────────────┼──────────────────────────┤
│ Tiêu đề lớn (e.g., "SERVER")   │ server-status-title      │
│ Tiêu đề Hero (ASTRALISMC)       │ hero-title               │
│ Nhãn card (Java IP, Status)     │ card-label-small         │
│ Trạng thái (OFFLINE, ONLINE)    │ status-line-text         │
│ Nội dung chính (IPs, versions)  │ info-card-value          │
│ Chữ nhỏ chú thích (Port, vers)  │ info-card-meta           │
│ Tiêu đề section (GAME MODES)    │ section-title            │
│ Mô tả section                   │ section-description      │
│ Nút bấm (Copy IP, Discord)      │ btn-copy-ip              │
└─────────────────────────────────┴──────────────────────────┘
```

---

## ⚙️ ĐIỀU CHỈNH KÍCH THƯỚC FONT

Nếu bạn cần thay đổi kích thước:

**Trong file `font-minecraft-overhaul.css`:**

```css
/* Tìm dòng như này */
.server-status-title {
  font-size: clamp(20px, 2.5vw, 32px); /* ← Thay đổi đây */
}

/* Cú pháp clamp:
 * clamp(MIN, PREFERRED, MAX)
 * - MIN: kích thước tối thiểu (mobile)
 * - PREFERRED: kích thước tỉ lệ với viewport
 * - MAX: kích thước tối đa (desktop)
 */
```

**Ví dụ tăng tiêu đề 20%:**

```css
.server-status-title {
  font-size: clamp(24px, 3vw, 38px); /* +4px min, +0.5vw, +6px max */
}
```

---

## 🧪 TESTING CHECKLIST

- [ ] Hard refresh browser (Ctrl+Shift+R hoặc Cmd+Shift+R)
- [ ] DevTools → Console → Kiểm tra xem có error gì không
- [ ] DevTools → Network → Kiểm tra Google Fonts tải được không
- [ ] Test trên mobile (480px), tablet (768px), desktop (1920px)
- [ ] Test khi mạng chậm (DevTools > Network > Slow 3G)
- [ ] Kiểm tra fonts Unicode (Tiếng Việt trên VT323)

---

## ⚠️ NOTES & WARNINGS

### 1. **VT323 + Tiếng Việt**

VT323 là font pixel tối ưu cho tiếng Anh. Với tiếng Việt, hãy kiểm tra kỹ các dấu (á, ă, â, etc.).

- ✅ OK: Tiêu đề ngắn bằng tiếng Anh (SERVER STATUS, COPY IP)
- ✅ OK: Số liệu (1.21.10, 19132)
- ⚠️ CẩN THẬN: Tiếng Việt dài - có thể cần dùng Space Mono thay vì VT323

### 2. **Google Fonts Loading**

Nếu Google Fonts không tải (offline hoặc slow network), fallback fonts sẽ được dùng:

- VT323 → Courier New
- Space Mono → Courier New
- JetBrains Mono → Courier New

Trang vẫn sẽ hoạt động, chỉ là font sẽ khác một chút.

### 3. **Bundle Size**

- VT323: ~22KB
- Space Mono: ~20KB
- JetBrains Mono: ~150KB (lớn nhất)
- **Tổng:** ~192KB (được nén thành ~50KB với GZIP)

Nếu bạn lo bundle size, có thể loại bỏ JetBrains Mono và dùng Space Mono cho cả tiêu đề + nội dung.

---

## 🔄 MIGRATION GUIDE - Từ Press Start 2P sangì

**Xóa những dòng này:**

```jsx
// ❌ KHÔNG dùng
style={{ fontFamily: '"Press Start 2P"' }}
className="text-xs" /* Press Start quá to, cần text-xs */
```

**Thay bằng:**

```jsx
// ✅ DÙNG
className = "server-status-title"; /* class mới xử lý kích thước */
className = "info-card-value"; /* monospace cho dữ liệu */
```

---

## 📞 TROUBLESHOOTING

### Fonts không xuất hiện

1. Kiểm tra `font-minecraft-overhaul.css` được import trong index.html chưa
2. Hard refresh (Ctrl+Shift+R)
3. DevTools → Network → Tìm "fonts.googleapis.com" - xem có lỗi gì không

### Text trông khác

1. Có thể fallback font đang được dùng
2. Kiểm tra DevTools → Elements → Tìm element → computed "font-family"
3. Nếu hiển thị "Courier New" thay vì "VT323", Google Fonts chưa tải

### Text bị cắt hoặc tràn

1. Tăng `line-height` trong CSS (ví dụ: 1.5 → 1.8)
2. Giảm `font-size` nếu quá lớn
3. Thêm `white-space: nowrap` nếu cần tránh xuống dòng

---

## 🎨 TINH CHỈNH VÀO TƯƠNG LAI

Nếu bạn cần:**Thêm font khác:**

```css
@import url("https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap");

:root {
  --font-new: "YOUR_FONT", fallback;
}

.new-class {
  font-family: var(--font-new);
}
```

**Thay đổi tất cả tiêu đề:**

```css
h1,
h2,
h3 {
  font-family: var(--font-title-large); /* Thay biến */
}
```

**Thêm animation:**

```css
.server-status-title {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

## 📊 FONT COMPARISON TABLE

| Aspect      | VT323        | Space Mono   | JetBrains Mono   |
| ----------- | ------------ | ------------ | ---------------- |
| Style       | Pixel retro  | Geometric    | Modern monospace |
| Readability | ⭐⭐⭐⭐     | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐       |
| Game vibe   | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐         |
| Tiếng Việt  | ⭐⭐⭐       | ⭐⭐⭐⭐     | ⭐⭐⭐⭐         |
| Bundle size | Nhỏ (22KB)   | Trung (20KB) | Lớn (150KB)      |
| Best for    | Tiêu đề ngắn | Tiêu đề/nút  | Dữ liệu kỹ thuật |

---

## ✅ CHECKLIST HOÀN THÀNH

- [ ] File `font-minecraft-overhaul.css` đã tạo (`/src/styles/`)
- [ ] Đã import trong `index.html`
- [ ] Đã cập nhật `tailwind.config.cjs` (optional)
- [ ] Đã apply classes trong các components
- [ ] Đã test trên desktop + mobile
- [ ] Đã xóa hết `fontFamily` inline styles cũ
- [ ] Kiểm tra tiếng Việt hiển thị đúng
- [ ] Xác nhận fonts tải từ Google

---

**Đây là hệ thống font "ready to deploy" - sạch, rõ, dễ bảo trì!** 🚀
