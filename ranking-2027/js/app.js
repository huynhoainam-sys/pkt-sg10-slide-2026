'use strict';
(() => {
  const canvas = document.getElementById('canvas');
  const viewport = document.getElementById('viewport');
  const pageCount = document.getElementById('pageCount');
  const progressFill = document.getElementById('progressFill');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const sourceBtn = document.getElementById('sourceBtn');
  const menuBtn = document.getElementById('menuBtn');
  const outlineBtn = document.getElementById('outlineBtn');
  const fullBtn = document.getElementById('fullBtn');
  const outlineList = document.getElementById('outlineList');
  const drawer = document.getElementById('drawer');
  const detail = document.getElementById('detail');
  const scrim = document.getElementById('scrim');
  const detailEyebrow = document.getElementById('detailEyebrow');
  const detailTitle = document.getElementById('detailTitle');
  const detailContent = document.getElementById('detailContent');
  const imageViewer=document.getElementById('imageViewer');
  const viewerStage=document.getElementById('viewerStage');
  const viewerImage=document.getElementById('viewerImage');
  const viewerTitle=document.getElementById('viewerTitle');
  const zoomLabel=document.getElementById('zoomLabel');
  let viewerOpen=false, zoom=1, panX=0, panY=0, dragStart=null, viewerReturnFocus=null;
  const checked = [false,false,false,false];
  // Context-specific backgrounds. For images generated for this deck, try the artwork first;
  // fall back to photos already used by the user's SG10 public repository. Images load only when
  // the slide is opened (or adjacent preload is idle). No background asset blocks navigation.
  const SG10='https://raw.githubusercontent.com/huynhoainam-sys/pkt-sg10-slide-2026/main/assets/';
  const ADOBE='https://photoshop-api.adobe.io/v2/short-url/';
  const SCENES=[
    {source:'SG10', primary:SG10+'cover-4people.jpg'},
    {source:'SG10', primary:SG10+'recall-followup.jpg'},
    {source:'AI · TINPNC WiFi', primary:ADOBE+'urn:aaid:ps:US:e2c553d0-5650-407f-b2c5-539bb6ca7396',fallback:SG10+'recall-summary.jpg'},
    {source:'AI · TINPNC CLL', primary:ADOBE+'urn:aaid:ps:US:8e64eb9b-d356-47e2-a5bd-95746c06a204',fallback:SG10+'recall-followup.jpg'},
    {source:'AI · DVKH/ĐT', primary:ADOBE+'urn:aaid:ps:US:0995bece-edbb-4c2e-a931-fa717702e2b5',fallback:SG10+'recall-followup.jpg'},
    {source:'AI · Combo/IPTV', primary:ADOBE+'urn:aaid:ps:US:40f6e040-abd7-4836-91d8-7c208b690735',fallback:SG10+'recall-summary.jpg'},
    {source:'AI · TINPNC hiện trường', primary:ADOBE+'urn:aaid:ps:US:3212613b-709b-46f3-b432-7c76d86b35d1',fallback:SG10+'cover-4people.jpg'},
    {source:'SG10', primary:SG10+'recall-summary.jpg'},
    {source:'AI · phối hợp đội', primary:ADOBE+'urn:aaid:ps:US:78325b63-9ec6-4500-9348-57e1670caacf',fallback:SG10+'cover-4people.jpg'},
    {source:'SG10', primary:SG10+'cover-4people.jpg'}
  ];
  const scenePromises=new Map();
  function photoLoad(index){
    if(index<0||index>=SCENES.length||scenePromises.has(index))return;
    const item=SCENES[index];
    function load(url,next){
      const img=new Image(); img.decoding='async';
      img.onload=()=>{slideEls[index].style.setProperty('--scene-img',`url("${url}")`);slideEls[index].dataset.photo='ready';slideEls[index].dataset.photoSource=url===item.primary?item.source:'SG10 dự phòng'};
      img.onerror=()=>{if(next)load(next,null);else slideEls[index].dataset.photo='unavailable'};
      img.src=url;
    }
    scenePromises.set(index,true);load(item.primary,item.fallback);
  }
  let idlePhoto;
  function schedulePhoto(index){
    photoLoad(index);
    if(idlePhoto && 'cancelIdleCallback' in window)cancelIdleCallback(idlePhoto);
    const others=()=>{photoLoad(index+1);photoLoad(index-1)};
    if('requestIdleCallback' in window)idlePhoto=requestIdleCallback(others,{timeout:1300});
    else setTimeout(others,400);
  }

  let current = 0;
  let opened = null;
  let touchStart = null;
  let lastFocus = null;
  const keyFocusSelector = 'button:not([disabled]),a[href]';

  const rawSource = (n) => `<div class="source-section"><div><h3>TÀI LIỆU THAM CHIẾU · SLIDE ${String(n).padStart(2,'0')}</h3><p class="source-caption">Ảnh slide gốc được lưu riêng, không xuất hiện trong nội dung truyền thông.</p></div><button type="button" class="source-open" data-sourceimage="${n}" aria-label="Mở ảnh PowerPoint gốc slide ${n} toàn màn hình"><span class="source-symbol">▧</span> XEM ẢNH SLIDE GỐC <span>↗</span></button></div>`;
  canvas.innerHTML = SLIDES.map((s,i) => `<section class="slide photo-scene ${s.skin}" data-index="${i}" aria-label="Slide ${i+1}: ${s.title}" ${i === 0?'':'aria-hidden="true"'}>${s.html()}</section>`).join('');
  const slideEls = [...canvas.querySelectorAll('.slide')];
  outlineList.innerHTML = SLIDES.map((s,i) => `<button type="button" class="outline-button" data-goto="${i}"><span>${String(i+1).padStart(2,'0')}</span><div><small>${s.section}</small><strong>${s.short}</strong></div></button>`).join('');

  function scaleDeck(){
    if(window.innerWidth <= 760){
      canvas.style.removeProperty('--deck-scale');
      viewport.classList.add('reading-mode');
      return;
    }
    viewport.classList.remove('reading-mode');
    const gutter = 28;
    const scale = Math.min((viewport.clientWidth-gutter)/1600,(viewport.clientHeight-gutter)/900);
    canvas.style.setProperty('--deck-scale',String(Math.max(.2,scale)));
  }
  function goTo(n){
    const idx = Math.min(Math.max(Number(n)||0,0),SLIDES.length-1);
    if(opened) closePanel();
    if(idx === current && slideEls[current].classList.contains('active'))return;
    slideEls.forEach((el,i)=>{el.classList.toggle('active',i===idx); el.setAttribute('aria-hidden', i===idx?'false':'true');});
    current=idx;
    pageCount.textContent=`${String(idx+1).padStart(2,'0')} / ${String(SLIDES.length).padStart(2,'0')}`;
    progressFill.style.width=`${((idx+1)/SLIDES.length)*100}%`;
    prevBtn.disabled=idx===0;
    nextBtn.disabled=idx===SLIDES.length-1;
    sourceBtn.hidden=SLIDES[idx].source==null;
    outlineList.querySelectorAll('[data-goto]').forEach(el=>el.classList.toggle('active',Number(el.dataset.goto)===idx));
    viewport.scrollTo({top:0,behavior:'instant'});
    if(history.replaceState){try{history.replaceState(null,'',`#slide-${idx+1}`)}catch(e){}}
    document.title = `${idx+1}/${SLIDES.length} · ${SLIDES[idx].title} | Ranking KTV 2027`;
    if(idx===7)updateChecks();
    scaleDeck();
    schedulePhoto(idx);
  }
  function openPanel(which){
    lastFocus=document.activeElement;
    closePanel(false);
    opened=which;
    scrim.hidden=false;
    const el=which==='drawer'?drawer:detail;
    el.classList.add('open');el.setAttribute('aria-hidden','false');
    document.body.classList.add('dialog-open');
    const focusNode=el.querySelector('[data-close]'); if(focusNode) focusNode.focus();
  }
  function closePanel(restore=true){
    if(viewerOpen)closeImage();
    drawer.classList.remove('open');detail.classList.remove('open');
    drawer.setAttribute('aria-hidden','true');detail.setAttribute('aria-hidden','true');
    scrim.hidden=true;opened=null;document.body.classList.remove('dialog-open');
    if(restore&&lastFocus&&typeof lastFocus.focus==='function') lastFocus.focus();
  }
  function showDetail(key){
    const d=DETAILS[key];if(!d)return;
    detailEyebrow.textContent=d.eyebrow;
    detailTitle.textContent=d.title;
    detailContent.innerHTML=d.html+(d.source?rawSource(d.source):'');
    detail.querySelector('.detail-scroll').scrollTop=0;
    openPanel('detail');
  }
  function showSource(){
    const s=SLIDES[current];if(s.source==null)return;
    detailEyebrow.textContent='ĐỐI CHIẾU NỘI DUNG';
    detailTitle.textContent=s.title;
    detailContent.innerHTML=`<p>Ảnh tham chiếu từ file <b>Ranking KTV và đội trưởng 2027.pptx</b>. Phần nội dung chính đã được tái cấu trúc để dễ truyền thông cho KTV, không làm thay đổi ngưỡng đánh giá.</p>`+rawSource(s.source);
    detail.querySelector('.detail-scroll').scrollTop=0;
    openPanel('detail');
  }
  function paintViewer(){
    zoom=Math.min(5,Math.max(1,zoom));
    viewerImage.style.transform=`translate3d(${panX}px,${panY}px,0) scale(${zoom})`;
    zoomLabel.textContent=`${Math.round(zoom*100)}%`;
    document.getElementById('zoomOut').disabled=zoom<=1.01;
    document.getElementById('zoomIn').disabled=zoom>=4.99;
  }
  function openImage(n){
    viewerReturnFocus=document.activeElement;
    const nstr=String(n).padStart(2,'0');
    viewerImage.src=`assets/goc_slide_${nstr}.webp`;
    viewerImage.alt=`Nội dung ảnh slide gốc ${n} trong tài liệu Ranking KTV 2027`;
    viewerTitle.textContent=`SLIDE ${nstr} — RANKING KTV 2027`;
    zoom=1;panX=0;panY=0;paintViewer();
    imageViewer.hidden=false;imageViewer.classList.add('show');
    imageViewer.setAttribute('aria-hidden','false');viewerOpen=true;
    document.getElementById('closeViewer').focus();
  }
  function closeImage(){
    imageViewer.classList.remove('show'); imageViewer.hidden=true;
    imageViewer.setAttribute('aria-hidden','true'); viewerOpen=false;
    viewerImage.removeAttribute('src');
    if(viewerReturnFocus?.isConnected) viewerReturnFocus.focus();
  }
  function setZoom(v){zoom=Math.max(1,Math.min(5,v));if(zoom===1){panX=0;panY=0}paintViewer()}
  document.getElementById('zoomIn').addEventListener('click',()=>setZoom(zoom+.35));
  document.getElementById('zoomOut').addEventListener('click',()=>setZoom(zoom-.35));
  document.getElementById('zoomReset').addEventListener('click',()=>setZoom(1));
  document.getElementById('closeViewer').addEventListener('click',closeImage);
  viewerStage.addEventListener('wheel',e=>{if(!viewerOpen)return;e.preventDefault();setZoom(zoom+(e.deltaY<0?.22:-.22))},{passive:false});
  viewerStage.addEventListener('pointerdown',e=>{
    if(zoom<=1 || e.button!==0)return;
    dragStart={id:e.pointerId,x:e.clientX-panX,y:e.clientY-panY};
    viewerStage.setPointerCapture(e.pointerId);viewerStage.classList.add('dragging');
  });
  viewerStage.addEventListener('pointermove',e=>{
    if(!dragStart||dragStart.id!==e.pointerId)return;
    panX=e.clientX-dragStart.x;panY=e.clientY-dragStart.y;paintViewer();
  });
  for(const type of ['pointerup','pointercancel'])viewerStage.addEventListener(type,()=>{dragStart=null;viewerStage.classList.remove('dragging')});
  imageViewer.addEventListener('click',e=>{if(e.target===imageViewer)closeImage()});
  function updateChecks(){
    const items=canvas.querySelectorAll('[data-check]');
    items.forEach(el=>{
      const i=Number(el.dataset.check);
      const yes=checked[i];
      el.classList.toggle('on',yes);
      el.setAttribute('aria-pressed',yes?'true':'false');
      const state=el.querySelector('.self-state');
      if(state){
        state.textContent=yes?'ĐẠT':'CHƯA ĐẠT';
        state.classList.toggle('on',yes);
        state.classList.toggle('off',!yes);
      }
    });
    const count=checked.filter(Boolean).length;
    const num=document.getElementById('checkedCount');
    const bar=document.getElementById('checkProgress');
    const cap=document.getElementById('checkedCaption');
    const label=document.getElementById('selfResultLabel');
    const explain=document.getElementById('selfResultExplain');
    const card=document.getElementById('selfStatusCard');
    if(num)num.textContent=count;
    if(bar)bar.style.width=`${count*25}%`;
    if(cap)cap.textContent=`${count} tiêu chí đang đạt`;
    if(label&&explain&&card){
      card.classList.remove('pass','fail');
      if(count>=3){
        label.textContent='ĐẠT CÔNG VIỆC';
        explain.textContent = count===4 ? 'Bạn đang mô phỏng đạt 4/4 tiêu chí.' : `Bạn đang mô phỏng đạt ${count}/4 tiêu chí — đủ điều kiện đạt công việc.`;
        card.classList.add('pass');
      }else{
        label.textContent='CHƯA ĐẠT CÔNG VIỆC';
        explain.textContent=`Hiện mới đạt ${count}/4 tiêu chí — cần đạt ít nhất 3/4 tiêu chí.`;
        card.classList.add('fail');
      }
    }
  }
  function toggleCheck(i){checked[i]=!checked[i];updateChecks()}
  canvas.addEventListener('click', e=>{
    const action=e.target.closest('[data-detail],[data-check],#resetChecks');if(!action)return;
    if(action.dataset.detail)showDetail(action.dataset.detail);
    else if(action.dataset.check!=null)toggleCheck(Number(action.dataset.check));
    else if(action.id==='resetChecks'){checked.fill(false);updateChecks()}
  });
  detailContent.addEventListener('click',e=>{const trigger=e.target.closest('[data-sourceimage]');if(trigger)openImage(Number(trigger.dataset.sourceimage))});
  outlineList.addEventListener('click',e=>{const el=e.target.closest('[data-goto]');if(el)goTo(Number(el.dataset.goto))});
  prevBtn.addEventListener('click',()=>goTo(current-1));
  nextBtn.addEventListener('click',()=>goTo(current+1));
  menuBtn.addEventListener('click',()=>openPanel('drawer'));
  outlineBtn.addEventListener('click',()=>openPanel('drawer'));
  sourceBtn.addEventListener('click',showSource);
  scrim.addEventListener('click',()=>closePanel());
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>closePanel()));
  fullBtn.addEventListener('click',async()=>{
    try { if(!document.fullscreenElement){await document.documentElement.requestFullscreen()}else{await document.exitFullscreen()} }
    catch(e){console.info('Trình duyệt không cho phép toàn màn hình:', e.message)}
  });
  document.addEventListener('keydown',e=>{
    const tag=e.target?.tagName;
    if(viewerOpen){
      if(e.key==='Escape'){e.preventDefault();closeImage()}
      else if(e.key==='+'||e.key==='='){e.preventDefault();setZoom(zoom+.35)}
      else if(e.key==='-'){e.preventDefault();setZoom(zoom-.35)}
      else if(e.key==='0'){e.preventDefault();setZoom(1)}
      else if(e.key==='ArrowUp'&&zoom>1){e.preventDefault();panY+=60;paintViewer()}
      else if(e.key==='ArrowDown'&&zoom>1){e.preventDefault();panY-=60;paintViewer()}
      return;
    }
    if(e.key==='Escape'){if(opened){e.preventDefault();closePanel()}return}
    if(opened){
      if(e.key==='Tab'){
        const panel=opened==='drawer'?drawer:detail;
        const nodes=[...panel.querySelectorAll(keyFocusSelector)].filter(x=>x.getClientRects().length);
        if(nodes.length){const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){last.focus();e.preventDefault()}else if(!e.shiftKey&&document.activeElement===last){first.focus();e.preventDefault()}}
      }
      return;
    }
    if(['INPUT','TEXTAREA','SELECT'].includes(tag))return;
    if(e.key==='ArrowRight' || e.key==='PageDown' || e.key===' '){if(e.key===' ' && tag==='BUTTON')return; e.preventDefault();goTo(current+1)}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();goTo(current-1)}
    else if(e.key==='Home'){goTo(0)}
    else if(e.key==='End'){goTo(SLIDES.length-1)}
    else if(e.key.toLowerCase()==='m'){e.preventDefault();openPanel('drawer')}
    else if(e.key.toLowerCase()==='f'){e.preventDefault();fullBtn.click()}
  });
  viewport.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY}}, {passive:true});
  viewport.addEventListener('touchend',e=>{
    if(!touchStart||!e.changedTouches.length)return;
    const dx=e.changedTouches[0].clientX-touchStart.x;
    const dy=e.changedTouches[0].clientY-touchStart.y;
    if(Math.abs(dx)>95 && Math.abs(dy)<Math.abs(dx)*.5 && !opened)goTo(current+(dx<0?1:-1));
    touchStart=null;
  },{passive:true});
  window.addEventListener('resize',scaleDeck,{passive:true});
  window.addEventListener('orientationchange',scaleDeck,{passive:true});
  window.addEventListener('fullscreenchange',scaleDeck);
  const initial = Number((location.hash.match(/^#slide-(\d+)$/)||[])[1]) || 1;
  goTo(initial-1);
  updateChecks();
  window.__rankingDeck = {goTo,showDetail,showSource,get index(){return current},get slideCount(){return SLIDES.length}};
})();
