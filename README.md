# SalesCost Pro – Quy trình Ngân sách & Chi phí tách riêng

Bản này sửa phần thao tác và nghiệp vụ:

- Ngân sách là quy trình phê duyệt riêng: Người nộp đơn → Trưởng bộ phận → Tài vụ → Đang thực hiện.
- Chỉ ngân sách ở trạng thái **Đang thực hiện** mới được dùng để tạo đăng ký chi phí.
- Chi phí là một quy trình phê duyệt riêng, bắt buộc liên kết đúng **năm/kỳ/hạng mục** của ngân sách.
- Chi phí không được vượt số ngân sách còn có thể xin; hệ thống tính cả khoản đã sử dụng và khoản đang giữ chỗ.
- Khi bắt đầu thực hiện chi phí, số tiền được ghi nhận vào phần đã sử dụng của ngân sách.
- Chi phí chỉ hoàn thành khi tài liệu bắt buộc đã được duyệt đầy đủ.
- Các nút thao tác dùng event delegation để tránh lỗi onclick: Nộp đơn, Lấy lại đơn, Hủy bỏ, Từ chối, Hoàn trả, Phê duyệt.

## Vercel
- Framework: Other
- Build Command: `npm run build`
- Output Directory: `dist`


## Cập nhật mới
- Chi phí tách thành Chi phí và Điều chỉnh chi phí.
- Doanh thu mục tiêu và Báo cáo bán hàng: Năm nhập 4 số; kỳ chọn Năm/Tháng/Ngày; nội dung tự sinh.
- Năm ngân sách cũng nhập trực tiếp 4 số.
