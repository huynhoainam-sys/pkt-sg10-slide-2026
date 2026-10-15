/* PKT SG10 — October 2026 kickoff poster gallery.
   Seven original poster images embedded across 15 GitHub Pages text parts.
   Loaded at idle priority without blocking the initial presentation. */
(function(){
'use strict';
const registry=[
{key:'oct-pkt-01',file:'pkt-01-10.jpeg',label:'PKT · 01/10/2026 · Online T+5',group:'pkt'},
{key:'oct-pkt-02',file:'pkt-02-10.jpeg',label:'PKT · 02/10/2026 · Online T+5',group:'pkt'},
{key:'oct-pkt-05',file:'pkt-05-10.jpeg',label:'PKT · 05/10/2026 · Online T+5 + ảnh group',group:'pkt'},
{key:'oct-pkt-10',file:'pkt-10-10.jpeg',label:'PKT · 10/10/2026 · Online T+3',group:'pkt'},
{key:'oct-pkt-football',file:'pkt-football.jpeg',label:'PKT · Poster bóng đá ghi 10/11/2026 · Online T+3',group:'pkt'},
{key:'oct-pkt-13',file:'pkt-13-10.jpeg',label:'PKT · 13/10/2026 · Online T+3',group:'pkt'},
{key:'oct-branch-05',file:'sg10-05-10.jpeg',label:'Chi nhánh SG10 · 05/10/2026 · Online trong tháng 10',group:'branch'}
];
const css=`.has-october-posters .poster-preview{min-height:0;padding:18px 20px}
.has-october-posters .poster-shelf{height:205px;margin-top:12px}
.has-october-posters .group-split{display:none}
.has-october-posters .campaign-choices{grid-template-columns:1fr 1fr!important;grid-template-rows:80px 165px!important;height:259px!important;gap:14px;flex:none}
.has-october-posters .campaign-choices>button{padding:12px 16px;font-size:16px;text-align:left}
.has-october-posters .campaign-choices>button>b{font-size:18px;margin-top:5px}
.october-miniatures{display:flex;gap:8px;height:77px;margin:7px 0}
.october-miniatures img{height:100%;max-width:76px;object-fit:contain;border-radius:6px;background:#edf5fa}
.october-choice{background:linear-gradient(140deg,#fff,#f3f9ff)!important;border-color:#bed6ea!important}
.october-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px}
.october-gallery .poster-button img{width:100%;height:315px;object-fit:contain;background:#f3f7fb}
.october-gallery .poster-button b{font-size:15px;line-height:1.4}
@media(max-width:850px){.october-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;
const cssElement=document.createElement('style');cssElement.textContent=css;document.head.appendChild(cssElement);
const scene=document.querySelector('.scene-kickoff');if(!scene)return;
scene.classList.add('has-october-posters');
const topbarLabel=scene.querySelector('.topbar .eyebrow');if(topbarLabel)topbarLabel.textContent='KICKOFF THÁNG 9 & 10';
const eyebrow=scene.querySelector('.campaign-lead .eyebrow');
if(eyebrow)eyebrow.textContent='KẾT QUẢ THÁNG 9 · POSTER THÁNG 10/2026';
const title=scene.querySelector('.poster-headline h2');
if(title)title.textContent='POSTER KICKOFF · PKT & SG10';
const desc=scene.querySelector('.poster-headline .micro');
if(desc)desc.textContent='Poster tháng 9 giữ nguyên · Bổ sung 7 poster tháng 10.';
const choiceGroup=scene.querySelector('.campaign-choices');if(!choiceGroup)return;
const oldButtons=choiceGroup.querySelectorAll(':scope > button');
for(let i=2;i<oldButtons.length;i++)oldButtons[i].remove();
choiceGroup.querySelectorAll(':scope > button').forEach((b,i)=>{const span=b.querySelector('span');if(span)span.textContent=i===0?'POSTER PKT · THÁNG 9':'POSTER SG10 · THÁNG 9';});
let loadPromise=null;
function urlPart(i){return './assets/oct2026/part-'+String(i).padStart(2,'0')+'.txt?v=20261013-1';}
function allAssets(){
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
   const pieces=await Promise.all(Array.from({length:15},(_,i)=>fetch(urlPart(i),{cache:'force-cache'}).then(async res=>{
    if(!res.ok)throw new Error('Không tải được ảnh poster '+(i+1));
    return res.text();
   })));
   const raw=pieces.join('');
   if(raw.length!==4496314)throw new Error('Bộ ảnh poster chưa đầy đủ');
   const assets=JSON.parse(raw);
   for(const p of registry){
     const img=assets[p.file];
     if(!img?.startsWith('data:image/jpeg;base64,')||img.length<100000)throw new Error('Ảnh poster không hợp lệ: '+p.file);
     DATA.posters.assets[p.key]=img;
     DATA.posters.labels[p.key]=p.label;
   }
   const btns=choiceGroup.querySelectorAll('.october-choice');
   btns.forEach(b=>{
    const group=b.dataset.group;
    const subset=registry.filter(x=>x.group===group);
    const target=b.querySelector('.october-miniatures');
    if(target)target.innerHTML=subset.slice(0,3).map(p=>'<img src="'+DATA.posters.assets[p.key]+'" alt="'+esc(p.label)+'">').join('');
   });
   return true;
 })().catch(error=>{loadPromise=null;throw error;});
 return loadPromise;
}
window.openOctoberPosters=async function(group){
 const groupItems=registry.filter(x=>x.group===group);
 openModal(group==='pkt'?'POSTER PKT · THÁNG 10/2026':'POSTER CHI NHÁNH SG10 · THÁNG 10/2026',
    group==='pkt'?'6 ảnh nguyên bản; riêng poster bóng đá ghi 10/11/2026 theo ảnh nguồn.':'1 poster chi nhánh, điều kiện theo ảnh gốc.',
    '<div id="octoberPosterViewer" class="october-gallery"><p>Đang tải ảnh gốc…</p></div>');
 try {
  await allAssets();
  const viewer=document.getElementById('octoberPosterViewer');
  if(viewer)viewer.innerHTML=groupItems.map(p=>'<button class="poster-button" onclick="zoomPoster(\''+p.key+'\')"><img src="'+DATA.posters.assets[p.key]+'" alt="'+esc(p.label)+'"><b>'+esc(p.label)+'</b><span>Chạm xem ảnh lớn ↗</span></button>').join('');
 } catch(error) {
  const viewer=document.getElementById('octoberPosterViewer');
  if(viewer)viewer.innerHTML='<p>Không tải đủ bộ ảnh. '+esc(error.message)+' · Vui lòng tải lại trang.</p>';
 }
};
for(const g of ['pkt','branch']){
 const posters=registry.filter(p=>p.group===g);
 const el=document.createElement('button');el.className='october-choice';el.dataset.group=g;
 el.innerHTML='<span>'+(g==='pkt'?'POSTER PKT':'POSTER CHI NHÁNH SG10')+' · THÁNG 10</span><div class="october-miniatures"><span style="font-size:12px;color:#7e91a4">Đang chuẩn bị ảnh…</span></div><b>'+posters.length+' poster · Xem ảnh lớn ↗</b>';
 el.addEventListener('click',()=>window.openOctoberPosters(g));
 choiceGroup.appendChild(el);
}
const kickTab=scene.querySelector('.campaign-graphic');
if(kickTab)kickTab.setAttribute('aria-label','Kickoff tháng 9 và poster tháng 10');
if(typeof requestIdleCallback==='function')requestIdleCallback(()=>allAssets().catch(()=>{}),{timeout:2500});
else window.addEventListener('load',()=>allAssets().catch(()=>{}),{once:true});
})();