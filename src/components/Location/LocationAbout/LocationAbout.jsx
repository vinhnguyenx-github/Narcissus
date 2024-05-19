import React from "react";
import { useLocation } from "react-router-dom";
import "./LocationAbout.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const LocationAbout = ({ language }) => {
  const aboutContents = [
    {
      id: 1,
      path: "/33-tuc-mac",
      headers: {
        English: "Narcissus Tức Mặc - A Resort Hotel in the Heart of Hanoi",
        Vietnamese:
          "Narcissus Tức Mặc - Khách sạn nghỉ dưỡng tại trung tâm Hà Nội",
      },
      descriptions: {
        English: [
          "At Tuc Mac location, the rooms come with air conditioning, a seating area, a flat-screen TV with satellite channels, a kitchen, a dining area, a private bathroom, free toiletries, a shower, and a hairdryer.",
          "At Narcissus Hotel & Apartment, each room comes with bed linen and towels. Popular points of interest near the accommodation include Temple of Literature, Trang Tien Plaza, and St. Joseph Cathedral. The nearest airport is Noi Bai International Airport, about 25 km away.",
          "Additionally, this is a favorite spot for couples according to reputable booking sites.",
        ],
        Vietnamese: [
          "Tại cơ sở Tục Mặc, các phòng đều đi kèm với điều hòa, khu vực ghế ngồi, TV màn hình phẳng có truyền hình vệ tinh, bếp, khu vực ăn uống, phòng tắm riêng, đồ vệ sinh cá nhân miễn phí, vòi sen và máy sấy tóc.",
          "Tại Narcissus Hotel & Apartment, mỗi phòng đều có ga trải giường và khăn tắm. Các điểm tham quan nổi tiếng gần chỗ nghỉ bao gồm Văn Miếu - Quốc Tử Giám, Tràng Tiền Plaza và Nhà thờ Thánh Joseph. Sân bay gần nhất là Sân bay Quốc tế Nội Bài, cách đây khoảng 25 km.",
          "Ngoài ra, đây là địa điểm yêu thích của các cặp đôi theo các trang booking uy tín.",
        ],
      },
    },
    {
      id: 2,
      path: "/84-le-duan",
      headers: {
        English: "Narcissus Lê Duẩn - A Resort Hotel in the Heart of Hanoi",
        Vietnamese:
          "Narcissus Lê Duẩn - Khách sạn nghỉ dưỡng tại trung tâm Hà Nội",
      },
      descriptions: {
        English: [
          "Conveniently located in the Hoan Kiem district of Hanoi, Narcissus 2 Hotel & Apartment is 1.4 km from Trang Tien Plaza, 1.2 km from St. Joseph Cathedral, and 1 km from the Imperial Citadel. With private parking, this apartment hotel is less than 1 km from Hanoi Temple of Literature. The property is 1.3 km from the city center and 300 m from Hanoi Railway Station.",
          "All rooms have a private bathroom, air conditioning, a flat-screen TV, and a minibar.",
          "Popular points of interest near Narcissus 2 Hotel & Apartment include the Imperial Citadel, Vietnam Fine Arts Museum, and Hoan Kiem Lake. The nearest airport is Noi Bai International Airport, 25 km from the accommodation, and the hotel provides airport shuttle service for a fee.",
        ],
        Vietnamese: [
          "Tọa lạc tại vị trí thuận tiện ở quận Hoàn Kiếm của Hà Nội, Narcissus 2 Hotel & Apartment cách Tràng Tiền Plaza 1,4 km, Nhà thờ Lớn 1,2 km và Hoàng Thành 1 km. Với bãi đậu xe riêng, khách sạn căn hộ này cách Văn Miếu Hà Nội chưa đến 1 km. Nơi nghỉ cách trung tâm thành phố 1,3 km và cách Ga Hà Nội 300 m.",
          "Tất cả các phòng đều có phòng tắm riêng, máy điều hòa, TV màn hình phẳng và minibar.",
          "Các điểm tham quan nổi tiếng gần Narcissus 2 Hotel & Apartment bao gồm Hoàng thành, Bảo tàng Mỹ thuật Việt Nam và Hồ Hoàn Kiếm. Sân bay gần nhất là Quốc tế Nội Bài, cách chỗ ở 25 km và khách sạn cung cấp dịch vụ đưa đón sân bay có trả phí.",
        ],
      },
    },
  ];

  const location = useLocation();

  const currentAboutContent = aboutContents.find((loc) =>
    location.pathname.startsWith(loc.path)
  );

  if (!currentAboutContent) {
    return null; // or a fallback content if necessary
  }

  const { headers, descriptions } = currentAboutContent;
  const header = headers[language];
  const description1 = descriptions[language][0];
  const description2 = descriptions[language][1];
  const description3 = descriptions[language][2];

  return (
    <div className="location-about">
      <h1>{header}</h1>
      <p>
        {description1} <br />
        <br /> {description2} <br />
        <br />
        {description3}
      </p>
    </div>
  );
};

export default LocationAbout;
