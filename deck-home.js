/* Shared return navigation for the two independent SG10 slide decks. */
(() => {
  'use strict';
  if (document.getElementById('sg10-deck-home')) return;
  const scriptURL = document.currentScript.src;
  const home = new URL('./index.html', scriptURL);
  const link = document.createElement('a');
  link.id = 'sg10-deck-home';
  link.href = home.href;
  link.title = 'Quay về trang chọn nội dung';
  link.setAttribute('aria-label', 'Quay về trang chọn nội dung');
  link.innerHTML = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg><span>Chọn nội dung</span>';
  const style = document.createElement('style');
  style.textContent = '#sg10-deck-home{display:inline-flex;align-items:center;justify-content:center;gap:8px;flex-shrink:0;min-height:38px;padding:0 12px;border:1px solid #ffffff40;border-radius:9px;background:#ffffff14;color:#fff;font:600 12px "Be Vietnam Pro",Inter,"Segoe UI",Arial,sans-serif;text-decoration:none;white-space:nowrap;transition:background .18s}#sg10-deck-home:hover{background:#ffffff2c}#sg10-deck-home:focus-visible{outline:3px solid #F37021;outline-offset:3px}.transport #sg10-deck-home{margin-right:12px;color:#dcedff}.v8-controls #sg10-deck-home{margin-right:5px}@media(max-width:760px){#sg10-deck-home{width:38px;padding:0;min-height:38px}.transport #sg10-deck-home{margin-right:5px}#sg10-deck-home span{display:none}}';
  document.head.append(style);
  const controls = document.querySelector('.v8-controls') || document.querySelector('.transport-brand');
  if (controls) controls.prepend(link);
})();
