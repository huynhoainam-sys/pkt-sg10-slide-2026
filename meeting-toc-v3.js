/* SG10 Meeting / TOC V3 · 2026-10-14
 * One source of truth: the actual rendered slide DOM.
 * Installed after recovery, GSafe injection and the approved October slides.
 */
(function installMeetingTableOfContents(){
  'use strict';
  const deck=document.getElementById('scenes');
  if(!deck) { console.warn('[SG10 TOC] Deck not found'); return; }

  const catalog=[
    {cls:'scene-cover',title:'Mở đầu · Mục tiêu tháng 10',detail:'Tăng tốc bán hàng · Nâng chất lượng dịch vụ',group:'TỔNG QUAN'},
    {cls:'scene-sales',title:'Kết quả PTTB tháng 10',detail:'Lũy kế thực hiện · KPI và tiến độ theo đội',group:'BÁN HÀNG'},
    {cls:'scene-staff',title:'Báo cáo PTTB theo KTV',detail:'Theo dõi từng đội · Hỗ trợ KTV chưa Online',group:'BÁN HÀNG'},
    {cls:'scene-kickoff',title:'Kickoff · Thi đua',detail:'Kết quả tháng 9 · Chương trình tháng 10',group:'BÁN HÀNG'},
    {cls:'scene-csat',title:'Chất lượng dịch vụ · CSAT',detail:'Tỷ lệ đánh giá · CSAT 1–2 theo đội',group:'CHẤT LƯỢNG'},
    {cls:'scene-alerts',title:'Cảnh báo CLDV · Recare',detail:'Ca cần chăm sóc lại · KTV chưa có đánh giá',group:'CHẤT LƯỢNG'},
    {cls:'scene-recall',title:'Thu hồi thiết bị · Tổng quan',detail:'Phân công · Đã thu hồi · Không tiếp cận',group:'THU HỒI'},
    {cls:'scene-recall-people',title:'Thu hồi theo đội & KTV',detail:'Nhân sự cần theo sát · Nhập kho thiết bị',group:'THU HỒI'},
    {cls:'scene-gsafe',title:'GSafe · Nhập trả vật tư',detail:'Nhập MAC · Ghi nguyên nhân · Đối soát',group:'GSAFE'},
    {cls:'scene-gsafe-maintenance',title:'GSafe · Lắp đặt & bảo trì',detail:'Chuẩn hóa thiết bị · Test tín hiệu và pin',group:'GSAFE'},
    {cls:'scene-close',title:'Trọng tâm thực hiện tháng 10',detail:'PTTB · CLDV · Thu hồi · GSafe',group:'HÀNH ĐỘNG'},
    {cls:'scene-thanks',title:'Cảm ơn & trao đổi',detail:'Góp ý · Phối hợp · Triển khai thực tế',group:'KẾT THÚC'}
  ];
  const groups={ 'TỔNG QUAN':'blue', 'BÁN HÀNG':'orange', 'CHẤT LƯỢNG':'pink',
                 'THU HỒI':'green', 'GSAFE':'cyan', 'HÀNH ĐỘNG':'orange', 'KẾT THÚC':'blue'};

  function getScenes(){
    // Never assume slide count or order from source: the GSafe maintenance slide is inserted later.
    return Array.from(deck.querySelectorAll(':scope > .scene'));
  }
  function itemFor(scene,index){
    const hit=catalog.find(x=>scene.classList.contains(x.cls));
    return hit||{title:scene.querySelector('.topbar .eyebrow')?.textContent?.trim()||'Nội dung '+(index+1),
                 detail:'Mở nội dung slide',group:'NỘI DUNG'};
  }
  function activeSlideIndex(scenes){
    const activeIndex=scenes.findIndex(s=>s.classList.contains('active') && s.getAttribute('aria-hidden')!=='true');
    if(activeIndex>=0)return activeIndex;
    return Math.max(0,scenes.findIndex(s=>s.classList.contains('active')));
  }
  function indexHtml(){
    const scenes=getScenes();
    const activeIndex=activeSlideIndex(scenes);
    const fmt=n=>String(n+1).padStart(2,'0');
    return {length:scenes.length,html:
      '<div class="sg10-toc-intro"><span>CHỌN NỘI DUNG ĐỂ CHUYỂN SLIDE</span><strong>'+scenes.length+' SLIDE · HỌP PKT SG10</strong></div>'+
      '<div class="sg10-toc-grid" id="sg10-toc-grid" role="group" aria-label="Danh sách '+scenes.length+' slide">'+
      scenes.map((scene,i)=>{
        const x=itemFor(scene,i),selected=i===activeIndex;
        const tone=groups[x.group]||'blue';
        return '<button type="button" class="sg10-toc-item sg10-toc-'+tone+(selected?' is-current':'')+'"'+
               ' data-sg10-slide="'+i+'" aria-label="Đến slide '+fmt(i)+': '+x.title+'"'+
               (selected?' aria-current="page"':'')+'>'+
            '<span class="sg10-toc-meta"><strong>'+fmt(i)+'</strong><span>'+x.group+'</span>'+
            (selected?'<em>ĐANG XEM</em>':'')+'</span>'+
            '<span class="sg10-toc-title">'+x.title+'</span>'+
            '<span class="sg10-toc-detail">'+x.detail+'</span>'+
            '<span class="sg10-toc-corner" aria-hidden="true">↗</span></button>';
      }).join('')+'</div>'
    };
  }
  function navigateTo(index){
    const scenes=getScenes();
    if(!Number.isInteger(index)||index<0||index>=scenes.length)return;
    if(typeof closeModal==='function')closeModal();
    // The navigation implementation in recovery.js handles animations and queued transitions.
    if(typeof window.__PKT?.go==='function')window.__PKT.go(index);
    else if(typeof go==='function')go(index);
  }
  function showIndex(){
    const result=indexHtml();
    if(typeof openModal!=='function')return;
    openModal('MỤC LỤC HỌP PKT',result.length+' slide · Chọn mục để chuyển tới đúng trang',result.html);
    const grid=document.getElementById('sg10-toc-grid');
    grid?.addEventListener('click',event=>{
      const button=event.target.closest('button[data-sg10-slide]');
      if(!button||!grid.contains(button))return;
      navigateTo(Number(button.dataset.sg10Slide));
    });
  }
  // Override the former hard-coded popup for both controls AND keyboard shortcuts.
  openIndex=showIndex;
  window.openIndex=showIndex;
  if(window.__PKT)window.__PKT.openIndex=showIndex;
  ['menuBtn','v8Index'].forEach(id=>{
    const control=document.getElementById(id);
    if(control){control.onclick=showIndex;control.setAttribute('aria-label','Mục lục '+getScenes().length+' slide');}
  });
  window.SG10MeetingTOC={open:showIndex,go:navigateTo,entries:()=>getScenes().map(itemFor)};
  console.info('[SG10] TOC ready:',getScenes().length,'slides in real DOM order');
})();
