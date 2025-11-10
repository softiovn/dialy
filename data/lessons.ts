import { Lesson, Practice } from "@/types";

export const lessons: Lesson[] = [
  {
    id: "1",
    slug: "dia-hinh-viet-nam",
    title: "Địa hình Việt Nam",
    description: "Khám phá sự đa dạng địa hình từ đồi núi đến đồng bằng",
    content: `
      # Địa hình Việt Nam

      Việt Nam có địa hình vô cùng đa dạng và phức tạp, với 3/4 diện tích là đồi núi nhưng được chia thành nhiều khu vực địa hình đặc trưng. Sự đa dạng này không chỉ tạo nên cảnh quan thiên nhiên kỳ vĩ mà còn ảnh hưởng sâu sắc đến khí hậu, kinh tế và văn hóa của đất nước.

      ## 1. Vùng núi phía Bắc
      Khu vực này chiếm phần lớn diện tích phía Bắc Việt Nam, đặc trưng bởi các dãy núi cao và hiểm trở. Dãy Hoàng Liên Sơn với đỉnh Fansipan cao 3.147m - được mệnh danh là "nóc nhà Đông Dương". Đây là khu vực có địa hình phức tạp, nhiều đèo cao, vực sâu, tạo nên những cảnh quan hùng vĩ. Các cao nguyên như Sơn La, Mộc Châu có độ cao trung bình 600-1.500m, thích hợp cho phát triển chè, cây ăn quả và chăn nuôi gia súc. Các thung lũng như sông Hồng, sông Chảy có đất đai màu mỡ, là nơi tập trung dân cư và sản xuất nông nghiệp.

      ## 2. Đồng bằng sông Hồng
      Với diện tích khoảng 15.000 km², đồng bằng sông Hồng là một trong những vùng đồng bằng màu mỡ nhất Việt Nam. Được bồi đắp bởi phù sa sông Hồng và sông Thái Bình, vùng đất này có lịch sử khai phá hàng nghìn năm. Mật độ dân số ở đây thuộc loại cao nhất cả nước, với nhiều đô thị lớn như Hà Nội, Hải Phòng. Đồng bằng này cũng là cái nôi của nền văn minh lúa nước, với hệ thống đê điều phức tạp được xây dựng qua nhiều thế kỷ.

      ## 3. Dải Trường Sơn
      Chạy dọc theo biên giới Việt-Lào, dải Trường Sơn kéo dài hơn 1.100km từ Nghệ An đến Bình Phước. Đây là khu vực có địa hình phức tạp với nhiều đỉnh núi cao như Ngọc Linh (2.598m), Ngok Lum Heo (2.402m). Dải Trường Sơn tạo thành bức chắn địa hình quan trọng, ảnh hưởng đến khí hậu và phân bố mưa của các vùng. Phía Đông dãy núi thường có mưa lớn, trong khi phía Tây khô hạn hơn.

      ## 4. Tây Nguyên
      Là vùng cao nguyên rộng lớn với độ cao trung bình 500-600m so với mực nước biển, Tây Nguyên bao gồm các tỉnh Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông và Lâm Đồng. Đây là vùng đất bazan màu mỡ, thích hợp cho các cây công nghiệp như cà phê, cao su, hồ tiêu. Tây Nguyên cũng có nhiều hồ nước tự nhiên và thác nước đẹp như hồ Lắk, thác Pren.

      ## 5. Đồng bằng ven biển Miền Trung
      Đây là những đồng bằng nhỏ hẹp, nằm giữa biển và núi. Các đồng bằng này thường bị chia cắt bởi các dãy núi đâm ngang ra biển, tạo nên nhiều đèo nổi tiếng như đèo Hải Vân, đèo Cù Mông. Đất đai ở đây kém màu mỡ hơn so với đồng bằng sông Hồng và sông Cửu Long.

      ## 6. Đồng bằng sông Cửu Long
      Với diện tích khoảng 40.000 km², đồng bằng sông Cửu Long là vùng đồng bằng lớn nhất Việt Nam. Được hình thành bởi phù sa sông Mekong, vùng đất này có hệ thống sông ngòi, kênh rạch chằng chịt. Đây là vùng sản xuất lúa gạo trọng điểm của cả nước, đóng góp hơn 50% sản lượng lúa và 95% lượng gạo xuất khẩu. Đồng bằng sông Cửu Long cũng có hệ sinh thái rừng ngập mặn phong phú, đặc biệt là rừng U Minh và rừng ngập mặn Cà Mau.

      Địa hình Việt Nam không chỉ đa dạng về hình thái mà còn chứa đựng nhiều tiềm năng về kinh tế, du lịch và an ninh quốc phòng. Sự hiểu biết về địa hình giúp chúng ta có cái nhìn toàn diện về đất nước và con người Việt Nam.
    `,
    duration: "45 phút",
    level: "beginner",
    images: ["/images/topography.jpg"],
  },
  {
    id: "2",
    slug: "khi-hau-viet-nam",
    title: "Khí hậu Việt Nam",
    description: "Tìm hiểu các đới khí hậu và đặc điểm thời tiết đặc trưng",
    content: `
      # Khí hậu Việt Nam

      Việt Nam nằm trong vùng khí hậu nhiệt đới gió mùa, với sự đa dạng về khí hậu giữa các vùng miền. Sự tương tác phức tạp giữa gió mùa, địa hình và biển đã tạo nên những nét đặc trưng riêng biệt cho từng vùng.

      ## Đặc điểm chung của khí hậu Việt Nam
      Khí hậu Việt Nam chịu ảnh hưởng mạnh mẽ của gió mùa châu Á. Gió mùa Đông Bắc thổi từ tháng 11 đến tháng 4 năm sau, mang theo không khí lạnh từ lục địa châu Á. Gió mùa Tây Nam thổi từ tháng 5 đến tháng 10, mang theo hơi ẩm từ biển vào gây mưa lớn trên nhiều vùng. Nhiệt độ trung bình năm dao động từ 21-27°C, tăng dần từ Bắc vào Nam.

      ## Các vùng khí hậu chính:

      ### 1. Miền Bắc: Khí hậu cận nhiệt đới ẩm
      Miền Bắc có bốn mùa rõ rệt: xuân, hạ, thu, đông. Mùa đông thường lạnh và khô, nhiệt độ có thể xuống dưới 10°C, đặc biệt ở vùng núi cao có thể xuống dưới 0°C. Mùa hè nóng ẩm, mưa nhiều với nhiệt độ trung bình 25-35°C. Lượng mưa trung bình năm từ 1.500-2.500mm, phân bố không đều giữa các tháng.

      ### 2. Miền Trung: Khí hậu nhiệt đới gió mùa
      Miền Trung có sự phân hóa khí hậu phức tạp do ảnh hưởng của dãy Trường Sơn. Mùa mưa kéo dài từ tháng 9 đến tháng 12, thường có mưa lớn tập trung gây lũ lụt. Vùng này chịu ảnh hưởng của gió Lào - loại gió khô nóng thổi từ Lào sang vào mùa hè, gây nắng nóng kéo dài. Nhiệt độ trung bình năm từ 24-28°C.

      ### 3. Miền Nam: Khí hậu nhiệt đới xavan
      Miền Nam có hai mùa rõ rệt: mùa mưa (từ tháng 5 đến tháng 11) và mùa khô (từ tháng 12 đến tháng 4). Nhiệt độ ổn định quanh năm, dao động từ 25-35°C. Lượng mưa trung bình năm từ 1.500-2.000mm, tập trung chủ yếu vào mùa mưa. Khí hậu ít biến động, không có mùa đông lạnh như miền Bắc.

      ## Biến đổi khí hậu và tác động
      Trong những năm gần đây, Việt Nam là một trong những quốc gia chịu ảnh hưởng nặng nề của biến đổi khí hậu. Mực nước biển dâng đe dọa các vùng đồng bằng, đặc biệt là đồng bằng sông Cửu Long. Các hiện tượng thời tiết cực đoan như bão, lũ lụt, hạn hán xảy ra thường xuyên hơn với cường độ mạnh hơn.

      Hiểu biết về khí hậu Việt Nam không chỉ giúp chúng ta thích ứng tốt hơn với môi trường mà còn có ý nghĩa quan trọng trong hoạch định chính sách phát triển kinh tế - xã hội bền vững.
    `,
    duration: "40 phút",
    level: "beginner",
    images: ["/images/climate.jpg"],
  },
  {
    id: "3",
    slug: "he-sinh-thai",
    title: "Hệ sinh thái và Đa dạng Sinh học",
    description: "Khám phá các hệ sinh thái đặc trưng và sự đa dạng sinh học",
    content: `
      # Hệ sinh thái và Đa dạng Sinh học Việt Nam

      Việt Nam được xếp hạng là một trong những quốc gia có đa dạng sinh học cao nhất thế giới, với nhiều hệ sinh thái đặc trưng và các loài đặc hữu quý hiếm.

      ## Các hệ sinh thái chính

      ### 1. Hệ sinh thái rừng nhiệt đới
      Rừng nhiệt đới ở Việt Nam phân bố chủ yếu ở Tây Nguyên, Trường Sơn và Tây Bắc. Đây là nơi sinh sống của nhiều loài động thực vật quý hiếm như voọc mũi hếch, sao la, chà vá chân nâu. Rừng nhiệt đới Việt Nam có tính đa dạng sinh học cao, với hàng nghìn loài thực vật và hàng trăm loài động vật có xương sống.

      ### 2. Hệ sinh thái rừng ngập mặn
      Phân bố dọc theo bờ biển, đặc biệt ở Nam Bộ và Bắc Bộ. Rừng ngập mặn Cà Mau là một trong những khu rừng ngập mặn lớn nhất thế giới, có vai trò quan trọng trong bảo vệ bờ biển, duy trì nguồn lợi thủy sản và hấp thụ carbon.

      ### 3. Hệ sinh thái biển và ven bờ
      Việt Nam có hơn 3.000 hòn đảo và vùng biển rộng lớn với các rạn san hô phong phú. Vịnh Hạ Long được UNESCO công nhận là Di sản Thiên nhiên Thế giới với hàng nghìn đảo đá vôi và hệ sinh thái biển độc đáo.

      ### 4. Hệ sinh thái đất ngập nước nội địa
      Bao gồm các hồ, sông, đầm lầy và vùng ngập lũ đồng bằng sông Cửu Long. Đồng Tháp Mười và vùng trũng Tứ Giác Long Xuyên là những vùng đất ngập nước quan trọng, nơi cư trú của nhiều loài chim di cư.

      ## Đa dạng sinh học
      Việt Nam có khoảng 12.000 loài thực vật, 800 loài rêu, 600 loài nấm và hơn 7.000 loài động vật. Trong đó có nhiều loài đặc hữu chỉ tìm thấy ở Việt Nam như mang Trường Sơn, thỏ vằn, gà lôi lam đuôi trắng.

      ## Bảo tồn đa dạng sinh học
      Việt Nam đã thành lập hệ thống các khu bảo tồn với 34 vườn quốc gia, 58 khu bảo tồn thiên nhiên và 9 khu dự trữ sinh quyển thế giới. Tuy nhiên, đa dạng sinh học đang đối mặt với nhiều thách thức do mất sinh cảnh, săn bắn trái phép và biến đổi khí hậu.

      Bảo vệ đa dạng sinh học không chỉ là trách nhiệm của Việt Nam mà còn là đóng góp vào bảo tồn di sản thiên nhiên toàn cầu.
    `,
    duration: "50 phút",
    level: "intermediate",
    images: ["/images/ecosystem.jpg"],
  },
  {
    id: "4",
    slug: "tai-nguyen-thien-nhien",
    title: "Tài nguyên Thiên nhiên",
    description: "Tìm hiểu về các nguồn tài nguyên và tiềm năng khai thác",
    content: `
      # Tài nguyên Thiên nhiên Việt Nam

      Việt Nam được thiên nhiên ưu đãi nhiều loại tài nguyên phong phú, từ khoáng sản, rừng, biển đến đất đai màu mỡ. Việc khai thác và sử dụng bền vững các nguồn tài nguyên này có ý nghĩa quan trọng đối với phát triển kinh tế - xã hội.

      ## Tài nguyên khoáng sản
      Việt Nam có nguồn tài nguyên khoáng sản đa dạng với hơn 5.000 mỏ và điểm quặng của khoảng 60 loại khoáng sản khác nhau.

      ### Khoáng sản năng lượng
      - **Than**: Trữ lượng khoảng 48,8 tỷ tấn, tập trung chủ yếu ở Quảng Ninh, Thái Nguyên, Lạng Sơn
      - **Dầu khí**: Trữ lượng dự báo khoảng 4,4 tỷ tấn dầu quy đổi, tập trung ở các bể trầm tích Nam Côn Sơn, Cửu Long, Sông Hồng
      - **Uranium**: Phát hiện ở Nghệ An, Quảng Nam với trữ lượng khoảng 218.000 tấn

      ### Khoáng sản kim loại
      - **Bauxite**: Trữ lượng khoảng 5,5 tỷ tấn, tập trung ở Tây Nguyên
      - **Sắt**: Trữ lượng khoảng 1,2 tỷ tấn, phân bố ở Thái Nguyên, Yên Bái, Hà Tĩnh
      - **Đồng, chì, kẽm**: Phân bố ở Lào Cai, Sơn La, Bắc Kạn

      ### Khoáng sản phi kim
      - **Apatit**: Trữ lượng khoảng 2,5 tỷ tấn, tập trung ở Lào Cai
      - **Đá vôi**: Phân bố rộng khắp cả nước với trữ lượng lớn
      - **Cát thủy tinh**: Tập trung ở Quảng Ninh, Quảng Bình, Bình Thuận

      ## Tài nguyên đất
      Việt Nam có khoảng 33 triệu ha đất tự nhiên, trong đó:
      - Đất nông nghiệp: 28% diện tích
      - Đất lâm nghiệp: 42% diện tích
      - Đất chuyên dùng và đất ở: 5% diện tích
      - Đất chưa sử dụng: 25% diện tích

      Chất lượng đất đa dạng từ đất phù sa màu mỡ ở đồng bằng đến đất feralit vùng đồi núi.

      ## Tài nguyên nước
      Việt Nam có mạng lưới sông ngòi dày đặc với 2.372 con sông dài trên 10km. Tổng lượng nước mặt khoảng 830-840 tỷ m³/năm. Nguồn nước ngầm phân bố rộng khắp với trữ lượng khoảng 60 tỷ m³/năm.

      ## Tài nguyên biển
      Vùng biển Việt Nam rộng hơn 1 triệu km², với hơn 2.000 loài cá, trong đó 130 loài có giá trị kinh tế cao. Biển Việt Nam cũng có tiềm năng lớn về du lịch, vận tải biển và năng lượng sóng, thủy triều.

      ## Thách thức trong quản lý tài nguyên
      Việt Nam đang đối mặt với nhiều thách thức trong quản lý tài nguyên như khai thác quá mức, ô nhiễm môi trường, hiệu quả sử dụng thấp. Việc áp dụng công nghệ tiên tiến và quản lý bền vững là cần thiết để bảo đảm an ninh tài nguyên quốc gia.

      Tài nguyên thiên nhiên là nền tảng cho phát triển kinh tế, nhưng cần được khai thác hợp lý và bảo vệ cho các thế hệ tương lai.
    `,
    duration: "55 phút",
    level: "intermediate",
    images: ["/images/resources.jpg"],
  },
  {
    id: "5",
    slug: "dan-cu-xa-hoi",
    title: "Dân cư và Xã hội",
    description:
      "Tìm hiểu về cơ cấu dân số, phân bố dân cư và các vấn đề xã hội",
    content: `
      # Dân cư và Xã hội Việt Nam

      Việt Nam là quốc gia đông dân thứ 15 trên thế giới với dân số hơn 98 triệu người (2023). Dân cư phân bố không đồng đều và có sự đa dạng về văn hóa, ngôn ngữ giữa các vùng miền.

      ## Đặc điểm dân số

      ### Quy mô và cơ cấu dân số
      Dân số Việt Nam đang trong thời kỳ "cơ cấu dân số vàng" với tỷ lệ người trong độ tuổi lao động (15-64) chiếm khoảng 68%. Tỷ lệ tăng dân số tự nhiên duy trì ở mức 1,14% (2023). Mật độ dân số trung bình là 313 người/km², cao thứ 16 trên thế giới.

      ### Phân bố dân cư
      Dân cư tập trung chủ yếu ở hai vùng đồng bằng lớn:
      - Đồng bằng sông Hồng: Mật độ 1.060 người/km²
      - Đồng bằng sông Cửu Long: Mật độ 432 người/km²
      
      Trong khi đó, vùng núi và Tây Nguyên có mật độ thấp, dưới 100 người/km². Tỷ lệ dân đô thị đạt 38% (2023) và đang tăng nhanh.

      ## Thành phần dân tộc
      Việt Nam có 54 dân tộc anh em, trong đó:
      - Dân tộc Kinh chiếm 85,3% dân số
      - 53 dân tộc thiểu số chiếm 14,7% dân số

      Các dân tộc thiểu số phân bố chủ yếu ở vùng núi phía Bắc, Tây Nguyên và đồng bằng sông Cửu Long. Mỗi dân tộc có bản sắc văn hóa, ngôn ngữ, phong tục tập quán riêng, góp phần tạo nên sự đa dạng văn hóa của Việt Nam.

      ## Chất lượng dân số
      Chỉ số phát triển con người (HDI) của Việt Nam đạt 0,704 (2021), xếp hạng 115/191 quốc gia. Tuổi thọ trung bình đạt 73,6 tuổi (2023). Tỷ lệ biết chữ đạt 95,8% ở người trưởng thành. Việt Nam đã đạt được nhiều tiến bộ trong giáo dục và y tế, nhưng vẫn còn khoảng cách giữa các vùng miền.

      ## Di cư và đô thị hóa
      Quá trình đô thị hóa diễn ra nhanh chóng với tốc độ tăng tỷ lệ dân đô thị khoảng 3,2%/năm. Di cư từ nông thôn ra thành thị và giữa các vùng ngày càng tăng, tạo áp lực lên hạ tầng đô thị và các vấn đề xã hội.

      ## Thách thức xã hội
      Việt Nam đang đối mặt với nhiều thách thức xã hội như:
      - Già hóa dân số nhanh
      - Chênh lệch giàu nghèo giữa các vùng miền
      - Áp lực việc làm cho lao động trẻ
      - Bảo tồn bản sắc văn hóa các dân tộc thiểu số

      Hiểu biết về dân cư và xã hội giúp hoạch định chính sách phát triển phù hợp, bảo đảm công bằng xã hội và phát triển bền vững.
    `,
    duration: "60 phút",
    level: "intermediate",
    images: ["/images/population.jpg"],
  },
  {
    id: "6",
    slug: "kinh-te-viet-nam",
    title: "Kinh tế Việt Nam",
    description: "Phân tích cơ cấu kinh tế và các ngành kinh tế chủ đạo",
    content: `
      # Kinh tế Việt Nam

      Việt Nam là nền kinh tế thị trường định hướng xã hội chủ nghĩa đang phát triển nhanh, với quy mô GDP đạt hơn 400 tỷ USD (2023). Trong ba thập kỷ qua, Việt Nam đã chuyển đổi từ nền kinh tế kế hoạch hóa tập trung sang nền kinh tế thị trường và đạt được những thành tựu ấn tượng về tăng trưởng và xóa đói giảm nghèo.

      ## Cơ cấu kinh tế
      Cơ cấu kinh tế Việt Nam đang chuyển dịch theo hướng công nghiệp hóa, hiện đại hóa:

      ### Nông nghiệp
      Chiếm khoảng 12% GDP (2023) nhưng thu hút 38% lực lượng lao động. Việt Nam là một trong những nước xuất khẩu nông sản hàng đầu thế giới:
      - Gạo: Xuất khẩu lớn thứ 3 thế giới
      - Cà phê: Xuất khẩu lớn thứ 2 thế giới
      - Hồ tiêu: Xuất khẩu lớn nhất thế giới
      - Thủy sản: Xuất khẩu lớn thứ 4 thế giới

      ### Công nghiệp và Xây dựng
      Chiếm khoảng 38% GDP, là động lực tăng trưởng chính của nền kinh tế. Các ngành công nghiệp chủ lực bao gồm chế biến chế tạo, khai khoáng, sản xuất và phân phối điện. Việt Nam đang trở thành trung tâm sản xuất điện tử, dệt may và da giày của khu vực.

      ### Dịch vụ
      Chiếm khoảng 41% GDP, với các ngành chủ chốt như bán lẻ, tài chính ngân hàng, viễn thông và du lịch. Du lịch đang phát triển mạnh với hơn 18 triệu lượt khách quốc tế (2019) và đóng góp quan trọng vào GDP.

      ## Thương mại quốc tế
      Việt Nam đã ký kết 15 hiệp định thương mại tự do (FTA), trong đó có các FTA quan trọng như CPTPP, EVFTA, RCEP. Kim ngạch xuất nhập khẩu đạt hơn 700 tỷ USD (2023). Việt Nam xuất siêu liên tục từ năm 2016, chủ yếu nhờ xuất khẩu điện tử, dệt may, giày dép và đồ gỗ.

      ## Đầu tư
      Tổng vốn đầu tư toàn xã hội đạt khoảng 34% GDP (2023). Đầu tư trực tiếp nước ngoài (FDI) đóng vai trò quan trọng, với hơn 36.000 dự án còn hiệu lực và tổng vốn đăng ký hơn 440 tỷ USD. Các nhà đầu tư lớn nhất là Hàn Quốc, Nhật Bản, Singapore, Đài Loan.

      ## Thách thức kinh tế
      Dù đạt được nhiều thành tựu, kinh tế Việt Nam vẫn đối mặt với nhiều thách thức:
      - Năng suất lao động thấp hơn nhiều nước trong khu vực
      - Hạ tầng cơ sở chưa đồng bộ
      - Biến đổi khí hậu ảnh hưởng đến sản xuất nông nghiệp
      - Phụ thuộc vào chuỗi cung ứng toàn cầu

      Kinh tế Việt Nam đang trên đà phát triển mạnh mẽ, nhưng cần cải cách sâu rộng để nâng cao năng lực cạnh tranh và phát triển bền vững.
    `,
    duration: "65 phút",
    level: "advanced",
    images: ["/images/economy.jpg"],
  },
  {
    id: "7",
    slug: "van-hoa-lich-su",
    title: "Văn hóa và Lịch sử",
    description: "Khám phá di sản văn hóa và các giai đoạn lịch sử quan trọng",
    content: `
      # Văn hóa và Lịch sử Việt Nam

      Việt Nam có lịch sử hơn 4.000 năm dựng nước và giữ nước, với di sản văn hóa phong phú, đa dạng. Sự giao thoa giữa các nền văn hóa bản địa và ảnh hưởng từ bên ngoài đã tạo nên bản sắc văn hóa Việt Nam độc đáo.

      ## Lịch sử Việt Nam qua các thời kỳ

      ### Thời kỳ cổ đại
      Các nhà khảo cổ đã phát hiện nhiều di chỉ thuộc văn hóa Hòa Bình, Bắc Sơn, Đông Sơn, chứng minh sự tồn tại của các nền văn minh cổ trên lãnh thổ Việt Nam. Thời kỳ Văn Lang - Âu Lạc với nhà nước đầu tiên của người Việt, để lại di sản trống đồng Đông Sơn nổi tiếng.

      ### Thời kỳ Bắc thuộc và chống Bắc thuộc
      Hơn 1000 năm Bắc thuộc (111 TCN - 938) đã để lại nhiều ảnh hưởng văn hóa Hán, nhưng nhân dân Việt Nam liên tục nổi dậy đấu tranh giành độc lập với các cuộc khởi nghĩa tiêu biểu như Hai Bà Trưng, Bà Triệu, Lý Bí.

      ### Thời kỳ phong kiến độc lập
      Từ thế kỷ 10 đến thế kỷ 19, Việt Nam trải qua các triều đại Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, Hậu Lê, Tây Sơn, Nguyễn. Đây là thời kỳ phát triển rực rỡ của văn hóa Đại Việt với các công trình kiến trúc như chùa Một Cột, tháp Chăm, thành nhà Hồ, hoàng thành Thăng Long.

      ### Thời kỳ cận hiện đại
      Từ giữa thế kỷ 19, Việt Nam trở thành thuộc địa của Pháp. Sau Cách mạng Tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa ra đời, mở ra kỷ nguyên độc lập, tự do. Cuộc kháng chiến chống Pháp (1945-1954) và chống Mỹ (1954-1975) kết thúc thắng lợi, thống nhất đất nước.

      ## Di sản văn hóa
      Việt Nam có 8 di sản văn hóa và thiên nhiên thế giới được UNESCO công nhận:
      - Quần thể di tích Cố đô Huế (1993)
      - Vịnh Hạ Long (1994, 2000)
      - Phố cổ Hội An (1999)
      - Thánh địa Mỹ Sơn (1999)
      - Vườn quốc gia Phong Nha - Kẻ Bàng (2003, 2015)
      - Khu Trung tâm Hoàng thành Thăng Long (2010)
      - Thành nhà Hồ (2011)
      - Quần thể danh thắng Tràng An (2014)

      ## Văn hóa phi vật thể
      Nhiều di sản văn hóa phi vật thể được UNESCO ghi danh:
      - Nhã nhạc cung đình Huế
      - Không gian văn hóa Cồng chiêng Tây Nguyên
      - Dân ca Quan họ
      - Ca trù
      - Hội Gióng
      - Tín ngưỡng thờ cúng Hùng Vương
      - Đờn ca tài tử Nam Bộ

      ## Ẩm thực Việt Nam
      Ẩm thực Việt Nam nổi tiếng với sự tinh tế, cân bằng âm dương và hương vị đặc trưng. Mỗi vùng miền có những món ăn đặc trưng:
      - Miền Bắc: Phở, bún chả, bánh cuốn
      - Miền Trung: Bún bò Huế, cao lầu Hội An
      - Miền Nam: Hủ tiếu, cơm tấm, lẩu mắm

      Văn hóa và lịch sử Việt Nam là tài sản quý giá, cần được bảo tồn và phát huy cho các thế hệ hiện tại và tương lai.
    `,
    duration: "70 phút",
    level: "advanced",
    images: ["/images/culture.jpg"],
  },
  {
    id: "8",
    slug: "phat-trien-ben-vung",
    title: "Phát triển Bền vững",
    description: "Tìm hiểu về các mục tiêu phát triển bền vững và thách thức",
    content: `
      # Phát triển Bền vững tại Việt Nam

      Phát triển bền vững là mục tiêu quan trọng của Việt Nam trong bối cảnh biến đổi khí hậu, suy giảm tài nguyên và áp lực tăng trưởng kinh tế. Việt Nam đã cam kết thực hiện Chương trình nghị sự 2030 của Liên Hợp Quốc với 17 Mục tiêu Phát triển Bền vững (SDGs).

      ## Các trụ cột của phát triển bền vững

      ### Phát triển kinh tế bền vững
      Việt Nam đang chuyển đổi mô hình tăng trưởng từ "nâu" sang "xanh", tập trung vào:
      - Kinh tế tuần hoàn: Giảm phát thải, tái sử dụng và tái chế chất thải
      - Năng lượng tái tạo: Phát triển điện mặt trời, điện gió, sinh khối
      - Nông nghiệp bền vững: Áp dụng công nghệ cao, hữu cơ, thích ứng biến đổi khí hậu

      Theo kế hoạch, đến 2030, năng lượng tái tạo sẽ chiếm 15-20% tổng năng lượng sơ cấp, giảm phát thải khí nhà kính 9% so với kịch bản phát triển thông thường.

      ### Phát triển xã hội bền vững
      Việt Nam đã đạt được nhiều tiến bộ trong xóa đói giảm nghèo, nhưng vẫn còn nhiều thách thức:
      - Thu hẹp khoảng cách giàu nghèo giữa các vùng miền
      - Bảo đảm an sinh xã hội cho người dân
      - Nâng cao chất lượng giáo dục và y tế
      - Bảo tồn và phát huy bản sắc văn hóa các dân tộc

      Tỷ lệ hộ nghèo đa chiều giảm từ 9,2% (2016) xuống còn 4,8% (2020), nhưng vẫn còn chênh lệch lớn giữa các vùng.

      ### Bảo vệ môi trường
      Việt Nam là một trong những quốc gia chịu ảnh hưởng nặng nề nhất của biến đổi khí hậu. Các nỗ lực bảo vệ môi trường tập trung vào:
      - Quản lý tài nguyên bền vững: Nước, rừng, khoáng sản
      - Bảo tồn đa dạng sinh học: Mở rộng hệ thống khu bảo tồn
      - Kiểm soát ô nhiễm: Nước, không khí, chất thải rắn
      - Thích ứng với biến đổi khí hậu: Đặc biệt tại đồng bằng sông Cửu Long

      ## Thách thức trong phát triển bền vững
      Việt Nam đối mặt với nhiều thách thức lớn:
      - Tốc độ đô thị hóa nhanh gây áp lực lên hạ tầng và môi trường
      - Khai thác tài nguyên quá mức dẫn đến cạn kiệt
      - Ô nhiễm môi trường tại các khu công nghiệp và đô thị
      - Tác động của biến đổi khí hậu đến sản xuất và đời sống

      ## Giải pháp và định hướng
      Để đạt được các mục tiêu phát triển bền vững, Việt Nam cần:
      - Hoàn thiện thể chế, chính sách về phát triển bền vững
      - Đẩy mạnh ứng dụng khoa học công nghệ trong sản xuất
      - Tăng cường hợp tác quốc tế trong giải quyết các vấn đề toàn cầu
      - Nâng cao nhận thức và sự tham gia của cộng đồng

      Phát triển bền vững không chỉ là trách nhiệm của Chính phủ mà cần sự chung tay của toàn xã hội, từ doanh nghiệp đến người dân. Mỗi cá nhân đều có thể đóng góp vào quá trình này thông qua lối sống bền vững và tiêu dùng có trách nhiệm.

      Việt Nam đang trên con đường phát triển bền vững, với nhiều thách thức nhưng cũng đầy cơ hội để xây dựng đất nước phồn vinh, bền vững cho các thế hệ tương lai.
    `,
    duration: "75 phút",
    level: "advanced",
    images: ["/images/sustainable.jpg"],
  },
];

