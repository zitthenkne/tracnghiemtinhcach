// Dữ liệu bộ 10 câu hỏi và ma trận điểm
const questions = [
  {
    id: 1,
    question: "Đối mặt với mớ lý thuyết khổng lồ trước ngày thi, chiến thuật cốt lõi của bạn là:",
    answers: [
      { key: "A", text: "Lọc lấy những ý \"ăn điểm\" nhất để học, dứt khoát bỏ qua phần râu ria.", scores: { TC: 3, HCNS: 1, PR: -1 } },
      { key: "B", text: "Phân loại, đánh số và sắp xếp tài liệu theo đúng trật tự logic để học dần.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "C", text: "Tự chế mẹo nhớ, biến mớ kiến thức khô khan thành mấy câu chuyện hài hước để học tới đâu nhớ tới đó.", scores: { PR: 3, ND: 1, HCNS: -1 } },
      { key: "D", text: "Đọc lướt tổng thể để hiểu bức tranh chung và quy luật trước khi đi sâu.", scores: { ND: 3, PR: 1, TC: -1 } }
    ]
  },
  {
    id: 2,
    question: "Đang làm bài nhóm thì một thành viên rút lui, để lại lỗ hổng lớn. Phản ứng đầu tiên của bạn:",
    answers: [
      { key: "A", text: "Coi đây là cớ để \"đập đi xây lại\", làm theo cái hướng mà lúc trước cả nhóm còn chưa dám thử.", scores: { PR: 3, ND: 1, TC: -1 } },
      { key: "B", text: "Đánh giá xem phần đó có thực sự đáng giá để tốn sức làm bù không.", scores: { TC: 3, HCNS: 1, PR: -1 } },
      { key: "C", text: "Rà soát lại quy định nhóm và chia lại phần việc công bằng cho người còn lại.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "D", text: "Tùy cơ ứng biến, nắn lại hướng đi của cả bài cho hợp với hiện tại.", scores: { ND: 3, PR: 1, HCNS: -1 } }
    ]
  },
  {
    id: 3,
    question: "Sống chung với một người hay vứt đồ lộn xộn, bạn sẽ giải quyết bằng cách:",
    answers: [
      { key: "A", text: "Bày một \"chiến dịch\" nhắc khéo siêu lầy như dán meme, treo bảng cảnh báo vui để đối phương tự nhột mà thay đổi.", scores: { PR: 3, ND: 1, HCNS: -1 } },
      { key: "B", text: "Ngồi lại chốt ngay một bộ quy tắc chung và hình phạt cụ thể nếu vi phạm.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "C", text: "Tìm cách lách qua lách lại, thỉnh thoảng nhắc khéo chứ không làm to chuyện.", scores: { ND: 3, PR: 1, TC: -1 } },
      { key: "D", text: "Deal thẳng: muốn mình dọn giùm thì bao trà sữa, sòng phẳng thì đôi bên cùng vui vẻ.", scores: { TC: 3, HCNS: 1, PR: -1 } }
    ]
  },
  {
    id: 4,
    question: "Khi đi lâm sàng, phong cách tư duy và ghi chép của bạn ưu tiên điều gì nhất?",
    answers: [
      { key: "A", text: "Ghi lại toàn bộ bối cảnh và câu chuyện dẫn đến tình trạng hiện tại của bệnh nhân.", scores: { ND: 3, PR: 1, TC: -1 } },
      { key: "B", text: "Bám sát quy trình chuẩn, tuần tự từng bước thăm khám, không bỏ sót chi tiết.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "C", text: "Tưởng tượng và mô hình hóa căn bệnh trong đầu, biến các triệu chứng phức tạp thành những khái niệm quen thuộc.", scores: { PR: 3, ND: 1, HCNS: -1 } },
      { key: "D", text: "Chỉ ghi đúng mấy cái \"key\" chẩn đoán mà đi thi với đi trực kiểu gì cũng dùng tới.", scores: { TC: 3, HCNS: 1, PR: -1 } }
    ]
  },
  {
    id: 5,
    question: "Nhìn lướt qua không gian sống/góc học tập của bạn, người ta sẽ nhận thấy:",
    answers: [
      { key: "A", text: "Chẳng có gì thừa, món nào lâu rồi không đụng tới là bị đem thanh lý hoặc cho đi ngay.", scores: { TC: 3, HCNS: 1, PR: -1 } },
      { key: "B", text: "Chiếc balo với vài món gọn nhẹ luôn trong tư thế sẵn sàng, ai rủ đi đâu là xách lên đi được liền.", scores: { ND: 3, PR: 1, HCNS: -1 } },
      { key: "C", text: "Sách vở chia ngăn theo môn, dây sạc cuộn gọn, nhắm mắt cũng biết món nào đang nằm ở đâu.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "D", text: "Hơi bừa một cách \"nghệ thuật\": giấy note ý tưởng dán khắp nơi, đồ trang trí tự chế mỗi thứ một kiểu.", scores: { PR: 3, ND: 1, TC: -1 } }
    ]
  },
  {
    id: 6,
    question: "Bạn được giao nhiệm vụ order đồ ăn đêm cho nhóm. Tiêu chí chốt đơn của bạn là:",
    answers: [
      { key: "A", text: "Chọn một quán mới toanh ở xa xa để cả đám cùng có cớ lượn lờ đổi gió.", scores: { ND: 3, PR: 1, HCNS: -1 } },
      { key: "B", text: "Ra deadline giờ chốt đơn và yêu cầu ghi đúng cú pháp rõ ràng để dễ tổng hợp.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "C", text: "Rủ cả đám gọi cái món nghe tên đã thấy \"sai sai\" chưa ai dám thử, dở thì ít nhất cũng có chuyện để kể.", scores: { PR: 3, ND: 1, TC: -1 } },
      { key: "D", text: "Tìm quán nào đang áp được nhiều mã giảm giá nhất rồi mới cho chọn.", scores: { TC: 3, HCNS: 1, PR: -1 } }
    ]
  },
  {
    id: 7,
    question: "Cuối tuần trống lịch, cách bạn \"chữa lành\" hiệu quả nhất là:",
    answers: [
      { key: "A", text: "Tổng vệ sinh phòng ốc, giặt giũ, xếp lại lịch tuần sau, dọn xong thấy người nhẹ hẳn.", scores: { HCNS: 3, TC: 1, PR: -1 } },
      { key: "B", text: "Dành thời gian mày mò một sở thích mới, hoặc bắt tay vào thực hiện một ý tưởng hay ho đang ấp ủ.", scores: { PR: 3, ND: 1, TC: -1 } },
      { key: "C", text: "Bật chế độ \"ngủ đông\": nằm nhà ngủ nướng, xem phim, vừa hồi sức vừa chẳng tốn đồng nào.", scores: { TC: 3, HCNS: 1, ND: -1 } },
      { key: "D", text: "Xách xe đi dạo không mục đích hoặc đến một nơi chưa từng đặt chân tới.", scores: { ND: 3, PR: 1, HCNS: -1 } }
    ]
  },
  {
    id: 8,
    question: "Đối mặt với những môn học nặng về cơ chế (như Dược lý, Sinh lý), bạn thường:",
    answers: [
      { key: "A", text: "Lập bảng chia cột rành mạch để học đối chiếu theo chiều dọc, chiều ngang.", scores: { HCNS: 3, TC: 1, ND: -1 } },
      { key: "B", text: "Tưởng tượng các cơ chế thành tuyến nhân vật rồi tự dựng một bộ phim trong đầu, học mà như đang xem drama.", scores: { PR: 3, ND: 1, TC: -1 } },
      { key: "C", text: "Phân loại theo tần suất xuất hiện, nhồi phần trọng tâm nhất.", scores: { TC: 3, HCNS: 1, PR: -1 } },
      { key: "D", text: "Hình dung con đường đi của cơ chế như một chuỗi hành trình có tính liên kết.", scores: { ND: 3, PR: 1, HCNS: -1 } }
    ]
  },
  {
    id: 9,
    question: "Bất ngờ! Sự kiện sắp diễn ra thì xảy ra sự cố ngoài ý muốn. Phản xạ của bạn:",
    answers: [
      { key: "A", text: "Tính toán ngay xem nguồn lực dự phòng có đủ gánh vác rủi ro hay không.", scores: { TC: 6, HCNS: 2, PR: -2 } },
      { key: "B", text: "Nghĩ ngay một phương án chữa cháy chưa ai làm bao giờ, biết đâu chính sự cố này lại làm chương trình đáng nhớ hơn.", scores: { PR: 6, ND: 2, TC: -2 } },
      { key: "C", text: "Chạy thẳng ra hiện trường xem tận mắt tình hình rồi xoay phương án ngay tại chỗ.", scores: { ND: 6, PR: 2, HCNS: -2 } },
      { key: "D", text: "Mở ngay kịch bản dự phòng đã soạn sẵn từ trước, bình tĩnh xử lý từng đầu việc một, không để cuống.", scores: { HCNS: 6, TC: 2, ND: -2 } }
    ]
  },
  {
    id: 10,
    question: "Sau khi kết thúc một dự án khó nhằn, cảm giác thỏa mãn nhất của bạn đến từ:",
    answers: [
      { key: "A", text: "Thấy mọi thứ được vận hành đúng kế hoạch, chuẩn mực và lưu trữ gọn gàng.", scores: { HCNS: 3, TC: 1, PR: -1 } },
      { key: "B", text: "Tự hào vì bản thân dám thử nghiệm, biến một ý tưởng tưởng chừng \"điên rồ\" thành hiện thực.", scores: { PR: 3, ND: 1, TC: -1 } },
      { key: "C", text: "Thấy mình dày dạn hẳn lên, gom thêm một mớ chuyện \"thực chiến\" mà không giáo trình nào dạy.", scores: { ND: 3, PR: 1, HCNS: -1 } },
      { key: "D", text: "Nhìn lại thấy mục tiêu chính đạt đủ, mà tiền bạc lẫn công sức không hao một chút nào vô ích.", scores: { TC: 3, HCNS: 1, ND: -1 } }
    ]
  }
];

// Khai báo các biến trạng thái
let currentQuestionIndex = 0;
let activeQuestions = [];
let userAnswers = [];
let finalRankedDepts = null;
let finalTop1 = null;
let finalTop2 = null;

// Tên đầy đủ của các ban
const departmentNames = {
  HCNS: "Ban Hành Chính Nhân Sự",
  TC: "Ban Tài Chính",
  ND: "Ban Nội Dung",
  PR: "Ban PR - IT"
};

// Liên kết hình ảnh Tarot tương ứng của từng ban
const tarotImages = {
  HCNS: "tarot_hcns.png",
  TC: "tarot_tc.png",
  ND: "tarot_nd.png",
  PR: "tarot_pr.png"
};

// Hồ sơ chi tiết từng ban (trích từ website chính thức của CLB Nhà Đỏ TNTY)
// Dùng để dựng "thẻ hồ sơ ban" trực quan trên màn hình kết quả.
const departmentInfo = {
  HCNS: {
    accent: "45, 100%, 50%", // Vàng gold
    metaphor: "HỆ XƯƠNG SỐNG",
    slogan: "Việc gì ra việc nấy, chơi gì ra chơi nấy",
    desc: "Những \"kiến trúc sư\" đứng sau cánh gà, thiết kế và xây dựng quy trình để cỗ máy CLB vận hành trơn tru.",
    tasks: [
      { icon: "📋", text: "Quản lý tài liệu & Drive từng chương trình" },
      { icon: "✍️", text: "Ghi biên bản, tóm tắt nội dung cuộc họp" },
      { icon: "🎖️", text: "Merge & đóng mộc giấy chứng nhận cho chiến sĩ" },
      { icon: "🧩", text: "Tuyển thành viên CLB & chiến sĩ tình nguyện" },
      { icon: "🎁", text: "Tổ chức \"Send Wish\", \"Nước Chảy Về Nguồn\"" }
    ],
    skills: ["Tổ chức & quản lý", "Kỷ luật, tỉ mỉ", "Tin học văn phòng", "Tinh thần đoàn kết"],
    url: "https://sites.google.com/view/tinhnguyentruongy/tuy%E1%BB%83n-th%C3%A0nh-vi%C3%AAn/h%C3%A0nh-ch%C3%ADnh-nh%C3%A2n-s%E1%BB%B1"
  },
  TC: {
    accent: "145, 85%, 45%", // Xanh lá tài lộc
    metaphor: "NGUỒN NHIÊN LIỆU",
    slogan: "Làm hết sức, chơi hết mình — không ai bị bỏ lại phía sau",
    desc: "Nguồn nhiên liệu và tấm bản đồ chiến lược cho mọi chương trình: gây quỹ, quản lý và tiếp sức tài chính cho CLB.",
    tasks: [
      { icon: "💰", text: "Duyệt dự trù, tổng thu chi & nguồn tài trợ" },
      { icon: "🧾", text: "Quản lý quỹ, cấp chi phí cho hoạt động" },
      { icon: "👕", text: "Gây quỹ: bán áo Blouse" },
      { icon: "🌸", text: "Gây quỹ: bán hoa dịp 8/3" }
    ],
    skills: ["Excel, Word, phần mềm chuyên dụng", "Quản lý chi tiêu & tài chính", "Kỹ năng sống từ anh chị", "Gắn bó đồng đội"],
    url: "https://sites.google.com/view/tinhnguyentruongy/tuy%E1%BB%83n-th%C3%A0nh-vi%C3%AAn/ban-t%C3%A0i-ch%C3%ADnh"
  },
  ND: {
    accent: "355, 85%, 52%", // Đỏ ruby trái tim
    metaphor: "TRÁI TIM",
    slogan: "Nếu PR-IT là BỘ MẶT thì Nội Dung chính là TRÁI TIM",
    desc: "Người đặt những viên gạch đầu tiên, đi đến những vùng đất mới để tìm ra lý do cho mỗi chuyến xe tình nguyện.",
    tasks: [
      { icon: "🔎", text: "Tìm địa điểm & soạn câu hỏi khảo sát" },
      { icon: "🧭", text: "Tiền trạm: đi thực tế đến các tỉnh" },
      { icon: "📊", text: "Phân tích nhu cầu & điều kiện tổ chức" },
      { icon: "📝", text: "Tổng hợp & trình bày báo cáo tiền trạm" }
    ],
    skills: ["\"Đặc sản\" những chuyến tiền trạm", "Thuyết trình & báo cáo", "Dò đường, điều hướng", "Giao tiếp với đối tác"],
    url: "https://sites.google.com/view/tinhnguyentruongy/tuy%E1%BB%83n-th%C3%A0nh-vi%C3%AAn/ban-n%E1%BB%99i-dung"
  },
  PR: {
    accent: "215, 90%, 50%", // Xanh dương sáng tạo
    metaphor: "BỘ MẶT",
    slogan: "Nơi chữa lành, trau dồi kỹ năng & thể hiện cá tính — một gia đình nhỏ trong gia đình to",
    desc: "Bộ mặt của CLB, biến mọi câu chuyện trở nên sống động và lan tỏa qua hình ảnh, truyền thông và công nghệ.",
    tasks: [
      { icon: "🎨", text: "Sáng tạo ấn phẩm truyền thông" },
      { icon: "📷", text: "Chụp ảnh, lưu lại kỷ niệm hoạt động" },
      { icon: "💻", text: "Quản lý & chỉnh sửa website CLB" },
      { icon: "✏️", text: "Viết bài & quản lý Fanpage" },
      { icon: "🎤", text: "Làm MC, \"PR giảng đường\", hoạt náo xe" }
    ],
    skills: ["Tự tin trước đám đông", "Chụp ảnh, dựng bố cục", "Thiết kế & chỉnh sửa ảnh", "Xây dựng mối quan hệ"],
    url: "https://sites.google.com/view/tinhnguyentruongy/tuy%E1%BB%83n-th%C3%A0nh-vi%C3%AAn/ban-pr-it"
  }
};

// Module 1: Lời tiên tri cho TOP 1 (Ban cao % nhất)
const module1Texts = {
  HCNS: `🥇 HỆ TƯ TƯỞNG CHỦ ĐẠO: XƯƠNG SỐNG QUYỀN LỰC (BAN HCNS)<br><br>Xét nghiệm DNA tâm lý cho thấy bạn sở hữu một bộ não cực kỳ ngăn nắp, chỉn chu và kỷ luật. Vũ trụ "khẳng định" bạn sinh ra để thuộc về Ban Hành Chính Nhân Sự. Bạn là người ghét sự mơ hồ, thích làm việc có quy trình rõ ràng và có khả năng cứu vớt một tập thể khỏi sự lộn xộn. Bạn chính là bộ khung xương sống vững chắc để Câu lạc bộ dựa vào mỗi mùa chạy sự kiện!`,
  TC: `🥇 HỆ TƯ TƯỞNG CHỦ ĐẠO: TƯ BẢN THỰC DỤNG (BAN TÀI CHÍNH)<br><br>Trải bài Tarot y khoa chỉ ra bạn có một cái đầu lạnh, nảy số cực nhạy và tư duy tối ưu hóa nguồn lực đỉnh cao. Chúc mừng, bạn chính là "tay hòm chìa khóa" đích thực của Ban Tài Chính! Bạn không dễ bị thao túng tâm lý, luôn biết điều gì sinh ra giá trị thực sự. Da thịt của CLB có "đầy đặn" hay không là nhờ vào tư duy sắc bén của bạn đó.`,
  ND: `🥇 HỆ TƯ TƯỞNG CHỦ ĐẠO: TRÁI TIM XÊ DỊCH (BAN NỘI DUNG)<br><br>Tần số của bạn phát ra sự phóng khoáng, linh hoạt và một cái nhìn cực kỳ bao quát. Chào mừng đến với Ban Nội Dung! Bạn không thích bị nhốt trong khuôn khổ mà đam mê xê dịch, thích trải nghiệm thực tế để tự mình "phá băng" các vấn đề. CLB rất cần một trái tim dũng cảm như bạn để đi tiền trạm và mang yêu thương đến đúng nơi cần đến.`,
  PR: `🥇 HỆ TƯ TƯỞNG CHỦ ĐẠO: KẺ MỘNG MƠ BỨT PHÁ (BAN PR-IT)<br><br>Chúc mừng! Vũ trụ ghi nhận bạn có một trí tưởng tượng phong phú, nhạy bén với cái đẹp và một tư duy dám thử nghiệm cái mới. Bạn chính là "gương mặt thương hiệu" mà Ban PR-IT đang tìm kiếm. Bạn biết cách nhân hóa sự khô khan thành những câu chuyện truyền cảm hứng. Thiếu bạn, CLB sẽ mất đi sự bùng nổ và sức sáng tạo kịch trần!`
};

// Module 2: Đoạn chuyển ngữ giải thích sự "Lai tạp" (Dành cho TOP 2, có placeholder cho phần trăm)
const module2Texts = {
  HCNS: `🥈 Tuy nhiên, bạn có độ tương thích <strong>[X]%</strong> với Ban HCNS. Bởi vì thẳm sâu bên trong sự phá cách của bạn, vẫn có một "DNA sinh viên Y" ngầm yêu cầu mọi thứ phải có trật tự. Đôi lúc bạn vẫn cần một cái checklist rõ ràng để thấy an tâm, và sự cẩn trọng này giúp bạn không bao giờ bị chệch đường ray!`,
  TC: `🥈 Đồng thời, bạn cũng "lai" <strong>[X]%</strong> với Ban Tài Chính. Dù bạn có bay bổng hay phóng khoáng cỡ nào, bạn vẫn giữ lại cho mình sự thực tế. Bạn biết cân đo đong đếm thiệt hơn trong các quyết định và không bao giờ để tập thể phải "đổ vỏ" vì những quyết định thiếu tính toán chi phí.`,
  ND: `🥈 Bất ngờ thay, bạn lại khớp <strong>[X]%</strong> với Ban Nội Dung. Nghĩa là bên cạnh sự nguyên tắc, bạn vẫn có một tâm hồn khao khát được chữa lành bằng những chuyến đi. Bạn sở hữu khả năng thích nghi và sự nhạy cảm với thế giới xung quanh, chỉ là bạn đang chờ đúng thời điểm để "xách balo lên và đi" thôi!`,
  PR: `🥈 Thú vị hơn, hệ thống ghi nhận bạn có <strong>[X]%</strong> "máu" của Ban PR-IT. Dưới vẻ ngoài logic và khô khan kia, bạn thực chất là một người có tư duy hình ảnh và khát khao được đột phá. Đôi khi bạn giải quyết rắc rối bằng một góc nhìn cực kỳ "out of the box" (vượt khuôn khổ) mà người khác không ngờ tới!`
};

// Tổ hợp thông điệp từ Nhà Đỏ TNTY dựa trên Top 1 & Top 2
const combinationMessages = {
  "HCNS-PR": "Sự kết hợp giữa Kỷ luật thép (HCNS) và Tư duy đột phá (PR-IT) biến bạn thành một nhân tài hiếm có khó tìm! Khung trời Y Khoa này là để bạn tỏa sáng!",
  "HCNS-TC": "Sự kết hợp giữa Kỷ luật thép (HCNS) và Tư duy thực tế (Tài Chính) tạo nên một người quản trị kiệt xuất. Bạn chính là chỗ dựa vững chắc nhất cho toàn bộ hệ thống vận hành!",
  "HCNS-ND": "Sự kết hợp giữa Kỷ luật thép (HCNS) và Trái tim xê dịch (Nội Dung) giúp bạn vừa tổ chức chặt chẽ vừa tràn đầy năng lượng thực tế. Bạn luôn biết cách hiện thực hóa các ý tưởng thiện nguyện một cách trọn vẹn nhất!",
  
  "TC-HCNS": "Sự kết hợp giữa Tư duy thực tế (Tài Chính) và Kỷ luật thép (HCNS) biến bạn thành nhà chiến lược tối ưu hóa hoàn hảo. Không một đồng tiền hay nhân lực nào bị lãng phí dưới sự giám sát của bạn!",
  "TC-PR": "Sự kết hợp giữa Tư duy thực tế (Tài Chính) và Tư duy đột phá (PR-IT) tạo nên một người làm truyền thông hiệu quả bậc nhất - biết cách biến những ý tưởng táo bạo thành kết quả thực tế!",
  "TC-ND": "Sự kết hợp giữa Tư duy thực tế (Tài Chính) và Trái tim xê dịch (Nội Dung) giúp bạn vừa bay bổng vừa thực tế, luôn biết cách cân bằng giữa trải nghiệm và ngân sách!",
  
  "ND-HCNS": "Sự kết hợp giữa Trái tim xê dịch (Nội Dung) và Kỷ luật thép (HCNS) tạo nên một người thủ lĩnh phong trào mẫu mực - vừa lăn xả nhiệt tình vừa dẫn dắt nhóm đi đúng quỹ đạo!",
  "ND-TC": "Sự kết hợp giữa Trái tim xê dịch (Nội Dung) và Tư duy thực tế (Tài Chính) giúp bạn có những góc nhìn bao quát, luôn sẵn sàng đi đầu nhưng không quên tính toán giải pháp bền vững!",
  "ND-PR": "Sự kết hợp giữa Trái tim xê dịch (Nội Dung) và Tư duy đột phá (PR-IT) là cặp đôi sáng tạo đỉnh cao! Bạn vừa có trải nghiệm thực tế vừa biết cách truyền tải nó thành những câu chuyện chạm đến trái tim.",
  
  "PR-HCNS": "Sự kết hợp giữa Tư duy đột phá (PR-IT) và Kỷ luật thép (HCNS) giúp bạn vừa bay bổng sáng tạo nhưng vẫn giữ được sự chỉn chu, ngăn nắp trong từng sản phẩm truyền thông.",
  "PR-TC": "Sự kết hợp giữa Tư duy đột phá (PR-IT) và Tư duy thực tế (Tài Chính) biến bạn thành nhà thiết kế trải nghiệm tối ưu - luôn mang lại những giải pháp vừa đẹp mắt vừa thực tế, mang lại giá trị cao.",
  "PR-ND": "Sự kết hợp giữa Tư duy đột phá (PR-IT) và Trái tim xê dịch (Nội Dung) tạo nên một ngọn lửa truyền cảm hứng mãnh liệt. Bạn biến những chuyến đi thiện nguyện thành những thước phim, câu chuyện đầy nghệ thuật!"
};

// -------------------------------------------------------------
// TIỆN ÍCH TRẢI NGHIỆM DI ĐỘNG
// -------------------------------------------------------------

// Người dùng có bật chế độ giảm chuyển động không (tôn trọng cả rung lẫn cuộn mượt)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Rung phản hồi haptic trên điện thoại hỗ trợ (bỏ qua nếu người dùng muốn giảm chuyển động)
function haptic(pattern) {
  if (prefersReducedMotion) return;
  if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
    try { navigator.vibrate(pattern); } catch (e) { /* Bỏ qua nếu trình duyệt chặn */ }
  }
}

// Cuộn lên đầu khi chuyển màn hình để người dùng di động luôn thấy nội dung mới từ trên xuống
function scrollToTop() {
  const behavior = prefersReducedMotion ? "auto" : "smooth";
  try {
    window.scrollTo({ top: 0, left: 0, behavior });
  } catch (e) {
    window.scrollTo(0, 0);
  }
}

// Tải trước các ảnh Tarot nặng để khi lật bài không bị trắng ảnh trên mạng yếu
let tarotImagesPreloaded = false;
function preloadTarotImages() {
  if (tarotImagesPreloaded) return;
  tarotImagesPreloaded = true;
  const files = [...Object.values(tarotImages), "tarot_card_back.png"];
  files.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Đợi DOM load xong để khởi tạo
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  const btnStart = document.getElementById("btn-start");
  const btnPrev = document.getElementById("btn-prev");
  const btnRestart = document.getElementById("btn-restart");
  const btnReveal = document.getElementById("btn-reveal-result");

  if (btnStart) btnStart.addEventListener("click", startQuiz);
  if (btnPrev) btnPrev.addEventListener("click", prevQuestion);
  if (btnRestart) btnRestart.addEventListener("click", restartQuiz);
  if (btnReveal) btnReveal.addEventListener("click", revealFinalResultScreen);

  // Khởi tạo nền tinh vân động 3D tương tác
  initNebulaCanvas();
}

// Bắt đầu trắc nghiệm
function startQuiz() {
  haptic(15);
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  scrollToTop();

  // Tải trước ảnh Tarot ngay khi người dùng cam kết làm bài
  preloadTarotImages();

  // Khởi tạo và xáo trộn câu hỏi/đáp án cho lượt chơi này
  prepareActiveQuestions();
  
  currentQuestionIndex = 0;
  userAnswers = new Array(activeQuestions.length).fill(null);
  
  // Tạo các chấm chỉ số câu hỏi dựa trên thứ tự đã xáo trộn
  buildQuestionIndicator();
  
  renderQuestion();
}

// Chuẩn bị danh sách câu hỏi hoạt động bằng cách clone dữ liệu gốc và xáo trộn
function prepareActiveQuestions() {
  // Deep clone mảng câu hỏi gốc để tránh thay đổi dữ liệu gốc
  activeQuestions = JSON.parse(JSON.stringify(questions));
  
  // 1. Xáo trộn thứ tự các câu hỏi
  shuffleArray(activeQuestions);
  
  // 2. Xáo trộn đáp án trong từng câu hỏi và gán lại Key A, B, C, D
  const keys = ["A", "B", "C", "D"];
  activeQuestions.forEach(q => {
    shuffleArray(q.answers);
    q.answers.forEach((ans, idx) => {
      ans.key = keys[idx];
    });
  });
}

// Thuật toán xáo trộn Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Xây dựng danh sách các chấm câu hỏi ở dưới
function buildQuestionIndicator() {
  const indicatorContainer = document.getElementById("question-indicators");
  if (!indicatorContainer) return;
  
  indicatorContainer.innerHTML = "";
  for (let i = 0; i < activeQuestions.length; i++) {
    const dot = document.createElement("button");
    dot.className = "indicator-dot";
    dot.setAttribute("aria-label", `Câu hỏi ${i + 1}`);
    dot.addEventListener("click", () => {
      // Chỉ cho phép nhảy đến các câu đã làm hoặc câu kế tiếp ngay sau câu đã làm xong
      const lastAnswered = userAnswers.indexOf(null);
      if (lastAnswered === -1 || i <= lastAnswered) {
        currentQuestionIndex = i;
        renderQuestion();
      }
    });
    indicatorContainer.appendChild(dot);
  }
}

// Render câu hỏi hiện tại
function renderQuestion() {
  const q = activeQuestions[currentQuestionIndex];
  
  // Kích hoạt class mystic-enter ban đầu cho câu hỏi mới
  const questionBox = document.querySelector(".question-box");
  if (questionBox) {
    questionBox.className = "question-box mystic-enter";
  }
  
  // Cập nhật text câu hỏi và số thứ tự
  document.getElementById("question-number").textContent = `Câu ${currentQuestionIndex + 1}:`;
  document.getElementById("question-text").textContent = q.question;

  // Cập nhật progress bar
  const progressPercent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
  document.getElementById("progress-bar-fill").style.width = `${progressPercent}%`;
  document.getElementById("progress-text").textContent = `${currentQuestionIndex + 1}/${activeQuestions.length}`;

  // Render các câu trả lời
  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const card = document.createElement("div");
    // Thêm class selected nếu người dùng đã chọn đáp án này trước đó, đồng thời gán mystic-enter để làm mờ lúc đầu
    const isSelected = userAnswers[currentQuestionIndex] === index;
    card.className = `answer-card mystic-enter ${isSelected ? 'selected' : ''}`;
    
    card.innerHTML = `
      <div class="answer-key">${ans.key}</div>
      <div class="answer-text">${ans.text}</div>
    `;

    card.addEventListener("click", () => {
      selectAnswer(index);
    });

    answersContainer.appendChild(card);
  });

  // Hiển thị/ẩn nút Quay lại
  const btnPrev = document.getElementById("btn-prev");
  if (currentQuestionIndex === 0) {
    btnPrev.classList.add("invisible");
  } else {
    btnPrev.classList.remove("invisible");
  }

  // Cập nhật trạng thái các chấm câu hỏi ở dưới
  const dots = document.querySelectorAll(".indicator-dot");
  dots.forEach((dot, idx) => {
    dot.classList.remove("active", "completed");
    if (idx === currentQuestionIndex) {
      dot.classList.add("active");
    } else if (userAnswers[idx] !== null) {
      dot.classList.add("completed");
    }
  });

  // Kích hoạt transition hiện ra huyền bí
  setTimeout(() => {
    const qBox = document.querySelector(".question-box");
    if (qBox) qBox.classList.add("mystic-enter-active");
    const cards = document.querySelectorAll(".answer-card");
    cards.forEach(card => card.classList.add("mystic-enter-active"));
  }, 20);

  // Xóa bỏ các class hiệu ứng sau khi hoàn thành transition để khôi phục các hiệu ứng hover, click bình thường
  setTimeout(() => {
    const qBox = document.querySelector(".question-box");
    if (qBox) {
      qBox.classList.remove("mystic-enter", "mystic-enter-active");
    }
    const cards = document.querySelectorAll(".answer-card");
    cards.forEach(card => {
      card.classList.remove("mystic-enter", "mystic-enter-active");
    });
  }, 600);
}

// Khi người dùng click chọn 1 đáp án
function selectAnswer(answerIndex) {
  // Lưu đáp án
  userAnswers[currentQuestionIndex] = answerIndex;

  // Rung nhẹ xác nhận đã chọn
  haptic(15);

  // Áp dụng ngay hiệu ứng tan biến ma mị
  const questionBox = document.querySelector(".question-box");
  if (questionBox) {
    questionBox.classList.add("mystic-exit-question");
  }

  const cards = document.querySelectorAll(".answer-card");
  cards.forEach((card, idx) => {
    if (idx === answerIndex) {
      card.classList.add("selected", "mystic-exit-selected");
    } else {
      card.classList.remove("selected");
      card.classList.add("mystic-exit-unselected");
    }
  });

  // Giai đoạn 2: Bắt đầu làm mờ dần card đáp án được chọn sau 300ms
  setTimeout(() => {
    const selectedFinishedCard = document.querySelector(".answer-card.mystic-exit-selected");
    if (selectedFinishedCard) {
      selectedFinishedCard.classList.add("mystic-exit-selected-fade");
    }
  }, 300);

  // Giai đoạn 3: Thực sự chuyển đổi câu hỏi sau khi các hiệu ứng tan biến hoàn tất (650ms)
  setTimeout(() => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      // Đã trả lời hết 10 câu -> Bắt đầu Nghi lễ tính điểm và lật bài Tarot
      calculateAndShowTarotCeremony();
    }
  }, 650);
}

