/* Layout zoom keeps text drawn at its final display size, instead of enlarging a transformed stage. */
(function(){
 'use strict';
 const stage=document.getElementById('stage');
 if(!stage)return;
 const nativeZoom=CSS.supports('zoom','1');
 function fitNative(){
  const viewport=window.visualViewport;
  const width=viewport?.width||window.innerWidth;
  const height=viewport?.height||window.innerHeight;
  const controls=document.querySelector('.v8-controls');
  const controlsHeight=controls&&!document.fullscreenElement?Math.ceil(controls.getBoundingClientRect().height)+16:0;
  const fit=Math.max(.05,Math.min((width-24)/1600,(height-controlsHeight-24)/900));
  const dpr=window.devicePixelRatio||1;
  const ratio=Math.floor(fit*1600*dpr)/(1600*dpr);
  if(nativeZoom){
   stage.style.transform='none';stage.style.transformOrigin='0 0';stage.style.zoom=String(ratio);
   stage.style.left=(Math.round((width-1600*ratio)*dpr/2)/dpr)/ratio+'px';
   stage.style.top=(Math.round((height-controlsHeight-900*ratio)*dpr/2)/dpr)/ratio+'px';
  }else stage.style.setProperty('--stage-scale',ratio);
 }
 fitStage=fitNative;
 fitNative();
 let scheduled=false;
 const schedule=()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;fitNative();});};
 window.addEventListener('resize',schedule);
 window.visualViewport?.addEventListener('resize',schedule);
 document.addEventListener('fullscreenchange',schedule);
 document.fonts?.ready.then(schedule);
 // Keep the full account available without repeating it on another table line.
 const body=document.getElementById('modal-body');
 const shorten={'Kế hoạch T10':'KH T10','Kế hoạch T9':'KH T9','PTTB đến 15/10':'PTTB 15/10','Tỷ lệ KH T10':'% KH T10','Tỷ lệ KPI T9':'% KPI T9','Tỷ lệ đã TH':'% Đã TH','Tỷ lệ không TC':'% Không TC','WiFi 6 + 7 đã TH':'WiFi 6+7 TH','Tỷ lệ WiFi 6 + 7':'% WiFi 6+7','Đội trưởng':'Đội trưởng','Hành động / Trạng thái':'Hành động / Trạng thái'};
 function compact(){
  body.querySelectorAll('.data-table').forEach(table=>{
   table.querySelectorAll('.recall-account').forEach(el=>{const cell=el.closest('td');if(!cell.title)cell.title=el.textContent.trim();});
   table.querySelectorAll('.sort-label').forEach(label=>{const full=label.dataset.fullLabel||label.textContent.trim();if(shorten[full]&&label.textContent!==shorten[full]){label.dataset.fullLabel=full;label.textContent=shorten[full];label.closest('button').title=full+' · Nhấp để sắp xếp';}});
  });
 }
 const observer=new MutationObserver(compact);observer.observe(body,{childList:true,subtree:true});compact();
})();
