/* SG10 Meeting / TOC V3 · 2026-10-14
 * One source of truth: the actual rendered slide DOM.
 * Installed after recovery, GSafe injection and the approved October slides.
 */
(function installMeetingTableOfContents(){
  'use strict';
  const deck=document.getElementById('scenes');
  if(!deck) { console.warn('[SG10 TOC] Deck not found'); return; }

  const catalog=[
    {cls:'scene-cover',title:'HỌP PKT THÁNG 11',detail:'Kết quả tháng 10 · Trọng tâm tháng 11',group:'TỔNG QUAN'},
    {cls:'scene-sales',title:'Kết quả bán hàng tháng 10',detail:'PTTB bán T10 đã Online · KPI 5 Team',group:'BÁN HÀNG'},
    {cls:'scene-staff',title:'Kết quả bán hàng theo KTV',detail:'Số liệu T10/2026 · theo Team và KTV',group:'BÁN HÀNG'},
    {cls:'scene-kickoff',title:'Kickoff · Thi đua',detail:'Kết quả tháng 9 · Chương trình tháng 10',group:'BÁN HÀNG'},
    {cls:'scene-csat',title:'Chất lượng dịch vụ tháng 10',detail:'Tỷ lệ đánh giá · CSAT 1–2 theo Team',group:'CHẤT LƯỢNG'},
    {cls:'scene-alerts',title:'Phân tích CLDV theo Team',detail:'Kết quả T10/2026 · Triển khai · Bảo trì · CSAT 1–2',group:'CHẤT LƯỢNG'},
    {cls:'scene-recall',title:'Kết quả thu hồi tháng 10',detail:'Phân công · Đã thu hồi · Không tiếp cận',group:'THU HỒI'},
    {cls:'scene-recall-people',title:'Nhân sự cần theo sát',detail:'Kết quả thu hồi T10 · KTV còn tồn và không thành công',group:'THU HỒI'},
    {cls:'scene-rm-sales',title:'Cảnh báo RM <3T / <6T · PKT bán',detail:'Lũy kế T1–T10/2026 · Team và nhân sự nguồn PKT',group:'CHẤT LƯỢNG'},
    {cls:'scene-close',title:'Trọng tâm thực hiện tháng 11',detail:'Thu hồi · Gia cố · CL SOS · CL/PTC · Tập điểm · Lịch OFF',group:'HÀNH ĐỘNG'},
    {cls:'scene-thanks',title:'Cảm ơn & trao đổi',detail:'Họp PKT tháng 11/2026 · Góp ý và triển khai',group:'KẾT THÚC'}
  ];
  const groups={ 'TỔNG QUAN':'blue', 'BÁN HÀNG':'orange', 'CHẤT LƯỢNG':'pink',
                 'THU HỒI':'green', 'HÀNH ĐỘNG':'orange', 'KẾT THÚC':'blue'};

  function getScenes(){
    // Actual DOM order includes the sales-origin RM warning; hidden GSafe/Kickoff excluded.
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
      '<div class="sg10-toc-intro"><span>CHỌN NỘI DUNG ĐỂ CHUYỂN SLIDE</span><strong>'+scenes.length+' SLIDE · HỌP PKT THÁNG 11/2026</strong></div>'+
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
    openModal('MỤC LỤC HỌP PKT THÁNG 11',result.length+' slide · Chọn mục để chuyển tới đúng trang',result.html);
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
