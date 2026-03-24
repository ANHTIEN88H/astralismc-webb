## Epic: Landing Page MMORPG

- [ ] Tạo cấu trúc file và setup Tailwind CSS.
- [x] Code Section 1: Hero Banner cực ngầu giới thiệu cốt truyện (Lore).
- [x] Code Section 2: Danh sách Class nhân vật (Dạng thẻ Card có hiệu ứng hover).
- [ ] Code Section 3: Showroom Hệ thống Vũ khí/Vật phẩm.

## Epic: Navbar & Routing MMO

- [x] Refactor Header với dropdown (desktop) + mobile menu gọn.
- [x] Tách route: Home giữ Hero; /classes chứa ClassesShowcase; /about chứa Thành tựu + Gallery.
- [x] Đồng bộ tone nền dark fantasy.
- [x] Kiểm tra nhanh / build dev.

## Epic: Class Detail Pages

- [x] Tạo 3 trang chi tiết class: Vanguard, Aether Mage, Void Walker.
- [x] Bổ sung bố cục chi tiết gồm ảnh lớn, lore, danh sách kỹ năng, bảng chỉ số sức mạnh.
- [x] Cập nhật nút "Xem Chi Tiết" trong ClassesShowcase thành Link tới từng route chi tiết.
- [x] Đăng ký route mới trong App.jsx: /classes/vanguard, /classes/aether-mage, /classes/void-walker.
- [x] Thêm test route/link cho class detail và xác nhận pass.

## Epic: Homepage MMORPG Upgrade (Tin tức & Live Stats)

- [x] Nâng cấp Live Realm Feed bằng API mcsrvstat.us để lấy players.online vào Frontline Instance.
- [x] Thêm trạng thái fallback "Bảo Trì" với chấm đỏ animate-pulse khi API lỗi hoặc server offline.
- [x] Tạo NewsSection.jsx với tiêu đề "TIN TỨC & CẬP NHẬT" và grid 1 cột mobile / 3 cột desktop.
- [x] Thiết kế 3 News Card theo style dark glass, tag neon, hover scale cover + viền cyan + icon mũi tên trượt.
- [x] Import và render NewsSection ngay dưới Hero Banner ở route trang chủ (/).
