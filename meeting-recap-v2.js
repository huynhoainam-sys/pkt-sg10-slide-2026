/* Meeting SG10: slide 12 consolidates all prior reporting, procedures and actions.
   Responsive slide navigation is regenerated from actual DOM order after GSafe insertion. */
(function setupSG10RecapAndIndex(){
  'use strict';
  const root=document.getElementById('scenes');
  const recap=root && root.querySelector('.scene-thanks');
  if(!root || !recap || !root.querySelector('.scene-gsafe-maintenance')) {
    console.warn('SG10 recap: expected scenes not yet initialized');
    return;
  }
  const types={
    sales:'<path d="M3 20V9M9 20V4M15 20v-8M21 20V7M2 21h20"/>',
    kickoff:'<path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v3c0 3 2 5 5 5m7-8h4v3c0 3-2 5-5 5m-3-1v5m-5 4h10m-8-4h6"/>',
    care:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a5 5 0 0 1 8-4 5 5 0 0 1 8 4ZM8 10h2l2-3 2 6 2-3h2"/>',
    recall:'<path d="m3 7 9-4 9 4-9 4-9-4Zm0 0v10l9 4 9-4V7M12 11v10m4-11 3-2"/>',
    device:'<path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2 4h6m-6 5h6m-6 4h2"/>',
    safety:'<path d="m12 2 8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Zm-4 9 3 3 5-5"/>'
  };
  const group=[
    {id:'scene-sales',icon:'sales',num:'01',title:'PTTB · TIẾN ĐỘ KTV',metric:'103 / 308 PTTB',
      desc:'Đạt 33,4% kế hoạch (13/10). Bám từng đội, hỗ trợ KTV chưa Online và thúc đẩy hợp đồng đúng hạn.',
      color:'#64c7ff',reference:'Chi tiết slide 02–03'},
    {id:'scene-kickoff',icon:'kickoff',num:'02',title:'KICKOFF · PHONG TRÀO',metric:'123 HĐ · 66 KTV',
      desc:'Tổng kết 11 ngày Kickoff tháng 9. Triển khai chương trình tháng 10 đúng điều kiện Online, ảnh và thời hạn.',
      color:'#ffab65',reference:'Chi tiết slide 04'},
    {id:'scene-csat',icon:'care',num:'03',title:'CLDV · CSAT · RECARE',metric:'6,78% CSAT 1–2',
      desc:'8/118 đánh giá (11/10), mục tiêu dưới 3%. Xử lý đúng nguyên nhân, recare ca chưa hài lòng; mời đánh giá khách quan.',
      color:'#ff8192',reference:'Chi tiết slide 05–06'},
    {id:'scene-recall',icon:'recall',num:'04',title:'THU HỒI · NHẬP KHO',metric:'225 / 1.516 ĐÃ TH',
      desc:'Còn 955 chưa thực hiện, 336 không tiếp cận. Bám KTV, ưu tiên WiFi 6/7 và theo dõi vật tư đến khi nhập kho.',
      color:'#75e2b2',reference:'Chi tiết slide 07–08'},
    {id:'scene-gsafe',icon:'device',num:'05',title:'GSAFE · NHẬP TRẢ VẬT TƯ',metric:'ĐÚNG MAC · ĐÚNG LỖI',
      desc:'KTV tạo phiếu, thủ kho duyệt, BDA đối soát. Ghi chính xác nguyên nhân, trường hợp “Khác” phải nêu rõ lỗi.',
      color:'#b5a0ff',reference:'Chi tiết slide 09'},
    {id:'scene-gsafe-maintenance',icon:'safety',num:'06',title:'GSAFE · LẮP ĐẶT & BẢO TRÌ',metric:'TEST TÍN HIỆU + PIN',
      desc:'Áp dụng 15/10: đủ điều kiện mới lắp; bổ sung nút nhấn, tấm đế; kiểm tra IN4, AUTO CALL và ghi rõ BBNT.',
      color:'#ffcb70',reference:'Chi tiết slide 10'}
  ];
  recap.classList.add('scene-recap');
  recap.setAttribute('aria-label','Slide 12 · Tổng kết sáu nội dung trọng tâm');
  recap.querySelector('.thanks-content')?.remove();
  recap.querySelector('.thanks-last')?.remove();
  const wrap=document.createElement('div');
  wrap.className='recap-wrap';
  wrap.innerHTML='<div class="recap-topline">HỌP PKT SG10 · THÁNG 10/2026 <span class="recap-label">TỔNG KẾT / HÀNH ĐỘNG</span></div>'
   +'<h1 class="recap-title">6 TRỌNG TÂM · <em>1 CAM KẾT HÀNH ĐỘNG</em></h1>'
   +'<p class="recap-subtitle">Hệ thống lại các nội dung vừa trình bày. Chọn từng mục để trở về slide chuyên đề và xem chi tiết.</p>'
   +'<div class="recap-grid"></div>'
   +'<div class="recap-action"><strong>CHỐT HÀNH ĐỘNG</strong><span>Đội trưởng giao việc, hỗ trợ theo ca · KTV thực hiện đúng quy trình, đúng hẹn · Cập nhật và đối soát kết quả hằng ngày.</span></div>';
  recap.append(wrap);
  const grid=wrap.querySelector('.recap-grid');
  function goToClass(cls){
    const scenes=Array.from(root.querySelectorAll(':scope > .scene'));
    const idx=scenes.findIndex(el=>el.classList.contains(cls));
    if(idx<0)return;
    if(document.getElementById('modalback')?.hidden===false && typeof window.closeModal==='function')window.closeModal();
    if(window.__PKT && typeof window.__PKT.go==='function')window.__PKT.go(idx);
    else if(typeof window.go==='function')window.go(idx);
  }
  group.forEach(item=>{
    const card=document.createElement('button');
    card.type='button';
    card.className='recap-card';
    card.style.setProperty('--recap-accent',item.color);
    card.setAttribute('aria-label',item.title+'. Chuyển về '+item.reference);
    card.innerHTML='<div class="recap-card-head"><span class="recap-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24">'+types[item.icon]+'</svg></span>'
      +'<span class="recap-card-title">'+item.title+'</span><span class="recap-card-number" style="margin-left:auto">'+item.num+'</span></div>'
      +'<div class="recap-metric">'+item.metric+'</div><p class="recap-description">'+item.desc+'</p><span class="recap-hint">'+item.reference+' ↗</span>';
    card.addEventListener('click',()=>goToClass(item.id));
    grid.append(card);
  });

  const entries=[
    ['scene-cover','01','Mở đầu & mục tiêu','Tăng bán hàng · Nâng CLDV'],
    ['scene-sales','02','Kết quả PTTB','Tiến độ và chỉ tiêu tháng 10'],
    ['scene-staff','03','PTTB theo đội / KTV','Tập trung hỗ trợ nhân sự'],
    ['scene-kickoff','04','Kickoff & thi đua','Kết quả T9 · Chương trình T10'],
    ['scene-csat','05','Chất lượng dịch vụ','CSAT 1–2 · Tỷ lệ đánh giá'],
    ['scene-alerts','06','Cảnh báo & recare','KTV rủi ro · Nhắc đánh giá'],
    ['scene-recall','07','Kết quả thu hồi','Phân công · Đã TH · Không TC'],
    ['scene-recall-people','08','Thu hồi theo nhân sự','Đội và KTV cần theo sát'],
    ['scene-gsafe','09','GSafe · Nhập trả vật tư','MAC · Nguyên nhân · Đối soát'],
    ['scene-gsafe-maintenance','10','GSafe · Lắp đặt / bảo trì','Test hệ thống · Pin dự phòng'],
    ['scene-close','11','Kế hoạch hành động','Các ưu tiên triển khai'],
    ['scene-recap','12','Tổng kết cuộc họp','6 trọng tâm · 1 cam kết']
  ];
  const menuByClass=new Map(entries.map(a=>[a[0],a]));
  function resolveEntry(scene,index){
    for(const [cls,record] of menuByClass)if(scene.classList.contains(cls))return record;
    return [null,String(index+1).padStart(2,'0'),scene.querySelector('.topbar .eyebrow')?.textContent?.trim()||'Nội dung','Xem chi tiết'];
  }
  function showSG10Index(){
    const scenes=Array.from(root.querySelectorAll(':scope > .scene'));
    const current=scenes.findIndex(el=>el.classList.contains('active'));
    const html='<div class="sg10-menu-grid">'+scenes.map((slide,i)=>{
      const e=resolveEntry(slide,i);
      const active=i===current;
      return '<button type="button" class="sg10-menu-item'+(active?' sg10-menu-active':'')+'" data-slide-target="'+i+'" aria-label="Đi đến slide '+(i+1)+': '+e[2]+'"'+(active?' aria-current="page"':'')+'>'
        +'<span class="sg10-menu-row"><span class="sg10-menu-number">'+String(i+1).padStart(2,'0')+'</span>'+(active?'<span class="sg10-menu-current">ĐANG XEM</span>':'')+'</span>'
        +'<b>'+e[2]+'</b><small>'+e[3]+'</small></button>';
    }).join('')+'</div>';
    if(typeof window.openModal!=='function')return;
    window.openModal('MỤC LỤC HỌP PKT',scenes.length+' slide · Bấm một mục để chuyển đến nội dung',html);
    document.querySelectorAll('.sg10-menu-item[data-slide-target]').forEach(button=>{
      button.addEventListener('click',()=> {
        const index=Number(button.dataset.slideTarget);
        if(typeof window.closeModal==='function')window.closeModal();
        if(window.__PKT&&typeof window.__PKT.go==='function')window.__PKT.go(index);
        else if(typeof window.go==='function')window.go(index);
      });
    });
  }
  window.openIndex=showSG10Index;
  const menuBtn=document.getElementById('menuBtn');
  const navMenu=document.getElementById('v8Index');
  if(menuBtn)menuBtn.onclick=showSG10Index;
  if(navMenu)navMenu.onclick=showSG10Index;
  window.__PKT=window.__PKT||{};
  window.__PKT.openIndex=showSG10Index;
  window.__PKT.goToTopic=goToClass;
  // GSafe was injected after the original nav initialization; always refresh actual scene metadata.
  const scenes=Array.from(root.querySelectorAll(':scope > .scene'));
  scenes.forEach((slide,i)=>{
    slide.dataset.page=String(i);
    const counter=slide.querySelector('.topbar .tag');
    if(counter){counter.textContent=String(i+1).padStart(2,'0')+'/'+scenes.length;counter.id='step-display-'+i;}
    const dots=slide.querySelector('.page-indicators');
    if(dots)dots.innerHTML=scenes.map((_,k)=>'<button type="button" title="Đến slide '+(k+1)+'" aria-label="Đến slide '+(k+1)+'" onclick="go('+k+')" class="'+(k===i?'active':'')+'"></button>').join('');
  });
  const counter=document.getElementById('v8Count');
  if(counter){const activeIdx=Math.max(0,scenes.findIndex(el=>el.classList.contains('active')));counter.textContent=String(activeIdx+1).padStart(2,'0')+' / '+String(scenes.length).padStart(2,'0');}
  console.info('SG10 meeting: recap and menu ready',scenes.length,'slides');
})();
