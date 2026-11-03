/* Remove the retired Kickoff scene before recovery/navigation initialize. */
window.applyHideKickoff=function(html){
 const start=html.indexOf('<section class="scene scene-kickoff');
 if(start<0)return html;
 const next=html.indexOf('<section class="scene ',start+20);
 if(next<0)throw new Error('Không tìm thấy slide kế tiếp sau Kickoff');
 const out=html.slice(0,start)+html.slice(next);
 return out.replace(/13 slide/g,'12 slide');
};
