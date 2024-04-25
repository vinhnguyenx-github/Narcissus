import React from "react";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="home-about-left">
        <iframe
          src="https://www.youtube.com/embed/PC1iMPr4Qbg?si=ftxvIIu3aw30gKMJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="home-about-img"
        ></iframe>
      </div>
      <div className="home-about-right">
        <h3>Về Narcissus</h3>
        <h2>Khám Phá Sự Xuất Sắc của Khách Sạn</h2>
        <p>
          Với 25 phòng nghỉ sang trọng, trang nhã. Chúng tôi chia theo những
          phong cách khác nhau Tất cả các phòng nghỉ đều được trang bị đầy đủ
          tiện nghi với máy lạnh, khu vực ghế ngồi, truyền hình cáp màn hình
          phẳng và phòng tắm riêng với vòi sen, áo choàng tắm, dép, máy sấy tóc.
          Các phòng có ấm đun nước điện, trà & cà phê miễn phí trong khi một số
          phòng có ban công nhìn ra phố và những phòng khác còn có cửa sổ nhìn
          ra quang cảnh thành phố. Narcissus Hotel & Apartment tất cả các phòng
          đều có khăn trải giường và khăn tắm.
        </p>
        <p>
          Khách sạn & Căn hộ Narcissus có lễ tân hoạt động 24 giờ. Nhân viên có
          thể hỗ trợ quý khách với nhiều dịch vụ khác nhau, bao gồm các tour du
          lịch, đặt vé, thu đổi ngoại tệ và giữ hành lý. Dịch vụ đưa đón sân
          bay, cho thuê xe đạp và xe máy có thể được sắp xếp với một khoản phí.
        </p>
        <p>
          Narcissus Hotel & Apartment là niềm đam mê bất tận của chúng tôi.
          Chúng tôi luôn tôn trọng nghề nghiệp của mình để phục vụ bạn bằng
          nhiệt huyết và trái tim của mình
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
