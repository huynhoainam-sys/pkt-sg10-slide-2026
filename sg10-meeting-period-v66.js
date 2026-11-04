/* V66 - meeting month and reporting period are separate. Text presentation only. */
(function(){
'use strict';
const month='HỌP PKT THÁNG 11/2026';
const overview='KẾT QUẢ T10 · TRỌNG TÂM T11';
const titles=[
 ['.scene-cover','HỌP PKT <span>THÁNG 11</span>',null],
 ['.scene-sales','KẾT QUẢ <span>BÁN HÀNG THÁNG 10</span>','HĐ bán T10 đã Online · SG10 & 5 Team'],
 ['.scene-staff','KẾT QUẢ BÁN HÀNG <span>THEO KTV</span>','Bán T10 · theo Team và KTV'],
 ['.scene-csat','CHẤT LƯỢNG DỊCH VỤ <span>THÁNG 10</span>','CLDV & CSAT 1–2 · chốt 31/10'],
 ['.scene-alerts','PHÂN TÍCH CLDV <span>THEO TEAM</span>','CLDV T10 · 5 Team'],
 ['.scene-recall','KẾT QUẢ <span>THU HỒI THÁNG 10</span>','Thu hồi thiết bị · 01–31/10'],
 ['.scene-recall-people','NHÂN SỰ <span>CẦN THEO SÁT</span>','KTV còn tồn / không thành công · T10'],
 ['.scene-rm-sales','CẢNH BÁO RM NON THÁNG <span>PKT BÁN</span>','RM non tháng · nguồn PKT bán · T1–T10/2026']
];
function setHeading(scene,html,subtitle){
 const heading=scene.querySelector('.sales-head .slide-title,.staff-head .slide-title,.recall-head .slide-title,.cover-copy .slide-title');
 if(heading&&html)heading.innerHTML=html;
 if(subtitle&&heading){
  const parent=heading.parentElement;
  let p=parent.querySelector(':scope > .sg10-v66-period');
  if(!p){p=document.createElement('p');p.className='sg10-v66-period';heading.insertAdjacentElement('afterend',p)}
  p.textContent=subtitle;
  const previous=[...parent.children].filter(x=>x.tagName==='P'&&x!==p);
  previous.forEach(x=>{x.style.display='none'});
 }
}
titles.forEach(([selector,heading,subtitle])=>{
 const scene=document.querySelector('#scenes > '+selector);if(scene)setHeading(scene,heading,subtitle);
});
const guide=document.querySelector('.scene-am-guide .nov-overlay .nov-head');
if(guide){
 const h=guide.querySelector('h2');if(h)h.textContent='NGHIỆM THU TẬP ĐIỂM · 7 ẢNH BẮT BUỘC';
 const date=guide.querySelector('.nov-date');if(date)date.textContent='ÁP DỤNG TỪ 03/11/2026';
}
const focus=document.querySelector('.scene-close .nov-focus-head');
if(focus){
 const h=focus.querySelector('h2');if(h)h.innerHTML='TRỌNG TÂM THỰC HIỆN <span>THÁNG 11</span>';
}
const thanks=document.querySelector('.scene-thanks');
if(thanks){
 const eyebrow=thanks.querySelector('.thanks-eyebrow');if(eyebrow)eyebrow.textContent=month;
}
document.querySelectorAll('#scenes > .scene .footer').forEach(footer=>{
 const first=footer.querySelector(':scope > span');
 if(first)first.innerHTML='<b>FPT TELECOM / PKT SG10</b> · '+month+' ';
});
// Team filtering re-renders slide 07. Reapply only its reporting subtitle.
if(typeof window.updateRecallPeopleTeam==='function'){
 const original=window.updateRecallPeopleTeam;
 window.updateRecallPeopleTeam=function(team){
  const result=original(team);
  const scene=document.querySelector('#scenes > .scene-recall-people');
  if(scene)setHeading(scene,titles[6][1],titles[6][2]);
  return result;
 };
}
document.title='HỌP PKT THÁNG 11/2026 | FPT TELECOM · PKT SG10';
window.SG10PeriodLabelsV66={month,overview,slides:titles.length};
})();