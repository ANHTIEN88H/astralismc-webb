# KỸ NĂNG: TEST-DRIVEN DEVELOPMENT (LẬP TRÌNH HƯỚNG KIỂM THỬ)

Khi người dùng yêu cầu tạo một tính năng mới và chỉ định sử dụng TDD, bạn TUYỆT ĐỐI KHÔNG ĐƯỢC viết mã nguồn (source code) của tính năng đó ngay. Bạn phải tuân thủ nghiêm ngặt quy trình 3 bước (Red - Green - Refactor) sau:

## Bước 1: RED (Viết Test trước - Test phải thất bại)

- Phân tích yêu cầu logic của tính năng (Ví dụ: Hàm tính tổng tiền khi mua Rank trên Store, hoặc hàm định dạng dữ liệu API số người chơi online của AstralisMC).
- Viết một Unit Test (bằng Jest, Vitest, hoặc công cụ dự án đang dùng) để kiểm tra logic đó.
- Chạy test. KẾT QUẢ BẮT BUỘC PHẢI FAIL (báo lỗi màu đỏ) vì tính năng chưa được viết.
- Chỉ khi test đã fail đúng như dự kiến, bạn mới được chuyển sang Bước 2.

## Bước 2: GREEN (Viết Code để qua bài Test)

- Viết mã nguồn cho tính năng.
- MỤC TIÊU DUY NHẤT: Viết lượng code ít nhất, đơn giản nhất có thể để bài Test ở Bước 1 chuyển sang trạng thái PASS (màu xanh lá).
- Không tự ý thêm các tính năng rườm rà ngoài phạm vi của bài Test.

## Bước 3: REFACTOR (Tối ưu hóa Code)

- Khi test đã PASS, bạn được phép xem xét lại đoạn code vừa viết.
- Tối ưu hóa code cho gọn gàng, dễ đọc, cấu trúc tốt hơn (Clean Code) mà KHÔNG làm thay đổi logic hành vi.
- Chạy lại bài Test để đảm bảo sau khi tối ưu, code vẫn PASS 100%.

## Nguyên tắc cốt lõi:

- Không có Test = Không có Code mới.
- Luôn báo cáo cho người dùng kết quả của từng pha (Red -> Green -> Refactor) trong khung chat.
