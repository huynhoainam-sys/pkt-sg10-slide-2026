'use strict';
/* V15 source-coverage completion: preserve the supplied 14-image deck's actual text and scope. */
(() => {
 const hs=(eyebrow,title,description)=>
   '<header class="slide-header qa-title"><span class="eyebrow">'+eyebrow+'</span><h1>'+title+'</h1><p>'+description+'</p></header>';
 const btn=(k,t)=>'<button type="button" class="qa-open" data-detail="'+k+'">'+t+' <span aria-hidden="true">↗</span></button>';
 const issue=(i,title,text)=>'<article class="qa-issue"><span>'+i+'</span><h3>'+title+'</h3><p>'+text+'</p></article>';
 const goal=(i,title,text)=>'<article class="qa-goal"><span>'+i+'</span><div><h3>'+title+'</h3><p>'+text+'</p></div></article>';
 const row=(i,title,text)=>'<article class="qa-riskrow"><b>'+i+'</b><div><h3>'+title+'</h3><p>'+text+'</p></div></article>';
 const previousArt=[
 '../assets/cover-4people.jpg','assets/backgrounds-v11/slide-02.webp',
 'assets/backgrounds-v11/slide-03.webp','assets/backgrounds-v11/slide-04.webp',
 'assets/backgrounds-v11/slide-05.webp','assets/backgrounds-v11/slide-06.webp',
 '../assets/cover-4people.jpg','assets/backgrounds-v11/slide-08.webp',
 'assets/backgrounds-v11/slide-09.webp','../assets/cover-4people.jpg'
 ];
 SLIDES.forEach((slide,i)=>{
   if(!slide.scene){slide.scene=(i<=8?previousArt[i]:i===SLIDES.length-1?previousArt[9]:previousArt[2]);}
 });
 const intro={
 section:'HIỆN TRẠNG',short:'6 vấn đề cốt lõi trước Ranking',source:null,
 skin:'light qa-source qa-intro',scene:'assets/backgrounds-v11/slide-03.webp',
 title:'HIỆN TRẠNG: 6 VẤN ĐỀ CỐT LÕI',
 html:()=>hs('01 / TẠI SAO CẦN RANKING','HIỆN TRẠNG <span class="accent-orange">ĐÁNH GIÁ & PHÁT TRIỂN KTV</span>',
   'Những vấn đề cốt lõi trong công tác đánh giá, phát triển và dẫn dắt đội ngũ KTV theo tài liệu mẫu.')+
 '<div class="qa-six">'+
 issue('01','Tiêu chí đánh giá phân tán','KPI từ nhiều tool, Excel, báo cáo nội bộ, HQ và BDH gây khó tổng hợp, thiếu nhất quán.')+
 issue('02','Chưa có bộ core thống nhất','Khu vực/Chi nhánh chưa thống nhất tiêu chí lõi xuyên suốt chất lượng và năng lực KTV.')+
 issue('03','Thiếu hành động sau đánh giá','Kết quả chưa chuyển thành phân tích nguyên nhân, kế hoạch cải thiện, người phụ trách và theo dõi.')+
 issue('04','Năng lực chưa đồng đều','Chênh lệch về chuyên môn, xử lý tình huống và chăm sóc khách hàng.')+
 issue('05','Thiếu động lực & mục tiêu','Chưa có lộ trình phát triển và mục tiêu nâng cao năng lực gắn với kết quả.')+
 issue('06','Đội trưởng chưa dẫn dắt theo mục tiêu','Quản lý thiên về tiến độ, sự vụ; thiếu dữ liệu, mục tiêu và phát triển đội ngũ.')+
 '</div><div class="qa-footer"><strong>HỆ QUẢ CHUNG</strong><span>Thiếu chuẩn đánh giá và cơ chế cải thiện đồng bộ, làm giảm hiệu quả quản trị chất lượng nhân lực KTV.</span>'+btn('context-all','Phân tích đầy đủ')+'</div>'
 };
 const goals={
 section:'MỤC TIÊU',short:'4 mục tiêu và định hướng dài hạn',source:null,
 skin:'light qa-source qa-goals',scene:'assets/backgrounds-v11/slide-08.webp',
 title:'MỤC TIÊU HỆ THỐNG RANKING 2027',
 html:()=>hs('02 / ĐỊNH HƯỚNG RANKING','MỤC TIÊU <span class="accent-orange">HỆ THỐNG RANKING</span>',
   'Định hướng xây dựng hệ thống Ranking KTV và Đội trưởng theo chuẩn thống nhất toàn khu vực.')+
 '<div class="qa-four">'+
 goal('01','Định hướng hành vi KTV','Chuẩn hóa hành vi chăm sóc/phục vụ; nâng cao chất lượng điểm chạm, trải nghiệm KH và khả năng duy trì KH.')+
 goal('02','Chuẩn hóa vai trò Đội trưởng','Chuẩn hóa điều hành, tổ chức, giám sát, hỗ trợ và dẫn dắt đội nhóm.')+
 goal('03','Xây dựng hệ thống Ranking','Quy hoạch cho từng KTV/Đội trưởng theo bộ tiêu chí chung, nhất quán phương pháp đo lường và xếp hạng.')+
 goal('04','Nhận diện chất lượng nhân lực','Làm cơ sở phân loại năng lực, xác định nhu cầu đào tạo, phát triển và quy hoạch nhân sự.')+
 '</div><div class="qa-footer qa-goalfooter"><strong>MỤC TIÊU DÀI HẠN</strong><span>Nâng cao chất lượng nhân lực · Chuẩn hóa năng lực KTV & ĐT · Cải thiện chất lượng phục vụ, hiệu quả CSKH, duy trì khách hàng.</span>'+btn('goals-all','Chi tiết định hướng')+'</div>'
 };
 const risks={
 section:'QUẢN TRỊ RỦI RO',short:'Hạ tầng địa bàn và 7 nhóm nguy cơ',source:10,
 skin:'light qa-source qa-risks',scene:'assets/backgrounds-v11/slide-06.webp',
 title:'KIỂM SOÁT RỦI RO VÀ XỬ LÝ NGUY CƠ',
 html:()=>hs('10 / NHÓM HÀNH ĐỘNG TẠI ĐỊA BÀN','KIỂM SOÁT RỦI RO <span class="accent-orange">– XỬ LÝ NGUY CƠ</span>',
   'Hai nhóm việc trong slide gốc: chủ động quản lý chất lượng địa bàn và xử lý tập khách hàng có nguy cơ.')+
 '<div class="qa-riskcolumns"><section class="qa-riskpanel qa-infra"><h2>01 · KIỂM SOÁT RỦI RO</h2>'+
 row('1.1','Làm chủ hạ tầng địa bàn','Định kỳ kiểm tra chất lượng tín hiệu và hạ tầng khu vực: tủ cáp, tuyến cáp, dây điện…')+
 row('1.2','Nhận diện rủi ro địa bàn','Giải tỏa, làm đường, đối thủ cạnh tranh… Báo cáo Đội trưởng, DVKH, CBQL để xử lý; phối hợp đội và đánh giá rủi ro tiếp theo.')+
 '</section><section class="qa-riskpanel qa-customer"><h2>02 · XỬ LÝ NGUY CƠ</h2><div class="qa-riskchips">'+
 ['CSKH có Checklist lặp','Ngưng kết nối','YCH','Dự đoán RM','Nguy cơ sang rời mạng nợ cước (CTBDV)','CSKH không PSLL vết T','CSKH không PSLL vết T−'].map((s,i)=>'<span><b>2.'+(i+1)+'</b> '+s+'</span>').join('')+
 '</div></section></div>'+
 '<div class="qa-riskaction"><b>PHƯƠNG ÁN THỰC HIỆN</b><span>Xử lý dứt điểm · Liên hệ chủ động & hỗ trợ kỹ thuật trong ngày · Hướng dẫn kiểm tra tốc độ/ứng dụng · Phối hợp DVKH qua CL YCH – CL SOS.</span>'+btn('risk-original','Đầy đủ hành động theo mẫu')+'</div>'
 };
 const comboFormula={
 section:'CÔNG THỨC COMBO',short:'Tử số/mẫu số KH không sử dụng truyền hình',source:14,
 skin:'light qa-source qa-comboformula',scene:'assets/backgrounds-v11/slide-05.webp',
 title:'CÔNG THỨC TỶ LỆ KH KHÔNG DÙNG TRUYỀN HÌNH',
 html:()=>hs('14 / ĐỊNH NGHĨA CHỈ TIÊU TỪ FPL','TRUYỀN HÌNH COMBO: <span class="accent-orange">TỬ SỐ / MẪU SỐ</span>',
   'Đo khách đang sử dụng Combo NET + IPTV nhưng không phát sinh lưu lượng IPTV trong 3 tháng gần nhất. Nguồn dữ liệu: FPL.')+
 '<div class="qa-combo-equation"><span>TỶ LỆ KH KHÔNG DÙNG TH</span><strong>=</strong><div><b>Số KH không phát sinh lưu lượng IPTV trong 3 tháng</b><i></i><b>Tổng KH dùng Combo NET + IPTV thuộc Lô KTV</b></div><strong>× 100%</strong></div>'+
 '<div class="qa-formulacards">'+
  '<section><span>01 / ĐIỀU KIỆN ĐO ĐẾM</span><h3>Đúng tập khách hàng</h3><p>KH đang sử dụng Combo NET + IPTV; thống kê theo Lô KH do KTV quản lý.</p></section>'+
  '<section><span>02 / TỬ SỐ</span><h3>KH không phát sinh IPTV</h3><p>Số KH thuộc mẫu số không phát sinh lưu lượng IPTV trong <b>3 tháng gần nhất</b>.</p></section>'+
  '<section><span>03 / MẪU SỐ</span><h3>KH Combo NET + IPTV</h3><p>Tổng KH đang sử dụng Combo NET + IPTV thuộc Lô KTV quản lý.</p></section>'+
 '</div>'+
 '<div class="qa-formularesult"><strong>ĐẠT: tỷ lệ &lt; 30%</strong><span>KHÔNG ĐẠT: tỷ lệ ≥ 30%. Tỷ lệ càng thấp → mức độ sử dụng dịch vụ truyền hình càng tốt.</span>'+btn('combo-formula','Xem ví dụ và định nghĩa gốc')+'</div>'
 };
 // Keep factual source sections near their respective assessment/action slides.
 const [cover,rankKtv,wifiAct,cllAct,rmAct,comboAct,daily,self,roles,dt,pro,rmCalc,wifiCalc,closing] = SLIDES;
 SLIDES.splice(0,SLIDES.length,
  cover,intro,goals,rankKtv,dt,pro,wifiAct,cllAct,comboAct,risks,wifiCalc,rmCalc,comboFormula,rmAct,daily,self,roles,closing);
 // Revise source navigation: ensure original source slides with available images still work.
 // Source 04 and 05 aren't currently present as exported web assets; full content is rendered natively.
 dt.source=null;pro.source=null;
 intro.source=null;goals.source=null;
 // Additional detail routes keep prose, exceptions and implementation actions in the slide where relevant.
 DETAILS['context-all']={title:'Hiện trạng: 6 vấn đề và tác động chung',eyebrow:'ĐỐI CHIẾU SLIDE MẪU 01',source:null,html:
  '<div class="detail-rich">'+dHero('alert','orange','HIỆN TRẠNG','Thiếu chuẩn đánh giá & cơ chế cải thiện đồng bộ','Tài liệu mô tả 6 vấn đề ảnh hưởng quản trị chất lượng nguồn lực KTV.')+
  dBox('clipboard','blue','01–03 · Khó đánh giá thống nhất','<div class="criteria-list"><div>Tiêu chí rải trên nhiều tool/Excel/báo cáo nội bộ/HQ/BDH dẫn đến khó tổng hợp.</div><div>Khu vực/Chi nhánh thiếu bộ core chỉ tiêu dùng chung.</div><div>Thiếu bước phân tích nguyên nhân, kế hoạch, người phụ trách và theo dõi sau đánh giá.</div></div>')+
  dBox('group','green','04–06 · Khó phát triển nhân sự','<div class="criteria-list"><div>Năng lực kỹ thuật, xử lý tình huống, chăm sóc KH chưa đồng đều.</div><div>KTV chưa rõ mục tiêu phát triển và lộ trình nâng cao năng lực.</div><div>Đội trưởng nặng xử lý sự vụ/tiến độ, chưa quản trị theo dữ liệu và mục tiêu.</div></div>')+
  '<p class="note">Giữ nguyên nội dung mục đích từ slide 01 của tài liệu mẫu. Đây là hiện trạng được tài liệu trình bày, không phải số liệu đo lường độc lập.</p></div>'};
 DETAILS['goals-all']={title:'Mục tiêu Ranking KTV & Đội trưởng',eyebrow:'ĐỐI CHIẾU SLIDE MẪU 02',source:null,html:
  '<div class="detail-rich">'+dHero('target','blue','MỤC TIÊU DÀI HẠN','Chuẩn hóa – cải thiện – duy trì','Ranking phục vụ đánh giá và phát triển nguồn nhân lực, không chỉ tổng hợp điểm số.')+
  '<div class="detail-grid-2">'+dBox('user','blue','01 · KTV','Chuẩn hóa chăm sóc và phục vụ; nâng cao chất lượng tại điểm chạm, cải thiện trải nghiệm và hiệu quả duy trì KH.')+
  dBox('group','orange','02 · Đội trưởng','Chuẩn hóa điều hành và quản lý; nâng cao năng lực tổ chức, giám sát, hỗ trợ và dẫn dắt đội nhóm.')+
  dBox('chart','green','03 · Hệ thống Ranking','Quy hoạch cho từng KTV và ĐT, cùng tiêu chí và phương pháp đo lường/xếp hạng trên toàn khu vực.')+
  dBox('book','purple','04 · Chất lượng nguồn lực','Phân loại năng lực, lập nhu cầu đào tạo, phát triển và quy hoạch nhân sự.')+'</div>'+
  dBox('heart','green','Hiệu quả kỳ vọng','Nâng chất lượng nhân lực; chuẩn hóa năng lực KTV & ĐT; nâng chất lượng phục vụ, hiệu quả CSKH và khả năng duy trì KH.')+'</div>'};
 DETAILS['risk-original']={title:'Kiểm soát rủi ro & xử lý nguy cơ',eyebrow:'ĐỐI CHIẾU SLIDE MẪU 10',source:10,html:
  '<div class="detail-rich">'+dHero('shield','orange','02 NHÓM CÔNG VIỆC','Từ hạ tầng địa bàn đến tập nguy cơ','Phối hợp Đội trưởng/DVKH/CBQL và các đội xử lý với kết quả theo dõi thực tế.')+
  dBox('signal','blue','1.1 · Kiểm tra hạ tầng','Định kỳ kiểm tra tín hiệu và hạ tầng: tủ cáp, tuyến cáp, dây điện và các vị trí phát sinh nguy cơ.')+
  dBox('alert','orange','1.2 · Nhận diện, báo cáo & phối hợp','Nhận diện giải tỏa, làm đường, đối thủ cạnh tranh; báo cáo Đội trưởng, DVKH, CBQL; phối hợp các đội; đánh giá kết quả và nguy cơ tiếp theo.')+
  dBox('group','green','2.1–2.7 · Bảy nhóm nguy cơ','Checklist lặp; Ngưng kết nối; YCH; Dự đoán RM; Nguy cơ rời mạng nợ cước (CTBDV); CSKH không PSLL vết T; CSKH không PSLL vết T−.')+
  dBox('tools','purple','4 hành động từ slide mẫu','<div class="criteria-list"><div>Xử lý dứt điểm KH báo kỹ thuật ngay ở Checklist đầu tiên.</div><div>Liên hệ chủ động với KH chưa PSDL do sự cố; hỗ trợ tại chỗ hoặc xử lý từ xa trong ngày.</div><div>Hướng dẫn kiểm tra tốc độ, thử ứng dụng (FPT Play, Hi FPT), kiểm tra thiết bị để modem/đường truyền ghi nhận PSDL.</div><div>Phối hợp DVKH thuyết phục tập rủi ro qua CL YCH – CL SOS trong tháng T.</div></div>')+'</div>'};
 DETAILS['combo-formula']={title:'Tỷ lệ KH không dùng truyền hình trên tập Combo',eyebrow:'ĐỐI CHIẾU SLIDE MẪU 14',source:14,html:
  '<div class="detail-rich">'+dHero('tv','green','NGUỒN DỮ LIỆU FPL','Tỷ lệ = Tử số / Mẫu số × 100%','Thống kê theo Lô quản lý KTV, xét lưu lượng IPTV trong ba tháng gần nhất.', '<b>&lt;30%</b><span>ĐẠT</span>')+
  '<div class="detail-grid-2">'+dBox('group','blue','Mẫu số','Tổng KH đang sử dụng Combo NET + IPTV trong Lô do KTV quản lý.')+
  dBox('tv','orange','Tử số','Số KH thuộc mẫu số không phát sinh lưu lượng IPTV trong 3 tháng gần nhất.')+'</div>'+
  dBox('chart','green','Ví dụ minh họa — không phải dữ liệu thật','100 KH Combo NET + IPTV thuộc Lô; 20 KH không có lưu lượng IPTV trong 3 tháng gần nhất → 20/100 × 100% = 20% → ĐẠT.')+
  dBox('clipboard','blue','Điều kiện ghi nhận','Chỉ lấy KH có Combo NET + IPTV; xác định không dùng bằng dữ liệu lưu lượng IPTV (không dùng cảm nhận hoặc lời kể thay cho nguồn dữ liệu FPL).')+'</div>'};
 const oldRisk=DETAILS.risk.html;
 DETAILS.risk.html=oldRisk+'<div class="detail-rich">'+dBox('clipboard','blue','Bổ sung nội dung gốc','<div class="criteria-list"><div>Kiểm tra tủ cáp, tuyến cáp, dây điện theo định kỳ.</div><div>Báo cáo Đội trưởng, DVKH và CBQL khi có nguy cơ địa bàn.</div><div>Phối hợp đội liên quan và đánh giá rủi ro tiếp theo.</div><div>Đối tượng xử lý có cả CSKH có Checklist lặp và nguy cơ rời mạng do nợ cước.</div></div>')+'</div>';
 const oldCombo=DETAILS.combo.html;
 DETAILS.combo.html=oldCombo+
 '<div class="detail-rich">'+dBox('tv','blue','Chi tiết quy trình theo slide 09','<div class="criteria-list"><div>Nghiệm thu: phát sinh ít nhất 1 phiên xem liên tục 3 phút trên đúng tài khoản KH; ghi nhận riêng BOX và App.</div><div>KH dùng BOX: kiểm tra/tối ưu kết nối TV, đăng nhập và hướng dẫn xem.</div><div>KH dùng App đã biết dịch vụ: cài đặt/đăng nhập và kiểm tra hoạt động.</div><div>KH chưa biết dịch vụ: giới thiệu thông tin cơ bản, không tư vấn giá/chính sách ngoài thẩm quyền; chuyển đúng bộ phận khi cần.</div><div>Ngày D+7: hệ thống quét lại; không phát sinh lưu lượng thì cảnh báo/tạo SR cho DVKH chăm sóc; phân loại lý do kỹ thuật, không có nhu cầu, lỗi đăng nhập.</div></div>')+'</div>';
 // Retain one accessible, contextual button on each existing parent slide.
 const oldWifi=wifiAct.html;
 wifiAct.html=()=>oldWifi()+'<button type="button" class="qa-floating-link" data-detail="wifi-bands">Định nghĩa & phân loại WiFi ↗</button>';
 const oldCl=cllAct.html;
 cllAct.html=()=>oldCl()+'<button type="button" class="qa-floating-link" data-detail="cll-details">Quy trình CLL & hậu kiểm ↗</button>';
 const oldComboSlide=comboAct.html;
 comboAct.html=()=>oldComboSlide().replace('Kiểm tra D+7; phân loại nguyên nhân không dùng; phối hợp DVKH.','Quét lại D+7; không PSDL thì cảnh báo/tạo SR để DVKH chăm sóc.').replace(
 'Hệ thống theo dõi KH Combo NET + IPTV không phát sinh lưu lượng IPTV trong <b>3 tháng gần nhất</b>.',
 'Đo trên tập Combo NET + IPTV thuộc Lô KTV, theo nguồn dữ liệu <b>FPL</b>; xét 3 tháng gần nhất.'
 );
 const oldRm=rmAct.html;
 rmAct.html=()=>oldRm()+'<button type="button" class="qa-floating-link" data-detail="rm-formula">Cách tính và điều kiện RM ↗</button>';
 const oldRole=roles.html;
 roles.html=()=>oldRole()+'<button type="button" class="qa-floating-link" data-detail="dt-all">Đánh giá Đội trưởng ↗</button>';
 DETAILS['cll-details']={title:'Giảm CLL: đủ chuỗi hành động – đủ chứng cứ',eyebrow:'ĐỐI CHIẾU SLIDE MẪU 08',source:8,html:
  '<div class="detail-rich">'+dHero('repeat','blue','MỤC TIÊU','Giảm WiFi xấu/CLL lặp – nâng tỷ lệ xử lý một chạm','Chỉ đóng ca khi đã kiểm tra lại, hướng dẫn KH và có bằng chứng đo kiểm.')+
  '<div class="detail-grid-2">'+dBox('phone','blue','01 · Tiếp nhận và xác định nguyên nhân','Gọi lại KH trong 24 giờ sau xử lý hoặc khi có kết quả kiểm tra; xác định nguyên nhân: đường truyền, vùng phủ, thiết bị, cách sử dụng, chất lượng phục vụ; ghi nguyên nhân, giải pháp, đo kiểm, cam kết lên hệ thống.')+
  dBox('tools','orange','02 · Một chạm','Áp dụng một chạm cho thiếu vùng phủ, WiFi đời cũ và lỗi xử lý được tại nhà; chỉ đóng case sau khi kiểm tra chất lượng, hướng dẫn và xác nhận KH ổn định.')+
  dBox('clipboard','green','03 · Nghiệm thu và hậu kiểm','Tuân thủ Mỹ Bảo, đủ hình ảnh/cấu hình/đo kiểm; hậu kiểm trong 24–48 giờ với case nguy cơ tái phát; theo dõi tỷ lệ xử lý một chạm, CLL lặp, thời gian xử lý và phản hồi KH.')+
  dBox('group','purple','04 · Đào tạo, kiểm soát','Đội trưởng và Pro chọn case điển hình phân tích nguyên nhân; chia sẻ/đào tạo 1 lần/tuần; kiểm tra ngẫu nhiên nghiệm thu và chất lượng xử lý thực tế; nhân rộng cách làm hiệu quả.')+'</div>'+
  dBox('target','green','Bằng chứng cần đạt','100% ca có nguyên nhân, giải pháp, kết quả đo kiểm và hậu kiểm rõ ràng; giảm phản ánh WiFi xấu, CLL lặp và tăng xử lý dứt điểm ngay lần đầu.')+'</div>'};
 const wifiPopup=DETAILS.wifi.html;
 DETAILS.wifi.html=wifiPopup+'<div class="detail-rich">'+dBox('tools','blue','Gợi ý triển khai đúng nguyên văn slide 07','<div class="criteria-list"><div>Kiểm tra vị trí modem: thông thoáng, cao, trung tâm, không che chắn.</div><div>Thiếu vùng phủ: ưu tiên Mesh có dây; với Mesh không dây, đặt node ở vị trí còn đủ tín hiệu.</div><div>WiFi đời cũ/quá tải: tư vấn nâng cấp phù hợp; không chỉ khởi động lại modem.</div><div>Chủ động lập danh sách WiFi xấu tháng T−1, liên hệ KH trước khi phản ánh; theo dõi vùng phủ, tốc độ và độ ổn định.</div></div>')+'</div>';
 // More source-aligned detail on WiFi quality indicator.
 DETAILS['wifi-bands'].html+='<div class="detail-rich">'+dBox('signal','blue','Phân tích đúng chỉ số theo công nghệ','WiFi 5 và WiFi 6 cùng tham chiếu RSSI TB (dBm), Ping TB (ms), Loss TB, TX Bytes TB và TX Packets TB. Điểm rủi ro 0–1.000 càng cao thì rủi ro càng lớn. Tài liệu không cung cấp trọng số tính điểm.')+'</div>';
 // Banners are 0-based category indices; section text is authored from source, no change to KPI values.
})();