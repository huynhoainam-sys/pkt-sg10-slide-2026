(function installGsafeMaintenance(){
  'use strict';
  const deck=document.getElementById('scenes');
  const preceding=deck?.querySelector('.scene-gsafe');
  if(!deck||!preceding||deck.querySelector('.scene-gsafe-maintenance'))return;
  const icon={
    install:'<path d="M4 21h16M7 21V8l5-4 5 4v13M10 12h4M10 16h4M3 8l9-6 9 6"/>',
    tools:'<path d="M14 7a5 5 0 0 0-7 7L3 18l3 3 4-4a5 5 0 0 0 7-7l-4 4-3-3 4-4z"/>',
    test:'<path d="M12 3v5M7 7l3 3-3 3M17 7l-3 3 3 3M4 18h16M7 22h10M3 3h3M18 3h3"/>'
  };
  const mark=(key)=>'<span class="g6-icon" aria-hidden="true"><svg viewBox="0 0 24 24">'+icon[key]+'</svg></span>';
  const officialPhoto='https://admin.gsafe.com.vn/storage/blogs/zFcgv33iSCrF0khyTctwPMbOdfGfO5uTEyM5JsWj.jpg';
  const secondaryPhoto='https://kimthanhlong.vn/uploads/images/images/du-an-lap-dat-thiet-bi-truyen-tin-bao-chay-tu-dong-gsafe-4.jpg';
  const fallbackPhoto='https://bizweb.dktcdn.net/thumb/1024x1024/100/527/752/products/81b61b0c-11d9-4bed-a827-8e2d62823c9c.jpg?v=1758776652740';
  const photo1='<img src="'+officialPhoto+'" alt="Ảnh thực tế thiết bị truyền tin báo cháy GSafe G6 lắp trên tấm đế, cạnh nút nhấn khẩn cấp và bộ nguồn" decoding="async" loading="eager" onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src=\''+fallbackPhoto+'\'}">';
  const photo2='<img src="'+secondaryPhoto+'" alt="Ảnh thi công thực tế GSafe G6 kết nối dưới tủ báo cháy trung tâm, cạnh nút nhấn khẩn cấp" decoding="async" loading="eager" onerror="if(!this.dataset.fallback){this.dataset.fallback=1;this.src=\''+fallbackPhoto+'\'}">';
  const html=`
<section class="scene scene-gsafe-maintenance" aria-label="Chuẩn hóa lắp đặt và bảo trì GSafe G6" aria-hidden="true">
  <div class="topbar">${logo()}<div class="recall-topright"><span class="eyebrow">QUY ĐỊNH GEIC · GSAFE G6</span><span class="tag">GSafe</span></div></div>
  <div class="g6-main">
    <div class="g6-eyebrow">PKT SG10 · KIỂM SOÁT NGHIỆP VỤ <span class="g6-live-date">ÁP DỤNG 15/10/2026</span></div>
    <h1 class="g6-heading">GSAFE: LẮP ĐÚNG · TEST ĐỦ · <strong>GHI RÕ</strong></h1>
    <p class="g6-deck">Từng bước kiểm tra phải thực hiện theo hướng dẫn; khách hàng không đồng ý bước nào, <b>ghi rõ bước đó trong biên bản nghiệm thu.</b></p>
    <div class="g6-grid">
      <button class="g6-tile g6-install" type="button" onclick="sg10GsafeInfo('install')" aria-label="Chi tiết quy định lắp đặt mới">
        <div class="g6-card-head">${mark('install')}LẮP ĐẶT MỚI <span class="g6-card-number">01</span></div>
        <p><b class="g6-no">KHÔNG LẮP</b> khi không có tủ báo cháy trung tâm hoặc tủ thiếu đường dây tín hiệu kết nối.</p>
        <p>Thiết bị báo cháy không dây ngoài GEIC: xác nhận kỹ thuật GEIC trước khi triển khai.</p>
        <div class="g6-note">Xem điều kiện từ chối lắp & cách ghi nhận ↗</div>
      </button>
      <button class="g6-tile g6-standard" type="button" onclick="sg10GsafeInfo('standard')" aria-label="Chi tiết hạng mục chuẩn hóa khi bảo trì">
        <div class="g6-card-head">${mark('tools')}CHUẨN HÓA KHI BẢO TRÌ <span class="g6-card-number">02</span></div>
        <p>Bổ sung <b>nút nhấn khẩn cấp + tấm đế</b> nếu hệ thống cũ còn thiếu; bảo vệ dây và mối nối.</p>
        <p>G6 đang dùng tiếp điểm ướt qua rơ-le: chuyển sang <b>IN4</b>, thu hồi rơ-le theo quy định.</p>
        <div class="g6-note">Xem checklist vật tư & đấu nối ↗</div>
      </button>
      <button class="g6-tile g6-tests" type="button" onclick="sg10GsafeInfo('test')" aria-label="Chi tiết bài test tín hiệu và pin dự phòng">
        <div class="g6-card-head">${mark('test')}TEST HỆ THỐNG & PIN DỰ PHÒNG <span class="g6-card-number">03</span></div>
        <div class="g6-test-cols">
          <div><p><b>Kiểm tra hệ thống</b> trên GSafe Pro: kích báo cháy / báo lỗi / nút nhấn (nếu có); xác minh cảnh báo ứng dụng và <b>AUTO CALL</b>.</p></div>
          <div><p><b>Kiểm tra thiết bị</b>: ngắt nguồn <b>220VAC</b> để thử hoạt động bằng pin, kích tín hiệu và đối chiếu cảnh báo + <b>AUTO CALL</b>.</p></div>
        </div>
        <div class="g6-note">Bấm để xem trình tự test, điều kiện nghiệm thu ↗</div>
      </button>
    </div>
    <div class="g6-alert"><span class="g6-alert-mark">!</span><strong>GEIC đối soát tín hiệu</strong><span>Thiếu test và không ghi rõ lý do trong BBNT → KTV phải thực hiện lại, tương tự ảnh iQC không đạt.</span></div>
    <aside class="g6-visual" aria-label="Ảnh thật minh họa GSafe G6">
      <div class="g6-photo g6-photo-main">${photo1}<span class="g6-photo-label">GSafe G6 · nút nhấn · nguồn</span></div>
      <div class="g6-photo g6-photo-secondary">${photo2}<span class="g6-photo-label">Lắp thực tế cùng tủ báo cháy</span></div>
      <div class="g6-visual-source">Ảnh thiết bị thực tế: <a href="https://gsafe.com.vn/" target="_blank" rel="noopener">GSafe / GEIC</a> và ảnh lắp đặt thực tế. Bấm từng khối để xem hướng dẫn.</div>
    </aside>
  </div>
</section>`;
  preceding.insertAdjacentHTML('afterend',html);
  const newScene=preceding.nextElementSibling;
  if(typeof allScenes!=='undefined' && Array.isArray(allScenes)){
    const n=Array.prototype.indexOf.call(deck.querySelectorAll(':scope > .scene'),newScene);
    allScenes.splice(n,0,newScene);
    const total=allScenes.length;
    allScenes.forEach((scene,i)=>{
      scene.dataset.page=String(i);
      scene.setAttribute('aria-label','Slide '+(i+1)+(scene===newScene?' · GSafe G6':''));
      const current=(i===active);
      scene.setAttribute('aria-hidden',current?'false':'true');
      const tag=scene.querySelector('.topbar .tag');
      if(tag){tag.textContent=String(i+1).padStart(2,'0')+'/'+total;tag.id='step-display-'+i;}
      const dots=scene.querySelector('.page-indicators');
      if(dots)dots.innerHTML=allScenes.map((_,k)=>'<button type="button" title="Đến slide '+(k+1)+'" aria-label="Đến slide '+(k+1)+'" onclick="go('+k+')" class="'+(k===i?'active':'')+'"></button>').join('');
    });
    if(typeof recallCounter==='function')recallCounter();
  }else console.warn('GSafe maintenance: slide inserted but navigation array was not found');

  window.sg10GsafeInfo=function(topic){
    const details={
      install:{
        title:'GSafe G6 · Điều kiện lắp đặt mới',sub:'Yêu cầu kiểm soát GEIC, áp dụng từ 15/10/2026',
        body:'<h3>Trước khi lắp</h3><ul><li><strong>Không có tủ báo cháy trung tâm:</strong> không lắp; trả phiếu GEIC, ghi rõ “khách hàng không có tủ báo cháy”.</li><li><strong>Có tủ nhưng không có đường dây tín hiệu:</strong> không lắp; trả phiếu GEIC, ghi “tủ báo cháy bị lỗi” và nêu rõ lý do.</li><li><strong>Thiết bị báo cháy không dây không do GEIC cung cấp:</strong> liên hệ kỹ thuật GEIC để xác nhận, thống nhất phương án và ghi chú đầy đủ trước khi lắp.</li></ul><div class="g6-modal-warning">Nguyên tắc: Không lắp thiết bị GSafe G6 nếu khách hàng không có tủ báo cháy trung tâm.</div>'
      },
      standard:{
        title:'GSafe G6 · Chuẩn hóa khi bảo trì',sub:'Áp dụng với bảo trì định kỳ, bảo hành và xử lý sự cố',
        body:'<h3>Hạng mục KTV kiểm tra</h3><ul><li>Đối với khách hàng đã lắp GSafe nhưng <strong>chưa có nút nhấn khẩn cấp, tấm đế</strong>: bổ sung khi đi bảo trì.</li><li>Dùng <strong>dây xoắn nhựa</strong> để bảo vệ dây tín hiệu và <strong>ghen co nhiệt</strong> bảo vệ các mối nối. Đảm bảo đủ vật tư để thực hiện theo phiếu.</li><li>G6 dùng <strong>tiếp điểm ướt qua rơ-le</strong>: chuyển sang phương án đấu <strong>IN4</strong>; thu hồi rơ-le cùng đế theo hướng dẫn, nhập kho. Đội trưởng tạo phiếu thu hồi trên Inside.</li></ul><div class="g6-modal-positive">Hoàn tất hạng mục chuẩn hóa trước khi nghiệm thu; kiểm tra lại tín hiệu theo quy trình.</div>'
      },
      test:{
        title:'GSafe G6 · Test tín hiệu và pin dự phòng',sub:'Các bước cần kiểm tra khi bảo trì định kỳ',
        body:'<h3>1. Kiểm tra đấu nối & test tín hiệu</h3><ul><li>Bật chức năng <strong>“Kiểm tra hệ thống”</strong> trên app GSafe Pro.</li><li>Kích hoạt tín hiệu báo cháy, báo lỗi từ tủ trung tâm và tín hiệu nút nhấn khẩn cấp (nếu có).</li><li>Đối chiếu cảnh báo trên ứng dụng GSafe Pro của khách hàng và cuộc gọi <strong>AUTO CALL</strong>.</li><li>Với báo lỗi từ tủ, theo dõi đèn ALARM trên thiết bị và liên hệ GEIC để theo dõi dữ liệu báo lỗi trên hệ thống.</li></ul><h3>2. Kiểm tra pin dự phòng</h3><ul><li>Bật chức năng <strong>“Kiểm tra thiết bị”</strong> trên GSafe Pro.</li><li>Ngắt nguồn điện <strong>220VAC</strong>; thiết bị phải duy trì hoạt động bằng pin.</li><li>Kích báo cháy, báo lỗi hoặc nút nhấn khẩn cấp; kiểm tra cảnh báo ứng dụng và cuộc gọi AUTO CALL.</li></ul><div class="g6-modal-warning">Khách hàng không đồng ý thử bước nào: ghi rõ bước bị từ chối và lý do trong biên bản nghiệm thu (BBNT). Không được tự bỏ qua hoặc đánh dấu đã test khi chưa thực hiện.</div><div class="g6-modal-positive">GEIC đối chiếu tín hiệu thực tế; phiếu thiếu bước test mà BBNT không ghi rõ sẽ yêu cầu KTV thực hiện lại.</div>'
      }
    };
    const entry=details[topic];if(!entry)return;
    openModal(entry.title,entry.sub,'<div class="g6-dialog">'+entry.body+'</div>');
  };
  window.__PKT=window.__PKT||{};
  window.__PKT.openGSafeMaintenance=window.sg10GsafeInfo;
})();
