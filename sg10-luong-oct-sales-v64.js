/* SG10 V64 — a direct LUONGPV1 drilldown, sourced from October sold/ever-online contracts. */
(function(){
'use strict';
function openLuong(){
 if(typeof openSalesMonth!=='function')return;
 openSalesMonth('oct','Lê Quốc Khánh','Tất cả');
 const query=document.querySelector('#monthQuery');
 if(query){query.value='LUONGPV1';if(typeof renderSalesRows==='function')renderSalesRows();}
}
function install(){
 const staff=(typeof DATA!=='undefined'&&Array.isArray(DATA.staff))?DATA.staff.find(p=>p.name==='LUONGPV1'):null;
 const contracts=(typeof SALES_VERIFIED!=='undefined'&&Array.isArray(SALES_VERIFIED.contracts10))?SALES_VERIFIED.contracts10.filter(c=>c.ktv==='LUONGPV1'):[];
 if(!staff||contracts.length!==2)return;
 const target=document.querySelector('#stage .scene-staff .staff-team')||document.querySelector('#stage .scene-sales .team-panel');
 if(!target||target.querySelector('.sg10-luong-link'))return;
 const b=document.createElement('button');b.type='button';b.className='sg10-luong-link';
 b.innerHTML='<span class="sg10-luong-label">NGOÀI ROSTER · TEAM KHANHLQ3</span><strong>LUONGPV1 · '+contracts.length+' HĐ bán T10 đã Online</strong><span class="sg10-luong-arrow">Xem KTV ↗</span>';
 b.setAttribute('aria-label','Xem hợp đồng tháng 10 của LUONGPV1, Team KhanhLQ3');
 b.addEventListener('click',openLuong);
 target.appendChild(b);
}
install();
window.SG10Luong={open:openLuong};
})();