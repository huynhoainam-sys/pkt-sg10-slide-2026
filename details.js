// One search box per detail view. Headers retain sorting, with no column filters.
table=function(headers,rows){return `<div class="table-shell"><table class="data-table"><thead><tr>${headers.map((x,i)=>`<th aria-sort="none"><button type="button" class="col-sort" data-col="${i}" aria-label="Sắp xếp cột ${esc(x)}" title="Nhấp để sắp xếp">${x}<span class="sort-indicator" aria-hidden="true">↕</span></button></th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`};
const recallOriginalOpenModal=openModal;
openModal=function(title,sub,content){recallOriginalOpenModal(title,sub,content);let controls=$('detail-controls');if(!controls){controls=document.createElement('div');controls.id='detail-controls';controls.className='detail-controls';controls.innerHTML='<label for="detailSearch">Tìm trong bảng</label><input type="search" id="detailSearch" placeholder="Tên KTV, đội, mã HĐ hoặc nội dung…" autocomplete="off"><span id="detail-count"></span><span class="detail-sort-note">Bấm tiêu đề cột để sắp xếp</span>';$('modal-body').before(controls);$('detailSearch').addEventListener('input',refreshDetailSearch);}$('detailSearch').value='';enhanceDetails();};
function recallNormalize(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/\s+/g,' ').trim()}
function refreshDetailSearch(){
 const terms=recallNormalize($('detailSearch')?.value).split(' ').filter(Boolean);
 let total=0,shown=0;
 $('modal-body').querySelectorAll('.data-table tbody tr').forEach(row=>{total++;const text=recallNormalize(row.textContent);const matches=terms.every(t=>text.includes(t));row.hidden=!matches;if(matches)shown++;});
 const count=$('detail-count');if(count){const txt=`${nf(shown)} / ${nf(total)} dòng`;if(count.textContent!==txt)count.textContent=txt;}
 $('modal-body').classList.toggle('detail-empty',total>0&&shown===0);
}
applyColumnFilters=function(){refreshDetailSearch()};
function enhanceDetails(){
 const body=$('modal-body');
 body.querySelectorAll('.modal-toolbar input,.modal-toolbar select').forEach(el=>el.remove());
 body.querySelectorAll('.modal-toolbar').forEach(el=>{if(!el.children.length)el.remove()});
 body.querySelectorAll('input.col-filter').forEach(el=>el.remove());
 body.querySelectorAll('.sales-note,.table-note').forEach(el=>{const old='; nhập ô ngay dưới để lọc từng cột.';if(el.textContent.includes(old))el.textContent=el.textContent.replace(old,'. Tìm nhanh bằng ô tìm kiếm phía trên.');});
 const hasTables=!!body.querySelector('.data-table');const controls=$('detail-controls');if(controls)controls.hidden=!hasTables;
 body.querySelectorAll('.data-table thead th').forEach(th=>{const button=th.querySelector('.col-sort');th.setAttribute('aria-sort',button?.classList.contains('asc')?'ascending':button?.classList.contains('desc')?'descending':'none');});
 refreshDetailSearch();
}
const recallDetailObserver=new MutationObserver(enhanceDetails);
recallDetailObserver.observe($('modal-body'),{childList:true,subtree:true});
document.addEventListener('click',e=>{if(e.target.closest('.col-sort'))enhanceDetails()});

