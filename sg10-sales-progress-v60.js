/* SG10 V60 — semantic performance styling for the five-Team PTTB progress panel.
   Uses the live number already rendered in each row; never changes KPI data. */
(function(){
'use strict';
function apply(){
 const panel=document.querySelector('.scene-sales .team-panel');
 if(!panel)return;
 const rows=[...panel.querySelectorAll('.teambar')];
 for(const row of rows){
  const p=row.querySelector('.pct');
  const number=row.querySelector('.micro');
  if(!p||!number)continue;
  const rate=Number((p.textContent||'').replace('%','').replace(',','.').trim());
  if(!Number.isFinite(rate))continue;
  const tier=rate>=85?'excellent':rate>=75?'good':rate>=65?'watch':'risk';
  row.classList.remove('sg10-progress-excellent','sg10-progress-good','sg10-progress-watch','sg10-progress-risk');
  row.classList.add('sg10-progress-'+tier);
  row.dataset.completion=String(rate);
  const matched=(number.textContent||'').match(/(\d+)\s*\/\s*(\d+)\s*PTTB/i);
  if(matched){
   const achieved=Number(matched[1]),plan=Number(matched[2]);
   if(!number.querySelector('.sg10-progress-value')){
    number.innerHTML='<strong class="sg10-progress-value">'+achieved+'<span> / '+plan+'</span></strong><span class="sg10-progress-unit"> PTTB</span>';
   }
  }
  const filled=row.querySelector('.bluebar > i,.bluebar > span,.bluebar > div,.bluebar .fill,.progress-fill');
  if(filled)filled.style.background='var(--sg10-progress-color)';
  row.setAttribute('aria-label',(row.querySelector('b')?.textContent||'Team')+' · '+rate.toFixed(1).replace('.',',')+'% hoàn thành kế hoạch');
 }
 const title=panel.querySelector('.team-panel-head .headline');
 if(title)title.textContent='TIẾN ĐỘ 5 TEAM';
 const note=panel.querySelector('.micro');
 if(note&&!note.dataset.sg10Legend){
  note.dataset.sg10Legend='1';
  note.textContent='Hoàn thành kế hoạch';
 }
}
apply();
window.applySG10SalesColors=apply;
})();