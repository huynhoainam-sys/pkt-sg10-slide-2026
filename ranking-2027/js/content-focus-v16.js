'use strict';
/* Ranking V16: source-first, slide carries criteria/action, popup adds explanatory value only. */
(() => {
 const bySection = key => SLIDES.find(s => s.section === key);
 const first = (key, title, subtitle, source, fragments) => {
   if(!DETAILS[key])return;
   DETAILS[key].title=title;
   DETAILS[key].eyebrow=subtitle;
   DETAILS[key].source=source;
   DETAILS[key].html='<div class="detail-rich">'+fragments.join('')+'</div>';
 };
 const item = (icon,color,title,content)=>dBox(icon,color,title,content);
 const note = (text)=>'<p class="note">'+text+'</p>';
 // Make reference slides actually accessible when matching original image assets exist.
 const dt=bySection('ĐỘI TRƯỞNG'), pro=bySection('KTV PRO');
 if(dt)dt.source=4;
 if(pro)pro.source=5;
 const actionSlide = SLIDES.find(s=>s.title.includes('CLL: GIẢM'));
 const comboSlide = SLIDES.find(s=>s.title.startsWith('COMBO: LẮP'));
 const wifiSlide = SLIDES.find(s=>s.title.startsWith('WIFI XẤU: XÁC ĐỊNH'));
 if(actionSlide){
   const base=actionSlide.html;
   actionSlide.html=()=>base().replace('Đội trưởng/Pro phân tích case điển hình, hướng dẫn và kiểm tra kết quả thực tế.',
     'Đội trưởng/Pro phân tích case, hướng dẫn <b>hằng tuần</b> và kiểm tra ngẫu nhiên nghiệm thu thực tế.');
 }
 if(comboSlide){
   const base=comboSlide.html;
   comboSlide.html=()=>base().replace('Kiểm tra D+7; phân loại nguyên nhân không dùng; phối hợp DVKH.',
     'Quét lại <b>D+7</b>; không phát sinh lưu lượng → cảnh báo/tạo SR, DVKH phân loại lý do.')
     .replace('Hệ thống theo dõi KH Combo NET + IPTV không phát sinh lưu lượng IPTV trong <b>3 tháng gần nhất</b>.',
     'Nguồn <b>FPL</b>: KH Combo NET + IPTV thuộc Lô, kiểm tra IPTV trong <b>3 tháng gần nhất</b>.');
 }
 if(wifiSlide){
   const base=wifiSlide.html;
   wifiSlide.html=()=>base().replace('Tối ưu cấu hình, chọn Mesh phù hợp; lưu đo kiểm <b>trước/sau</b>.',
     'Tối ưu cấu hình; ưu tiên Mesh có dây khi thiếu vùng phủ; ghi đo kiểm <b>trước/sau</b>.');
 }
 first('dt-all','Cách đọc Ranking Đội trưởng','VÍ DỤ & TÀI LIỆU GỐC · 04',4,[
  item('group','blue','Ví dụ kết quả hai trên ba','Một Đội trưởng đạt tiêu chí nhân sự/AU và chất lượng KTV nhưng chưa hoàn thành phối hợp thì vẫn đạt đánh giá tổng thể. Cần dùng kết quả đã được đơn vị xác nhận cho tiêu chí phối hợp.'),
  item('alert','orange','Giới hạn áp dụng','Hình thức xử lý quy định trên slide dành riêng cho vị trí Đội trưởng. Không chuyển nguyên xi sang KTV hoặc Pro.')
 ]);
 first('dt-force','Ví dụ xác định nhân sự & AU','DIỄN GIẢI · ẢNH GỐC 04',4,[
  item('chart','blue','Đối chiếu đúng kỳ đánh giá','Khi rà định mức AU bình quân cần lấy đúng số KTV và tập AU do Đội trưởng phụ trách trong kỳ, tránh lẫn KTV điều chuyển hoặc AU ngoài Lô.'),
  note('Tài liệu không nêu chi tiết phép làm tròn AU hoặc cách xử lý nhân sự điều chuyển giữa kỳ; cần dùng quy tắc báo cáo chính thức.')
 ]);
 first('dt-quality','Ví dụ đánh giá chất lượng KTV','DIỄN GIẢI · ẢNH GỐC 04',4,[
  item('group','green','Xác định mẫu số nhất quán','Ví dụ có 10 KTV được đưa vào bảng đánh giá thì tối thiểu 8 KTV đạt để đạt tiêu chí này. Số liệu ví dụ dùng để giải thích, không phải dữ liệu của đội.'),
  item('tools','blue','Ứng dụng vào hỗ trợ đội','Nhìn danh sách KTV có hai tiêu chí không đạt để ưu tiên kèm cặp, không chỉ theo dõi tỷ lệ chung.')
 ]);
 first('dt-coordination','Giải thích đánh giá phối hợp','DIỄN GIẢI · ẢNH GỐC 04',4,[
  item('clipboard','blue','Nguyên tắc kiểm chứng','Tham chiếu đánh giá năng lực quản lý và phối hợp Dịch-thuật do đầu mối có thẩm quyền xác nhận, không quy đổi thành điểm số tự tạo.'),
  note('PPT không đưa ra biểu mẫu chấm hoặc trọng số chi tiết của chỉ tiêu này.')
 ]);
 first('pro-rule','Cách hiểu CLL tập thể của KTV Pro','DIỄN GIẢI · ẢNH GỐC 05',5,[
  item('repeat','blue','Đừng nhầm chỉ số cá nhân','Bảng Pro đo chất lượng CLL trung bình của tập thể trong phạm vi Pro được giao hỗ trợ, không phải CLL riêng của Pro. Khi rà số liệu phải chốt danh sách KTV thuộc tập thể trước.'),
  item('alert','orange','Điểm cần xác minh','Nguồn chưa công bố giá trị số của tỷ lệ chuẩn cho Pro; không được tự áp chuẩn 6% của KTV cho vị trí Pro.')
 ]);
 first('pro-role','Pro cần hỗ trợ đội như thế nào?','DIỄN GIẢI · ẢNH GỐC 05',5,[
  item('book','green','Tình huống hướng dẫn thực chiến','Với một lỗi lặp điển hình, Pro cùng KTV đo kiểm và xác định nguyên nhân, hướng dẫn cách xử lý triệt để, rồi kiểm tra kết quả trước khi nhân rộng giải pháp cho nhóm.'),
  item('chart','blue','Hiệu quả sau hỗ trợ','Đối chiếu lại lỗi lặp và chất lượng ca sau hướng dẫn để biết hành động có thật sự cải thiện.')
 ]);
 first('wifi','Ví dụ xử lý WiFi xấu tại hiện trường','DIỄN GIẢI · ẢNH GỐC 07',7,[
  item('tools','blue','Phân biệt vùng phủ và đường truyền','KH báo WiFi chậm ở phòng xa: đo tại modem và phòng sử dụng. Nếu đường truyền tốt nhưng xa modem yếu, giải quyết vùng phủ; nếu đo dây cũng chậm, kiểm tra ONT/đường truyền trước.'),
  item('clipboard','green','Bằng chứng nghiệm thu','Ghi vị trí đo, kết quả trước/sau, thiết bị và cấu hình đã điều chỉnh, xác nhận trạng thái sử dụng của KH.')
 ]);
 first('wifi-score','Cách đọc điểm chất lượng WiFi','DIỄN GIẢI · ẢNH GỐC 12',12,[
  item('signal','blue','Điểm rủi ro không phải tốc độ mạng','Không quy trực tiếp điểm 0–1.000 ra Mbps hoặc kết luận từ một lần Speedtest. Đây là điểm phân loại do hệ thống tổng hợp nhiều chỉ số.'),
  item('alert','orange','Lưu ý bảng nhóm','Tài liệu có bất nhất về tỷ trọng 1% + 15% + 85% = 101%. Đang giữ nguyên dữ liệu gốc để tránh tự thay đổi cách phân nhóm.')
 ]);
 first('wifi-bands','Diễn giải chỉ số WiFi','DIỄN GIẢI · ẢNH GỐC 12',12,[
  item('signal','blue','RSSI, Ping, Loss và lưu lượng','RSSI phản ánh cường độ tín hiệu, Ping cho biết độ trễ, Loss là mất gói; TX Bytes và TX Packets phản ánh dữ liệu/gói truyền. Cần xem tổng thể để xác định nguyên nhân, không đọc riêng một chỉ số.'),
  item('alert','orange','Không suy diễn công thức nội bộ','PPT không ghi trọng số dùng để quy đổi các chỉ số thành điểm. Các tỷ trọng nhóm trong ảnh gốc cũng chưa thống nhất.')
 ]);
 first('cll','Ví dụ cải thiện chất lượng một chạm','DIỄN GIẢI · ẢNH GỐC 08',8,[
  item('repeat','orange','Case tái phát sau khi đóng','Khi KH phản ánh lại cùng vị trí và triệu chứng, rà lịch sử đo kiểm, cấu hình và hướng xử lý trước; tránh lặp thao tác tạm thời. Hậu kiểm phải có kết quả chứng minh đã hết lỗi.'),
  item('group','blue','Biến lỗi điển hình thành bài học','Pro/Đội trưởng tổng hợp tình huống, phân loại nguyên nhân và tổ chức hướng dẫn để phòng ngừa lỗi tương tự cho các KTV khác.')
 ]);
 first('cll-details','Hậu kiểm CLL: làm thế nào hiệu quả?','DIỄN GIẢI · ẢNH GỐC 08',8,[
  item('clipboard','blue','Hậu kiểm thực chất','Gọi lại hoặc kiểm tra từ xa và đối chiếu chứng cứ đo kiểm sau xử lý. Xác nhận KH sử dụng ổn định, không chỉ xác nhận đã liên hệ thành công.'),
  item('tools','green','Ví dụ lỗi tái phát','Lỗi yếu sóng cuối nhà cần so sánh đo kiểm cùng vị trí sau tối ưu Mesh, thay vì chỉ nhìn đèn modem.')
 ]);
 first('combo','Tại sao phải kích hoạt và hướng dẫn tại chỗ?','DIỄN GIẢI · ẢNH GỐC 09',9,[
  item('tv','blue','Đăng nhập được chưa đủ','Phải kiểm tra nội dung phát trên đúng tài khoản. Phiên xem tại chỗ giúp phát hiện sớm lỗi tài khoản, kết nối và thiết bị.'),
  item('phone','green','Cách chuyển thông tin chăm sóc','Khi không phát sinh lưu lượng sau nghiệm thu, chuyển kèm loại thiết bị, trạng thái đăng nhập và nguyên nhân nghi ngờ để DVKH theo dõi đúng.')
 ]);
 first('combo-explain','Ba nhóm KH Combo: ví dụ thực tế','DIỄN GIẢI · ẢNH GỐC 09',9,[
  item('tv','blue','BOX so với App','BOX cần kiểm tra đường kết nối đến TV/điều khiển; App cần kiểm tra khả năng đăng nhập, mở nội dung trên thiết bị thật. KH mới biết dịch vụ cần giới thiệu đúng phạm vi.'),
  item('alert','orange','Không hứa chính sách ngoài thẩm quyền','Các thông tin giá, cước và chính sách có thay đổi phải được tư vấn bởi đúng bộ phận.')
 ]);
 first('risk-original','Phân biệt rủi ro địa bàn và khách hàng','DIỄN GIẢI · ẢNH GỐC 10',10,[
  item('shield','blue','Vấn đề hạ tầng có thể ảnh hưởng nhiều thuê bao','Một tuyến cáp có nguy cơ do công trình phải được phối hợp xử lý theo phạm vi địa bàn, không xem là lỗi cá thể của một KH.'),
  item('phone','orange','Rủi ro KH cần hành động đúng tập','KH chưa phát sinh dữ liệu do đổi mật khẩu WiFi cần hỗ trợ kết nối lại và kiểm tra phát sinh sử dụng, không đánh dấu hoàn tất chỉ vì đã gọi điện.')
 ]);
 first('rm','Hiểu đúng nguy cơ RM sau chăm sóc','DIỄN GIẢI · ẢNH GỐC 13',13,[
  item('chart','orange','Ý nghĩa của kết quả','Tỷ lệ cao phản ánh trong tập KH đã chăm sóc vẫn còn nhiều KH ít phát sinh lưu lượng, cần tiếp tục theo dõi nguyên nhân sử dụng thấp.'),
  item('group','blue','Không nhầm tập khách hàng','Đây không phải tỷ lệ tất cả KH có lượng sử dụng thấp trong toàn bộ địa bàn, mà là tập đã lọc điều kiện nguồn.')
 ]);
 first('rm-formula','RM: ví dụ tính và cách đối chiếu','DIỄN GIẢI · ẢNH GỐC 13',13,[
  item('chart','blue','Ví dụ minh họa','Giả sử có 100 KH đủ điều kiện vào mẫu số, trong đó 20 KH thuộc tử số theo điều kiện sử dụng thấp: tỷ lệ 20%. Đây là số giả định để minh họa, không phải dữ liệu thật.'),
  item('alert','orange','Vết chuyển CL có điều kiện riêng','Tài liệu yêu cầu xét nguyên nhân đầu vào hoặc từ khóa khiếu nại RM trong nội dung CL. Phải kiểm tra nguồn và các quy tắc phân loại thực tế.')
 ]);
 first('rm-denominator','Vì sao cần lọc mẫu số RM?','DIỄN GIẢI · ẢNH GỐC 13',13,[
  item('clipboard','blue','Nguyên tắc đối chiếu','Loại bản ghi chưa đủ thời gian theo dõi hoặc không có vết chuyển KTV phù hợp. Không tính một khách ở nhiều vị trí do cách ghép dữ liệu.'),
  note('Chi tiết xử lý bản ghi trùng và thời điểm đồng bộ dữ liệu không có trong PPT; cần theo quy tắc chính thức.')
 ]);
 first('rm-numerator','Vì sao tử số RM là tập con?','DIỄN GIẢI · ẢNH GỐC 13',13,[
  item('chart','orange','Ví dụ lọc dữ liệu','Một KH sử dụng rất ít nhưng không nằm trong tập chuyển KTV đủ điều kiện thì không được tự cộng vào tử số của KPI này.'),
  item('alert','blue','Giữ đúng phạm vi','Đối chiếu tử số trong cùng kỳ và cùng tập mẫu số; không dùng số ít lưu lượng toàn Lô.')
 ]);
 first('combo-formula','Đọc đúng tỷ lệ không dùng truyền hình','DIỄN GIẢI · ẢNH GỐC 14',14,[
  item('tv','blue','Ví dụ minh họa','Nếu Lô có 100 khách Combo NET + IPTV, 20 khách không phát sinh IPTV trong ba tháng thì tỷ lệ minh họa là 20%. Ví dụ không phải dữ liệu thực.'),
  item('clipboard','green','Nguồn và phạm vi','Căn cứ vào dữ liệu FPL và Lô KTV, không thay bằng lời xác nhận chủ quan của khách hàng.')
 ]);
 first('roles','Cách phối hợp KTV – Pro – Đội trưởng','VÍ DỤ PHỐI HỢP · ẢNH GỐC 04',4,[
  item('group','blue','Tình huống cần nhiều vai trò','KTV phụ trách xử lý và ghi chứng cứ; Pro tham gia lỗi khó, huấn luyện; Đội trưởng nhìn chất lượng cả nhóm và phân bổ hỗ trợ. Trách nhiệm của ba vị trí không thay thế nhau.'),
  item('alert','orange','Không áp chế tài lẫn vị trí','Tiêu chí đạt và cảnh báo của từng vai trò phải đối chiếu đúng bảng được giao.')
 ]);
 // Remove repetitive "full detail" language; presentation itself shows criteria/actions.
 SLIDES.forEach(s=>{
   if(s.section==='ĐỘI TRƯỞNG'||s.section==='KTV PRO'||s.section==='CÁCH TÍNH RM'||s.section==='CÁCH TÍNH WIFI')
     s.short=s.short.replace('3 tiêu chí & hình thức xử lý','Đánh giá & vai trò').replace('Tử số – mẫu số nguy cơ RM','Công thức và điều kiện RM');
 });
})();