/* PKT SG10 — operational focus from 03/11/2026 */
(function(){
'use strict';
const img=(window.NOV_GUIDE_PARTS&&window.NOV_GUIDE_PARTS.length===3)?'data:image/png;base64,'+window.NOV_GUIDE_PARTS.join(''):'';
const style=document.createElement('style');style.textContent=`
.nov-action{position:absolute;right:34px;bottom:72px;z-index:12;border:0;border-radius:999px;padding:12px 18px;background:#f37021;color:#fff;font-weight:900;box-shadow:0 8px 24px #0b315c33;cursor:pointer}
.nov-action.blue{background:#0876c9}.nov-overlay{position:absolute;inset:62px 28px 58px;z-index:9;border-radius:20px;background:linear-gradient(135deg,#f7fbff 0%,#e8f4ff 100%);border:1px solid #c9deee;padding:20px 24px;color:#12385c;overflow:hidden;box-shadow:0 16px 50px #0b315c22}
.nov-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:14px}.nov-kicker{font-size:12px;font-weight:900;letter-spacing:1.6px;color:#0876c9}.nov-head h2{margin:4px 0 0;font-size:28px;line-height:1.06;color:#0b315c}.nov-date{font-size:12px;font-weight:900;color:#f37021;background:#fff2e8;padding:8px 12px;border-radius:999px}
.nov-guide-wrap{height:calc(100% - 65px);display:grid;grid-template-columns:minmax(0,2.5fr) minmax(210px,.75fr);gap:18px}.nov-guide-img{width:100%;height:100%;object-fit:contain;background:#fff;border-radius:14px;border:1px solid #c9deee}.nov-notes{display:grid;gap:10px;align-content:start}.nov-note{background:#fff;border-radius:12px;padding:12px 14px;border-left:5px solid #0876c9;font-size:13px;line-height:1.35}.nov-note.warn{border-color:#f37021}.nov-note b{display:block;color:#0b315c;margin-bottom:4px}
.nov-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.nov-card{background:#fff;border-radius:14px;padding:14px;border:1px solid #cfdeea;min-height:118px;box-shadow:0 8px 22px #0b315c10}.nov-card .n{font-size:12px;color:#f37021;font-weight:900}.nov-card h3{margin:6px 0;font-size:17px;color:#0b315c}.nov-card p{margin:0;color:#46647e;font-size:12.5px;line-height:1.35}.nov-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:12px}.nov-kpi{background:#0b315c;color:#fff;border-radius:14px;padding:10px 14px;display:flex;align-items:baseline;gap:8px}.nov-kpi strong{font-size:28px;color:#ff9b42}.nov-kpi span{font-size:11px;font-weight:800;letter-spacing:.6px}
.nov-modal-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.nov-modal-card{padding:16px;border:1px solid #cbdce9;border-radius:14px;background:#f8fbfe}.nov-modal-card h3{margin:0 0 8px;color:#0b315c}.nov-modal-card p,.nov-modal-card li{font-size:14px;line-height:1.5;color:#355772}.nov-alert{color:#b62822;font-weight:900}.nov-ok{color:#158447;font-weight:900}
.cldv-board{position:absolute;inset:62px 28px 58px;z-index:10;border-radius:20px;background:linear-gradient(145deg,#f7fbff,#edf6fc);border:1px solid #c7dceb;padding:18px 22px;color:#12385c;overflow:hidden;box-shadow:0 16px 50px #0b315c22}.cldv-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:11px}.cldv-head h2{margin:3px 0 0;font-size:25px;color:#0b315c}.cldv-scope{font-size:11px;font-weight:900;color:#0876c9;background:#e4f3ff;border-radius:999px;padding:7px 11px}.cldv-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:11px}.cldv-kpi{background:#fff;border:1px solid #d3e2ed;border-radius:12px;padding:9px 11px}.cldv-kpi b{display:block;font-size:23px;color:#0b315c}.cldv-kpi span{font-size:10.5px;color:#58738b}.cldv-kpi em{font-style:normal;font-size:10.5px;font-weight:900}.up{color:#158447}.down{color:#0876c9}.risk{color:#c43d32}.cldv-table{width:100%;border-collapse:separate;border-spacing:0 5px;font-size:11.5px}.cldv-table th{text-align:left;color:#557089;font-size:10px;padding:0 9px}.cldv-table td{background:#fff;padding:7px 9px;border-top:1px solid #d8e5ee;border-bottom:1px solid #d8e5ee}.cldv-table td:first-child{font-weight:900;border-left:1px solid #d8e5ee;border-radius:9px 0 0 9px}.cldv-table td:last-child{border-right:1px solid #d8e5ee;border-radius:0 9px 9px 0}.cldv-rate{font-weight:900;font-size:14px}.cldv-foot{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-top:5px;font-size:10.5px;color:#5a748a}.cldv-foot strong{color:#0b315c}.cldv-insights{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-top:10px}.cldv-insight{background:#fff;border-radius:11px;border:1px solid #d3e2ed;padding:10px 11px;min-height:62px}.cldv-insight b{display:block;font-size:11.5px;color:#0b315c;margin-bottom:3px}.cldv-insight span{font-size:10.5px;line-height:1.3;color:#58738b}.cldv-detail-board{position:absolute;inset:62px 28px 58px;z-index:10;border-radius:20px;background:linear-gradient(145deg,#f7fbff,#edf6fc);border:1px solid #c7dceb;padding:18px 22px;color:#12385c;overflow:hidden;box-shadow:0 16px 50px #0b315c22}.cldv-detail-board table{width:100%;border-collapse:separate;border-spacing:0 7px;font-size:11px}.cldv-detail-board th{text-align:left;padding:0 8px;color:#557089;font-size:9.5px}.cldv-detail-board td{background:#fff;padding:9px 8px;border-top:1px solid #d8e5ee;border-bottom:1px solid #d8e5ee}.cldv-detail-board td:first-child{font-weight:900;border-left:1px solid #d8e5ee;border-radius:9px 0 0 9px}.cldv-detail-board td:last-child{border-right:1px solid #d8e5ee;border-radius:0 9px 9px 0}.cldv-detail-board strong{font-size:14px;color:#0b315c}.cldv-detail-board small{display:block;color:#607a90;font-size:9.5px;margin-top:2px}.cldv-detail-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0}.cldv-detail-summary>div{background:#0b315c;color:#fff;border-radius:12px;padding:10px 13px}.cldv-detail-summary b{display:block;color:#ff9b42;font-size:22px}.cldv-detail-summary span{font-size:10px;font-weight:800}.nov-focus-overlay{position:absolute;inset:62px 28px 58px;z-index:10;padding:18px 24px 14px;color:#102d4f;overflow:hidden;border-radius:20px;background:linear-gradient(90deg,rgba(248,252,255,.98) 0%,rgba(248,252,255,.94) 54%,rgba(248,252,255,.66) 72%,rgba(248,252,255,.08) 100%)}.nov-focus-head{width:72%;margin-bottom:12px}.nov-focus-head .ey{font-size:11px;font-weight:900;letter-spacing:1.6px;color:#0066b3}.nov-focus-head h2{margin:5px 0 0;font-size:34px;line-height:.98;color:#102d4f}.nov-focus-head h2 span{display:block;color:#f37021;font-size:39px;margin-top:5px}.nov-focus-grid{width:72%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,86px);gap:10px 12px}.nov-focus-card{background:rgba(255,255,255,.89);border:1px solid rgba(190,213,230,.85);border-radius:13px;padding:11px 14px;box-shadow:0 8px 22px rgba(16,45,79,.09);display:grid;grid-template-columns:34px 1fr;gap:8px}.nov-focus-card .num{font-size:20px;font-weight:900;color:#f37021;line-height:1}.nov-focus-card h3{margin:0 0 4px;font-size:15px;color:#102d4f}.nov-focus-card p{margin:0;font-size:11px;line-height:1.34;color:#3f607b}.nov-focus-message{position:absolute;left:24px;right:24px;bottom:14px;background:rgba(240,247,252,.9);border:1px solid #b9d3e7;border-radius:11px;padding:9px 14px;color:#0066b3;font-size:12px;font-weight:900}.nov-focus-message small{display:block;margin-top:3px;color:#486982;font-size:9.5px;font-weight:700}.nov-focus-label{position:absolute;right:24px;top:18px;color:#0066b3;font-size:10px;font-weight:900;letter-spacing:1.4px}
@media(max-width:900px){.nov-guide-wrap{grid-template-columns:1fr}.nov-notes{display:none}.nov-grid{grid-template-columns:repeat(2,1fr)}.nov-card{min-height:100px}.nov-head h2{font-size:22px}}
`;document.head.appendChild(style);
const harmony=document.createElement('style');harmony.textContent=`
.cldv-board,.cldv-detail-board,.nov-overlay,.nov-focus-overlay{border:0!important;border-radius:18px!important;box-shadow:none!important;background:linear-gradient(90deg,rgba(249,252,255,.98) 0%,rgba(249,252,255,.94) 58%,rgba(249,252,255,.72) 78%,rgba(249,252,255,.16) 100%)!important}
.cldv-head h2,.nov-head h2,.nov-focus-head h2{font-weight:900!important;letter-spacing:-.5px!important;color:#102d4f!important}
.cldv-scope,.nov-date{background:rgba(255,255,255,.82)!important;border:1px solid #cbddea!important;color:#0066b3!important}
.cldv-kpi,.cldv-table td,.cldv-insight,.cldv-detail-board td,.nov-note,.nov-card,.nov-focus-card{background:rgba(255,255,255,.88)!important;border-color:rgba(193,215,231,.9)!important;box-shadow:0 7px 18px rgba(16,45,79,.08)!important}
.cldv-table,.cldv-detail-board table{border-spacing:0 7px!important}
.cldv-kpi b,.cldv-rate,.cldv-detail-board strong{color:#102d4f!important}
.cldv-kpi:nth-child(2) b,.risk{color:#d84a3b!important}
.cldv-insight b,.nov-note b,.nov-card h3,.nov-focus-card h3{color:#102d4f!important}
.cldv-foot,.nov-note,.nov-card p,.nov-focus-card p{color:#486982!important}
.nov-kicker,.nov-focus-head .ey{color:#0066b3!important}
.nov-focus-head h2 span,.nov-focus-card .num{color:#f37021!important}
.nov-guide-img{background:rgba(255,255,255,.9)!important;border-color:#cbddea!important;box-shadow:0 8px 22px rgba(16,45,79,.08)}
.nov-focus-message{background:rgba(240,247,252,.9)!important;border-color:#b9d3e7!important}
`;document.head.appendChild(harmony);
function modal(title,subtitle,body){if(typeof openModal==='function')openModal(title,subtitle,body);}
window.openNovOps=function(type){
 if(type==='sos')modal('KIỂM SOÁT CL SOS & CL/PTC','Áp dụng từ 03/11/2026',`<div class="nov-modal-grid"><div class="nov-modal-card"><h3>CL SOS · tiếp cận khách hàng</h3><ol><li>Đến nhà và ghi nhận tình trạng thực tế.</li><li>Chưa gặp khách: tiếp tục đủ <b>3 khung giờ khác nhau</b>.</li><li>Vẫn không gặp: phối hợp DVKH xác nhận và đóng phiếu đúng quy định.</li></ol></div><div class="nov-modal-card"><h3>CL/PTC · kiểm soát cuối ngày</h3><p>Rà các phiếu sắp vượt mốc <b>24 giờ / 72 giờ</b>; xử lý ngay hoặc chuyển danh sách theo dõi, không để quá hạn im lặng.</p><p class="nov-alert">Note đúng tình trạng, đúng lần tiếp cận, đúng người chịu trách nhiệm.</p></div></div>`);
 if(type==='recall')modal('KIỂM SOÁT THU HỒI & PHIẾU GIA CỐ','Mốc rà soát trước 10/11/2026',`<div class="nov-modal-grid"><div class="nov-modal-card"><h3>Thu hồi thiết bị</h3><p>Rà soát toàn bộ phiếu trước <b>10/11</b>. Tồn quá ngày 10: <span class="nov-alert">5.000đ / thiết bị</span>.</p><p>Ưu tiên thiết bị WiFi 6/7; cập nhật đúng trạng thái và nhập kho đầy đủ.</p></div><div class="nov-modal-card"><h3>Phiếu gia cố</h3><p>Trước khi trả phiếu phải note đúng thực tế: nhà khóa cửa, không gặp KH/chủ trọ, không liên hệ được…</p><p class="nov-ok">Gia cố thành công: 80.000đ / PTC.</p></div></div>`);
 if(type==='point')modal('KẾ HOẠCH BẢO QUẢN, CẢI TẠO TẬP ĐIỂM','Ưu tiên cao · giao việc từ 03/11/2026',`<div class="nov-modal-grid"><div class="nov-modal-card"><h3>Chỉ tiêu bắt buộc</h3><p><b>6 tháng/lần</b> cho chu kỳ định kỳ.<br><b>≥15%/tháng</b> trên tổng tập điểm quản lý.<br><b>1 báo cáo/tuần</b> theo Team và chi nhánh lên BDH.</p></div><div class="nov-modal-card"><h3>Phân công 5 Đội trưởng</h3><p>KhangTV1 · LocLV2 · SangH · ThinhPT · KhanhLQ3</p><p>Số lượng giao = làm tròn lên (tổng tập điểm × 15%). Chưa điền số tuyệt đối khi chưa có danh sách nguồn.</p></div></div>`);
};
/* CLDV slides 04–05 inherit the exact recovery slides 06–07 structural components. */
const scoreTeams=[
 {name:'KhangTV1',evaluation:'6,30%',assessed:'88/1.397',install:'3,7%',installCount:'19/515',repair:'7,8%',repairCount:'69/882',csat:'2,27%',bad:'2/88',delta:'+1,88 điểm %',csatDelta:'−2,81 điểm %',good:true},
 {name:'LocLV2',evaluation:'7,67%',assessed:'100/1.304',install:'8,1%',installCount:'43/534',repair:'7,4%',repairCount:'57/770',csat:'4,00%',bad:'4/100',delta:'+3,39 điểm %',csatDelta:'−1,88 điểm %',good:false},
 {name:'SangH',evaluation:'6,84%',assessed:'86/1.258',install:'6,3%',installCount:'24/380',repair:'7,1%',repairCount:'62/878',csat:'3,49%',bad:'3/86',delta:'+2,03 điểm %',csatDelta:'−2,28 điểm %',good:false},
 {name:'ThinhPT',evaluation:'5,22%',assessed:'81/1.552',install:'4,1%',installCount:'21/515',repair:'5,8%',repairCount:'60/1.037',csat:'1,23%',bad:'1/81',delta:'+1,23 điểm %',csatDelta:'−2,47 điểm %',good:true},
 {name:'KhanhLQ3',evaluation:'7,07%',assessed:'106/1.500',install:'8,3%',installCount:'51/614',repair:'6,2%',repairCount:'55/886',csat:'4,72%',bad:'5/106',delta:'+1,09 điểm %',csatDelta:'+4,72 điểm %',good:false}
];
const scoreTone=(val,good)=>'<b class="cldv-value '+(good?'cldv-good':'cldv-risk')+'">'+val+'</b>';
const scoreTableRows=scoreTeams.map(t=>'<tr><td><span class="team-mark">'+t.name+'</span></td><td><b>'+t.assessed+'</b></td><td class="num"><b>'+t.evaluation+'</b></td><td class="num">'+scoreTone(t.csat,t.good)+'</td><td class="num">'+t.bad+'</td></tr>').join('');
const scoreRateRows=scoreTeams.map(t=>'<tr><td><span class="team-mark">'+t.name+'</span></td><td class="num"><b>'+t.install+'</b><small>'+t.installCount+'</small></td><td class="num"><b>'+t.repair+'</b><small>'+t.repairCount+'</small></td><td class="num"><b>'+t.evaluation+'</b><small>'+t.assessed+'</small></td></tr>').join('');
function replaceSceneWithRecoveryDesign(selector,markup){
 const slide=document.querySelector(selector);if(!slide)return;
 const content=document.createElement('div');content.className='cldv-recovery-layout';content.innerHTML=markup;
 slide.appendChild(content);
 [...slide.children].forEach(el=>{if(el!==content&&!el.classList.contains('topbar')&&!el.classList.contains('footer'))el.style.visibility='hidden';});
}
replaceSceneWithRecoveryDesign('.scene-csat',`
 <div class="recall-head"><h1 class="slide-title">CHẤT LƯỢNG DỊCH VỤ <span>THÁNG 10</span></h1><p>Đánh giá CLDV lần 2 & CSAT 1–2 · chốt 31/10/2026 · phạm vi toàn SG10</p></div>
 <div class="recall-kpis">
  <div class="card recall-metric blue"><span>TỶ LỆ ĐÁNH GIÁ</span><b>6,58%</b><small>▲ 1,03 điểm % so T9</small></div>
  <div class="card recall-metric red"><span>CSAT 1–2</span><b>3,25%</b><small>▼ 0,65 điểm % so T9 · mục tiêu &lt;3%</small></div>
  <div class="card recall-metric blue"><span>TỔNG LƯỢT ĐÁNH GIÁ</span><b>461</b><small>Trên 7.011 lượt TK + BT</small></div>
  <div class="card recall-metric green"><span>TRIỂN KHAI</span><b>158</b><small>2.558 lượt · 6,18%</small></div>
  <div class="card recall-metric orange"><span>BẢO TRÌ</span><b>303</b><small>4.453 lượt · 6,80%</small></div>
 </div>
 <div class="recall-overview-layout">
  <div class="card recall-team-panel">
   <div class="recall-panel-heading"><h2>KẾT QUẢ ĐÁNH GIÁ · 5 TEAM</h2><span class="cldv-period-pill">CHỐT 31/10</span></div>
   <p class="recall-caption">Xếp theo thứ tự Đội trưởng chuẩn SG10 · CSAT đỏ khi ≥3%.</p>
   <table class="recall-slide-table recall-overview-table cldv-inherited-table"><thead><tr><th>Đội trưởng</th><th>Đánh giá</th><th>Tỷ lệ</th><th>CSAT 1–2</th><th>Ca 1–2</th></tr></thead><tbody>${scoreTableRows}</tbody></table>
   <div class="recall-team-note"><b>LocLV2: 7,67%</b> tỷ lệ đánh giá cao nhất. <b>KhanhLQ3: 4,72%</b> CSAT cần ưu tiên.</div>
  </div>
  <div class="card recall-warehouse cldv-insight-panel">
   <div class="recall-panel-heading"><h2>CHẤT LƯỢNG & HÀNH ĐỘNG</h2></div>
   <div class="recall-warehouse-total"><b class="cldv-risk">3,25%</b><span>CSAT 1–2 toàn SG10</span></div>
   <div class="recall-stack"><i style="width:92.31%"></i><em style="width:7.69%"></em></div>
   <div class="recall-warehouse-row"><span><i class="recall-dot green"></i>Đội đạt mục tiêu</span><b>2/5</b></div>
   <div class="recall-warehouse-row"><span><i class="recall-dot orange"></i>Đội cần cải thiện</span><b>3/5</b></div>
   <p class="recall-warehouse-note"><b>ThinhPT 1,23% · KhangTV1 2,27%</b> đạt mục tiêu.<br>Ưu tiên KhanhLQ3, LocLV2, SangH.</p>
   <div class="cldv-panel-footer">Mục tiêu CSAT 1–2: dưới 3%.</div>
  </div>
 </div>
 <p class="recall-source">Nguồn: tổng hợp CLDV/CSAT 31/10 · 461 lượt đánh giá / 7.011 lượt TK + BT.</p>
`);

// Live per-Team CLDV detail uses the exact October snapshot used by the five-Team slide.
window.openSG10CLDVTeam=function(team='Tất cả'){
 const arr=team==='Tất cả'?scoreTeams:scoreTeams.filter(t=>t.name===team);
 const escs=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fmt=arr.map(t=>'<tr><td><b>'+escs(t.name)+'</b></td><td>'+t.install+'<small>'+t.installCount+'</small></td><td>'+t.repair+'<small>'+t.repairCount+'</small></td><td>'+t.evaluation+'<small>'+t.assessed+'</small></td><td class="'+(t.good?'sg10-good':'sg10-danger')+'">'+t.csat+'<small>'+t.bad+'</small></td></tr>').join('');
 const selector='<div class="sg10-team-control"><label for="sg10CLDVSelect">Chọn Team</label><select id="sg10CLDVSelect">'+['Tất cả',...scoreTeams.map(t=>t.name)].map(t=>'<option value="'+t+'" '+(t===team?'selected':'')+'>'+t+'</option>').join('')+'</select></div>';
 const tableMarkup='<table class="sg10-team-detail-table"><thead><tr><th>Team</th><th>Triển khai</th><th>Bảo trì</th><th>Tỷ lệ đánh giá</th><th>CSAT 1–2</th></tr></thead><tbody>'+fmt+'</tbody></table><p class="sg10-team-note">Nguồn: thống kê CLDV/CSAT chốt 31/10/2026. Tỷ lệ tính trên mẫu số riêng từng Team; CSAT 1–2 dưới 3% là đạt. Chi tiết KTV cần đối soát từ nguồn CLDV gốc, không suy từ tỷ lệ Team.</p>';
 if(typeof openModal!=='function')return;
 openModal('CLDV & CSAT · '+(team==='Tất cả'?'5 TEAM SG10':team),'Dữ liệu chốt 31/10/2026 · không realtime',selector+'<div id="sg10CLDVBody">'+tableMarkup+'</div>');
 document.getElementById('sg10CLDVSelect')?.addEventListener('change',e=>window.openSG10CLDVTeam(e.target.value));
};
replaceSceneWithRecoveryDesign('.scene-alerts',`
 <div class="recall-head"><h1 class="slide-title">PHÂN TÍCH CLDV <span>theo Team</span></h1><p>Triển khai & bảo trì · chốt 31/10/2026 · kế thừa bố cục hai bảng theo dõi nhân sự</p></div>
 <div class="recall-people-layout">
  <div class="card recall-people-panel">
   <div class="recall-people-title"><b class="recall-orange">158</b><div><h2>TỶ LỆ ĐÁNH GIÁ TRIỂN KHAI</h2><p>158/2.558 lượt · tỷ lệ 6,18% toàn SG10.</p></div></div>
   <p class="recall-caption">So sánh TK với BT theo từng đội trưởng.</p>
   <table class="recall-slide-table cldv-dual-table"><thead><tr><th>Đội trưởng</th><th>Triển khai</th><th>Bảo trì</th><th>Tổng</th></tr></thead><tbody>${scoreRateRows}</tbody></table>
   <div class="cldv-panel-footer"><b>KhanhLQ3:</b> triển khai 8,3% · cao nhất SG10.</div>
  </div>
  <div class="card recall-people-panel">
   <div class="recall-people-title"><b class="recall-red">3,25<small>%</small></b><div><h2>CSAT 1–2 · KIỂM SOÁT CHẤT LƯỢNG</h2><p>15 đánh giá CSAT 1–2 / 461 lượt đánh giá.</p></div></div>
   <p class="recall-caption">Ngưỡng đạt: dưới 3% · sắp xếp theo rủi ro cao → thấp.</p>
   <table class="recall-slide-table cldv-dual-table"><thead><tr><th>Đội trưởng</th><th>CSAT 1–2</th><th>Số ca</th><th>Đánh giá</th></tr></thead><tbody>${[...scoreTeams].sort((a,b)=>parseFloat(b.csat.replace(',','.'))-parseFloat(a.csat.replace(',','.'))).map(t=>'<tr><td><span class="team-mark">'+t.name+'</span></td><td class="num">'+scoreTone(t.csat,t.good)+'</td><td class="num">'+t.bad.split('/')[0]+'</td><td class="num">'+t.bad.split('/')[1]+'</td></tr>').join('')}</tbody></table>
   <div class="cldv-panel-footer"><b>Ưu tiên:</b> KhanhLQ3 · LocLV2 · SangH.</div>
  </div>
 </div>
 <div class="recall-action"><b>TRỌNG TÂM</b><span>Đội trưởng thúc đẩy khách hàng đánh giá CLDV; rà soát nguyên nhân CSAT 1–2 và chủ động recare các trường hợp chưa hài lòng.</span><span class="cldv-action-tag">MỤC TIÊU &lt; 3%</span></div>
 <p class="recall-source">Nguồn: báo cáo CLDV/CSAT 31/10 · triển khai 158/2.558 · bảo trì 303/4.453.</p>
`);
const s7=document.querySelector('.scene-recall');if(s7){const b=document.createElement('button');b.className='nov-action';b.textContent='Hạn 10/11 · Phiếu gia cố ↗';b.onclick=()=>openNovOps('recall');s7.appendChild(b);}
const s9=document.querySelector('.scene-am-guide');if(s9){s9.classList.add('november-guide');const o=document.createElement('section');o.className='nov-overlay';o.innerHTML=`<div class="nov-head"><div><div class="nov-kicker">HƯỚNG DẪN THAO TÁC · ƯU TIÊN CAO</div><h2>NGHIỆM THU TẬP ĐIỂM · 7 ẢNH BẮT BUỘC</h2></div><div class="nov-date">ÁP DỤNG 03/11/2026</div></div><div class="nov-guide-wrap">${img?'<img class="nov-guide-img" src="'+img+'" alt="Hướng dẫn chụp 7 ảnh nghiệm thu tập điểm">':'<div class="nov-guide-img">Không tải được ảnh hướng dẫn</div>'}<div class="nov-notes"><div class="nov-note"><b>Đủ 7 góc chụp</b>Tổng quan · trực diện · trái · phải · mặt trước cassette · mặt sau cassette · khung thân hộp.</div><div class="nov-note warn"><b>Lưu ý đánh giá AI</b>Chỉ áp dụng tự động cho tập điểm hộp nhựa 16P. Tập điểm cũ: tắt tự động và upload theo hướng dẫn.</div><div class="nov-note"><b>Kết quả chưa đúng?</b>Chọn “Không đồng ý” để TPPKT/Đội trưởng kiểm tra, đánh giá lại trên map.fpt.net.</div></div></div>`;s9.appendChild(o);[...s9.children].forEach(x=>{if(x!==o&&!x.classList.contains('topbar')&&!x.classList.contains('footer'))x.style.visibility='hidden';});}
const s12=document.querySelector('.scene-close');if(s12){const o=document.createElement('section');o.className='nov-focus-overlay';o.innerHTML=`<div class="nov-focus-head"><div class="ey">FPT TELECOM | PKT SG10 | THÁNG 11/2026</div><h2>TRỌNG TÂM THỰC HIỆN<span>THÁNG 11</span></h2></div><div class="nov-focus-grid"><article class="nov-focus-card"><div class="num">01</div><div><h3>THU HỒI THIẾT BỊ</h3><p>Rà soát và cập nhật đầy đủ các phiếu thu hồi tồn <b>mỗi ngày</b>. Trường hợp trả <strong>NOK</strong> phải ghi chú <strong>đầy đủ, cụ thể</strong> tình trạng thực tế và nguyên nhân chưa thu hồi.</p></div></article><article class="nov-focus-card"><div class="num">02</div><div><h3>PHIẾU TK GIA CỐ TB</h3><p>Trước khi trả phiếu, KTV phải <strong>ghi chú đầy đủ tình trạng thực tế</strong>. Ví dụ: đã đến nhà nhưng chưa có người mới; nhà khóa cửa; không gặp KH/chủ trọ; hoặc chủ trọ không cho phép gia cố thiết bị.</p></div></article><article class="nov-focus-card"><div class="num">03</div><div><h3>CL SOS</h3><p>KTV đã đến nhà nhưng chưa tiếp cận được KH phải note rõ tình trạng. Tiếp tục tiếp cận <b>03 khung giờ khác nhau</b>. Nếu vẫn không gặp, phối hợp DVKH xác nhận và chốt đóng phiếu theo quy định.</p></div></article><article class="nov-focus-card"><div class="num">04</div><div><h3>KIỂM SOÁT CL/PTC</h3><p>Cuối mỗi ngày, kiểm tra các phiếu sắp quá <b>24h/72h</b>; chủ động chốt hoàn tất hoặc chuyển theo dõi, tránh phát sinh cảnh báo.</p></div></article><article class="nov-focus-card"><div class="num">05</div><div><h3>BẢO QUẢN TẬP ĐIỂM</h3><p>Rà soát, bảo quản và cải tạo định kỳ <b>6 tháng/lần</b>; thực hiện tối thiểu <b>15%/tháng</b>. Chủ động tạo phiếu và phân công KTV thực hiện.</p></div></article><article class="nov-focus-card"><div class="num">06</div><div><h3>LỊCH OFF & NHÂN SỰ</h3><p>Do điều động nhân sự đi dự án, mỗi KTV được OFF tối đa <b>03 ngày/tháng</b>. Sắp xếp lịch không trùng nhau nhằm đảm bảo năng lực Block.</p></div></article></div><div class="nov-focus-message">ĐỘI TRƯỞNG CHỦ ĐỘNG PHÂN CÔNG · KTV THỰC HIỆN ĐÚNG QUY TRÌNH · CẬP NHẬT TIẾN ĐỘ MỖI NGÀY<small>Tập điểm: tổng hợp báo cáo hằng tuần theo từng Đội trưởng và chi nhánh.</small></div>`;s12.appendChild(o);[...s12.children].forEach(x=>{if(x!==o&&!x.classList.contains('topbar')&&!x.classList.contains('footer'))x.style.visibility='hidden';});const topLabel=s12.querySelector('.topbar .eyebrow');if(topLabel)topLabel.textContent='TRỌNG TÂM HÀNH ĐỘNG';const foot=s12.querySelector('.footer');if(foot){const txt=[...foot.querySelectorAll('*')].find(x=>x.textContent?.includes('HỌP THÁNG'));if(txt)txt.textContent='FPT TELECOM / PKT SG10 · HỌP THÁNG 11/2026';}}
/* V39 — semantic title QA for the ten currently presented scenes.
   Preserve slide markup/figures and revise only heading and scope labels. */
(function(){
 const rename=(selector,titleHtml,eyebrow)=>{
  const sc=document.querySelector(selector);if(!sc)return;
  const h=sc.querySelector('.cldv-recovery-layout .recall-head .slide-title, .sales-head .slide-title, .staff-head .slide-title, .recall-head .slide-title');
  if(h){h.innerHTML=titleHtml;h.setAttribute('data-sg10-title-qa','v39');}
  const top=sc.querySelector('.topbar .eyebrow');
  if(top&&eyebrow)top.textContent=eyebrow;
 };
 rename('.scene-sales','KẾT QUẢ <span>BÁN HÀNG THÁNG 10</span>','KẾT QUẢ BÁN HÀNG');
 rename('.scene-staff','KẾT QUẢ BÁN HÀNG <span>THEO KTV</span>','BÁN HÀNG THEO KTV');
 rename('.scene-csat','CHẤT LƯỢNG DỊCH VỤ <span>THÁNG 10</span>','CHẤT LƯỢNG DỊCH VỤ');
 rename('.scene-alerts','PHÂN TÍCH CLDV <span>theo Team</span>','PHÂN TÍCH CLDV');
 rename('.scene-recall','KẾT QUẢ <span>THU HỒI THÁNG 10</span>','KẾT QUẢ THU HỒI');
 rename('.scene-recall-people','NHÂN SỰ <span>CẦN THEO SÁT</span>','THEO DÕI THU HỒI');
 const guide=document.querySelector('.scene-am-guide .nov-overlay .nov-head h2');
 if(guide)guide.textContent='NGHIỆM THU TẬP ĐIỂM · 7 ẢNH BẮT BUỘC';
 const coverScene=document.querySelector('.scene-cover');
 if(coverScene){
  const coverTitle=coverScene.querySelector('.cover-copy .slide-title');
  if(coverTitle)coverTitle.innerHTML='HỌP PKT <span>THÁNG 11</span>';
  const lead=coverScene.querySelector('.cover-copy .lead');
  if(lead)lead.remove();
  coverScene.querySelector('.cover-copy .tag')?.remove();
  coverScene.querySelector('.cover-meta')?.remove();
  coverScene.querySelector('.cover-bullets')?.remove();
  if(!coverScene.querySelector('.sg10-cover-subtitle')){const sub=document.createElement('p');sub.className='sg10-cover-subtitle';sub.innerHTML='<strong>KẾT QUẢ THÁNG 10</strong><span>BÁN HÀNG</span><span>CLDV &amp; CSAT</span><span>THU HỒI</span><span>RM NON THÁNG</span><span>TRỌNG TÂM T11</span>';coverTitle?.insertAdjacentElement('afterend',sub);}

  const coverPoints=coverScene.querySelectorAll('.cover-bullets .focus');
  if(coverPoints[0])coverPoints[0].innerHTML='<i>01</i><b>Đánh giá kết quả bán hàng, CLDV, thu hồi và RM nguồn bán PKT SG10.</b>';
  if(coverPoints[1])coverPoints[1].innerHTML='<i>02</i><b>Xác định cảnh báo, trách nhiệm và trọng tâm triển khai tháng 11.</b>';
 }
 const cover=document.querySelector('.scene-cover .topbar .eyebrow');
 if(cover)cover.remove();
 const thanks=document.querySelector('.scene-thanks .topbar .eyebrow');
 if(thanks)thanks.textContent='CẢM ƠN & TRAO ĐỔI';
})();
/* Hide/skip retired Kickoff while preserving the deck's internal scene indexes. */
window.addEventListener('load',()=>{
 const scenes=[...document.querySelectorAll('#scenes>.scene')],kick=document.querySelector('.scene-kickoff');
 if(!kick)return;const hidden=scenes.indexOf(kick);if(hidden<0)return;
 kick.style.setProperty('display','none','important');kick.setAttribute('aria-hidden','true');
 const baseGo=window.go;
 window.go=function(n){let target=Number(n);if(target===hidden){const current=scenes.indexOf(document.querySelector('#scenes>.scene.active'));target=current<hidden?hidden+1:hidden-1;}baseGo(target);setTimeout(syncKickoffHidden,700);};
 function syncKickoffHidden(){
  scenes.forEach((sc,i)=>{if(i===hidden)return;const shown=i>hidden?i:i+1;const tag=sc.querySelector('.topbar .tag');if(tag)tag.textContent=String(shown).padStart(2,'0')+'/12';const dots=[...sc.querySelectorAll('.page-indicators button')];if(dots[hidden])dots[hidden].style.display='none';});
  const active=scenes.indexOf(document.querySelector('#scenes>.scene.active'));const count=document.getElementById('v8Count');if(count&&active>=0)count.textContent=String(active>hidden?active:active+1).padStart(2,'0')+' / 12';
  document.querySelectorAll('[aria-label*="Kickoff"],button').forEach(el=>{if(/Kickoff T9|Kickoff.*poster|Kickoff · Thi đua/i.test(el.textContent||el.getAttribute('aria-label')||''))el.style.display='none';});
 }
 syncKickoffHidden();[150,600,1500].forEach(ms=>setTimeout(syncKickoffHidden,ms));
});

})();
