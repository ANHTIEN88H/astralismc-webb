# THIẾT KẾ TÍNH NĂNG: Server Status Widget

## 1. Mục tiêu (Goal)

Tạo một widget nhỏ trên giao diện web để hiển thị trạng thái realtime của máy chủ AstralisMC Network (Online/Offline và số lượng người chơi hiện tại).

## 2. Yêu cầu giao diện (UI/UX)

- Thiết kế dạng một thẻ Card bo góc.
- Sử dụng Tailwind CSS để style.
- Có một chấm tròn nhỏ nhấp nháy: Màu xanh lá nếu server Online, màu đỏ nếu Offline.
- Hiển thị text: "Đang chơi: X / Y" (X là số người online, Y là max slots).
- Phải responsive (hiển thị đẹp trên cả mobile và PC).

## 3. Yêu cầu kỹ thuật (Tech Details)

- **Vị trí file:** Thêm code vào file `index.html` hiện tại hoặc tạo component mới trong thư mục `src`.
- **API sử dụng:** Sử dụng public API của mcsrvstat (ví dụ: `https://api.mcsrvstat.us/3/play.astralismc.net` - tạm thời dùng IP giả lập nếu chưa có IP chính thức).
- **Xử lý logic:** Fetch data từ API bằng JavaScript (dùng `fetch`). Cần có trạng thái "Loading..." trước khi gọi API xong.
- **Xử lý lỗi:** Nếu API lỗi hoặc server sập, UI phải hiển thị chữ "Server Offline" màu đỏ một cách lịch sự, không bị vỡ layout.

## 4. Các bước thực hiện (Checklist cho AI)

- [ ] Bước 1: Phân tích file `index.html` hiện tại để tìm vị trí đặt widget phù hợp.
- [ ] Bước 2: Viết logic JavaScript fetch API mcsrvstat.
- [ ] Bước 3: Tạo giao diện bằng Tailwind CSS và gắn logic JS vào UI.
- [ ] Bước 4: Test thử xem giao diện đổi màu đúng khi Online/Offline chưa.