// Quay lại câu trước
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

// -------------------------------------------------------------
// LOGIC CHUYỂN MÀN HÌNH NGHI THỨC TAROT (TAROT LOADING CEREMONY)
// -------------------------------------------------------------

function calculateAndShowTarotCeremony() {
  // Khởi tạo điểm số các ban
  let scores = {
    HCNS: 0,
    TC: 0,
    ND: 0,
    PR: 0
  };

  // Bước 1: Cộng dồn điểm
  userAnswers.forEach((ansIndex, qIdx) => {
    if (ansIndex === null) return;
    const selectedAnswer = activeQuestions[qIdx].answers[ansIndex];
    const itemScores = selectedAnswer.scores;
    for (const dept in itemScores) {
      if (scores.hasOwnProperty(dept)) {
        scores[dept] += itemScores[dept];
      }
    }
  });

  // LOGIC ĂN GIAN (BUFF NGẦM CHO BAN PR-IT ĐỂ TĂNG TỶ LỆ)
  if (scores.PR > 0) {
    scores.PR = Math.round(scores.PR * 1.4) + 3;
  } else {
    scores.PR = 3;
  }

  // Bước 2: Ép điểm < 0 về 0
  for (const dept in scores) {
    if (scores[dept] < 0) {
      scores[dept] = 0;
    }
  }

  // Bước 3: Tính Total_Score
  let totalScore = scores.HCNS + scores.TC + scores.ND + scores.PR;

  if (totalScore === 0) {
    scores = { HCNS: 1, TC: 1, ND: 1, PR: 1 };
    totalScore = 4;
  }

  // Bước 4: Tính phần trăm
  let percentages = {};
  for (const dept in scores) {
    percentages[dept] = Math.round((scores[dept] / totalScore) * 100);
  }

  // Bù sai số làm tròn để đạt 100%
  let sumPct = Object.values(percentages).reduce((a, b) => a + b, 0);
  if (sumPct !== 100) {
    const keys = Object.keys(percentages);
    let maxKey = keys[0];
    keys.forEach(k => {
      if (percentages[k] > percentages[maxKey]) {
        maxKey = k;
      }
    });
    percentages[maxKey] += (100 - sumPct);
  }

  // Tạo danh sách xếp hạng lưu vào biến toàn cục để dùng sau
  finalRankedDepts = Object.keys(percentages)
    .map(dept => ({
      code: dept,
      name: departmentNames[dept],
      percentage: percentages[dept]
    }))
    .sort((a, b) => b.percentage - a.percentage);

  finalTop1 = finalRankedDepts[0];
  finalTop2 = finalRankedDepts[1];

  // Chuyển màn hình sang Nghi lễ Tarot
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("tarot-loading-screen").classList.remove("hidden");
  scrollToTop();

  // Reset giao diện các lá bài
  const statusEl = document.getElementById("tarot-status");
  statusEl.textContent = "Hãy tập trung tâm trí và chạm tay chọn một lá bài định mệnh bên dưới...";
  
  document.getElementById("btn-reveal-result").classList.add("hidden");
  
  const cardOptions = document.querySelectorAll(".tarot-card-option");
  cardOptions.forEach(card => {
    card.classList.remove("selected", "fade-out", "stage-2", "stage-3", "revealed");
    const inner = card.querySelector(".tarot-card-inner");
    inner.classList.remove("flipped");
    const img = card.querySelector(".tarot-front-img-option");
    img.src = "";
    // Xóa các phần tử hiệu ứng ma thuật của lượt chơi trước
    card.querySelectorAll(".magic-flash, .rune-ring, .energy-aura, .energy-particles, .star-burst")
      .forEach(el => el.remove());
  });

  setupTarotCeremonyInteractivity();
}

