/* Apply only the approved closing content. Both GSafe slides keep their existing detailed interactive content. */
(function(){
 const stage=document.getElementById('scenes');
 const close=stage?.querySelector('.scene-close');
 const thanks=stage?.querySelector('.scene-thanks');
 const mainGSafe=stage?.querySelector('.scene-gsafe');
 const maintenance=stage?.querySelector('.scene-gsafe-maintenance');
 if(!close||!thanks||!mainGSafe||!maintenance){console.warn('[SG10] Approved slide nodes missing');return;}
 close.querySelector('.close-head').innerHTML='<div class="eyebrow">HỌP PKT SG10 · CHỐT HÀNH ĐỘNG</div><h1 class="slide-title">TRỌNG TÂM THỰC HIỆN<br><span>THÁNG 10</span></h1>';
 const actions=[
 ['01','Đẩy mạnh PTTB','Bám KPI từng đội, hỗ trợ KTV chưa có Online; khai thác nguồn khách, chốt hợp đồng và cập nhật tiến độ.'],
 ['02','Chất lượng & recare','Mời đánh giá CLDV khách quan; xác minh từng ca CSAT 1–2, giảm CLL và xử lý nguyên nhân để tránh tái diễn.'],
 ['03','Thu hồi thiết bị','Đôn đốc KTV còn tồn, rà soát không tiếp cận, ưu tiên WiFi 6/7 và nhập kho đầy đủ, đúng trạng thái.'],
 ['04','GSafe · Vật tư, lắp đặt & test','Đúng MAC, đúng lý do; đủ điều kiện lắp, bổ sung tấm đế và nút nhấn, test tín hiệu – pin, ghi rõ BBNT khi khách từ chối.']
 ];
 close.querySelector('.close-steps').innerHTML=actions.map(([num,title,desc])=>'<div class="close-step"><strong>'+num+'</strong><div><h3>'+title+'</h3><p>'+desc+'</p></div></div>').join('');
 close.querySelector('.close-message').textContent='Đội trưởng theo sát và hỗ trợ · KTV chủ động, tuân thủ quy trình · Cập nhật kết quả mỗi ngày, không chờ trễ mới báo.';
 maintenance.querySelector('.g6-visual')?.remove();
 maintenance.querySelector('.gsafe-art')?.remove();
 if(!maintenance.querySelector('.footer')){
   const f=close.querySelector('.footer');if(f)maintenance.appendChild(f.cloneNode(true));
 }
 // The recap script is intentionally not loaded: original Thank You scene remains intact.
 const slides=Array.from(stage.querySelectorAll(':scope > .scene'));
 slides.forEach((slide,i)=>{
   const tag=slide.querySelector('.topbar .tag');
   if(tag){tag.textContent=String(i+1).padStart(2,'0')+'/'+slides.length;tag.id='step-display-'+i;}
   const dots=slide.querySelector('.page-indicators');
   if(dots)dots.innerHTML=slides.map((_,k)=>'<button type="button" title="Đến slide '+(k+1)+'" aria-label="Đến slide '+(k+1)+'" onclick="go('+k+')" class="'+(k===i?'active':'')+'"></button>').join('');
 });
 console.info('[SG10] Approved layout published', {slideCount:slides.length,gsafeBackground:'shared',closeActionCount:actions.length});
})();
