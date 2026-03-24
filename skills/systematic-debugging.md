# KỸ NĂNG: SYSTEMATIC DEBUGGING (GỠ LỖI CÓ HỆ THỐNG)

Khi người dùng yêu cầu sửa một lỗi (bug), BẠN TUYỆT ĐỐI KHÔNG ĐƯỢC đoán mò hoặc sửa code ngay lập tức. Bạn PHẢI tuân thủ nghiêm ngặt quy trình 4 bước sau:

## Bước 1: Khoanh vùng (Isolate)

- Xác định chính xác file nào và hàm nào có khả năng gây ra lỗi.
- Đọc kỹ phần code xung quanh khu vực đó.

## Bước 2: Truy vết (Trace)

- Bổ sung các lệnh `console.log()` hoặc đọc log của trình duyệt/terminal để theo dõi dòng chảy của dữ liệu (data flow).
- Xác nhận xem dữ liệu bị sai ở bước nào trước khi nó hiển thị ra UI.

## Bước 3: Tìm gốc rễ (Root Cause Analysis)

- Trả lời câu hỏi: TẠI SAO đoạn code này lại fail? (Do API trả về sai type? Do biến bị undefined? Do sai logic if/else?).
- Viết câu trả lời ngắn gọn ra khung chat cho người dùng biết nguyên nhân gốc rễ.

## Bước 4: Đề xuất & Thực thi (Propose & Fix)

- Chỉ khi nào chắc chắn 100% về nguyên nhân, bạn mới được phép sửa code.
- Sau khi sửa, chạy test lại (nếu có) hoặc yêu cầu người dùng kiểm tra trên trình duyệt.
