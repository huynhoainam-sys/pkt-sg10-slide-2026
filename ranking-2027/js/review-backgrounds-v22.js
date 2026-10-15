'use strict';
/* Ranking V22 PREVIEW ONLY. Select existing context-matched artwork from the repository;
   brightness, contrast and title palettes are controlled by review-visual-v22.css.
   Do not edit data, rules, popup explanations or published index. */
(() => {
  const old='assets/backgrounds-v11/';
  // These backgrounds were originally produced for the matching Ranking subjects
  // prior to the 18-slide reordering: slide-03 WiFi; slide-04 CLL;
  // slide-05 RM; slide-06 IPTV/Combo; slide-08 self-review; slide-09 team roles.
  const artBySection={
    'CÁCH TÍNH WIFI':'slide-03.webp',
    'CÁCH TÍNH RM':'slide-05.webp',
    'CÔNG THỨC COMBO':'slide-06.webp',
    'TỰ QUẢN TRỊ KẾT QUẢ':'slide-08.webp',
    'TRÁCH NHIỆM PHỐI HỢP':'slide-09.webp',
    'GIỮ KHÁCH HÀNG':'slide-05.webp',
    'KHAI THÁC DỊCH VỤ':'slide-06.webp'
  };
  SLIDES.forEach((slide,i)=>{
    let asset=artBySection[slide.section];
    if(slide.section==='CẢI THIỆN CHẤT LƯỢNG'){
      if(/WIFI|WI-FI/i.test(slide.title))asset='slide-03.webp';
      else if(/CLL/i.test(slide.title))asset='slide-04.webp';
    }
    if(asset){
      slide.scene=old+asset;
      slide.skin+=' v22-legacy-art';
    }else if((slide.scene||'').includes('visual-v18/')){
      slide.skin+=' v22-tone-art';
    }
    // Keep the cover/closing unchanged, their original dark photograph is appropriate.
  });
})();