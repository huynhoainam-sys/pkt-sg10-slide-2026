'use strict';
/*
  REVIEW ONLY — Ranking V21
  Precise source interpretation + image assignment + navigation art.
  Loaded after V19 / V20 changes, before the app mounts. No production branch deck changes.
*/
(() => {
  const root='assets/visual-v18/';
  const wifiAliases=[
    ['Theo tài liệu: <b>15% tiếp theo</b> sau nhóm Xấu.', 'Từ <b>trên Top 1% đến hết Top 15%</b> (14% tiếp theo).'],
    ['Nguồn ghi <b>85% còn lại</b>; cần xác minh tỷ trọng trước khi chuẩn hóa quy tắc.', '<b>85% còn lại</b> sau mốc lũy kế Top 15%.'],
    ['Nhóm 15% tiếp theo', 'Mốc Top 15% (gồm Top 1%)'],
    ['15% tiếp theo', 'từ >1% đến 15%'],
    ['Nhóm còn lại', '85% còn lại']
  ];
  SLIDES.forEach((slide,index)=>{
    const old=slide.html;
    slide.html=()=>{
      let html=old();
      for(const [a,b] of wifiAliases)html=html.split(a).join(b);
      // Keep the source grouping but present the cumulative interpretation, without warning badges.
      html=html.replace(
        /<p class="rank-caveat">[\s\S]*?<\/p>/g,
        '<p class="v21-milestone"><b>Phân nhóm theo mốc lũy kế:</b> 1% Xấu · 14% kế tiếp đến mốc Top 15% · 85% còn lại Tốt.</p>'
      );
      return html;
    };
    // Curated backgrounds for sections that previously used generic, mismatched photography.
    const section=slide.section||'';
    const title=slide.title||'';
    let image=null;
    if(section==='HIỂU ĐÚNG RANKING')image='intro.webp';                 // KPI and systems
    if(section==='CẢI THIỆN CHẤT LƯỢNG'){
      if(/WIFI|WI-FI/i.test(title))image='combo.webp';                  // home Wi-Fi & devices
      else if(/CLL/i.test(title))image='pro.webp';                     // technical follow-up
    }
    if(section==='CÁCH TÍNH WIFI')image='combo.webp';                   // Wi-Fi quality, no generic scene
    if(section==='GIỮ KHÁCH HÀNG')image='rm.webp';                     // retention / service care
    if(section==='HÀNH ĐỘNG HẰNG NGÀY')image='intro.webp';            // operations and case workflow
    if(section==='TỰ QUẢN TRỊ KẾT QUẢ')image='goals.webp';             // progress and improvement
    if(image){
      slide.scene=root+image;
      if(!slide.skin.includes('v21-curated-art'))slide.skin+=' v21-curated-art';
    }
  });
  // The user clarified "15% tiếp theo" means cumulative through rank 15%;
  // DO NOT label this 101%, treat the following 85% as the complement.
  const replacements=[
    [/Nguồn ghi 1% \+ 15% \+ 85% = 101%\. Giữ nguyên thông tin tài liệu; không tự sửa thành công thức hoặc tỷ trọng mới\./g,
     'Mốc Top 15% đã bao gồm Top 1% xấu: 1% Xấu + 14% tiếp theo + 85% còn lại = 100%. Đây là cách đọc theo mốc lũy kế.'],
    [/Điểm cần xác minh từ PPT/g,'Cách hiểu nhóm theo mốc lũy kế'],
    [/Nguồn có bất nhất về tỷ trọng phân nhóm; cần xác nhận trước khi công bố cách phân loại chính thức\./g,
     'Nhóm theo mốc lũy kế: Top 1% Xấu; trên 1% đến hết 15% là Đạt; 85% còn lại là Tốt.'],
    [/Tài liệu có bất nhất về tỷ trọng 1% \+ 15% \+ 85% = 101%\. Đang giữ nguyên dữ liệu gốc để tránh tự thay đổi cách phân nhóm\./g,
     'Mốc 15% đã tính gồm nhóm 1% đầu: phần Đạt chiếm 14% tiếp theo, Tốt chiếm 85%.'],
    [/Các tỷ trọng nhóm trong ảnh gốc cũng chưa thống nhất\./g,
     'Cách chia nhóm được hiểu theo mốc tỷ lệ lũy kế.']
  ];
  Object.keys(DETAILS).forEach(key=>{
    if(typeof DETAILS[key]?.html!=='string')return;
    let h=DETAILS[key].html;
    for(const [p,n] of replacements)h=h.replace(p,n);
    // Fix source-notes in historical popup definitions, without tampering with other terms.
    h=h.replace(/<p class="note">[^<]*(?:có tổng 101%|101%;|tỷ trọng nhóm)[^<]*<\/p>/gi,'');
    DETAILS[key].html=h;
  });
  // On the navigation bar: real-shaped wordmark with light lettering designed for a dark bar,
  // no white card/frame, and no need to touch the image baked into slide backgrounds.
  const logo=document.querySelector('.transport-brand .v18-logo-nav');
  if(logo){
    logo.src='assets/visual-v21/ftel-logo-dark-nav.webp';
    logo.alt='FPT Telecom';
    logo.removeAttribute('hidden');
    logo.decoding='async';
    logo.onerror=()=>{
      logo.onerror=null;
      logo.src='assets/visual-v18/ftel-logo.webp';
    };
  }
})();