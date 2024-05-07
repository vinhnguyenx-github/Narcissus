import React from "react";
import "./HomeAbout.css";

const HomeAbout = ({ language }) => {
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
        <h1>
          {language === "English"
            ? "About Narcissus Hotel & Apartment"
            : "Về Khách Sạn Narcissus"}
        </h1>
        <p>
          {language === "English" ? (
            <>
              With 25 luxurious and elegant rooms, we offer various styles. All
              rooms are fully equipped with amenities including air
              conditioning, seating area, flat-screen cable TV, and private
              bathroom with shower, bathrobe, slippers, and hairdryer. Rooms
              feature an electric kettle, free tea & coffee, while some rooms
              have balconies overlooking the street and others have windows with
              city views. Narcissus Hotel & Apartment provides bed linen and
              towels in all rooms.
            </>
          ) : (
            <>
              Với 25 phòng nghỉ sang trọng, trang nhã. Chúng tôi chia theo những
              phong cách khác nhau Tất cả các phòng nghỉ đều được trang bị đầy
              đủ tiện nghi với máy lạnh, khu vực ghế ngồi, truyền hình cáp màn
              hình phẳng và phòng tắm riêng với vòi sen, áo choàng tắm, dép, máy
              sấy tóc. Các phòng có ấm đun nước điện, trà & cà phê miễn phí
              trong khi một số phòng có ban công nhìn ra phố và những phòng khác
              còn có cửa sổ nhìn ra quang cảnh thành phố. Narcissus Hotel &
              Apartment tất cả các phòng đều có khăn trải giường và khăn tắm.
            </>
          )}
        </p>
        <p>
          {language === "English" ? (
            <>
              Narcissus Hotel & Apartment has a 24-hour front desk. Staff can
              assist guests with various services including tours, ticket
              bookings, currency exchange, and luggage storage. Airport
              transfers, bicycle and motorbike rentals can be arranged for a
              fee.
            </>
          ) : (
            <>
              Khách sạn & Căn hộ Narcissus có lễ tân hoạt động 24 giờ. Nhân viên
              có thể hỗ trợ quý khách với nhiều dịch vụ khác nhau, bao gồm các
              tour du lịch, đặt vé, thu đổi ngoại tệ và giữ hành lý. Dịch vụ đưa
              đón sân bay, cho thuê xe đạp và xe máy có thể được sắp xếp với một
              khoản phí.
            </>
          )}
        </p>
        <p>
          {language === "English" ? (
            <>
              Narcissus Hotel & Apartment is our endless passion. We always
              honor our profession to serve you with enthusiasm and our hearts.
            </>
          ) : (
            <>
              Narcissus Hotel & Apartment là niềm đam mê bất tận của chúng tôi.
              Chúng tôi luôn tôn trọng nghề nghiệp của mình để phục vụ bạn bằng
              nhiệt huyết và trái tim của mình.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
