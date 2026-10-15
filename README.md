# PKT SG10 · Họp tháng 10/2026

Bộ trình chiếu HTML tương tác gồm **11 slide**, thống kê PTTB, đội/KTV, Kickoff tháng 9 và CLDV/CSAT, thu hồi thiết bị 01–12/10, kèm các popup chi tiết có lọc và sắp xếp.

## Truy cập website

- Repository: https://github.com/huynhoainam-sys/pkt-sg10-slide-2026
- GitHub Pages (sau khi bật): https://huynhoainam-sys.github.io/pkt-sg10-slide-2026/

## Bật GitHub Pages (chỉ cần 1 lần)

Mở **Settings → Pages → Build and deployment → Source = Deploy from a branch**. Chọn **Branch = main**, **Folder = / (root)** rồi **Save**. Chờ GitHub hiển thị URL trang ở mục Pages.

## Cấu trúc

- `index.html`: trang chọn bộ trình chiếu. `meeting.html`: bộ tải 14 phần và ghép bài Họp PKT. `ranking-2027/index.html`: bài Ranking 2027.
- `parts/000.txt` … `parts/013.txt`: nội dung **V20** được chia thành 14 phần do HTML có ảnh nhúng dung lượng lớn. Khi mở web, các phần được tải và ghép lại trên trình duyệt, bảo toàn nội dung gốc.

> **Lưu ý bảo mật:** Repo Public và GitHub Pages công khai chứa số liệu KTV, HĐ và kết quả CLDV. Hãy kiểm tra phạm vi công khai trước khi chia sẻ đường dẫn.

## Thu hồi thiết bị tháng 10

- `recovery.js`: hai slide thu hồi và bảng chi tiết, dữ liệu theo roster báo cáo SG10.
- `recovery.css`: bố cục thu hồi và giao diện thống nhất cho bảng chi tiết.
- Kỳ theo ngày tạo phân công: 01–13/10/2026. Đơn vị: thiết bị. Tổng 1.516 = đã thu hồi 225 + chưa thu hồi 955 + không thành công 336. Đã thu hồi 225 = nhập kho 200 + chờ nhập kho 25.
- 83 KTV có phân công, 16 KTV chưa có kết quả thu hồi. Nhóm không thành công cao trên slide dùng mẫu từ 10 thiết bị, tính Không TC / Tổng phân công. Hai thiết bị gắn tài khoản PNC02/PNC03 ngoài roster SG10 không nằm trong tổng này.
- Các bảng chi tiết dùng một ô tìm kiếm và sắp xếp theo tiêu đề cột, không có bộ lọc cột hoặc dropdown lọc. Các tab chuyển giữa từng nhóm dữ liệu.

## QA bố cục và màu

Vùng dữ liệu slide thu hồi kết thúc ở y=788, nguồn y=809–827, footer từ y=847 trên canvas 1600×900. Bảng đội dùng hàng cao 46px, WiFi count/rate cùng dòng và colgroup tổng 100%. Đã TH dùng xanh, chưa TH/chờ nhập kho cam, không TC đỏ; 0 trắng; mức nền đậm theo giá trị trong cùng cột. WiFi 6+7 cùng roster: 108 thiết bị, 25,17% theo báo cáo nguồn.

## Đồng bộ V25 — Slide 4 và 6 (13/10/2026)

- Đã so sánh với file `Hop_PKT_SG10_Thang10_2026_ThuHoi_V25(1).html`. HTML của **slide 4 (Kickoff tháng 9)** và **slide 6 (Cảnh báo CLDV)** trong website trùng khớp nội dung V25; không có sai khác cần thay thế.
- Mã nguồn tại `parts/013.txt` có ghi chú xác nhận nguồn V25. Loader sử dụng chung phiên bản cache cho cả 14 phần, tránh trộn nội dung cũ và mới.
- Giữ nguyên số liệu, 11 slide, popup Kickoff/CSAT và toàn bộ chức năng khác.

## QA sửa lỗi ngày 14/10/2026

- Menu Họp PKT tạo từ scene thực tế; chỉ số và mục lục được đồng bộ theo DOM, số KTV còn tồn trong menu lấy từ snapshot.
- Ranking tải/giải mã ảnh trước khi hiện layer, preload slide kề và tải nền các slide khác tuần tự khi rảnh; CSS giảm chuyển động không xóa transform bố cục.
- Trang chủ bỏ số phiên bản Ranking khai báo thủ công; sửa query cache của các tập tin thay đổi.
- Snapshot CLDV/CSAT: 13/10/2026, 141 đánh giá / 3.185 lượt gửi, CSAT 1–2 là 8. Snapshot thu hồi: 01–13/10/2026, 1.516 thiết bị. Chưa đối chiếu với bảng nguồn mới hơn.
