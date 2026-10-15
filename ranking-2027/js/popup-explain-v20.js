'use strict';
/* Ranking V20 — Popup training panels: examples/interpretation ONLY.
   Main criteria, formulas, and rules remain on the slide, sourced from the PPT.
   Examples are explicitly illustrative, not internal system measurements. */
(() => {
const I=(tone,icon,title,body)=>({tone,icon,title,body});
const P={
  wifi:{src:7,title:'Ví dụ kiểm tra Wi-Fi yếu',cards:[
    I('blue','wifi','Tình huống: phòng xa modem','KH đo tốc độ tốt tại modem nhưng kết nối yếu ở phòng cuối nhà. Kiểm tra RSSI và tốc độ ngay nơi KH thường sử dụng để tách lỗi vùng phủ khỏi lỗi đường truyền.'),
    I('green','tools','Cách xác nhận đã cải thiện','Đo lại tại đúng vị trí trước/sau tối ưu; ghi cấu hình, ảnh nghiệm thu và hỏi KH về trải nghiệm thực tế.')
  ]},
  'wifi-score':{src:12,title:'Hiểu đúng thang điểm Wi-Fi',cards:[
    I('blue','gauge','Điểm rủi ro khác Speedtest','Một kết quả Speedtest không đủ giải thích điểm Wi-Fi: cần đọc cùng RSSI, độ trễ, mất gói và mức sử dụng. Điểm rủi ro càng cao thì nhóm càng cần được kiểm tra.'),
    I('orange','alert','Điểm cần xác minh từ PPT','Nguồn ghi 1% + 15% + 85% = 101%. Giữ nguyên thông tin tài liệu; không tự sửa thành công thức hoặc tỷ trọng mới.')
  ]},
  'wifi-bands':{src:12,title:'Đọc các chỉ số Wi-Fi 5/6',cards:[
    I('blue','signal','Ví dụ phân biệt nguyên nhân','RSSI yếu tại một vị trí gợi ý vấn đề sóng/vùng phủ; RSSI tốt nhưng Ping/Loss cao cần kiểm tra thêm nhiễu, tải thiết bị và đường truyền.'),
    I('green','clipboard','Cách đối chiếu hiệu quả','Đo cùng thời điểm và cùng vị trí khi có thể; không suy ra công thức điểm từ một chỉ số vì PPT không nêu trọng số.')
  ]},
  rm:{src:13,title:'Ý nghĩa của rủi ro RM sau chăm sóc',cards:[
    I('orange','alert','Cách đọc kết quả','Nếu tỷ lệ còn cao sau khi chăm sóc, cần kiểm tra vì sao tập KH được chuyển vẫn ít sử dụng: lỗi chưa hết, kết nối chưa ổn định hay nhu cầu sử dụng chưa được khôi phục.'),
    I('blue','group','Không nhầm phạm vi','Chỉ đánh giá tập KH thỏa điều kiện lọc của chỉ số, không suy từ toàn bộ KH sử dụng ít trên địa bàn.')
  ]},
  'rm-formula':{src:13,title:'Ví dụ tính nguy cơ RM',cards:[
    I('blue','chart','Ví dụ minh họa','Giả sử có 100 KH thuộc mẫu số hợp lệ, 20 KH trong số đó có lưu lượng không vượt 1.000 MB: tỷ lệ = 20/100 × 100% = 20%. Đây là số giả định để giải thích, không phải báo cáo thật.'),
    I('orange','clipboard','Cần kiểm tra trước khi tính','Với nhóm CL, đối chiếu điều kiện nguyên nhân đầu vào hoặc từ khóa khiếu nại RM đúng quy tắc nguồn; tránh đưa nhầm case không đủ điều kiện.')
  ]},
  'rm-denominator':{src:13,title:'Vì sao mẫu số RM phải lọc kỹ?',cards:[
    I('blue','clipboard','Một trường hợp dễ tính nhầm','KH có nguy cơ nhưng chưa đủ 3 ngày từ khi đổ giỏ, hoặc không có vết chuyển KTV hợp lệ, không thể tự đưa vào mẫu số chỉ vì phát hiện lưu lượng thấp.'),
    I('orange','alert','Điểm ngoài phạm vi PPT','PPT không nêu cách xử lý bản ghi trùng hoặc KTV đổi Lô giữa kỳ. Phải theo quy tắc dữ liệu chính thức, không tự đặt chuẩn.')
  ]},
  'rm-numerator':{src:13,title:'Hiểu điều kiện tử số RM',cards:[
    I('orange','chart','Tử số là tập con','Một KH dùng ít hơn ngưỡng nhưng không nằm trong mẫu số được chuyển KTV hợp lệ thì không cộng vào tử số KPI này.'),
    I('blue','search','Cách kiểm chứng','Đối chiếu cùng kỳ, cùng tập KH rồi lọc lưu lượng; tránh lấy mọi thuê bao ít sử dụng toàn Lô.')
  ]},
  cll:{src:8,title:'Tình huống CLL tái phát',cards:[
    I('orange','repeat','Case gọi lại sau khi đóng','KH phản ánh Wi-Fi yếu tại vị trí cũ ngay hôm sau. Rà lại ảnh nghiệm thu, RSSI/speedtest đã ghi, cấu hình và cách xử lý trước khi đến kiểm tra tiếp.'),
    I('green','check','Hậu kiểm có ý nghĩa','Xác nhận KH sử dụng ổn định, không chỉ xác nhận “đã liên hệ”. Pro/ĐT chọn lỗi lặp tiêu biểu để hướng dẫn nhóm.')
  ]},
  'cll-details':{src:8,title:'Ví dụ hậu kiểm CLL',cards:[
    I('blue','clipboard','Lỗi yếu ở cuối nhà','Sau khi bổ sung Mesh, đo lại cùng điểm đặt thiết bị của KH; so sánh kết quả trước/sau và kiểm tra roaming nếu có nhiều điểm phát.'),
    I('green','phone','Khi gọi hậu kiểm','Hỏi KH đã dùng ổn định ở vị trí từng lỗi chưa; ghi nhận vết kiểm tra và phương án tiếp theo nếu còn tái phát.')
  ]},
  combo:{src:9,title:'Ví dụ hướng dẫn IPTV tại chỗ',cards:[
    I('blue','tv','Đăng nhập thành công chưa đủ','Cần mở nội dung trên đúng tài khoản và kiểm tra xem được thật; qua đó phát hiện sớm lỗi mạng, tài khoản hoặc thao tác thiết bị.'),
    I('green','phone','Khách chưa quen dịch vụ','Làm mẫu một lần rồi để KH tự chọn chương trình. Chỉ giải thích tính năng; giá và chính sách chuyển đúng bộ phận khi cần.')
  ]},
  'combo-explain':{src:9,title:'Ví dụ phân luồng khách hàng Combo',cards:[
    I('purple','tv','BOX khác với App','BOX cần kiểm tra kết nối TV, điều khiển và tài khoản; App cần kiểm tra tải ứng dụng, đăng nhập và phát nội dung trên thiết bị thực tế.'),
    I('orange','calendar','Khi D+7 không dùng','Chuyển lý do đã kiểm tra cho DVKH: thiết bị, lỗi đăng nhập, nhu cầu hay vướng mắc thao tác, thay vì chỉ ghi “KH chưa xem”.')
  ]},
  'combo-formula':{src:14,title:'Ví dụ tỷ lệ không sử dụng truyền hình',cards:[
    I('blue','chart','Ví dụ giả định','Một Lô có 100 KH Combo NET + IPTV. Trong đó 20 KH không phát sinh lưu lượng IPTV trong 3 tháng: tỷ lệ minh họa là 20%. Không phải số liệu thật.'),
    I('green','search','Nguồn phải đúng','Chỉ đọc từ dữ liệu FPL của tập Combo thuộc Lô; không dùng khảo sát cảm nhận thay cho lưu lượng IPTV.')
  ]},
  risk:{src:10,title:'Ví dụ phối hợp xử lý nguy cơ',cards:[
    I('blue','pin','Nguy cơ theo địa bàn','Một công trình có thể ảnh hưởng cả tuyến cáp và nhiều KH. Đây là rủi ro hạ tầng cần phối hợp xử lý theo khu vực, không chỉ đóng từng case khách lẻ.'),
    I('orange','phone','Nguy cơ theo thuê bao','KH không phát sinh lưu lượng sau khi đổi mật khẩu Wi-Fi: hỗ trợ kết nối lại thiết bị và xác nhận có sử dụng, không kết luận “đã xử lý” chỉ vì gọi xong.')
  ]},
  'risk-original':{src:10,title:'Phân biệt hai luồng rủi ro',cards:[
    I('blue','shield','Theo hạ tầng','Khi có sự cố lặp trên cùng tập điểm/cáp, xem xét mẫu chung để báo quản lý và phối hợp đội hiện trường.'),
    I('orange','clipboard','Theo khách hàng','Với KH nguy cơ, ghi đúng nguyên nhân, hình thức hỗ trợ và tình trạng sử dụng sau xử lý để DVKH có thể tiếp tục chăm sóc.')
  ]},
  roles:{src:4,title:'Ví dụ phối hợp KTV – Pro – Đội trưởng',cards:[
    I('blue','group','Một case Wi-Fi lặp','KTV đo kiểm và xử lý tại nhà; Pro hỗ trợ ca khó, kiểm chứng nguyên nhân; Đội trưởng nhìn xu hướng tái lỗi cả đội và bố trí đào tạo.'),
    I('orange','alert','Đừng gộp thang đánh giá','Mỗi vai trò có tiêu chí riêng trong tài liệu. Không áp dụng hình thức xử lý của Pro/ĐT cho KTV.')
  ]},
  'dt-all':{src:4,title:'Ví dụ tổng hợp kết quả Đội trưởng',cards:[
    I('blue','chart','Ví dụ 2 trên 3','Nếu đạt nhân sự/AU và chất lượng KTV nhưng chưa đạt năng lực phối hợp thì tổng thể vẫn đạt theo quy tắc 2/3 trong PPT.'),
    I('orange','calendar','Ví dụ đếm số tháng không đạt','Không đạt tháng 5 và 6 là 2 tháng liên tiếp. Không đạt tháng 2, 5 và 8 trong cùng năm là 3 tháng không liên tiếp. Đây là ví dụ minh họa cách đếm, không phải dữ liệu thực tế.')
  ]},
  'dt-force':{src:4,title:'Cách hiểu định mức AU/KTV',cards:[
    I('blue','group','So đúng tập quản lý','Đối chiếu số KTV và AU thuộc đúng Lô/kỳ đánh giá. Nếu có chuyển Lô hoặc đổi nhân sự, kiểm tra cách chốt dữ liệu trước khi kết luận.'),
    I('orange','alert','Giới hạn của PPT','Nguồn không mô tả phép làm tròn AU hoặc cách tính trong tháng có biến động nhân sự.')
  ]},
  'dt-quality':{src:4,title:'Ví dụ tỷ lệ KTV đạt',cards:[
    I('green','group','Ví dụ minh họa','Nếu đội có 10 KTV thuộc tập đánh giá, cần ít nhất 8 KTV đạt để tiêu chí đạt. Ví dụ chỉ để làm rõ cách đọc tỷ lệ.'),
    I('blue','tools','Hành động sau đo đếm','Xác định KTV nào đang vướng nhiều tiêu chí để hỗ trợ theo từng nguyên nhân, thay vì chỉ nhìn phần trăm chung.')
  ]},
  'dt-coordination':{src:4,title:'Giải thích năng lực phối hợp',cards:[
    I('blue','clipboard','Cách xác nhận','Dùng đánh giá quản lý/phối hợp Dịch-thuật của đầu mối có thẩm quyền và đúng kỳ, không tự chấm theo cảm nhận.'),
    I('orange','alert','Chưa có chi tiết trong PPT','Tài liệu không cung cấp biểu mẫu hoặc trọng số riêng của tiêu chí này.')
  ]},
  'pro-rule':{src:5,title:'Hiểu trách nhiệm CLL tập thể của Pro',cards:[
    I('green','repeat','Kết quả không chỉ của Pro','Đơn vị đánh giá tỷ lệ CLL trung bình của tập thể được Pro hỗ trợ. Phải chốt đúng danh sách KTV, không thay bằng CLL cá nhân Pro.'),
    I('orange','alert','Chưa có ngưỡng số','PPT ghi so với “tỷ lệ chuẩn” nhưng không nêu giá trị cụ thể. Không tự sử dụng ngưỡng 6% của KTV.')
  ]},
  'pro-role':{src:5,title:'Một ca Pro hướng dẫn thực chiến',cards:[
    I('green','tools','Chẩn đoán cùng KTV','Case lỗi lặp: xem lịch sử và đo kiểm, xác định nguyên nhân gốc, làm mẫu cách sửa rồi yêu cầu KTV thử thực hiện lại.'),
    I('blue','chart','Đánh giá sau hướng dẫn','So sánh tình trạng tái lỗi sau can thiệp; ghi bài học áp dụng được cho cả nhóm.')
  ]},
  'context-all':{src:1,title:'Vì sao cần đánh giá thống nhất?',cards:[
    I('blue','chart','Từ phân tán đến một cách đọc','KPI ở các báo cáo khác nhau dễ gây kết luận không nhất quán. Đối chiếu nguồn và kỳ dữ liệu trước khi xây hành động cải thiện.'),
    I('orange','group','Một tình huống quản lý','Nếu cùng lỗi lặp mà mỗi đội ghi nguyên nhân khác nhau, cần chuẩn hóa ghi nhận rồi mới so hiệu quả hỗ trợ.')
  ]},
  'goals-all':{src:2,title:'Đưa mục tiêu thành hành động',cards:[
    I('blue','target','Bắt đầu từ chỉ tiêu cần cải thiện','Ví dụ chọn chỉ số Wi-Fi xấu đang tăng để lập danh sách kiểm tra, phân công người phụ trách, đo trước/sau và theo dõi tháng sau.'),
    I('green','upward','Đánh giá để phát triển','Dữ liệu Ranking giúp chọn nội dung kèm cặp KTV/ĐT phù hợp, không phải chỉ lập bảng xếp hạng.')
  ]}
};
const safe=(s)=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const make=(d)=>'<div class="v20-explainer" aria-label="Nội dung diễn giải">'+d.cards.map((c,i)=>
  '<article class="v20-example tone-'+safe(c.tone)+'"><span class="v20-example-icon">'+ico(c.icon)+'</span>'+
  '<div class="v20-example-copy"><span class="v20-example-label">'+(i===0?'DIỄN GIẢI / VÍ DỤ':'CÁCH KIỂM TRA / LƯU Ý')+'</span>'+
  '<h3>'+safe(c.title)+'</h3><p>'+safe(c.body)+'</p></div></article>').join('')+
  '<p class="v20-help-note">Tình huống và số liệu minh họa được dùng để giải thích; điều kiện chính thức giữ nguyên trên slide. Có thể mở ảnh PPT gốc để đối chiếu.</p></div>';
for(const [key,source] of Object.entries(P)){
  if(!DETAILS[key]) continue;
  DETAILS[key].eyebrow='HƯỚNG DẪN HIỂU ĐÚNG · RANKING 2027';
  DETAILS[key].title=source.title;
  DETAILS[key].source=source.src;
  DETAILS[key].html=make(source);
}
// On the summary slide, the original evaluation already appears in cards;
// the popup triggers are renamed to avoid suggesting repeated "full criteria".
const relabel=[
 ['Xem đầy đủ tiêu chí','Xem ví dụ và cách hiểu'],
 ['Xem điều kiện & hình thức xử lý','Xem ví dụ kết quả'],
 ['Chi tiết hành động Pro','Ví dụ Pro hỗ trợ'],
 ['Xem cách đánh giá Pro','Hiểu chỉ số Pro'],
 ['Chi tiết điều kiện tính RM','Ví dụ cách tính RM'],
 ['Xem ví dụ và định nghĩa gốc','Xem ví dụ tính'],
 ['Đầy đủ hành động theo mẫu','Xem tình huống áp dụng'],
 ['Phân tích đầy đủ','Ví dụ minh họa'],
 ['Xem đủ điều kiện ghi nhận','Ví dụ nguy cơ RM'],
 ['Chi tiết định hướng','Cách triển khai']
];
for(const slide of SLIDES){
  const old=slide.html;
  slide.html=()=>{
    let s=old();
    for(const [from,to] of relabel)s=s.split(from).join(to);
    return s;
  };
}
})();