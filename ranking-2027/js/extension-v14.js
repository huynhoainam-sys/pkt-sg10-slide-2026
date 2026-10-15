'use strict';
// Ranking V14 - expands source-aligned contents before the deck is mounted.
(() => {
  const hdr = (tag,title,subtitle) =>
    '<header class="slide-header rank-head"><span class="eyebrow">'+tag+'</span><h1>'+title+'</h1><p>'+subtitle+'</p></header>';
  const tile = (number,title,content,tone,key) =>
    '<button type="button" class="rank-tile rank-'+tone+'" data-detail="'+key+'">'+
      '<span class="rank-tile-no">'+number+'</span><h3>'+title+'</h3>'+
      '<p>'+content+'</p><span class="rank-tile-cta">Xem đầy đủ tiêu chí ↗</span></button>';
  const open = (key,label) => '<button type="button" class="rank-open" data-detail="'+key+'">'+label+' <span>↗</span></button>';
  const chip = (val,detail) => '<div class="rank-pill"><strong>'+val+'</strong><span>'+detail+'</span></div>';
  const add = [
    {section:'ĐỘI TRƯỞNG',short:'3 tiêu chí & hình thức xử lý Đội trưởng',source:null,scene:'assets/backgrounds-v11/slide-03.webp',
     skin:'light ranking-extension rank-dt',title:'RANKING ĐỘI TRƯỞNG: 3 TIÊU CHÍ',html:()=> hdr('09 / RANKING ĐỘI TRƯỞNG',
       'ĐỘI TRƯỞNG: <span class="accent-orange">3 TIÊU CHÍ ĐÁNH GIÁ</span>',
       'Đánh giá hiệu quả quản lý đội, chất lượng nhân sự và phối hợp vận hành — theo slide 04 tài liệu gốc.')+
      '<div class="rank-triple">'+
      tile('01','Đủ lực lượng KTV','Đủ số lượng KTV và định mức AU trung bình của Lô: <b>1.100–1.300 AU / KTV</b>.','blue','dt-force')+
      tile('02','Chất lượng KTV','Từ <b>80% KTV đạt</b> kết quả đánh giá công việc trong đội.','orange','dt-quality')+
      tile('03','Quản lý & phối hợp','Hoàn thành năng lực quản lý nhóm và tương tác, phối hợp Dịch-thuật.','green','dt-coordination')+
      '</div><div class="rank-verdict">'+chip('ĐẠT ≥ 2/3','Đạt ít nhất 2 trong 3 tiêu chí → ĐẠT đánh giá')+chip('01 THÁNG KHÔNG ĐẠT','Cảnh báo')+
       chip('02 THÁNG LIÊN TIẾP','Hoặc <b>03 tháng không liên tiếp trong năm</b> không đạt → xem xét dừng vị trí Đội trưởng')+
       open('dt-all','Xem điều kiện & hình thức xử lý')+'</div>'},
    {section:'KTV PRO',short:'CLL tập thể & trách nhiệm Pro',source:null,scene:'assets/backgrounds-v11/slide-05.webp',
     skin:'light ranking-extension rank-pro',title:'RANKING KTV PRO: CLL TRUNG BÌNH TẬP THỂ',html:()=> hdr('10 / RANKING KTV PRO',
       'KTV PRO: <span class="accent-orange">CHỊU TRÁCH NHIỆM CLL TẬP THỂ</span>',
       'Pro là chuyên gia hỗ trợ Đội trưởng, kèm cặp kỹ thuật hiện trường và nâng chất lượng giải quyết ngay lần đầu.')+
      '<div class="rank-pro-grid"><section class="rank-panel rank-pro-main"><span class="rank-kicker">CHỈ SỐ XÁC ĐỊNH ĐẠT</span>'+
       '<h3>CLL trung bình của tập thể <b>15–20 KTV</b></h3>'+
       '<div class="rank-two-state"><div class="rank-state pass"><strong>≤ TỶ LỆ CHUẨN</strong><span>ĐẠT</span></div><div class="rank-state fail"><strong>&gt; TỶ LỆ CHUẨN</strong><span>KHÔNG ĐẠT</span></div></div>'+
       '<p class="rank-muted">Slide gốc không ghi con số cụ thể cho “tỷ lệ chuẩn” của Pro; không tự đồng nhất với ngưỡng KTV.</p>'+open('pro-rule','Xem cách đánh giá Pro')+'</section>'+
       '<section class="rank-panel rank-pro-side"><span class="rank-kicker">TRÁCH NHIỆM TRỌNG TÂM</span>'+
       '<div class="rank-checkline"><b>01</b><span>Chuyên gia đào tạo, kèm cặp hiện trường.</span></div>'+
       '<div class="rank-checkline"><b>02</b><span>Giải quyết tận gốc bài toán lỗi lặp.</span></div>'+
       '<div class="rank-checkline"><b>03</b><span>Gắn kết quả Pro với chất lượng triển khai của toàn nhóm.</span></div>'+
       '<div class="rank-checkline"><b>04</b><span>Nâng chất lượng tại điểm chạm đầu tiên.</span></div>'+open('pro-role','Chi tiết hành động Pro')+'</section></div>'+
       '<div class="rank-verdict">'+chip('01 THÁNG KHÔNG ĐẠT','Cảnh báo')+chip('02 THÁNG LIÊN TIẾP','Không đạt → xem xét dừng công việc')+
        chip('HOẶC 03 THÁNG KHÔNG LIÊN TIẾP','Không đạt trong cùng năm → xem xét dừng công việc')+'</div>'},
    {section:'CÁCH TÍNH RM',short:'Tử số – mẫu số nguy cơ RM',source:13,scene:'assets/backgrounds-v11/slide-04.webp',
     skin:'light ranking-extension rank-formula',title:'CÁCH TÍNH TỶ LỆ NGUY CƠ RM',html:()=> hdr('11 / DIỄN GIẢI TIÊU CHÍ RM',
       'NGUY CƠ RM: <span class="accent-orange">TỬ SỐ / MẪU SỐ</span>',
       'Tính trên tập khách hàng đủ điều kiện được DVKH chuyển tiếp cho KTV chăm sóc.')+
      '<div class="rank-math"><span>TỶ LỆ NGUY CƠ RM</span><strong>=</strong><div class="rank-fraction"><b>KH trong mẫu số, chưa RM và dùng ≤ 1.000 MB</b><i></i><b>KH đủ điều kiện trong tập nguy cơ đã chuyển KTV</b></div><strong>× 100%</strong></div>'+
      '<div class="rank-duo">'+
       tile('MẪU SỐ','Tập KH đủ điều kiện','Nhóm YCH, NKN, CLL, T−, T, dự đoán RM, nợ cước; có vết CL/XMTT/Ticket OS; đủ 3 ngày từ khi <b>đổ giỏ</b>; chưa RM; phân công AU trong tháng.','blue','rm-denominator')+
       tile('TỬ SỐ','KH còn nguy cơ trong mẫu số','Lọc từ mẫu số các KH <b>chưa RM</b> và có lưu lượng sử dụng <b>≤ 1.000 MB</b>.','orange','rm-numerator')+
      '</div><div class="rank-footstrip"><strong>ĐẠT khi &lt; 25%</strong><span>Ví dụ minh họa: 20 / 100 × 100% = 20% → Đạt.</span>'+open('rm-formula','Chi tiết điều kiện tính RM')+'</div>'},
    {section:'CÁCH TÍNH WIFI',short:'Điểm WiFi – nhóm xấu – so sánh T/T−1',source:12,scene:'assets/backgrounds-v11/slide-02.webp',
     skin:'light ranking-extension rank-wifi',title:'WIFI XẤU: PHÂN NHÓM VÀ ĐÁNH GIÁ',html:()=> hdr('12 / DIỄN GIẢI TIÊU CHÍ WIFI',
       'WIFI XẤU: <span class="accent-orange">HIỂU ĐIỂM, HIỂU TỶ LỆ</span>',
       'Chỉ số WiFi theo thang rủi ro 0–1.000; điểm càng cao thì rủi ro càng lớn.')+
      '<div class="rank-bands">'+
       tile('01','XẤU · TOP 1%','Nhóm <b>1% điểm cao nhất trong ngày</b>; ưu tiên khảo sát và chăm sóc.','orange','wifi-bands')+
       tile('02','ĐẠT · ĐẾN TOP 15%','Nhóm sau Top 1% và đến mốc <b>Top 15%</b> (14% tiếp theo).','blue','wifi-bands')+
       tile('03','TỐT · 85% CÒN LẠI','Phần còn lại sau mốc lũy kế Top 15%: <b>85%</b>.','green','wifi-bands')+'</div>'+
      '<div class="rank-wifi-result"><div class="rank-wifi-compare"><small>ĐIỀU KIỆN ĐẠT RANKING</small><strong>Tỷ lệ Wi-Fi xấu: tháng này (T) <span>&lt;</span> tháng trước (T−1)</strong><p>Ví dụ minh họa: T−1 = 5% → T = 4%: <b>ĐẠT</b>. Nếu bằng hoặc tăng: <b>KHÔNG ĐẠT</b>.</p></div>'+
       '<div class="rank-wifi-measures"><small>THAM CHIẾU WI-FI 5 / 6</small><b>RSSI TB · Ping TB · Loss TB</b><span>TX Bytes TB · TX Packets TB</span>'+open('wifi-bands','Giải thích chỉ số & nguồn')+'</div></div>'+
      '<p class="rank-caveat">Lưu ý QA nguồn: “Top 1%” + “15% tiếp theo” + “85% còn lại” = 101%. Giữ nguyên diễn giải gốc và chờ xác nhận, không tự sửa thành quy tắc chính thức.</p>'}
  ];
  SLIDES.splice(SLIDES.length - 1,0,...add);
  // Existing responsibility slide must link to the respective governing criteria.
  const rolesHtml = SLIDES[8].html;
  SLIDES[8].html = () => rolesHtml().replace(
    /(<div class="role-card role-pro">[\s\S]*?)data-detail="roles"/,
    '$1data-detail="pro-role"'
  ).replace(
    /(<div class="role-card role-lead">[\s\S]*?)data-detail="roles"/,
    '$1data-detail="dt-all"'
  );
  // No missing reference-image links: source 04/05 are not present in the published assets.
  SLIDES[8].source=null;
  DETAILS.roles.source=null;
  DETAILS['dt-force']={title:'Đội trưởng: Số lượng KTV và định mức AU',eyebrow:'RANKING ĐỘI TRƯỞNG · TIÊU CHÍ 01',source:null,html:
    '<div class="detail-rich">'+dHero('group','blue','ĐIỀU KIỆN ĐẠT','Đủ lực lượng KTV theo Lô quản lý','Đảm bảo đủ số lượng KTV và mức AU trung bình của Lô; tài liệu ghi 1.100–1.300 AU/KTV.', '<b>1.100–1.300</b><span>AU / KTV</span>')+
    dBox('clipboard','blue','Cách phân loại','<div class="criteria-list"><div><b>ĐẠT:</b> Đủ số lượng KTV và đạt định mức AU trung bình theo Lô.</div><div><b>KHÔNG ĐẠT:</b> Không đủ KTV hoặc không đạt định mức AU trung bình.</div></div>')+
    dBox('target','green','Hành động quản lý','Định kỳ đối chiếu số KTV thực tế, phạm vi Lô và AU bình quân; phát hiện chênh lệch trước khi tổng hợp Ranking.')+'</div>'};
  DETAILS['dt-quality']={title:'Đội trưởng: KTV đạt đánh giá công việc',eyebrow:'RANKING ĐỘI TRƯỞNG · TIÊU CHÍ 02',source:null,html:
    '<div class="detail-rich">'+dHero('chart','orange','ĐIỀU KIỆN ĐẠT','Tối thiểu 80% KTV đạt','Đánh giá dựa trên kết quả công việc của lực lượng KTV trong đội.', '<b>≥ 80%</b><span>KTV đạt</span>')+
    dBox('clipboard','blue','Đạt và không đạt','<div class="criteria-list"><div><b>ĐẠT:</b> Có từ 80% KTV đạt.</div><div><b>KHÔNG ĐẠT:</b> Dưới 80% KTV đạt.</div></div>')+
    dBox('tools','green','Hành động Đội trưởng','Rà soát 4 tiêu chí của từng KTV; xác định KTV đang có 2 tiêu chí không đạt để tổ chức hỗ trợ đúng trọng điểm.')+'</div>'};
  DETAILS['dt-coordination']={title:'Đội trưởng: Quản lý và phối hợp Dịch-thuật',eyebrow:'RANKING ĐỘI TRƯỞNG · TIÊU CHÍ 03',source:null,html:
    '<div class="detail-rich">'+dHero('group','green','ĐIỀU KIỆN ĐẠT','Hoàn thành năng lực quản lý nhóm','Đánh giá mức độ tương tác và phối hợp Dịch-thuật.', '<b>HOÀN THÀNH</b><span>Đạt tiêu chí</span>')+
    dBox('clipboard','blue','Nguyên tắc ghi nhận','<div class="criteria-list"><div><b>ĐẠT:</b> Hoàn thành nội dung quản lý nhóm và phối hợp Dịch-thuật.</div><div><b>KHÔNG ĐẠT:</b> Không hoàn thành.</div></div>')+
    dBox('alert','orange','Giới hạn nguồn','Slide gốc không nêu thang điểm chi tiết hoặc biểu mẫu chấm nội dung này. Cần dùng kết quả được đơn vị phụ trách xác nhận; không tự quy đổi thành KPI khác.')+'</div>'};
  DETAILS['dt-all']={title:'Ranking Đội trưởng: kết quả & hình thức xử lý',eyebrow:'3 TIÊU CHÍ · SLIDE GỐC 04',source:null,html:
    '<div class="detail-rich">'+dHero('target','orange','KẾT QUẢ ĐÁNH GIÁ','Đạt từ 2 trong 3 tiêu chí','Ba nhóm: số lượng KTV/AU, tỷ lệ KTV đạt, năng lực quản lý và phối hợp.', '<b>≥ 2/3</b><span>ĐẠT</span>')+
    '<div class="detail-grid-3">'+dBox('group','blue','01 · Nhân sự & AU','Đủ số lượng KTV và AU trung bình từ 1.100 đến 1.300/KTV.')+
    dBox('chart','orange','02 · Chất lượng KTV','Từ 80% KTV đạt đánh giá công việc.')+
    dBox('check','green','03 · Quản lý phối hợp','Hoàn thành năng lực quản lý nhóm và phối hợp Dịch-thuật.')+'</div>'+
    dBox('alert','orange','Hình thức xử lý theo tài liệu','<div class="criteria-list"><div><b>01 tháng</b> không đạt: warning (cảnh báo).</div><div><b>02 tháng liên tiếp</b> hoặc <b>03 tháng không liên tiếp trong năm</b> không đạt: xem xét dừng vị trí Đội trưởng.</div></div>')+
    '<p class="note">Hình thức xử lý trong tài liệu dành cho vị trí Đội trưởng; không áp dụng cho KTV.</p></div>'};
  DETAILS['pro-rule']={title:'Ranking KTV Pro: cách xác định đạt',eyebrow:'CHỈ SỐ TẬP THỂ · SLIDE GỐC 05',source:null,html:
    '<div class="detail-rich">'+dHero('repeat','green','TIÊU CHÍ ĐÁNH GIÁ','Tỷ lệ CLL trung bình tập thể','Pro gắn trách nhiệm chuyên môn với chất lượng CLL bình quân của nhóm khoảng 15–20 KTV.', '<b>15–20</b><span>KTV / tập thể</span>')+
    dBox('chart','blue','Phân loại đúng nguồn','<div class="criteria-list"><div><b>ĐẠT:</b> Tỷ lệ CLL trung bình tập thể ≤ tỷ lệ chuẩn.</div><div><b>KHÔNG ĐẠT:</b> Tỷ lệ CLL trung bình tập thể > tỷ lệ chuẩn.</div></div>')+
    dBox('alert','orange','Hình thức xử lý','01 tháng không đạt: warning. 02 tháng liên tiếp hoặc 03 tháng không liên tiếp trong năm: xem xét dừng công việc.')+
    '<p class="note">Nguồn không nêu giá trị số cụ thể cho “tỷ lệ chuẩn” của Pro; cần xác nhận từ quy định hiện hành, không thay bằng ngưỡng CLL của KTV.</p></div>'};
  DETAILS['pro-role']={title:'KTV Pro: chức năng & hành động',eyebrow:'CHUYÊN MÔN · KÈM CẶP HIỆN TRƯỜNG',source:null,html:
    '<div class="detail-rich">'+dHero('tools','green','VAI TRÒ KTV PRO','Cánh tay nối dài hỗ trợ Đội trưởng','Định hướng nguồn: phát triển Pro thành chuyên gia đào tạo, kèm cặp tại hiện trường để xử lý tận gốc lỗi lặp và nâng trải nghiệm tại điểm chạm đầu tiên.')+
    '<div class="detail-grid-2">'+dBox('book','blue','Đào tạo và kèm cặp','Phân tích lỗi lặp, làm mẫu kỹ thuật, hướng dẫn KTV xử lý đúng nguyên nhân và nghiệm thu có chứng cứ.')+
    dBox('repeat','orange','Chất lượng tập thể','Theo dõi tỷ lệ CLL trung bình tập thể 15–20 KTV; chủ động giúp nhóm giảm tái lỗi.')+'</div>'+
    dBox('clipboard','green','Chuỗi hành động','<div class="criteria-list"><div>Chọn ca lỗi khó và lỗi lặp điển hình.</div><div>Hỗ trợ xử lý ở hiện trường, hạn chế làm tạm.</div><div>Đối chiếu đo kiểm trước/sau, tái kiểm cùng KTV.</div><div>Tổng hợp bài học để Đội trưởng nhân rộng.</div></div>')+'</div>'};
  DETAILS['rm-denominator']={title:'RM: mẫu số và điều kiện lọc',eyebrow:'NGUY CƠ RM · MẪU SỐ',source:13,html:
    '<div class="detail-rich">'+dHero('group','blue','MẪU SỐ','Tập KH nguy cơ đủ điều kiện','Chỉ đưa vào mẫu số các khách đáp ứng đồng thời điều kiện lọc trong tài liệu gốc.')+
    dBox('clipboard','blue','5 điều kiện','<div class="criteria-list"><div><b>01.</b> Thuộc YCH, NKN, CLL, T−, T, dự đoán RM hoặc nợ cước.</div><div><b>02.</b> Có vết chuyển KTV: CL, XMTT, Ticket OS.</div><div><b>03.</b> Đủ 3 ngày từ khi đổ giỏ.</div><div><b>04.</b> Chưa RM.</div><div><b>05.</b> Được phân công AU cho KTV trong tháng.</div></div>')+
    dBox('alert','orange','Điều kiện bổ sung riêng cho CL','Chỉ tính CL khi nguyên nhân đầu vào không cung cấp rõ tình trạng lỗi hoặc có khiếu nại RM; nội dung CL chứa từ khóa tương ứng. Cần đối chiếu bộ từ khóa chính thức.')+'</div>'};
  DETAILS['rm-numerator']={title:'RM: tử số và ngưỡng đánh giá',eyebrow:'NGUY CƠ RM · TỬ SỐ',source:13,html:
    '<div class="detail-rich">'+dHero('chart','orange','TỬ SỐ','Nhóm có sử dụng ≤ 1.000 MB','Đếm số KH nằm trong mẫu số, chưa RM và lưu lượng sử dụng không vượt quá 1.000 MB.', '<b>≤ 1.000 MB</b><span>Điều kiện sử dụng</span>')+
    dBox('target','green','Ngưỡng kết quả','Tỷ lệ nguy cơ RM < 25%: ĐẠT. Từ 25% trở lên: KHÔNG ĐẠT. Mức càng cao, rủi ro RM càng lớn.')+
    dBox('alert','blue','Tránh nhầm','Tử số là tập con của mẫu số; không lấy tổng tất cả KH ít lưu lượng trên toàn Lô làm tử số.')+'</div>'};
  DETAILS['rm-formula']={title:'Cách tính tỷ lệ nguy cơ RM',eyebrow:'TỬ SỐ / MẪU SỐ · SLIDE GỐC 13',source:13,html:
    '<div class="detail-rich">'+dHero('chart','orange','CÔNG THỨC','(Tử số / Mẫu số) × 100%','Tử số: khách nằm trong mẫu số, chưa RM và sử dụng ≤ 1.000 MB. Mẫu số: nhóm nguy cơ đủ điều kiện chuyển KTV.', '<b>&lt;25%</b><span>Mức ĐẠT</span>')+
    '<div class="detail-grid-2">'+dBox('group','blue','Mẫu số','YCH, NKN, CLL, T−, T, dự đoán RM, nợ cước; có vết CL/XMTT/Ticket OS, đủ 3 ngày đổ giỏ, chưa RM, phân AU KTV trong tháng.')+
    dBox('signal','orange','Tử số','Số KH thuộc mẫu số có lưu lượng sử dụng ≤ 1.000 MB.')+'</div>'+
    dBox('clipboard','green','Ví dụ minh họa','100 KH đủ điều kiện (mẫu số); 20 KH có lưu lượng ≤ 1.000 MB (tử số). Tỷ lệ = 20 / 100 × 100% = 20% → ĐẠT.')+
    '<p class="note">Đặc biệt với CL: nguồn yêu cầu thỏa ít nhất 1 trong 2 điều kiện về nguyên nhân đầu vào hoặc từ khóa khiếu nại RM. Không bỏ qua bước lọc.</p></div>'};
  DETAILS['wifi-bands']={title:'WiFi xấu: điểm rủi ro & phân nhóm',eyebrow:'WIFI 5 / WIFI 6 · SLIDE GỐC 12',source:12,html:
    '<div class="detail-rich">'+dHero('wifi','blue','THANG ĐIỂM RỦI RO','0–1.000, càng cao càng xấu','Chất lượng WiFi được quy thành điểm rủi ro; so sánh tỷ lệ WiFi xấu tháng T với T−1.', '<b>T &lt; T−1</b><span>Điều kiện ĐẠT</span>')+
    dBox('chart','blue','Ba nhóm trong tài liệu','<div class="band-stack"><div class="band-row band-red"><strong>XẤU</strong><span>Top 1% điểm cao nhất trong ngày</span></div><div class="band-row band-gold"><strong>ĐẠT</strong><span>15% tiếp theo</span></div><div class="band-row band-green"><strong>TỐT</strong><span>85% còn lại (theo nguồn)</span></div></div>')+
    '<div class="detail-grid-2">'+dBox('signal','green','Các chỉ số tham chiếu','RSSI TB (dBm): càng gần 0 càng mạnh; Ping TB (ms): càng thấp càng tốt; Loss TB: mất gói càng thấp càng tốt.')+
    dBox('chart','orange','Chỉ số tải truyền dẫn','TX Bytes TB và TX Packets TB: các đại lượng truyền tải trung bình dùng để tham khảo trong WiFi 5 / 6.')+'</div>'+
    dBox('alert','orange','Điểm bất nhất cần xác nhận','Nguồn đồng thời ghi 1% Xấu + 15% Đạt + 85% Tốt = 101%. Không tự sửa tỷ trọng hoặc coi đây là công thức phân loại đã được xác thực.')+
    '<p class="note">Tài liệu không công bố đầy đủ công thức tính điểm WiFi và mẫu số của tỷ lệ WiFi xấu; số liệu thực tế phải theo hệ thống chấm điểm của đơn vị.</p></div>'};
  // Strengthen existing contextual popups without replacing their source-aligned detail.
  DETAILS.rm.html=dHero('chart','orange','CÔNG THỨC RM','Tử số / Mẫu số × 100%','Mẫu số: KH nguy cơ đủ điều kiện. Tử số: KH thuộc mẫu số, chưa RM và dùng ≤ 1.000 MB.', '<b>&lt;25%</b><span>ĐẠT</span>')+DETAILS.rm.html+
    '<div class="detail-rich">'+dBox('clipboard','blue','Đi sâu vào cách tính','<p>Đối chiếu danh sách lọc mẫu số rồi xác định tập con ≤ 1.000 MB. Ví dụ 20/100 × 100% = 20%.</p>')+'</div>';
  DETAILS['wifi-score'].html=DETAILS['wifi-score'].html+'<div class="detail-rich">'+dBox('alert','blue','So sánh để chấm Ranking','Tỷ lệ WiFi xấu tháng T thấp hơn tháng T−1: ĐẠT. Bằng hoặc cao hơn: KHÔNG ĐẠT. Không dùng riêng điểm WiFi 0–1.000 để kết luận Ranking.')+'</div>';
})();