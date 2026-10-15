'use strict';
/* V19: curated background allocation. Leaves existing good slides and layout untouched.
   This file runs after the content/criteria scripts and BEFORE app-v13 bootstraps images. */
(() => {
  const root='assets/visual-v18/';
  const map={
    'HIỆN TRẠNG':'intro.webp',
    'MỤC TIÊU':'goals.webp',
    'ĐỘI TRƯỞNG':'leader.webp',
    'KTV PRO':'pro.webp',
    'QUẢN TRỊ RỦI RO':'risk.webp',
    'CÁCH TÍNH RM':'rm-detail.webp',
    'CÔNG THỨC COMBO':'combo.webp',
    'KHAI THÁC DỊCH VỤ':'combo.webp',
    'TRÁCH NHIỆM PHỐI HỢP':'leader.webp'
  };
  SLIDES.forEach(s=>{
    const art=map[s.section];
    if(art){
      s.scene=root+art;
      s.skin+=' v19-curated-art';
    }
  });
  // Keep navigation artwork independent of GitHub-independent hosts.
  // The FPT Telecom mark is a carefully constructed graphical version of the provided logo.
  const logo=document.querySelector('.transport-brand .v18-logo-nav');
  if(logo){
    logo.src=root+'ftel-logo.webp';
    logo.removeAttribute('hidden');
    logo.onerror=()=>{
      logo.onerror=null;
      logo.style.display='none';
      const fallback=document.createElement('span');
      fallback.className='v19-brand-backup';
      fallback.textContent='FPT Telecom';
      logo.after(fallback);
    };
  }
})();