export const practices: Practice[] = [
  {
    id: "1",
    slug: "nhan-dien-dia-hinh",
    title: "Bài tập nhận diện địa hình",
    description: "Xác định các dạng địa hình trên bản đồ",
    type: "map",
    questions: [
      {
        id: "1",
        question: "Hãy xác định vị trí của dãy Hoàng Liên Sơn trên bản đồ",
        options: [
          "Vùng Tây Bắc",
          "Vùng Đông Bắc",
          "Tây Nguyên",
          "Đồng bằng sông Hồng",
        ],
        correctAnswer: 0,
        explanation:
          "Dãy Hoàng Liên Sơn nằm ở vùng Tây Bắc, với đỉnh Fansipan cao nhất Đông Dương",
      },
      {
        id: "2",
        question: "Đồng bằng sông Cửu Long nằm ở vùng nào?",
        options: ["Miền Bắc", "Miền Trung", "Miền Nam", "Tây Nguyên"],
        correctAnswer: 2,
        explanation:
          "Đồng bằng sông Cửu Long nằm ở miền Nam Việt Nam, là vùng đồng bằng lớn nhất cả nước",
      },
      {
        id: "3",
        question: "Cao nguyên Mộc Châu thuộc khu vực nào?",
        options: ["Tây Bắc", "Đông Bắc", "Bắc Trung Bộ", "Tây Nguyên"],
        correctAnswer: 0,
        explanation:
          "Cao nguyên Mộc Châu thuộc tỉnh Sơn La, vùng Tây Bắc Việt Nam",
      },
    ],
  },
  {
    id: "2",
    slug: "kien-thuc-chung",
    title: "Bài tập kiến thức chung",
    description: "Kiểm tra hiểu biết về địa lý Việt Nam",
    type: "quiz",
    questions: [
      {
        id: "1",
        question: "Việt Nam có bao nhiêu tỉnh thành?",
        options: ["58", "34", "65", "70"],
        correctAnswer: 1,
        explanation:
          "Việt Nam có 34 tỉnh thành, bao gồm 28 tỉnh và 6 thành phố trực thuộc trung ương",
      },
      {
        id: "2",
        question: "Thành phố đông dân nhất Việt Nam?",
        options: ["Hà Nội", "Hải Phòng", "TP. Hồ Chí Minh", "Đà Nẵng"],
        correctAnswer: 2,
        explanation:
          "TP. Hồ Chí Minh là thành phố đông dân nhất với hơn 9 triệu người",
      },
      {
        id: "3",
        question: "Diện tích tự nhiên của Việt Nam khoảng bao nhiêu?",
        options: ["331,212 km²", "425,000 km²", "512,000 km²", "289,000 km²"],
        correctAnswer: 0,
        explanation:
          "Diện tích tự nhiên của Việt Nam là 331.212 km² (theo Tổng cục Thống kê 2023)",
      },
    ],
  },
  {
    id: "3",
    slug: "khi-hau-thoi-tiet",
    title: "Bài tập về khí hậu và thời tiết",
    description: "Kiểm tra kiến thức về khí hậu các vùng miền",
    type: "quiz",
    questions: [
      {
        id: "1",
        question:
          "Gió mùa Đông Bắc thổi vào Việt Nam trong khoảng thời gian nào?",
        options: [
          "Tháng 5 đến tháng 10",
          "Tháng 11 đến tháng 4 năm sau",
          "Tháng 6 đến tháng 9",
          "Quanh năm",
        ],
        correctAnswer: 1,
        explanation:
          "Gió mùa Đông Bắc thổi từ tháng 11 đến tháng 4 năm sau, mang theo không khí lạnh từ lục địa châu Á",
      },
      {
        id: "2",
        question: "Vùng nào có lượng mưa trung bình năm cao nhất?",
        options: ["Miền Bắc", "Miền Trung", "Miền Nam", "Tây Nguyên"],
        correctAnswer: 1,
        explanation:
          "Miền Trung có lượng mưa trung bình năm cao nhất, từ 2.000-3.500 mm/năm",
      },
      {
        id: "3",
        question: "Hiện tượng gió Lào thường xảy ra ở khu vực nào?",
        options: [
          "Đồng bằng sông Hồng",
          "Bắc Trung Bộ",
          "Tây Nguyên",
          "Đồng bằng sông Cửu Long",
        ],
        correctAnswer: 1,
        explanation:
          "Gió Lào là loại gió khô nóng thổi từ Lào sang Việt Nam, ảnh hưởng mạnh nhất ở Bắc Trung Bộ",
      },
    ],
  },
  {
    id: "4",
    slug: "he-sinh-thai-bao-ton",
    title: "Bài tập về hệ sinh thái và bảo tồn",
    description: "Kiểm tra hiểu biết về đa dạng sinh học",
    type: "quiz",
    questions: [
      {
        id: "1",
        question: "Việt Nam có bao nhiêu vườn quốc gia?",
        options: ["24", "34", "44", "54"],
        correctAnswer: 1,
        explanation: "Việt Nam có 34 vườn quốc gia được thành lập và công nhận",
      },
      {
        id: "2",
        question: "Loài động vật nào sau đây là đặc hữu của Việt Nam?",
        options: ["Voọc mũi hếch", "Hổ", "Voi", "Gấu ngựa"],
        correctAnswer: 0,
        explanation:
          "Voọc mũi hếch là loài đặc hữu của Việt Nam, chỉ tìm thấy ở khu vực rừng núi phía Bắc",
      },
      {
        id: "3",
        question: "Rừng ngập mặn Cà Mau thuộc khu dự trữ sinh quyển nào?",
        options: [
          "Rừng ngập mặn Cần Giờ",
          "Đồng bằng sông Hồng",
          "Mũi Cà Mau",
          "Tây Nghệ An",
        ],
        correctAnswer: 2,
        explanation:
          "Rừng ngập mặn Cà Mau thuộc Khu dự trữ sinh quyển thế giới Mũi Cà Mau",
      },
    ],
  },
  {
    id: "5",
    slug: "tai-nguyen-kinh-te",
    title: "Bài tập về tài nguyên và kinh tế",
    description: "Kiểm tra kiến thức về tài nguyên và phát triển kinh tế",
    type: "quiz",
    questions: [
      {
        id: "1",
        question: "Việt Nam đứng thứ mấy thế giới về xuất khẩu gạo?",
        options: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5"],
        correctAnswer: 1,
        explanation:
          "Việt Nam là nước xuất khẩu gạo lớn thứ 3 thế giới, sau Ấn Độ và Thái Lan",
      },
      {
        id: "2",
        question: "Mỏ than lớn nhất Việt Nam tập trung ở đâu?",
        options: ["Thái Nguyên", "Quảng Ninh", "Lạng Sơn", "Cà Mau"],
        correctAnswer: 1,
        explanation:
          "Quảng Ninh có trữ lượng than lớn nhất Việt Nam, chiếm hơn 90% trữ lượng than cả nước",
      },
      {
        id: "3",
        question: "Ngành nào đóng góp lớn nhất vào GDP Việt Nam?",
        options: ["Nông nghiệp", "Công nghiệp", "Dịch vụ", "Xây dựng"],
        correctAnswer: 2,
        explanation:
          "Khu vực dịch vụ đóng góp lớn nhất vào GDP Việt Nam, chiếm khoảng 41% (2023)",
      },
    ],
  },
  {
    id: "6",
    slug: "dan-cu-xa-hoi",
    title: "Bài tập về dân cư và xã hội",
    description: "Kiểm tra hiểu biết về đặc điểm dân cư",
    type: "quiz",
    questions: [
      {
        id: "1",
        question:
          "Dân tộc nào chiếm tỷ lệ cao nhất trong cộng đồng 54 dân tộc Việt Nam?",
        options: ["Tày", "Kinh", "Mường", "Khmer"],
        correctAnswer: 1,
        explanation:
          "Dân tộc Kinh chiếm 85,3% dân số Việt Nam, là dân tộc chiếm tỷ lệ cao nhất",
      },
      {
        id: "2",
        question: "Vùng nào có mật độ dân số cao nhất Việt Nam?",
        options: [
          "Đồng bằng sông Hồng",
          "Đồng bằng sông Cửu Long",
          "Duyên hải Miền Trung",
          "Tây Nguyên",
        ],
        correctAnswer: 0,
        explanation:
          "Đồng bằng sông Hồng có mật độ dân số cao nhất, đạt 1.060 người/km²",
      },
      {
        id: "3",
        question: "Tỷ lệ dân đô thị của Việt Nam năm 2023 là bao nhiêu?",
        options: ["28%", "38%", "48%", "58%"],
        correctAnswer: 1,
        explanation: "Tỷ lệ dân đô thị của Việt Nam đạt 38% vào năm 2023",
      },
    ],
  },
  {
    id: "7",
    slug: "van-hoa-lich-su",
    title: "Bài tập về văn hóa và lịch sử",
    description: "Kiểm tra kiến thức về di sản văn hóa",
    type: "quiz",
    questions: [
      {
        id: "1",
        question:
          "Di sản nào sau đây KHÔNG phải là di sản văn hóa thế giới tại Việt Nam?",
        options: [
          "Quần thể di tích Cố đô Huế",
          "Vịnh Hạ Long",
          "Chùa Hương",
          "Phố cổ Hội An",
        ],
        correctAnswer: 2,
        explanation:
          "Chùa Hương là di tích quốc gia đặc biệt của Việt Nam nhưng chưa được UNESCO công nhận là di sản thế giới",
      },
      {
        id: "2",
        question: "Nhã nhạc cung đình Huế được UNESCO công nhận vào năm nào?",
        options: ["1993", "1999", "2003", "2008"],
        correctAnswer: 2,
        explanation:
          "Nhã nhạc cung đình Huế được UNESCO công nhận là Kiệt tác di sản văn hóa phi vật thể của nhân loại năm 2003",
      },
      {
        id: "3",
        question: "Triều đại phong kiến nào cuối cùng trong lịch sử Việt Nam?",
        options: ["Nhà Lê", "Nhà Tây Sơn", "Nhà Nguyễn", "Nhà Trần"],
        correctAnswer: 2,
        explanation:
          "Nhà Nguyễn (1802-1945) là triều đại phong kiến cuối cùng trong lịch sử Việt Nam",
      },
    ],
  },
  {
    id: "8",
    slug: "phat-trien-ben-vung",
    title: "Bài tập về phát triển bền vững",
    description: "Kiểm tra hiểu biết về các mục tiêu phát triển bền vững",
    type: "quiz",
    questions: [
      {
        id: "1",
        question:
          "Việt Nam cam kết thực hiện bao nhiêu Mục tiêu Phát triển Bền vững?",
        options: ["15", "16", "17", "18"],
        correctAnswer: 2,
        explanation:
          "Việt Nam cam kết thực hiện 17 Mục tiêu Phát triển Bền vững (SDGs) của Liên Hợp Quốc",
      },
      {
        id: "2",
        question: "Tỷ lệ hộ nghèo đa chiều của Việt Nam năm 2020 là bao nhiêu?",
        options: ["2,8%", "4,8%", "6,8%", "8,8%"],
        correctAnswer: 1,
        explanation: "Tỷ lệ hộ nghèo đa chiều của Việt Nam năm 2020 là 4,8%",
      },
      {
        id: "3",
        question:
          "Mục tiêu đến 2030, năng lượng tái tạo chiếm bao nhiêu % tổng năng lượng sơ cấp?",
        options: ["5-10%", "10-15%", "15-20%", "20-25%"],
        correctAnswer: 2,
        explanation:
          "Đến 2030, năng lượng tái tạo sẽ chiếm 15-20% tổng năng lượng sơ cấp theo kế hoạch của Việt Nam",
      },
    ],
  },
];