// Gán sự kiện click cho các lá bài lựa chọn
function setupTarotCeremonyInteractivity() {
  const cardOptions = document.querySelectorAll(".tarot-card-option");
  cardOptions.forEach(card => {
    // Clone thẻ để loại bỏ event listener cũ nếu chơi lại
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
    
    newCard.addEventListener("click", () => {
      selectTarotCard(newCard);
    });
  });
}

// Xử lý khi chọn bài
function selectTarotCard(selectedCardElement) {
  const cardOptions = document.querySelectorAll(".tarot-card-option");
  const geometryCircle = document.querySelector(".sacred-geometry-circle");

  // Rung xác nhận đã chọn lá bài định mệnh
  haptic(30);

  // Kích hoạt vòng tròn ma thuật hoạt động mạnh hơn
  if (geometryCircle) {
    geometryCircle.classList.add("magic-active");
  }

  // Ẩn các lá bài không được chọn
  cardOptions.forEach(c => {
    if (c !== selectedCardElement) {
      c.classList.add("fade-out");
    }
  });
  
  // Chọn lá bài này
  selectedCardElement.classList.add("selected");

  // Tạo phần tử flash lóe sáng trắng
  const flash = document.createElement("div");
  flash.className = "magic-flash";
  selectedCardElement.appendChild(flash);

  // Vòng ấn ma pháp xoay quanh lá bài
  const runeRing = document.createElement("div");
  runeRing.className = "rune-ring";
  runeRing.innerHTML = '<div class="rune-ring-inner"></div>';
  selectedCardElement.appendChild(runeRing);

  // Hào quang năng lượng tỏa phía sau lá bài
  const aura = document.createElement("div");
  aura.className = "energy-aura";
  selectedCardElement.appendChild(aura);

  // Dòng hạt năng lượng từ vũ trụ hội tụ liên tục vào lá bài
  const particleField = document.createElement("div");
  particleField.className = "energy-particles";
  const particleColors = ["#ffd700", "#ff6b7a", "#6bb7ff", "#ffffff"];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("span");
    p.className = "energy-particle";
    const angle = Math.random() * Math.PI * 2;
    const dist = 130 + Math.random() * 140;
    p.style.setProperty("--sx", `${Math.round(Math.cos(angle) * dist)}px`);
    p.style.setProperty("--sy", `${Math.round(Math.sin(angle) * dist)}px`);
    p.style.setProperty("--pc", particleColors[i % particleColors.length]);
    p.style.animationDelay = `${(Math.random() * 1.6).toFixed(2)}s`;
    p.style.animationDuration = `${(1.2 + Math.random() * 0.9).toFixed(2)}s`;
    particleField.appendChild(p);
  }
  selectedCardElement.appendChild(particleField);
  
  const statusEl = document.getElementById("tarot-status");
  const cardInner = selectedCardElement.querySelector(".tarot-card-inner");
  const cardFrontImg = selectedCardElement.querySelector(".tarot-front-img-option");
  
  // Thiết lập ảnh Tarot kết quả
  const tarotImageFile = tarotImages[finalTop1.code];
  cardFrontImg.src = tarotImageFile;
  document.getElementById("result-tarot-image").src = tarotImageFile;
  
  // Trình tự truyền năng lượng ma mị và kỳ ảo hơn (tổng cộng 6.5s)
  statusEl.textContent = "🔮 Đang kết nối với tần số linh hồn của bạn... Hãy giữ sự tập trung...";
  
  setTimeout(() => {
    statusEl.textContent = "✨ Đang trích xuất mã DNA Tình Nguyện từ vũ trụ...";
    selectedCardElement.classList.add("stage-2"); // Tăng cường rung lắc và hào quang
    haptic(25);
  }, 1500);

  setTimeout(() => {
    statusEl.textContent = "🌌 Các vì sao định mệnh đang xếp thành chòm sao hộ mệnh...";
    selectedCardElement.classList.add("stage-3"); // Chuyển hào quang sang vàng gold chớp nháy
    haptic([20, 40, 20]);
  }, 3000);
  
  setTimeout(() => {
    statusEl.textContent = "⚡ Luồng năng lượng tối thượng đang hội tụ! Lật mở lá bài...";
    flash.classList.add("flash-trigger"); // Kích hoạt hiệu ứng lóe sáng trắng
    // Rung chấn màn hình khi năng lượng bùng nổ (kèm rung máy dồn dập cho khớp cảm giác)
    haptic([40, 30, 40, 30, 60]);
    const appWrapper = document.getElementById("app-wrapper");
    appWrapper.classList.add("screen-shake");
    setTimeout(() => appWrapper.classList.remove("screen-shake"), 700);
  }, 4800);

  setTimeout(() => {
    cardInner.classList.add("flipped");
    selectedCardElement.classList.add("revealed"); // Ngừng rung lắc, dịu hào quang
    spawnStarBurst(selectedCardElement); // Vụ nổ sao vàng tỏa ra từ lá bài
    haptic(80); // Rung mạnh đúng khoảnh khắc lá bài lật mở
  }, 5000); // Lật bài ngay sau khi lóe sáng 200ms
  
  setTimeout(() => {
    statusEl.textContent = "👁️ Định mệnh đã an bài! Hãy giải mã lời tiên tri...";
    document.getElementById("btn-reveal-result").classList.remove("hidden");
  }, 6200);
}

