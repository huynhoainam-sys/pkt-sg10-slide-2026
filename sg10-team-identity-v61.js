/* SG10 V61 — stable Team identity, distinct from performance traffic lights. */
(function(){
'use strict';
const mapping={
 'KHANGTV1':'khang','KHANGTV':'khang',
 'LOCLV2':'loc','LOCLV':'loc',
 'SANGH':'sang','THINHPT':'thinh',
 'KHANHLQ3':'khanh'
};
const classes=['sg10-team-khang','sg10-team-loc','sg10-team-sang','sg10-team-thinh','sg10-team-khanh'];
function teamOf(value){
 const key=String(value||'').trim().toUpperCase().replace(/\s+/g,'');
 return mapping[key]||null;
}
function setIdentity(el,selected){
 if(!el||!el.classList)return;
 const team=teamOf(selected==null?el.textContent:selected);
 const needs=team?'sg10-team-'+team:null;
 if(el.dataset.sg10TeamIdentity===(needs||'all'))return;
 el.classList.remove('sg10-team-name','sg10-team-all',...classes);
 if(team)el.classList.add('sg10-team-name',needs);
 else if(el.matches('select'))el.classList.add('sg10-team-all');
 el.dataset.sg10TeamIdentity=needs||'all';
}
function apply(root=document){
 const lookups=[
 '#stage .scene-sales .team-panel .teambar > b',
 '#stage .team-mark',
 '#stage .cldv-recovery-layout .team-mark',
 '#stage .recall-slide-table .team-mark',
 '#stage .sg10-team-drill select',
 '#modalback .team-mark',
 '#modalback .cldv-popup-compact-table tbody td:first-child',
 '#modalback .cldv-popup-staff-table tbody td:nth-child(3)',
 '#modalback .sg10-team-detail-table tbody td:first-child',
 '#modalback .rm-popup-table tbody td:nth-child(5)',
 '#modalback .rm-team-row-link',
 '#modalback .sg10-team-control select',
 '#modalback #sg10CLDVTeam',
 '#modalback #rmTeamFilter',
 '#modalback #recoveryTeamSelect'
 ];
 const selector=lookups.join(',');
 if(root.matches&&root.matches(selector))setIdentity(root,root.matches('select')?root.value:null);
 if(root.querySelectorAll)root.querySelectorAll(selector).forEach(el=>setIdentity(el,el.matches('select')?el.value:null));
}
apply();
const roots=[document.querySelector('#stage'),document.querySelector('#modalback')].filter(Boolean);
for(const root of roots){
 const observer=new MutationObserver(changes=>{
  let relevant=false;
  for(const mutation of changes)if(mutation.type==='childList'&&mutation.addedNodes.length){relevant=true;break}
  if(relevant)apply(root);
 });
 observer.observe(root,{subtree:true,childList:true});
 root.addEventListener('change',e=>{if(e.target?.matches('select'))setIdentity(e.target,e.target.value)},true);
}
window.applySG10TeamIdentity=apply;
})();