# SalesCost Pro – bản chạy Vercel

Đây là bản web tĩnh hoàn chỉnh để thử nghiệp vụ quản lý doanh thu, ngân sách, chi phí và tài liệu.

## Chức năng có sẵn

- Tổng quan và dữ liệu gốc.
- Doanh thu: Doanh thu mục tiêu và Báo cáo bán hàng.
- Chi phí: Ngân sách, điều chỉnh ngân sách và đăng ký chi phí.
- Quy trình phê duyệt: Người nộp đơn → Trưởng bộ phận → Tài vụ.
- Kiểm soát chi phí không vượt ngân sách theo kỳ và hạng mục.
- Tài liệu liên kết với chi phí, checklist đủ/thiếu, tải nhiều tệp và duyệt/hoàn trả.
- Báo cáo và xuất dữ liệu JSON.
- Dữ liệu thử nghiệm lưu bằng localStorage trên trình duyệt.

## Chạy trên máy

Mở `index.html`, hoặc chạy:

```bash
npm run dev
```

## Triển khai Vercel

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`
- Root Directory: để trống

Các đường dẫn `/revenue`, `/cost`, `/file`, `/reports` đều được cấu hình mở trực tiếp.

> Đây là MVP front-end. Tệp tải lên chỉ được mô phỏng bằng tên tệp trong trình duyệt; chưa lưu trên máy chủ. Để dùng thực tế cần kết nối Supabase Storage và cơ sở dữ liệu.
