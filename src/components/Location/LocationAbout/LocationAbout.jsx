import React from "react";
import { useLocation } from "react-router-dom";
import "./LocationAbout.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const LocationAbout = () => {
  const aboutContents = [
    {
      id: 1,
      path: "/33-tuc-mac",
      header: "Narcissus Tức Mặc",
      description1:
        "Tại cơ sở Tục Mặc, các phòng đều đi kèm với điều hòa, khu vực ghế ngồi, TV màn hình phẳng có truyền hình vệ tinh, bếp, khu vực ăn uống, phòng tắm riêng, đồ vệ sinh cá nhân miễn phí, vòi sen và máy sấy tóc.",
      description2:
        "Tại Narcissus Hotel & Apartment, mỗi phòng đều có ga trải giường và khăn tắm. Các điểm tham quan nổi tiếng gần chỗ nghỉ bao gồm Văn Miếu - Quốc Tử Giám, Tràng Tiền Plaza và Nhà thờ Thánh Joseph. Sân bay gần nhất là Sân bay Quốc tế Nội Bài, cách đây khoảng 25 km.",
      description3:
        "Ngoài ra, đây là địa điểm yêu thích của các cặp đôi theo các trang booking uy tín",
    },
    {
      id: 2,
      path: "/84-le-duan",
      header: "Narcissus Lê Duẩn",
      description1:
        "Tọa lạc tại vị trí thuận tiện ở quận Hoàn Kiếm của Hà Nội, Narcissus 2 Hotel & Apartment cách Tràng Tiền Plaza 1,4 km, Nhà thờ Lớn 1,2 km và Hoàng Thành 1 km. Với bãi đậu xe riêng, khách sạn căn hộ này cách Văn Miếu Hà Nội chưa đến 1 km. Nơi nghỉ cách trung tâm thành phố 1,3 km và cách Ga Hà Nội 300 m.",
      description2:
        "Tất cả các phòng đều có phòng tắm riêng, máy điều hòa, TV màn hình phẳng và minibar.",
      description3:
        "Các điểm tham quan nổi tiếng gần Narcissus 2 Hotel & Apartment bao gồm Hoàng thành, Bảo tàng Mỹ thuật Việt Nam và Hồ Hoàn Kiếm. Sân bay gần nhất là Quốc tế Nội Bài, cách chỗ ở 25 km và khách sạn cung cấp dịch vụ đưa đón sân bay có trả phí.",
    },
  ];
  const aboutContent = useLocation();

  const currentAboutContent = aboutContents.find((loc) =>
    aboutContent.pathname.startsWith(loc.path)
  );

  return (
    <div className="location-about">
      <h1>{currentAboutContent.header}</h1>
      <p>
        {currentAboutContent.description1} <br />
        <br /> {currentAboutContent.description2} <br />
        <br />
        {currentAboutContent.description3}
      </p>
    </div>
  );
};

export default LocationAbout;
