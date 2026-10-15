/* Enhance existing detail cards without changing Ranking rules or text. */
(() => {
  'use strict';
  const canvas = document.getElementById('canvas');
  if (!canvas) return;
  const selector = '.flow-card,.action-card,.role-card,.daily-card,.risk-control,.closing-grid>div,.wifi-definition,.wifi-actions';
  canvas.querySelectorAll(selector).forEach(card => {
    if (card.querySelector('[data-detail]')) card.classList.add('has-card-detail');
  });
  canvas.querySelectorAll('.metric-card[data-detail]').forEach(card => card.classList.add('has-card-detail'));
  canvas.addEventListener('click', event => {
    if (event.target.closest('button,a,input,select,textarea,[data-detail]')) return;
    const card = event.target.closest('.has-card-detail');
    if (!card || window.getSelection().toString().trim()) return;
    const action = card.querySelector('[data-detail]');
    if (action) action.click();
  });
})();
