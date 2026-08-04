# Sửa lỗi 404 NOT_FOUND trên Vercel

1. Upload **các file bên trong thư mục này** vào thư mục gốc của GitHub. Không upload thêm một thư mục bọc bên ngoài.
2. Repository phải nhìn thấy trực tiếp: `assets`, `index.html`, `build.js`, `package.json`, `vercel.json`.
3. Trong Vercel > Project > Settings > Build and Deployment:
   - Framework Preset: Other
   - Root Directory: trống
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Vào Deployments, chọn commit mới nhất và Redeploy; tắt Use existing Build Cache.
5. Mở deployment URL được tạo trong chính deployment đó. Nếu URL này chạy nhưng domain chính báo 404, vào Settings > Domains và gán domain chính cho Production.
6. Nếu project đang dùng Deployment Protection/SSO, tắt bảo vệ cho Production hoặc đăng nhập đúng tài khoản.
