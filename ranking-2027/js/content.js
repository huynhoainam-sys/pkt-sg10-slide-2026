'use strict';
const ICONS = {
 wifi:'<path d="M2 9a16 16 0 0 1 20 0M5.5 12.5a11 11 0 0 1 13 0M9 16a5.5 5.5 0 0 1 6 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>',
 shield:'<path d="m12 22 7-4V6l-7-4-7 4v12l7 4Z"/><path d="m9 12 2.2 2.2L16 9"/>',
 repeat:'<path d="M20 7a7 7 0 0 0-12-2L5 8m0-5v5h5M4 17a7 7 0 0 0 12 2l3-3m0 5v-5h-5"/>',
 tv:'<rect x="3" y="5" width="18" height="13" rx="2"/><path d="m9 21 3-3 3 3M10 9l5 2.5-5 2.5V9Z"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m12 12 7-7"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
 group:'<circle cx="8" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 21v-2a6 6 0 0 1 12 0v2M14 15a6 6 0 0 1 8 6"/>',
 phone:'<path d="m4 4 5 2-1.2 4A15 15 0 0 0 14 16l4-1.2 2 5c-7 3-19-9-16-16Z"/>',
 chart:'<path d="M4 20V10m6 10V4m6 16v-8m4 8v-5M2 22h20"/>',
 gauge:'<path d="M5 17a9 9 0 1 1 14 0"/><path d="m12 14 4-5"/><circle cx="12" cy="14" r="1.5"/>',
 signal:'<path d="M3 20h2v-3H3v3Zm5 0h2v-7H8v7Zm5 0h2V9h-2v11Zm5 0h2V4h-2v16Z"/>',
 tools:'<path d="M14 6a5 5 0 0 0-6 6L3 17a2 2 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3 3-3Z"/>',
 bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7V2Z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 clipboard:'<rect x="5" y="5" width="14" height="17" rx="2"/><path d="M9 5V3h6v2M9 12h6m-6 4h4"/>',
 alert:'<path d="m12 3 10 17H2L12 3Z"/><path d="M12 9v5m0 3h.01"/>',
 heart:'<path d="M20 8c0 5-8 11-8 11S4 13 4 8a5 5 0 0 1 8-3 5 5 0 0 1 8 3Z"/>',
 home:'<path d="m3 11 9-8 9 8v10H3V11Z"/><path d="M9 21v-7h6v7"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 arrow:'<path d="M4 12h16m-7-7 7 7-7 7"/>',
 file:'<path d="M6 3h9l4 4v14H6V3Z"/><path d="M15 3v5h4M9 12h7m-7 4h7"/>',
 monitor:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/>',
 spark:'<path d="m12 2 2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8Z"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5 2 2 5-5"/>',
 route:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h8a4 4 0 0 1 0 8h-6a4 4 0 0 0 0 6h8"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1m0-14.2L17 7M7 17l-2.1 2.1"/>',
 upward:'<path d="m4 17 6-6 4 4 6-8M15 7h5v5"/>',
 book:'<path d="M12 6C8 3 4 4 2 5v15c4-2 7-1 10 1 3-2 6-3 10-1V5c-2-1-6-2-10 1Zm0 0v15"/>',
 pin:'<path d="M12 22s-7-8-7-13a7 7 0 1 1 14 0c0 5-7 13-7 13Z"/><circle cx="12" cy="9" r="2"/>',
 star:'<path d="m12 2 3.2 6.5L22 9.5l-5 4.9 1.2 7L12 18l-6.2 3.4 1.2-7-5-4.9 6.8-1L12 2Z"/>'
};
function ico(k,cls=''){ return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]||ICONS.spark}</svg>`; }
function detailBtn(key,label='Xem chi tiết',c='ghost'){return `<button class="detail-link ${c}" type="button" data-detail="${key}">${label} <span aria-hidden="true">↗</span></button>`}
function actionCard(n,icon,title,body,color='blue',detail=''){return `<div class="action-card theme-${color}"><div class="action-top"><span class="mini-number">${n}</span><span class="action-icon">${ico(icon)}</span></div><h3>${title}</h3><p>${body}</p>${detail?detailBtn(detail,'Xem hướng dẫn'):''}</div>`}
function dHero(icon,tone,kicker,title,body,metric=''){return `<section class="detail-hero tone-${tone}"><div class="hero-icon">${ico(icon)}</div><div class="hero-copy"><span class="hero-kicker">${kicker}</span><h3>${title}</h3><p>${body}</p></div>${metric?`<div class="hero-metric">${metric}</div>`:''}</section>`}
function dBox(icon,tone,title,body){return `<section class="detail-box tone-${tone}"><div class="detail-box-head"><span class="box-icon">${ico(icon)}</span><div><h4>${title}</h4></div></div><div class="detail-box-body">${body}</div></section>`}
function dStep(no,icon,tone,title,body){return `<article class="detail-step tone-${tone}"><div class="step-top"><span class="step-no">${no}</span><span class="step-icon">${ico(icon)}</span></div><h4>${title}</h4><p>${body}</p></article>`}
function dChip(text,tone='blue'){return `<span class="detail-chip tone-${tone}">${text}</span>`}
function dMini(icon,tone,title,body){return `<div class="mini-illus tone-${tone}"><span class="mini-illus-icon">${ico(icon)}</span><b>${title}</b><small>${body}</small></div>`}

const SLIDES = [
  {section:'MỞ ĐẦU', short:'Đánh giá để cải thiện', source:2, skin:'dark cover', title:'RANKING KTV 2027: ĐÁNH GIÁ ĐỂ CẢI THIỆN', html:()=>`
  <div class="cover-grid">
   <div class="cover-copy">
     <div class="eyebrow light">TRUYỀN THÔNG NỘI BỘ · KHỐI KỸ THUẬT</div>
     <div class="cover-index">FTEL <span>2027</span></div>
     <h1 class="cover-title">RANKING<br><em>KTV</em> <span>2027</span></h1>
     <div class="cover-rule"></div>
     <h2>ĐÁNH GIÁ ĐỂ <strong>CẢI THIỆN</strong></h2>
     <p>Không chỉ hoàn tất tác vụ. Mỗi lần xử lý cần tạo ra chất lượng dịch vụ tốt hơn và trải nghiệm bền vững hơn cho khách hàng.</p>
     <div class="cover-tags"><span>${ico('target')} Đúng tiêu chí</span><span>${ico('tools')} Đúng hành động</span><span>${ico('upward')} Cải thiện liên tục</span></div>
   </div>
   <div class="cover-visual" aria-hidden="true"><div class="radar-ring r1"></div><div class="radar-ring r2"></div><div class="radar-ring r3"></div><div class="radar-core">${ico('target')}<b>QUALITY</b><span>ONE WORKFORCE</span></div>
   <div class="orbit-tag orbit-one">${ico('wifi')}<span>WIFI XẤU</span></div><div class="orbit-tag orbit-two">${ico('shield')}<span>NGUY CƠ RM</span></div><div class="orbit-tag orbit-three">${ico('repeat')}<span>CLL</span></div><div class="orbit-tag orbit-four">${ico('tv')}<span>TRUYỀN HÌNH</span></div></div>
  </div><div class="cover-foot">CHẤT LƯỢNG KỸ THUẬT <span>↗</span> GIỮ KHÁCH HÀNG <span>↗</span> CẢI THIỆN RANKING</div>`},
  {section:'HIỂU ĐÚNG RANKING', short:'4 tiêu chí, cách xác định đạt', source:3, skin:'light metrics', title:'4 TIÊU CHÍ, CÁCH XÁC ĐỊNH ĐẠT', html:()=>`
   <header class="slide-header"><span class="eyebrow">01 / HIỂU ĐÚNG RANKING</span><h1>4 TIÊU CHÍ, <span class="accent-orange">CÁCH XÁC ĐỊNH ĐẠT</span></h1><p>Bốn tiêu chí trọng tâm để xác định kết quả đánh giá công việc của KTV.</p></header>
   <div class="metric-grid">
    <button class="metric-card m-blue" data-detail="wifi"><span class="metric-label">01 · CHẤT LƯỢNG WIFI CỦA LÔ QUẢN LÝ</span><div class="metric-row">${ico('wifi')}<strong>GIẢM</strong></div><p>Tỷ lệ WiFi xấu tháng này phải <b>thấp hơn tháng trước</b>.</p><span class="card-more">Xem cách đánh giá ↗</span></button>
    <button class="metric-card m-orange" data-detail="rm"><span class="metric-label">02 · NGUY CƠ RM SAU CHĂM SÓC</span><div class="metric-row">${ico('shield')}<strong>&lt; 25<span class="pct">%</span></strong></div><p>Khả năng tương tác &amp; CSKH: Nguy cơ RM sau chăm sóc.</p><span class="card-more">Xem cách đánh giá ↗</span></button>
    <button class="metric-card m-green" data-detail="cll"><span class="metric-label">03 · TỶ LỆ CLL</span><div class="metric-row">${ico('repeat')}<strong>≤ 6<span class="pct">%</span></strong></div><p>Duy trì chất lượng xử lý, hạn chế lỗi lặp.</p><span class="card-more">Xem hành động ↗</span></button>
    <button class="metric-card m-purple" data-detail="combo"><span class="metric-label">04 · KH KHÔNG DÙNG TRUYỀN HÌNH TRÊN TẬP COMBO</span><div class="metric-row">${ico('tv')}<strong>&lt; 30<span class="pct">%</span></strong></div><p>Giảm tỷ lệ KH không sử dụng Truyền hình trên tập Combo.</p><span class="card-more">Xem cách đánh giá ↗</span></button>
   </div>
   <div class="rule-bar"><div class="rule-summary"><span class="rule-num">3<span>/4</span></span><span>ĐẠT TỪ <b>3 TIÊU CHÍ</b><br><strong>ĐẠT CÔNG VIỆC</strong></span></div><span class="rule-separator"></span><div class="rule-warning">${ico('alert')} Có từ <b>2 tiêu chí không đạt</b> → <strong>KHÔNG ĐẠT</strong> công việc</div></div>`},
  {section:'CẢI THIỆN CHẤT LƯỢNG', short:'WiFi xấu: xác định đúng, xử lý tận gốc', source:7, skin:'light wifi', title:'WIFI XẤU: XÁC ĐỊNH ĐÚNG, XỬ LÝ TẬN GỐC', html:()=>`
    <header class="slide-header"><span class="eyebrow">02 / CHẤT LƯỢNG WIFI CỦA LÔ QUẢN LÝ</span><h1>WIFI XẤU: <span class="accent-orange">XÁC ĐỊNH ĐÚNG,</span><br>XỬ LÝ TẬN GỐC</h1><p>Mục tiêu: tỷ lệ Wi-Fi xấu tháng này (T) thấp hơn tháng trước (T−1).</p></header>
    <div class="split wifi-main"><div class="wifi-definition">
      <div class="definition-head">${ico('gauge')}<span>ĐIỂM WIFI LÀ GÌ?</span></div>
      <div class="big-risk">0<span>–</span>1.000</div><p>Điểm rủi ro WiFi. <b>Điểm càng cao, rủi ro càng lớn.</b></p>
      <div class="risk-bands"><div><b class="red-dot"></b><strong>XẤU</strong><small>Top 1% điểm cao nhất</small></div><div><b class="gold-dot"></b><strong>ĐẠT</strong><small>Trên Top 1% đến Top 15%</small></div><div><b class="green-dot"></b><strong>TỐT</strong><small>85% còn lại</small></div></div>
      ${detailBtn('wifi-score','Định nghĩa & chỉ số WiFi')}
    </div>
    <div class="wifi-actions"><div class="actions-heading"><span>04 HÀNH ĐỘNG TRỌNG TÂM</span><span class="subtle">Từ khảo sát đến hậu kiểm</span></div><div class="quad-grid">
      ${actionCard('01','clipboard','Khảo sát & nghiệm thu','Vị trí modem, vùng phủ, tốc độ, tín hiệu; nghiệm thu trên <b>Mỹ Bảo</b>.','blue','wifi')}
      ${actionCard('02','search','Phân loại nguyên nhân','Thiếu vùng phủ; nhiễu kênh; WiFi đời cũ/quá tải; lỗi đường truyền/ONT.','orange','wifi')}
      ${actionCard('03','tools','Xử lý một chạm','Tối ưu cấu hình, chọn Mesh phù hợp; lưu đo kiểm <b>trước/sau</b>.','green','wifi')}
      ${actionCard('04','phone','Chủ động chăm sóc','Rà soát KH WiFi xấu tháng T−1, liên hệ và theo dõi cải thiện.','blue','wifi')}
    </div></div></div><div class="bottom-callout">${ico('target')} <b>KHÔNG CHỈ KHỞI ĐỘNG LẠI MODEM</b><span>— Phải xác định nguyên nhân và có kết quả đo kiểm sau xử lý.</span></div>`},
  {section:'CẢI THIỆN CHẤT LƯỢNG', short:'CLL: giảm lỗi lặp, nâng chất lượng một chạm', source:8, skin:'light cll', title:'CLL: GIẢM LỖI LẶP, NÂNG CHẤT LƯỢNG MỘT CHẠM', html:()=>`
    <header class="slide-header with-counter"><div><span class="eyebrow">03 / TỶ LỆ CLL</span><h1>CLL: <span class="accent-orange">GIẢM LỖI LẶP,</span><br>NÂNG CHẤT LƯỢNG MỘT CHẠM</h1><p>Tập trung giải pháp và thao tác KTV đã quen thuộc.</p></div><div class="benchmark benchmark-green"><span>MỨC CHUẨN</span><strong>≤ 6%</strong><small>CLL</small></div></header>
    <div class="four-steps">
      <div class="flow-card"><div class="flow-no">01</div><div class="flow-icon">${ico('phone')}</div><h3>Tiếp nhận &amp;<br>xác định nguyên nhân</h3><p>Gọi lại KH trong <b>24 giờ</b> sau xử lý hoặc khi có kết quả kiểm tra. Xác định nguyên nhân, ghi nhận rõ ràng.</p>${detailBtn('cll','Nghiệp vụ CLL')}</div>
      <div class="flow-card"><div class="flow-no">02</div><div class="flow-icon">${ico('tools')}</div><h3>Xử lý triệt để<br>theo quy định một chạm</h3><p>Kiểm tra chất lượng dịch vụ, hướng dẫn KH; xác nhận sử dụng ổn định trước khi đóng case.</p>${detailBtn('cll','Hành động')}</div>
      <div class="flow-card"><div class="flow-no">03</div><div class="flow-icon">${ico('clipboard')}</div><h3>Chuẩn hóa nghiệm thu<br>&amp; hậu kiểm</h3><p>Mỹ Bảo, hình ảnh, cấu hình, đo kiểm; hậu kiểm <b>24–48 giờ</b> với case có nguy cơ tái phát.</p>${detailBtn('cll','Hậu kiểm')}</div>
      <div class="flow-card"><div class="flow-no">04</div><div class="flow-icon">${ico('group')}</div><h3>Đào tạo &amp;<br>kiểm soát định kỳ</h3><p>Đội trưởng/Pro phân tích case điển hình, hướng dẫn và kiểm tra kết quả thực tế.</p>${detailBtn('roles','Vai trò hỗ trợ')}</div>
    </div><div class="cll-bottom">${ico('shield')} <strong>XỬ LÝ DỨT ĐIỂM NGAY LẦN ĐẦU</strong><span>Hạn chế lỗi tái phát và khiếu nại lặp.</span></div>`},
  {section:'GIỮ KHÁCH HÀNG', short:'Nguy cơ RM: chủ động giữ khách sau chăm sóc', source:13, skin:'dark rm', title:'NGUY CƠ RM: CHỦ ĐỘNG GIỮ KHÁCH SAU CHĂM SÓC', html:()=>`
    <header class="slide-header dark-header"><span class="eyebrow light">04 / NGUY CƠ RM SAU CSKH CỦA KTV</span><h1>NGUY CƠ RM: <span class="accent-orange">CHỦ ĐỘNG GIỮ KHÁCH</span><br>SAU CHĂM SÓC</h1><p>Hoàn tất chăm sóc chưa đủ — cần cải thiện tình trạng sử dụng dịch vụ của KH.</p></header>
    <div class="rm-grid"><div class="rm-risk"><div class="risk-ring"><span class="ring-label">MỨC CHUẨN</span><strong>&lt;25<span>%</span></strong><small>Nguy cơ RM sau chăm sóc</small></div><div class="risk-insight">${ico('alert')} Tỷ lệ càng cao, nguy cơ RM càng lớn.</div></div>
    <div class="rm-content"><div class="rm-explain"><span class="micro-title">CÁCH ĐÁNH GIÁ BẰNG LỜI</span><p>Trong nhóm KH nguy cơ được DVKH chuyển cho KTV, đủ điều kiện theo dõi, hệ thống xác định các KH <b>chưa RM</b> nhưng có lưu lượng sử dụng <strong>≤ 1.000 MB</strong>.</p><div class="rm-chips"><span>YCH</span><span>NKN</span><span>CLL</span><span>T−</span><span>T</span><span>Dự đoán RM</span><span>Nợ cước</span></div>${detailBtn('rm','Xem đủ điều kiện ghi nhận')}</div>
      <div class="rm-action-strip"><div><b class="strip-icon">${ico('phone')}</b><span>01</span><p>Chủ động liên hệ KH nguy cơ</p></div><div><b class="strip-icon">${ico('tools')}</b><span>02</span><p>Xử lý kỹ thuật ngay trong ngày</p></div><div><b class="strip-icon">${ico('tv')}</b><span>03</span><p>Hướng dẫn trải nghiệm dịch vụ</p></div><div><b class="strip-icon">${ico('group')}</b><span>04</span><p>Phối hợp DVKH qua CL YCH – CL SOS</p></div></div>
    </div></div><div class="rm-bottom">${ico('heart')} <strong>KHÔNG CHỈ ĐÓNG TÁC VỤ — PHẢI GIẢM NGUY CƠ RỜI MẠNG.</strong></div>`},
  {section:'KHAI THÁC DỊCH VỤ', short:'Combo: lắp xong phải giúp khách sử dụng được', source:10, skin:'light combo', title:'COMBO: LẮP XONG PHẢI GIÚP KHÁCH SỬ DỤNG ĐƯỢC', html:()=>`
    <header class="slide-header with-counter"><div><span class="eyebrow">05 / KH KHÔNG DÙNG TRUYỀN HÌNH TRÊN TẬP COMBO</span><h1>COMBO: <span class="accent-orange">LẮP XONG PHẢI GIÚP KHÁCH</span><br>SỬ DỤNG ĐƯỢC</h1><p>Hệ thống theo dõi KH Combo NET + IPTV không phát sinh lưu lượng IPTV trong <b>3 tháng gần nhất</b>.</p></div><div class="benchmark benchmark-blue"><span>MỨC CHUẨN</span><strong>&lt; 30%</strong><small>KH không dùng TH</small></div></header>
    <div class="combo-process">
       ${actionCard('01','check','Nghiệm thu tại chỗ','Phát sinh ít nhất <b>1 phiên xem liên tục 3 phút</b> trên đúng tài khoản KH.','blue','combo')}
       ${actionCard('02','tv','Kích hoạt & hướng dẫn','Cài đặt, đăng nhập BOX/App, mở nội dung và hướng dẫn thao tác.','orange','combo')}
       ${actionCard('03','group','Phân luồng KH','Khách dùng BOX; App đã biết dịch vụ; KH chưa biết dịch vụ.','green','combo')}
       ${actionCard('04','calendar','Theo dõi sau nghiệm thu','Kiểm tra D+7; phân loại nguyên nhân không dùng; phối hợp DVKH.','purple','combo')}
       ${actionCard('05','star','Hướng dẫn FPT Play','Kênh đặc sắc, Ngoại Hạng Anh & thể thao, Phim truyện.','blue','combo')}
    </div>
    <div class="combo-stats"><div><i class="stat-icon">${ico('check')}</i><div><b>100%</b><span>Kích hoạt tại chỗ</span></div></div><div><i class="stat-icon">${ico('calendar')}</i><div><b>90%</b><span>Quay lại D+7</span></div></div><div><i class="stat-icon">${ico('repeat')}</i><div><b>20%</b><span>Kích hoạt lại KH ngừng dùng</span></div></div><div><i class="stat-icon">${ico('shield')}</i><div><b>≤3%</b><span>Miễn trừ</span></div></div></div><div class="combo-bottom">${ico('tv')} <strong>KHÁCH HÀNG PHẢI THỰC SỰ SỬ DỤNG</strong><span>— Không chỉ hoàn thành cài đặt.</span></div>`},
  {section:'HÀNH ĐỘNG HẰNG NGÀY', short:'4 điểm kiểm soát trong mỗi ca công việc', source:9, skin:'dark daily', title:'4 ĐIỂM KIỂM SOÁT TRONG MỖI CA CÔNG VIỆC', html:()=>`
    <header class="slide-header dark-header"><span class="eyebrow light">06 / ĐƯA RANKING VÀO CÔNG VIỆC</span><h1>4 ĐIỂM KIỂM SOÁT<br><span class="accent-orange">TRONG MỖI CA CÔNG VIỆC</span></h1><p>Ranking bắt đầu từ từng lần tiếp xúc và xử lý với khách hàng.</p></header>
    <div class="daily-track">
      <div class="daily-card"><div class="daily-top"><span>01</span>${ico('search')}</div><h3>TRƯỚC KHI<br>XỬ LÝ</h3><p>Kiểm tra lịch sử KH, xác định nguyên nhân và nhóm có nguy cơ.</p></div>
      <div class="daily-card"><div class="daily-top"><span>02</span>${ico('tools')}</div><h3>TRONG KHI<br>XỬ LÝ</h3><p>Tối ưu WiFi, xử lý một chạm, kích hoạt Truyền hình theo thực tế.</p></div>
      <div class="daily-card"><div class="daily-top"><span>03</span>${ico('clipboard')}</div><h3>TRƯỚC KHI<br>HOÀN TẤT</h3><p>Nghiệm thu Mỹ Bảo, đo kiểm, ghi nhận kết quả và xác nhận với KH.</p></div>
      <div class="daily-card"><div class="daily-top"><span>04</span>${ico('chart')}</div><h3>SAU KHI<br>XỬ LÝ</h3><p>Theo dõi WiFi xấu, CLL, nguy cơ RM và sử dụng Truyền hình.</p></div>
    </div><div class="risk-control"><div class="risk-control-icon">${ico('shield')}</div><div><strong>KIỂM SOÁT RỦI RO ĐỊA BÀN</strong><p>Làm chủ hạ tầng; nhận diện nguy cơ giải tỏa, làm đường, đối thủ cạnh tranh; báo cáo và phối hợp xử lý.</p></div>${detailBtn('risk','Xem nhóm nguy cơ')}</div>`},
  {section:'TỰ QUẢN TRỊ KẾT QUẢ', short:'KTV tự kiểm soát kết quả Ranking', source:3, skin:'light self', title:'KTV TỰ KIỂM SOÁT KẾT QUẢ RANKING', html:()=>`
    <header class="slide-header"><span class="eyebrow">07 / TỰ THEO DÕI RANKING</span><h1>KTV <span class="accent-orange">TỰ KIỂM SOÁT</span><br>KẾT QUẢ RANKING</h1><p>Bấm vào từng tiêu chí để mô phỏng trạng thái <b>Đạt / Chưa đạt</b>. Kết quả bên phải chỉ phục vụ thực hành, <b>không phải kết quả Ranking thực tế</b>.</p></header>
    <div class="self-grid">
      <div class="self-list">
        <button class="self-item" data-check="0"><span class="check-box" aria-hidden="true">✓</span><span class="self-icon">${ico('wifi')}</span><span class="self-copy"><b>Chất lượng WiFi của Lô quản lý</b><small>Điều kiện đạt: tỷ lệ WiFi xấu tháng T thấp hơn T−1</small></span><span class="self-state off" id="state-0">CHƯA ĐẠT</span></button>
        <button class="self-item" data-check="1"><span class="check-box" aria-hidden="true">✓</span><span class="self-icon">${ico('shield')}</span><span class="self-copy"><b>Nguy cơ RM sau chăm sóc</b><small>Điều kiện đạt: tỷ lệ nguy cơ RM dưới 25%</small></span><span class="self-state off" id="state-1">CHƯA ĐẠT</span></button>
        <button class="self-item" data-check="2"><span class="check-box" aria-hidden="true">✓</span><span class="self-icon">${ico('repeat')}</span><span class="self-copy"><b>Tỷ lệ CLL</b><small>Điều kiện đạt: CLL không vượt quá 6%</small></span><span class="self-state off" id="state-2">CHƯA ĐẠT</span></button>
        <button class="self-item" data-check="3"><span class="check-box" aria-hidden="true">✓</span><span class="self-icon">${ico('tv')}</span><span class="self-copy"><b>KH không dùng Truyền hình trên tập Combo</b><small>Điều kiện đạt: tỷ lệ KH không dùng Truyền hình dưới 30%</small></span><span class="self-state off" id="state-3">CHƯA ĐẠT</span></button>
      </div><div class="self-progress"><span class="micro-title">KẾT QUẢ MÔ PHỎNG</span><div class="self-status-card" id="selfStatusCard"><span class="self-status-kicker">TRẠNG THÁI TẠM TÍNH</span><b id="selfResultLabel">CHƯA ĐẠT CÔNG VIỆC</b><small id="selfResultExplain">Cần đạt ít nhất 3/4 tiêu chí để đạt công việc.</small></div><div class="progress-giant"><b id="checkedCount">0</b><span>/4</span></div><p><span id="checkedCaption">0 tiêu chí đang đạt</span></p><div class="self-progress-track"><span id="checkProgress"></span></div><div class="self-rule-hint">Quy tắc đánh giá: <b>Đạt từ 3/4 tiêu chí</b> → Đạt công việc. <b>Có từ 2 tiêu chí không đạt</b> → Không đạt công việc.</div><button type="button" class="reset-checks" id="resetChecks">Đặt lại bảng kiểm ↺</button><div class="self-note">Dữ liệu chỉ phục vụ thực hành trong phiên xem, không gửi lên hệ thống.</div></div>
    </div><div class="self-bottom"><span>NHẬN DIỆN CHƯA ĐẠT</span>${ico('arrow')}<span>RÀ SOÁT KH LIÊN QUAN</span>${ico('arrow')}<span>XỬ LÝ NGUYÊN NHÂN</span>${ico('arrow')}<span>THEO DÕI KẾT QUẢ</span></div>`},
  {section:'TRÁCH NHIỆM PHỐI HỢP', short:'Đội trưởng và Pro hỗ trợ KTV như thế nào?', source:4, skin:'light roles', title:'ĐỘI TRƯỞNG VÀ PRO HỖ TRỢ KTV NHƯ THẾ NÀO?', html:()=>`
    <header class="slide-header"><span class="eyebrow">08 / TRÁCH NHIỆM PHỐI HỢP</span><h1>ĐỘI TRƯỞNG VÀ PRO <span class="accent-orange">HỖ TRỢ KTV</span><br>NHƯ THẾ NÀO?</h1><p>Vai trò phối hợp để cải thiện chất lượng Lô quản lý và kết quả đánh giá công việc.</p></header>
    <div class="role-grid">
      <div class="role-card role-ktv"><span class="role-flag">TUYẾN ĐẦU</span><div class="role-large">${ico('user')}</div><h3>KTV</h3><p>Chủ động kiểm soát các chỉ số; xử lý, nghiệm thu, hậu kiểm và cải thiện chất lượng Lô quản lý.</p>${detailBtn('roles','Trách nhiệm')}</div>
      <div class="role-card role-pro"><span class="role-flag">CHUYÊN MÔN</span><div class="role-large">${ico('tools')}</div><h3>KTV PRO</h3><p>Hỗ trợ lỗi khó, case CLL lặp, hướng dẫn kỹ thuật và kiểm tra kết quả tại hiện trường.</p>${detailBtn('roles','Trách nhiệm')}</div>
      <div class="role-card role-lead"><span class="role-flag">ĐIỀU PHỐI</span><div class="role-large">${ico('group')}</div><h3>ĐỘI TRƯỞNG</h3><p>Theo dõi Ranking, nhận diện KTV cần hỗ trợ, phân công đào tạo và kiểm soát chất lượng đội.</p>${detailBtn('roles','Trách nhiệm')}</div>
    </div><div class="roles-result"><div class="roles-badge">${ico('target')}</div><div class="roles-number">≥80<span>%</span></div><div><b>KTV ĐẠT ĐÁNH GIÁ CÔNG VIỆC</b><p>Là điều kiện đạt của tiêu chí chất lượng KTV trong Ranking Đội trưởng theo tài liệu gốc.</p></div></div>`},
  {section:'HÀNH ĐỘNG 2027', short:'Thông điệp hành động 2027', source:null, skin:'dark closing', title:'THÔNG ĐIỆP HÀNH ĐỘNG 2027', html:()=>`
    <div class="closing-bg-num">2027</div><div class="closing-top"><span class="eyebrow light">09 / CAM KẾT THỰC HIỆN</span><h1>THÔNG ĐIỆP<br><span class="accent-orange">HÀNH ĐỘNG 2027</span></h1><p>Bốn tiêu chí — một mục tiêu chung: chất lượng tốt hơn sau mỗi lần phục vụ.</p></div>
    <div class="closing-grid"><div><span class="closing-icon blue">${ico('wifi')}</span><h3>WIFI XẤU</h3><p>Khảo sát đúng, tối ưu và chủ động giảm WiFi xấu của Lô quản lý.</p></div><div><span class="closing-icon orange">${ico('shield')}</span><h3>NGUY CƠ RM</h3><p>Tiếp cận sớm, xử lý nguy cơ và duy trì sử dụng dịch vụ.</p></div><div><span class="closing-icon green">${ico('repeat')}</span><h3>CLL</h3><p>Xử lý một chạm, nghiệm thu đầy đủ, hạn chế lỗi lặp.</p></div><div><span class="closing-icon purple">${ico('tv')}</span><h3>TRUYỀN HÌNH COMBO</h3><p>Kích hoạt đúng, hướng dẫn sử dụng và duy trì trải nghiệm.</p></div></div>
    <div class="closing-manifesto">ĐÚNG KỸ THUẬT <span>·</span> ĐỦ NGHIỆM THU <span>·</span> GIẢM LỖI LẶP<br><strong>KHÁCH HÀNG SỬ DỤNG TỐT</strong></div><div class="closing-signature">SG10 — by SG10 – NamHH</div>`}
];

const DETAILS = {
 wifi:{title:'Chất lượng WiFi của Lô quản lý',eyebrow:'TIÊU CHÍ 01',source:12,html:`<div class="detail-rich">
   ${dHero('wifi','blue','ĐIỀU KIỆN ĐẠT','Tỷ lệ WiFi xấu tháng T phải thấp hơn tháng T−1','Hệ thống dùng điểm rủi ro WiFi 0–1.000 để phân loại chất lượng và xác định các điểm có nguy cơ cao.',`<b>0–1.000</b><span>Điểm rủi ro WiFi</span>`)}
   <div class="detail-grid-2">
     ${dBox('gauge','blue','Phân loại theo tài liệu',`<div class="band-stack"><div class="band-row band-red"><strong>XẤU</strong><span>Top 1% điểm cao nhất trong ngày</span></div><div class="band-row band-gold"><strong>ĐẠT</strong><span>Nhóm 15% tiếp theo</span></div><div class="band-row band-green"><strong>TỐT</strong><span>Nhóm còn lại</span></div></div><p class="micro-copy">Chỉ số tham chiếu: RSSI TB, Ping TB, Loss TB, TX Bytes TB và TX Packets TB.</p>`)}
     ${dBox('monitor','orange','Minh họa cần nhìn ngoài hiện trường',`<div class="mini-illus-grid">${dMini('home','orange','Vị trí modem','Đúng khu vực khách thường dùng')} ${dMini('signal','blue','Tín hiệu / tốc độ','Đo có dây và không dây')} ${dMini('route','green','Vùng phủ','Nhận diện thiếu vùng phủ')} ${dMini('tools','purple','Thiết bị / cấu hình','Mesh, kênh WiFi, tải thiết bị')}</div>`)}
   </div>
   ${dBox('clipboard','green','Hành động trọng tâm',`<div class="detail-steps">${dStep('01','search','blue','Khảo sát & nghiệm thu','Khảo sát vị trí modem, vật cản, diện tích sử dụng và nhu cầu thiết bị.')} ${dStep('02','signal','orange','Đo kiểm thực tế','Kiểm tra tốc độ có dây/không dây và tín hiệu ở khu vực khách thường dùng.')} ${dStep('03','tools','green','Phân loại nguyên nhân','Thiếu vùng phủ, nhiễu kênh, thiết bị cũ/quá tải, lỗi đường truyền/ONT.')} ${dStep('04','settings','purple','Tối ưu đúng nguyên nhân','Tối ưu cấu hình, cân nhắc Mesh có dây và Mesh không dây.')} ${dStep('05','phone','blue','Chăm sóc chủ động','Lập danh sách WiFi xấu tháng T−1, chủ động chăm sóc trước khi có phản ánh mới.')}</div>`)}
   <p class="note">Lưu ý từ nguồn: bảng phân nhóm 1% Xấu, 15% Đạt, 85% Tốt có tổng 101%; cần đơn vị ban hành xác nhận số liệu. Trình chiếu giữ thuật ngữ theo nguồn.</p>
 </div>`},
 'wifi-score':{title:'Định nghĩa WiFi xấu',eyebrow:'ĐỊNH NGHĨA TÀI LIỆU',source:12,html:`<div class="detail-rich">
   ${dHero('gauge','blue','ĐỊNH NGHĨA CỐT LÕI','Điểm WiFi càng cao thì rủi ro càng lớn','Đây là cách hệ thống quy đổi chất lượng kết nối thành thang rủi ro để xếp nhóm KH.',`<b>3</b><span>Nhóm phân loại</span>`)}
   <div class="detail-grid-2">
     ${dBox('chart','blue','3 nhóm phân loại',`<div class="band-stack"><div class="band-row band-red"><strong>XẤU</strong><span>Top 1% điểm cao nhất trong ngày</span></div><div class="band-row band-gold"><strong>ĐẠT</strong><span>Nhóm 15% tiếp theo</span></div><div class="band-row band-green"><strong>TỐT</strong><span>Nhóm còn lại</span></div></div>`)}
     ${dBox('wifi','green','Chỉ số tham chiếu',`<div class="chip-cloud">${dChip('RSSI TB','blue')}${dChip('Ping TB','orange')}${dChip('Loss TB','green')}${dChip('TX Bytes TB','purple')}${dChip('TX Packets TB','blue')}</div><p class="micro-copy">Áp dụng cho WiFi 5 / WiFi 6 theo diễn giải trong tài liệu gốc.</p>`)}
   </div>
   <p class="note">Nguồn có bất nhất về tỷ trọng phân nhóm; cần xác nhận trước khi công bố cách phân loại chính thức.</p>
 </div>`},
 rm:{title:'Nguy cơ RM sau CSKH của KTV',eyebrow:'TIÊU CHÍ 02 · CÁCH ĐÁNH GIÁ',source:13,html:`<div class="detail-rich">
   ${dHero('shield','orange','MỨC ĐẠT','Tỷ lệ nguy cơ RM dưới 25%','Tỷ lệ càng cao, mức độ rủi ro càng lớn. Trọng tâm là giữ KH ở lại sau chăm sóc.',`<b>&lt;25%</b><span>Nguy cơ RM</span>`)}
   <div class="detail-grid-2">
     ${dBox('group','orange','Tập KH được theo dõi',`<div class="chip-cloud">${dChip('YCH','orange')}${dChip('NKN','orange')}${dChip('CLL','orange')}${dChip('T−','orange')}${dChip('T','orange')}${dChip('Dự đoán RM','orange')}${dChip('Nợ cước','orange')}</div><p class="micro-copy">Đây là các nhóm nguy cơ được DVKH chuyển tiếp để KTV chăm sóc.</p>`)}
     ${dBox('clipboard','blue','Điều kiện ghi nhận',`<div class="criteria-list"><div>${ico('route')}<span>Có vết chuyển KTV: <b>CL, XMTT, Ticket OS</b></span></div><div>${ico('calendar')}<span>Đủ <b>3 ngày từ khi đổ giỏ</b></span></div><div>${ico('shield')}<span><b>Chưa RM</b> và được phân công AU cho KTV trong tháng</span></div><div>${ico('signal')}<span>Trong tập đủ điều kiện, KH có lưu lượng sử dụng <b>≤ 1.000 MB</b></span></div></div>`)}
   </div>
   ${dBox('tools','green','Hành động KTV cần làm',`<div class="detail-steps cols-4">${dStep('01','phone','blue','Liên hệ ngay','Chủ động liên hệ, xác định nguyên nhân và xử lý dứt điểm trong ngày.')} ${dStep('02','tools','green','Hỗ trợ kỹ thuật','Hỗ trợ tại chỗ hoặc từ xa, không xử lý tạm thời.')} ${dStep('03','tv','orange','Hướng dẫn dịch vụ','Hướng dẫn sử dụng Hi FPT, FPT Play để cải thiện trải nghiệm.')} ${dStep('04','group','purple','Phối hợp DVKH','Phối hợp DVKH với các tập rủi ro qua CL YCH – CL SOS trong T.')}</div>`)}
   <p class="note">Tài liệu gốc quy định chỉ tính CL khi thỏa điều kiện liên quan đến nguyên nhân đầu vào hoặc từ khóa khiếu nại RM; xem ảnh nguồn để đối chiếu chi tiết.</p>
 </div>`},
 cll:{title:'CLL: Giảm lỗi lặp, nâng chất lượng một chạm',eyebrow:'TIÊU CHÍ 03 · HÀNH ĐỘNG',source:8,html:`<div class="detail-rich">
   ${dHero('repeat','green','MỨC ĐẠT','CLL không vượt quá 6%','Không giải thích lại KPI quen thuộc; chỉ tập trung vào chuỗi hành động giúp giảm lỗi lặp.',`<b>≤6%</b><span>Mức chuẩn CLL</span>`)}
   ${dBox('spark','blue','Chuỗi hành động cần giữ đều',`<div class="detail-steps">${dStep('01','phone','blue','Tiếp nhận & xác định nguyên nhân','Gọi lại KH trong 24 giờ sau xử lý hoặc khi có kết quả kiểm tra.')} ${dStep('02','tools','orange','Xử lý triệt để','Không xử lý tạm thời; xác nhận chất lượng dịch vụ ổn định.')} ${dStep('03','clipboard','green','Chuẩn hóa nghiệm thu','Hình ảnh, cấu hình, đo kiểm trên Mỹ Bảo.')} ${dStep('04','clock','purple','Hậu kiểm 24–48 giờ','Theo dõi các case có nguy cơ tái phát.')} ${dStep('05','group','blue','Đào tạo định kỳ','Đội trưởng/Pro tổng hợp case điển hình và hướng dẫn KTV.')}</div>`)}
   ${dBox('alert','orange','Điểm cần nhấn mạnh khi truyền thông',`<div class="mini-illus-grid">${dMini('check','green','Xử lý dứt điểm','Làm đúng ngay từ lần đầu')} ${dMini('monitor','blue','Nghiệm thu đủ','Có đo kiểm, có bằng chứng')} ${dMini('repeat','orange','Giảm lặp','Hạn chế KH phản ánh lại')} ${dMini('group','purple','Hỗ trợ theo cụm','Vai trò Đội trưởng / Pro')}</div>`)}
 </div>`},
 combo:{title:'KH không dùng Truyền hình trên tập Combo',eyebrow:'TIÊU CHÍ 04 · CÁCH ĐÁNH GIÁ',source:14,html:`<div class="detail-rich">
   ${dHero('tv','purple','MỨC ĐẠT','Dưới 30% KH không dùng Truyền hình trên tập Combo','Theo dõi tập KH Combo NET + IPTV thuộc Lô KTV quản lý; xác định KH không phát sinh lưu lượng IPTV trong 3 tháng gần nhất.',`<b>&lt;30%</b><span>KH không sử dụng</span>`)}
   <div class="detail-grid-2">
     ${dBox('tv','purple','Các bước KTV cần làm',`<div class="detail-steps">${dStep('01','check','green','Nghiệm thu tại chỗ','Ít nhất 1 phiên xem liên tục 3 phút đúng tài khoản KH.')} ${dStep('02','settings','blue','Cài đặt & hướng dẫn','BOX/App, đăng nhập, phát nội dung và hướng dẫn thao tác.')} ${dStep('03','route','orange','Phân luồng KH','Dùng BOX; dùng App đã biết dịch vụ; chưa biết dịch vụ.')} ${dStep('04','calendar','purple','Kiểm tra D+7','Phân loại nguyên nhân không dùng, phối hợp DVKH.')} ${dStep('05','star','orange','Giới thiệu nội dung','Kênh đặc sắc, Ngoại Hạng Anh & thể thao, Phim truyện.')}</div>`)}
     ${dBox('chart','green','KPI hành động trong file',`<div class="chip-cloud metrics">${dChip('100% kích hoạt tại chỗ','green')}${dChip('90% quay lại D+7','blue')}${dChip('20% kích hoạt lại KH ngừng dùng','orange')}${dChip('≤3% miễn trừ','purple')}</div><div class="mini-illus-grid">${dMini('tv','purple','Mở được dịch vụ','KH xem được ngay tại chỗ')} ${dMini('calendar','blue','Quay lại D+7','Kiểm tra tình trạng sử dụng')} ${dMini('phone','green','Phối hợp DVKH','Khi cần chăm sóc bổ sung')}</div>`)}
   </div>
 </div>`},
 risk:{title:'Kiểm soát rủi ro – Xử lý nguy cơ',eyebrow:'THỰC HIỆN TẠI ĐỊA BÀN',source:10,html:`<div class="detail-rich">
   ${dHero('shield','blue','TRỌNG TÂM THỰC HIỆN','Kiểm soát rủi ro – Xử lý nguy cơ','Nội dung này gắn trực tiếp với thực tế tại địa bàn và các tập KH cần theo dõi.',`<b>02</b><span>Nhóm nội dung lớn</span>`)}
   <div class="detail-grid-2">
     ${dBox('pin','blue','Kiểm soát rủi ro',`<div class="criteria-list"><div>${ico('signal')}<span>Làm chủ hạ tầng địa bàn; kiểm tra chất lượng tín hiệu, hạ tầng.</span></div><div>${ico('alert')}<span>Nhận diện rủi ro giải tỏa, làm đường, đối thủ cạnh tranh.</span></div><div>${ico('group')}<span>Báo cáo và phối hợp xử lý với các bên liên quan.</span></div></div>`)}
     ${dBox('heart','orange','Xử lý nguy cơ',`<div class="chip-cloud">${dChip('Checklist lặp','orange')}${dChip('Ngưng kết nối','orange')}${dChip('YCH','orange')}${dChip('Dự đoán RM','orange')}${dChip('CTBDV','orange')}${dChip('Không PSLL vết T','orange')}${dChip('Không PSLL vết T−','orange')}</div><p class="micro-copy">Chủ động liên hệ, xử lý dứt điểm, hỗ trợ kỹ thuật ngay trong ngày và phối hợp DVKH.</p>`)}
   </div>
 </div>`},
 roles:{title:'Vai trò KTV – KTV Pro – Đội trưởng',eyebrow:'TRÁCH NHIỆM PHỐI HỢP',source:4,html:`<div class="detail-rich">
   ${dHero('group','orange','PHỐI HỢP THỰC THI','Mỗi vai trò hỗ trợ KTV như thế nào','Giữ đúng ranh giới trách nhiệm để cải thiện chất lượng Lô quản lý và kết quả đánh giá công việc.',`<b>≥80%</b><span>KTV đạt là điều kiện của Ranking Đội trưởng</span>`)}
   <div class="detail-grid-3">
     ${dBox('user','blue','KTV',`<p>Chủ động kiểm soát các chỉ số, xử lý, nghiệm thu và hậu kiểm.</p><div class="mini-illus-grid">${dMini('target','blue','Theo dõi chỉ số','Biết tiêu chí nào chưa đạt')} ${dMini('tools','green','Xử lý tại hiện trường','Đúng nguyên nhân')}</div>`)}
     ${dBox('tools','green','KTV Pro',`<p>Hỗ trợ chuyên môn, lỗi khó, case CLL lặp, hướng dẫn tại hiện trường.</p><div class="mini-illus-grid">${dMini('spark','green','Hỗ trợ lỗi khó','Case cần chuyên môn sâu')} ${dMini('clipboard','blue','Kiểm tra kết quả','Đảm bảo xử lý đạt')}</div>`)}
     ${dBox('group','orange','Đội trưởng',`<p>Theo dõi Ranking, nhận diện KTV cần hỗ trợ, tổ chức đào tạo và kiểm soát chất lượng đội.</p><div class="mini-illus-grid">${dMini('chart','orange','Theo dõi Ranking','Nhìn bức tranh toàn đội')} ${dMini('book','purple','Tổ chức đào tạo','Nhắc đúng điểm yếu')}</div>`)}
   </div>
   <p class="note">Không áp dụng suy diễn chế tài dành cho Đội trưởng/Pro sang KTV.</p>
 </div>`},
};
