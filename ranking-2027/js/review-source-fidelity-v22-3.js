'use strict';
/* Ranking 2027 V22.3 REVIEW: fidelity fixes against supplied PPT originals.
   Runs LAST before deck mount. Preserve all approved V22.2 visual/layout CSS.
   Source URLs: local goc_slide_XX.webp files, not invented screenshots.
   Summary/practice slides explicitly have no one-to-one source slide. */
(() => {
  const byTitle = part => SLIDES.find(s => s.title && s.title.includes(part));
  const patches = [];
  const fix = (slide,find,replace,tag) => {
    if (!slide) { patches.push('MISSING SLIDE '+tag); return; }
    const prev=slide.html;
    slide.html=()=>{
      let html=prev();
      if(!html.includes(find)){
        console.warn('Source-fidelity patch not applied:',tag);
        return html;
      }
      return html.replace(find,replace);
    };
    patches.push(tag);
  };

  /* Link the reference image to the EXACT PPT page. A single source is only
     linked where the web slide corresponds to one original page. */
  const sourceByTitle=[
    ['HIỆN TRẠNG: 6 VẤN ĐỀ CỐT LÕI',1],
    ['MỤC TIÊU HỆ THỐNG RANKING 2027',2],
    ['4 TIÊU CHÍ, CÁCH XÁC ĐỊNH ĐẠT',3],
    ['RANKING ĐỘI TRƯỞNG: 3 TIÊU CHÍ',4],
    ['RANKING KTV PRO: CLL TRUNG BÌNH',5],
    ['WIFI XẤU: XÁC ĐỊNH ĐÚNG',7],
    ['CLL: GIẢM LỖI LẶP',8],
    ['COMBO: LẮP XONG',9],
    ['KIỂM SOÁT RỦI RO VÀ XỬ LÝ NGUY CƠ',10],
    ['WIFI XẤU: PHÂN NHÓM VÀ ĐÁNH GIÁ',12],
    ['CÁCH TÍNH TỶ LỆ NGUY CƠ RM',13],
    ['CÔNG THỨC TỶ LỆ KH KHÔNG DÙNG TRUYỀN HÌNH',14],
    ['NGUY CƠ RM: CHỦ ĐỘNG GIỮ KHÁCH',13]
  ];
  sourceByTitle.forEach(([title,source])=>{
    const s=byTitle(title);
    if(s)s.source=source;
  });

  const derivedSections=['MỞ ĐẦU','HÀNH ĐỘNG HẰNG NGÀY','TỰ QUẢN TRỊ KẾT QUẢ','TRÁCH NHIỆM PHỐI HỢP','HÀNH ĐỘNG 2027'];
  SLIDES.forEach(s=>{
    if(derivedSections.includes(s.section))s.source=null;
  });
  // The combined roles popup has no single exact source image.
  if(DETAILS.roles)DETAILS.roles.source=null;

  // PPT 05: the Pro's collective result includes quality, non-repeat rate,
  // AND resolution speed at the first customer contact.
  fix(byTitle('RANKING KTV PRO: CLL TRUNG BÌNH'),
    'Nâng chất lượng tại điểm chạm đầu tiên.',
    'Theo dõi chất lượng, giảm lỗi lặp và <b>tốc độ xử lý</b> tại điểm chạm đầu tiên.',
    'Pro: service quality, non-repetition, resolution speed');

  // PPT 07: modem location, Mesh wired/wireless and overloaded legacy Wi-Fi.
  // Short sentences preserve the four-card layout.
  fix(byTitle('WIFI XẤU: XÁC ĐỊNH ĐÚNG'),
    'Vị trí modem, vùng phủ, tốc độ, tín hiệu; nghiệm thu trên <b>Mỹ Bảo</b>.',
    'Nghiệm thu <b>Mỹ Bảo</b>; đo dây/Wi-Fi. Đặt modem <b>cao, thoáng, trung tâm</b>, không che chắn.',
    'WiFi: survey/modem placement');
  fix(byTitle('WIFI XẤU: XÁC ĐỊNH ĐÚNG'),
    'Tối ưu cấu hình; ưu tiên Mesh có dây khi thiếu vùng phủ; ghi đo kiểm <b>trước/sau</b>.',
    'Thiếu vùng phủ: ưu tiên <b>Mesh có dây</b>; Mesh không dây đặt nơi đủ tín hiệu. Wi-Fi cũ/quá tải: tư vấn nâng cấp.',
    'WiFi: mesh placement and legacy equipment');
  // PPT 08: weekly group coaching and 100% traceable cases.
  fix(byTitle('CLL: GIẢM LỖI LẶP'),
    'Đội trưởng/Pro phân tích case, hướng dẫn <b>hằng tuần</b> và kiểm tra ngẫu nhiên nghiệm thu thực tế.',
    'Đội trưởng/Pro chọn case điển hình, đào tạo <b>1 lần/tuần</b> và kiểm tra ngẫu nhiên nghiệm thu.',
    'CLL: coaching every week');
  fix(byTitle('CLL: GIẢM LỖI LẶP'),
    '<span>Hạn chế lỗi tái phát và khiếu nại lặp.</span>',
    '<span><b>100% case</b> rõ nguyên nhân, giải pháp, đo kiểm và kết quả hậu kiểm.</span>',
    'CLL: 100% case evidence');

  // PPT 09: viewing session and applicable group: ALL Combo customers with TK-BT transaction.
  // BOX and App records must be separate; these are NOT interpretations.
  fix(byTitle('COMBO: LẮP XONG'),
    'Phát sinh ít nhất <b>1 phiên xem liên tục 3 phút</b> trên đúng tài khoản KH.',
    '<b>≥ 1 phiên xem liên tục 3 phút</b> trên đúng tài khoản; <b>ghi nhận BOX/App riêng</b>.',
    'Combo: session 3 minutes, separate BOX/App');
  fix(byTitle('COMBO: LẮP XONG'),
    '<strong>KHÁCH HÀNG PHẢI THỰC SỰ SỬ DỤNG</strong><span>— Không chỉ hoàn thành cài đặt.</span>',
    '<strong>ÁP DỤNG: TẤT CẢ KH COMBO CÓ GIAO DỊCH TK-BT</strong><span>— Khách phải xem được và biết sử dụng, không chỉ hoàn tất cài đặt.</span>',
    'Combo: target transaction scope');

  // PPT 13: apply exception to the CL set before calculating RM denominator.
  fix(byTitle('CÁCH TÍNH TỶ LỆ NGUY CƠ RM'),
    'phân công AU trong tháng.',
    'được phân công AU cho KTV trong tháng. <b>Riêng CL:</b> nguyên nhân đầu vào không rõ lỗi/có khiếu nại RM, <b>hoặc</b> nội dung CL chứa từ khóa tương ứng.',
    'RM: CL eligibility by input reason or CL keywords');

  // Show a short source-status note on derived operational training slides,
  // without introducing new KPIs or falsely claiming a direct PPT page.
  fix(byTitle('4 ĐIỂM KIỂM SOÁT TRONG MỖI CA'),
    'Ranking bắt đầu từ từng lần tiếp xúc và xử lý với khách hàng.',
    'Gợi ý thực hành được <b>tổng hợp từ PPT</b>; không phải quy định đánh giá mới.',
    'Daily workflow: label derived guidance');
  fix(byTitle('ĐỘI TRƯỞNG VÀ PRO HỖ TRỢ KTV NHƯ THẾ NÀO'),
    'Vai trò phối hợp để cải thiện chất lượng Lô quản lý và kết quả đánh giá công việc.',
    'Sơ đồ phối hợp <b>tổng hợp từ các slide gốc</b>; không phải bảng KPI riêng.',
    'Roles: label synthesized coordination');
  // Explicitly label original-source syntheses rather than presenting as a new PPT policy.
  fix(byTitle('4 ĐIỂM KIỂM SOÁT TRONG MỖI CA'),
    '06 / ĐƯA RANKING VÀO CÔNG VIỆC',
    '06 / ĐƯA RANKING VÀO CÔNG VIỆC · TỔNG HỢP',
    'Daily: visible synthesized label');
  fix(byTitle('KTV TỰ KIỂM SOÁT KẾT QUẢ'),
    '07 / TỰ THEO DÕI RANKING',
    '07 / TỰ THEO DÕI RANKING · MÔ PHỎNG',
    'Self-check: visible simulator label');
  fix(byTitle('ĐỘI TRƯỞNG VÀ PRO HỖ TRỢ KTV NHƯ THẾ NÀO'),
    '08 / TRÁCH NHIỆM PHỐI HỢP',
    '08 / TRÁCH NHIỆM PHỐI HỢP · TỔNG HỢP',
    'Roles: visible synthesized label');

  // Accurate reference mapping on the popup panels.
  const refs={
    'context-all':1,'goals-all':2,'dt-all':4,'dt-force':4,'dt-quality':4,
    'dt-coordination':4,'pro-rule':5,'pro-role':5,
    'wifi':7,'cll':8,'cll-details':8,
    'combo':9,'combo-explain':9,
    'risk':10,'risk-original':10,
    'wifi-score':12,'wifi-bands':12,
    'rm':13,'rm-formula':13,'rm-numerator':13,'rm-denominator':13,
    'combo-formula':14,'roles':null
  };
  Object.entries(refs).forEach(([key,n])=>{
    if(DETAILS[key])DETAILS[key].source=n;
  });

  // Disambiguate source action for newly created summary slides (source=null).
  // Source button is hidden via app state when the current slide has no source.
  window.__rankingFidelityV223={sourceCount:sourceByTitle.length,patches};
})();