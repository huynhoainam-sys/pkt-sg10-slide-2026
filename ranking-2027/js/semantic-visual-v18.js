'use strict';
/* V18: enrich existing slide geometry, preserve PPT rules and V17 art. */
(() => {
 const LOGO = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/FTEL_Logo.svg';
 const rules = [
 {sel:'.qa-issue', icons:['chart','clipboard','target','tools','upward','group'], tones:['blue','blue','orange','orange','green','orange']},
 {sel:'.qa-goal',icons:['heart','group','chart','book'],tones:['blue','orange','purple','green']},
 {sel:'.qa-riskrow',icons:['shield','pin'],tones:['blue','orange']},
 {sel:'.qa-formulacards section',icons:['clipboard','tv','group'],tones:['blue','orange','green']},
 {sel:'.rank-tile',icons:['group','chart','clipboard'],tones:['blue','orange','green']},
 {sel:'.rank-panel',icons:['repeat','tools'],tones:['green','blue']}
 ];
 const iconOf = (label,fallback)=>{
   if(/wifi|wi-fi|vùng phủ|sóng/i.test(label))return 'wifi';
   if(/CLL|lặp|hậu kiểm/i.test(label))return 'repeat';
   if(/RM|rời mạng|nguy cơ/i.test(label))return 'alert';
   if(/IPTV|combo|truyền hình|BOX|app/i.test(label))return 'tv';
   if(/AU|KTV|đội trưởng|nhân sự|quản lý/i.test(label))return 'group';
   if(/tỷ lệ|thống kê|dữ liệu|điểm/i.test(label))return 'chart';
   if(/mẫu số|tử số|lọc/i.test(label))return 'clipboard';
   return fallback;
 };
 // Decorate sections in their own hierarchy; no extra text, duplicate KPIs or overlays.
 SLIDES.forEach((slide,slideIndex)=>{
   const make=slide.html;
   slide.html=()=>{
     const shell=document.createElement('div');shell.innerHTML=make();
     rules.forEach(rule=>{
       [...shell.querySelectorAll(rule.sel)].forEach((el,index)=>{
         // Only add a semantic icon where the visual does not already include one.
         const h=el.querySelector('h3,h2')?.textContent||'';
         const icon=iconOf(h,rule.icons[index%rule.icons.length]);
         const tone=rule.tones[index%rule.tones.length];
         const glyph=document.createElement('span');
         glyph.className='v18-glyph glyph-'+tone;
         glyph.setAttribute('aria-hidden','true');
         glyph.innerHTML=ico(icon);
         el.classList.add('v18-decorated','v18-tone-'+tone);
         el.appendChild(glyph);
       });
     });
     // Simple icon, tone, and meaningful grouping on CLL/WiFi panels without altering the source wording.
     [...shell.querySelectorAll('.rank-checkline,.qa-riskchips>span')].forEach((el,i)=>{
       const label=el.textContent||'';
       const icon=iconOf(label,i%2===0?'check':'tools');
       const tag=document.createElement('span');
       tag.className='v18-inline-symbol';
       tag.setAttribute('aria-hidden','true');
       tag.innerHTML=ico(icon);
       if(el.matches('.qa-riskchips>span'))el.prepend(tag);
       else el.appendChild(tag);
     });
     return shell.innerHTML;
   };
 });
 // Official published SVG. The site navigation is visible on every slide.
 const t=document.querySelector('.transport-brand .mark');
 if(t){
   const im=document.createElement('img');
   im.className='v18-logo-nav';
   im.src=LOGO;
   im.alt='FPT Telecom';
   im.decoding='async';
   im.loading='eager';
   im.onerror=()=>{im.hidden=true; t.hidden=false};
   t.replaceWith(im);
 }
 // Source attribution for Wikimedia Commons CC BY-SA 4.0 is in README_V18.md.
})();