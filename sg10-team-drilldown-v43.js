/* SG10 V43 shared Team drilldown launcher. No global KPI values are overwritten. */
(function(){
'use strict';
const all=['Tất cả','KhangTV1','LocLV2','SangH','ThinhPT','KhanhLQ3'];
const targets=[
 ['.scene-sales','Bán hàng'],
 ['.scene-staff','Bán hàng theo KTV'],
 ['.scene-csat','CLDV'],
 ['.scene-alerts','Phân tích CLDV'],
 ['.scene-recall','Thu hồi'],
 ['.scene-recall-people','Thu hồi theo KTV'],
 ['.scene-rm-sales','RM nguồn bán']
];
function openFor(scene,team){
 const leader=(typeof DATA!=='undefined'&&DATA.teams)?DATA.teams.find(t=>t.code===team)?.leader:undefined;
 if(scene.matches('.scene-sales')){if(typeof openSalesMonth==='function')openSalesMonth('oct',team==='Tất cả'?'Tất cả':leader||team);return}
 if(scene.matches('.scene-staff')){if(typeof openStaff==='function')openStaff(team==='Tất cả'?'Tất cả':leader||team);return}
 if(scene.matches('.scene-csat,.scene-alerts')){window.openSG10CLDVTeam?.(team);return}
 if(scene.matches('.scene-recall,.scene-recall-people')){if(typeof openRecovery==='function')openRecovery('all',team);return}
 if(scene.matches('.scene-rm-sales')){window.openRMSalesDetail?.(team);return}
}
function install(){
 for(const [selector,label] of targets){
  const slide=document.querySelector(selector);if(!slide||slide.querySelector('.sg10-team-drill'))continue;
  const box=document.createElement('div');box.className='sg10-team-drill';
  const caption=document.createElement('label');caption.textContent='XEM RIÊNG TEAM';caption.setAttribute('for','sg10-team-'+label.replace(/\W/g,''));
  const select=document.createElement('select');select.id='sg10-team-'+label.replace(/\W/g,'');select.setAttribute('aria-label','Chọn Team để xem '+label+' trong popup');
  for(const t of all){const opt=document.createElement('option');opt.value=t;opt.textContent=t==='Tất cả'?'Tổng SG10 · 5 Team':t;select.appendChild(opt)}
  const btn=document.createElement('button');btn.type='button';btn.textContent='Xem chi tiết ↗';
  btn.addEventListener('click',()=>openFor(slide,select.value));
  select.addEventListener('change',()=>{if(select.value!=='Tất cả')openFor(slide,select.value)});
  box.append(caption,select,btn);slide.appendChild(box);
 }
}
install();
window.SG10TeamDrilldown={openFor,teams:all.slice()};
})();