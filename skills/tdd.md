LỆNH BẮT BUỘC DÀNH CHO AI: Khi người dùng yêu cầu tạo tính năng mới kèm thẻ [TDD], bạn TUYỆT ĐỐI KHÔNG ĐƯỢC chạm vào thư mục mã nguồn chính (VD: src/) cho đến khi hoàn thành Bước 1. Mọi nỗ lực viết Code và Test cùng một lúc sẽ bị coi là vi phạm nghiêm trọng.

Quy trình 3 bước này phải được thực hiện tuần tự, có bằng chứng xác nhận từ Terminal:

Bước 1: RED (Bẫy Lỗi)
Hành động: Viết một Unit Test (bằng Jest, Vitest...) vào thư mục tests/ để kiểm tra logic của tính năng sắp làm (VD: Logic tính toán giá Rank, format số lượng người chơi AstralisMC).

Trạng thái Code: Tính năng thực tế CHƯA TỒN TẠI hoặc đang để trống (return null).

Nhiệm vụ bắt buộc (Kiểm chứng): Bạn PHẢI chạy lệnh test trong Terminal (VD: npm run test).

Điều kiện qua ải: KẾT QUẢ TRONG TERMINAL BẮT BUỘC PHẢI FAIL (Báo lỗi đỏ). Bạn phải trích dẫn dòng lỗi đó vào khung chat để chứng minh bài test đã hoạt động và bắt được lỗi thiếu logic.

Tuyệt đối không được viết code thực thi cho đến khi nhìn thấy lỗi đỏ từ Terminal.

Bước 2: GREEN (Giải Cứu)
Hành động: Lúc này, bạn mới được phép mở thư mục src/ để viết mã nguồn cho tính năng.

Nguyên tắc Tối giản (KISS): CHỈ viết lượng code ít nhất, ngớ ngẩn nhất, đơn giản nhất cốt chỉ để bài Test ở Bước 1 chuyển sang trạng thái PASS. Không tự tiện "vẽ rắn thêm chân", không tối ưu hóa vào lúc này, không thêm các tính năng dự phòng ngoài phạm vi của Unit Test.

Nhiệm vụ bắt buộc (Kiểm chứng): Chạy lại lệnh test trong Terminal. Kết quả PHẢI PASS (Màu xanh). Trích dẫn kết quả Pass vào khung chat.

Bước 3: REFACTOR (Đánh Bóng)
Hành động: Khi mọi thứ đã Xanh, hãy nhìn lại đoạn code ở Bước 2.

Mục tiêu: Tái cấu trúc, dọn dẹp biến, tách hàm, áp dụng Clean Code để mã nguồn đẹp và chuyên nghiệp hơn. Đảm bảo KHÔNG thay đổi hành vi/logic của tính năng.

Nhiệm vụ bắt buộc (Kiểm chứng): Chạy lại lệnh test trong Terminal lần cuối cùng. Bài test vẫn phải PASS 100%. Nếu Fail, bạn phải lập tức lùi lại (Undo) và sửa ngay.

🛑 3 ĐIỀU CẤM KỴ:
Cấm gộp bước: Cấm viết Test và Source Code trong cùng một lần trả lời/commit.

Cấm giả mạo: Cấm tự tưởng tượng ra kết quả Test. Phải thực thi lệnh trong Terminal.

Cấm lạc đề: Nếu code đã Green, cấm thêm tính năng mới mà chưa có bài Test mới (Red) đi kèm.