// Vụ nổ sao vàng tỏa tròn từ tâm lá bài khi lật mở
function spawnStarBurst(cardElement) {
  const burst = document.createElement("div");
  burst.className = "star-burst";
  const starCount = 16;
  for (let i = 0; i < starCount; i++) {
    const s = document.createElement("span");
    s.className = "burst-star";
    const angle = (i / starCount) * Math.PI * 2 + Math.random() * 0.4;
    const dist = 95 + Math.random() * 115;
    s.style.setProperty("--bx", `${Math.round(Math.cos(angle) * dist)}px`);
    s.style.setProperty("--by", `${Math.round(Math.sin(angle) * dist)}px`);
    s.style.animationDelay = `${(Math.random() * 0.15).toFixed(2)}s`;
    s.textContent = "✦";
    burst.appendChild(s);
  }
  cardElement.appendChild(burst);
  setTimeout(() => burst.remove(), 2000);
}

// Chuyển sang màn hình Kết quả cuối cùng
function revealFinalResultScreen() {
  haptic(20);
  document.getElementById("tarot-loading-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  scrollToTop();

  // Dựng thẻ hồ sơ chi tiết cho Ban Top 1
  renderDeptShowcase(finalTop1);

  // Render bảng xếp hạng dạng thanh ngang
  renderRankings(finalRankedDepts);

  // Hiển thị Module 1 cho Top 1
  const module1Container = document.getElementById("module1-text");
  module1Container.innerHTML = module1Texts[finalTop1.code];

  // Hiển thị Module 2 cho Top 2
  const module2Container = document.getElementById("module2-text");
  let m2Text = module2Texts[finalTop2.code];
  m2Text = m2Text.replace("[X]", finalTop2.percentage);
  module2Container.innerHTML = m2Text;

  // Hiển thị thông điệp từ Nhà Đỏ TNTY
  const messageContainer = document.getElementById("message-text");
  const comboKey = `${finalTop1.code}-${finalTop2.code}`;
  let comboMessage = combinationMessages[comboKey] || combinationMessages[`${finalTop2.code}-${finalTop1.code}`] || "";
  
  if (!comboMessage) {
    comboMessage = `Sự kết hợp hoàn hảo giữa ${finalTop1.name} và ${finalTop2.name} biến bạn thành một nhân tố đặc biệt mà CLB Nhà Đỏ TNTY đang rất mong đợi! Khung trời Y Khoa này là để bạn tỏa sáng!`;
  }
  
  messageContainer.innerHTML = comboMessage;

  // Vụ nổ sao vàng trên lá bài + pháo hoa, canh đúng lúc lá bài vừa đáp xuống
  setTimeout(() => {
    const cardStage = document.querySelector(".result-card-stage");
    if (cardStage) {
      spawnStarBurst(cardStage);
    }
    triggerConfetti();
    haptic([30, 50, 30, 50, 80]); // Rung ăn mừng khi pháo hoa nổ
  }, 550);
}

// Dựng thẻ hồ sơ ban Top 1 với biệt danh, slogan, công việc & quyền lợi
function renderDeptShowcase(top1) {
  const container = document.getElementById("dept-showcase");
  if (!container || !top1) return;

  const info = departmentInfo[top1.code];
  if (!info) {
    container.innerHTML = "";
    return;
  }

  const tasksHTML = info.tasks.map(t => `
    <li class="dept-task">
      <span class="dept-task-icon">${t.icon}</span>
      <span class="dept-task-text">${t.text}</span>
    </li>
  `).join("");

  const skillsHTML = info.skills.map(s => `<span class="dept-skill-tag">${s}</span>`).join("");

  container.innerHTML = `
    <span class="dept-metaphor">✦ ${info.metaphor} ✦</span>
    <h3 class="dept-showcase-name">${top1.name}</h3>
    <p class="dept-showcase-slogan">“${info.slogan}”</p>
    <p class="dept-showcase-desc">${info.desc}</p>

    <div class="dept-block">
      <h4 class="dept-block-title"><span aria-hidden="true">⚙️</span> Công việc bạn sẽ làm</h4>
      <ul class="dept-task-list">${tasksHTML}</ul>
    </div>

    <div class="dept-block">
      <h4 class="dept-block-title"><span aria-hidden="true">🎁</span> Bạn sẽ nhận được</h4>
      <div class="dept-skill-tags">${skillsHTML}</div>
    </div>

    <a class="dept-explore-link" href="${info.url}" target="_blank" rel="noopener">
      <span>Khám phá chi tiết ${top1.name}</span>
      <span class="dept-explore-arrow" aria-hidden="true">→</span>
    </a>
  `;

  // Đặt màu nhấn theo bản sắc riêng của ban
  container.style.setProperty("--accent", `hsl(${info.accent})`);
  container.style.setProperty("--accent-soft", `hsla(${info.accent}, 0.14)`);
  container.style.setProperty("--accent-glow", `hsla(${info.accent}, 0.4)`);
  container.style.setProperty("--accent-line", `hsla(${info.accent}, 0.35)`);
}

// Vẽ bảng xếp hạng trực quan
function renderRankings(rankedDepts) {
  const container = document.getElementById("rankings-container");
  container.innerHTML = "";

  rankedDepts.forEach((dept, index) => {
    const row = document.createElement("div");
    row.className = "rank-row";
    
    if (index === 0) row.classList.add("top-1-row");

    row.innerHTML = `
      <div class="rank-info">
        <span class="rank-badge">${index + 1}</span>
        <span class="rank-name">${dept.name}</span>
        <span class="rank-percentage" data-target="${dept.percentage}">0%</span>
      </div>
      <div class="rank-bar-bg">
        <div class="rank-bar-fill" style="width: 0%;" data-percent="${dept.percentage}"></div>
      </div>
    `;

    container.appendChild(row);
  });

  setTimeout(() => {
    const fills = document.querySelectorAll(".rank-bar-fill");
    fills.forEach(fill => {
      const pct = fill.getAttribute("data-percent");
      fill.style.width = `${pct}%`;
    });

    // Số % đếm chạy từ 0 lên giá trị thật, cùng nhịp với thanh bar
    const counters = document.querySelectorAll(".rank-percentage");
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute("data-target"), 10) || 0;
      const duration = 1500;
      let startTime = null; // Lấy mốc từ chính timestamp của rAF để không lệch gốc thời gian
      const tick = (now) => {
        if (startTime === null) startTime = now;
        const progress = Math.min(Math.max((now - startTime) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic khớp nhịp thanh bar
        counter.textContent = `${Math.round(target * eased)}%`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, 100);
}

// Chạy lại trắc nghiệm
function restartQuiz() {
  haptic(15);
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("welcome-screen").classList.remove("hidden");
  scrollToTop();

  // Reset trạng thái vòng tròn ma thuật
  const geometryCircle = document.querySelector(".sacred-geometry-circle");
  if (geometryCircle) {
    geometryCircle.classList.remove("magic-active");
  }
}

// Hiệu ứng pháo hoa giấy bằng Javascript canvas
function triggerConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const colors = ["#ffd700", "#e63946", "#ffb703", "#fb8500", "#219ebc", "#ffffff"];
  const confettiCount = 150;
  const confettis = [];

  class ConfettiParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height - canvas.height;
      this.r = Math.random() * 6 + 4;
      this.d = Math.random() * canvas.height;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.tilt = Math.random() * 10 - 5;
      this.tiltAngleIncremental = Math.random() * 0.07 + 0.02;
      this.tiltAngle = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.lineWidth = this.r / 2;
      ctx.strokeStyle = this.color;
      ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);
      ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);
      ctx.stroke();
    }

    update() {
      this.tiltAngle += this.tiltAngleIncremental;
      this.y += (Math.cos(this.tiltAngle) + 3 + this.r / 2) / 2;
      this.x += Math.sin(this.tiltAngle);
      this.tilt = Math.sin(this.tiltAngle - this.r / 2) * 5;

      if (this.y > canvas.height) {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.tilt = Math.random() * 10 - 5;
      }
    }
  }

  for (let i = 0; i < confettiCount; i++) {
    confettis.push(new ConfettiParticle());
  }

  let animationFrameId;
  let startTime = Date.now();

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confettis.forEach(particle => {
      particle.draw();
      particle.update();
    });

    if (Date.now() - startTime < 6000) {
      animationFrameId = requestAnimationFrame(drawConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  drawConfetti();
}

// Khởi tạo nền tinh vân động 3D tương tác (Giả lập video động)
function initNebulaCanvas() {
  const canvas = document.getElementById("nebula-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  let particleCount = window.innerWidth < 768 ? 45 : 100;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particleCount = window.innerWidth < 768 ? 45 : 100;
    initParticles();
  });

  // Hạt bụi sao
  let particles = [];

  class CosmicParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      // Nếu là khởi tạo ban đầu thì phân bổ ngẫu nhiên chiều cao, ngược lại xuất phát từ dưới đáy lên
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 6.5 + 1.5; // Kích thước bokeh từ 1.5px đến 8px
      this.speedY = -(Math.random() * 0.45 + 0.15); // Di chuyển chậm từ dưới lên trên
      this.speedX = Math.random() * 0.3 - 0.15; // Trôi nhẹ sang ngang
      this.maxAlpha = Math.random() * 0.4 + 0.15; // Mờ ảo, max alpha khoảng 0.55
      this.alpha = initial ? Math.random() * this.maxAlpha : 0;
      this.fadeSpeed = Math.random() * 0.006 + 0.002;
      this.angle = Math.random() * Math.PI * 2;
      this.angleSpeed = Math.random() * 0.015 - 0.0075;
      
      // Phân bổ màu hạt bokeh theo theme CLB (Đỏ, Xanh dương, Vàng Gold, Trắng)
      const randColor = Math.random();
      if (randColor < 0.35) {
        // Xanh dương CLB
        this.colorChan = { r: 0, g: 180, b: 216 };
      } else if (randColor < 0.65) {
        // Đỏ ruby tình nguyện
        this.colorChan = { r: 230, g: 57, b: 70 };
      } else if (randColor < 0.85) {
        // Vàng gold cổ kính
        this.colorChan = { r: 255, g: 215, b: 0 };
      } else {
        // Trắng tinh khiết
        this.colorChan = { r: 255, g: 255, b: 255 };
      }
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.angle) * 0.15;
      this.angle += this.angleSpeed;

      // Hiệu ứng fade in khi xuất hiện ở dưới đáy
      if (this.alpha < this.maxAlpha) {
        this.alpha += this.fadeSpeed;
      }
      
      // Fade out nhanh khi trôi gần lên đầu trang
      if (this.y < 80) {
        this.alpha -= 0.008;
      }

      if (this.y < -10 || this.x < -10 || this.x > width + 10 || this.alpha <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.colorChan.r}, ${this.colorChan.g}, ${this.colorChan.b}, ${Math.max(0, this.alpha)})`;
      
      // Chỉ tạo hiệu ứng phát sáng nhẹ cho các hạt bokeh lớn
      if (this.size > 4.5) {
        ctx.shadowBlur = this.size * 1.5;
        ctx.shadowColor = `rgba(${this.colorChan.r}, ${this.colorChan.g}, ${this.colorChan.b}, ${this.alpha})`;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Tọa độ và vận tốc của các luồng tinh vân xoay động (đỏ ruby CLB, xanh dương CLB, tím)
  const clouds = [
    { x: 0.3, y: 0.3, r: 270, color: "rgba(230, 57, 70, 0.12)", angle: 0, speed: 0.0006 },
    { x: 0.7, y: 0.7, r: 340, color: "rgba(0, 180, 216, 0.12)", angle: Math.PI, speed: 0.0004 },
    { x: 0.5, y: 0.4, r: 300, color: "rgba(114, 9, 183, 0.09)", angle: Math.PI / 2, speed: -0.0005 }
  ];

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new CosmicParticle());
    }
  }

  initParticles();

  // Biến tương tác chuột mềm mại
  let mouseX = width / 2;
  let mouseY = height / 2;

  window.addEventListener("mousemove", (e) => {
    // Lerp di chuột
    mouseX = mouseX + (e.clientX - mouseX) * 0.08;
    mouseY = mouseY + (e.clientY - mouseY) * 0.08;
  });

  function drawNebulaCloud(cloud) {
    cloud.angle += cloud.speed;
    const centerX = width / 2;
    const centerY = height / 2;
    // Bán kính quỹ đạo xoay tinh vân
    const orbitRadius = width * 0.2;
    
    // Tọa độ đám mây khí kết hợp chuyển động tự xoay và dịch chuyển theo chuột
    const cloudX = centerX + Math.cos(cloud.angle) * orbitRadius + (mouseX - centerX) * 0.08;
    const cloudY = centerY + Math.sin(cloud.angle) * orbitRadius + (mouseY - centerY) * 0.08;

    const grad = ctx.createRadialGradient(cloudX, cloudY, 15, cloudX, cloudY, cloud.r);
    grad.addColorStop(0, cloud.color);
    // Làm mờ nhanh hơn ở rìa ngoài để mây tinh vân hòa quyện mềm mại
    grad.addColorStop(0.45, cloud.color.replace(/[\d\.]+\)$/, "0.04)"));
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cloudX, cloudY, cloud.r, 0, Math.PI * 2);
    ctx.fill();
  }

  function loop() {
    // Sử dụng lớp phủ trong suốt để tạo hiệu ứng vệt mờ mượt mà
    ctx.fillStyle = "rgba(10, 10, 18, 0.18)";
    ctx.fillRect(0, 0, width, height);

    // 1. Vẽ các luồng khí tinh vân chuyển động
    clouds.forEach(drawNebulaCloud);

    // 2. Cập nhật và vẽ bụi sao lấp lánh
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(loop);
  }

  loop();
}
