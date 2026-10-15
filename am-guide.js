
/* PKT SG10: chèn một slide Link AM sau 2 slide Thu hồi (trước phần kết luận). */
(function(){
 if(typeof allScenes === 'undefined' || !document.getElementById('scenes')) return;
 const steps=[
  {title:'Mở Affiliate Marketing',desc:'Vào SOP, chọn <strong>Affiliate Marketing</strong> → Tạo link bán hàng cá nhân AM.',long:'Mở ứng dụng SOP hoặc truy cập portal-sop.fpt.vn, đăng nhập, vào Affiliate Marketing và chọn Tạo link bán hàng cá nhân AM.'},
  {title:'Chọn Menu cá nhân hóa',desc:'Trong <strong>Chiến dịch</strong>, chọn “Tạo Menu cá nhân hóa đến Khách hàng”.',long:'Trong danh sách chiến dịch Link bán hàng cá nhân AM, tìm mục Tạo Menu cá nhân hóa đến Khách hàng, mở menu thao tác và chọn Cấu hình chiến dịch.'},
  {title:'Chọn gói Internet / Combo',desc:'Tìm <strong>“1 cam”</strong>, chọn gói có Camera rồi bấm <strong>Thêm</strong>.',long:'Ở mục Sản phẩm & dịch vụ, tìm kiếm và chọn các gói Internet hoặc Combo muốn hiển thị. Ví dụ gõ 1 cam, đánh dấu vào các gói phù hợp và bấm Thêm.'},
  {title:'Lưu cấu hình',desc:'Kiểm tra khu vực, danh sách gói; kéo xuống cuối trang và bấm <strong>Lưu thông tin</strong>.',long:'Trong Cấu hình chiến dịch, kiểm tra khu vực HCM, phường/xã và các gói đã chọn. Sau đó kéo xuống cuối trang rồi bấm Lưu thông tin. Ảnh minh họa phần danh sách gói; nút Lưu nằm phía dưới màn hình.'},
  {title:'Sao chép link gửi khách',desc:'Mở menu <strong>ba chấm → Sao chép link</strong>, rồi gửi khách hàng.',long:'Quay về danh sách chiến dịch, mở dấu ba chấm của Menu cá nhân hóa đến Khách hàng, chọn Sao chép link và gửi qua Zalo hoặc kênh trao đổi với khách hàng.'}
 ];
 function screen(i){
   const images=['affiliate.jpg','campaign.jpg','plans.jpg','config.jpg','copy-link.jpg'];
   const labels=['Affiliate Marketing – chọn Tạo link bán hàng cá nhân AM','Chiến dịch – chọn Tạo Menu cá nhân hóa đến Khách hàng','Tìm gói 1 cam, chọn gói và bấm Thêm','Cấu hình khu vực, kiểm tra các gói đã chọn','Menu ba chấm – chọn Sao chép link'];
   const file=images[i]||images[0];
   return '<div class="am-real-photo am-photo-step-'+(i+1)+'"><img src="./assets/am/'+file+'" alt="'+labels[i]+'" loading="eager"></div>';
 }
 function card(step,i){return '<button type="button" class="am-card am-card-step-'+(i+1)+'" onclick="amGuideDetail('+i+')" aria-label="Xem hướng dẫn bước '+(i+1)+'"><div class="am-card-head"><span class="am-num">'+(i+1)+'</span><b>'+step.title+'</b></div><div class="am-screen">'+screen(i)+'</div><div class="am-card-desc">'+step.desc+'</div><div class="am-card-more">Nhấn để phóng to ảnh ↗</div></button>';}
 window.amGuideDetail=function(i){if(!steps[i])return;openModal('LINK AM · BƯỚC '+(i+1)+' / 5',steps[i].title,'<div class="am-modal-content"><div class="am-screen">'+screen(i)+'</div><div class="am-instructions"><b>'+steps[i].title+'</b><p>'+steps[i].long+'</p>'+(i===0?'<div class="am-extra-example"><img src="./assets/am/sop-am.jpg" alt="Trang chủ SOP: lối vào Affiliate Marketing"><small>Từ trang chủ SOP → Affiliate Marketing → Link bán hàng cá nhân AM</small></div>':'')+'<p><strong>Lưu ý:</strong> Giá và gói hiển thị theo hệ thống hiện hành. Quà tặng Camera tuân theo điều kiện chương trình đang áp dụng.</p></div></div>');};
 const section=document.createElement('section');
 section.className='scene scene-am-guide';
 section.setAttribute('aria-hidden','true');
 section.innerHTML='<div class="am-bg"></div><div class="topbar">'+logo()+'<div style="display:flex;align-items:center;gap:15px"><span class="eyebrow">HƯỚNG DẪN BÁN HÀNG</span><span class="tag">09/11</span></div></div><div class="am-header"><div><div class="am-eyebrow">PKT SG10 / LINK BÁN HÀNG CÁ NHÂN AM</div><h1>TẠO LINK AM / <em>MENU CÁ NHÂN HÓA</em></h1><p>Tư vấn Internet / Combo kèm Camera · Chọn gói, tạo menu và gửi link cho khách</p></div><div class="am-tag"><strong>5 bước</strong> · Thao tác trên SOP</div></div><div class="am-cards">'+steps.map(card).join('')+'</div><div class="am-bottom-note"><span><b>Lưu ý:</b> Giá/gói lấy theo hệ thống hiện hành; quà tặng Cam tùy điều kiện chương trình. AM là kênh tạo Menu / link bán hàng.</span><a href="https://portal-sop.fpt.vn/" target="_blank" rel="noopener noreferrer">Mở SOP ↗</a></div>'+footer(8);
 allScenes[8].before(section);
 allScenes.splice(8,0,section);
 allScenes.forEach(function(scene,i){
   scene.dataset.page=String(i);
   scene.setAttribute('aria-label','Slide '+(i+1));
   scene.setAttribute('aria-hidden',i===active?'false':'true');
   const tag=scene.querySelector('.topbar .tag');
   if(tag){tag.textContent=String(i+1).padStart(2,'0')+'/11';tag.id='step-display-'+i;}
   const dots=scene.querySelector('.page-indicators');
   if(dots)dots.innerHTML=allScenes.map(function(_,k){return '<button type="button" title="Đến slide '+(k+1)+'" aria-label="Đến slide '+(k+1)+'" onclick="go('+k+')" class="'+(k===i?'active':'')+'"></button>';}).join('');
 });
 const labels=[['Tổng quan cuộc họp','Mục tiêu kinh doanh & chất lượng'],['Báo cáo PTTB','103/308 HĐ · 5 đội'],['Theo dõi KTV','58 KTV có Online · 21 chưa Online'],['Kickoff T9 · Poster T10','123 HĐ T9 · 7 poster T10'],['CLDV / CSAT','Đánh giá khách hàng'],['Cảnh báo chất lượng','CSAT 1–2 · Recare'],['Kết quả thu hồi','225/1.516 thiết bị (14,84%)'],['Nhân sự thu hồi','16 KTV chưa có kết quả'],['Hướng dẫn tạo link AM','5 bước · Menu cá nhân hóa'],['Kết luận','4 nhiệm vụ trọng tâm'],['Cảm ơn và trao đổi','Góp ý và đề xuất']];
 openIndex=function(){
   openModal('MỤC LỤC TRÌNH CHIẾU','11 slide · chọn nội dung để chuyển ngay','<div class="poster-grid recall-index-grid">'+labels.map(function(x,i){return '<button class="poster-button" onclick="closeModal();go('+i+')"><b class="recall-index-number">'+String(i+1).padStart(2,'0')+'</b><b>'+x[0]+'</b><span>'+x[1]+'</span></button>';}).join('')+'</div>');
 };
 document.getElementById('menuBtn').onclick=openIndex;
 document.getElementById('v8Index').onclick=openIndex;
 window.__PKT.openIndex=openIndex;
 window.__PKT.go=go;
 recallCounter();
})();
