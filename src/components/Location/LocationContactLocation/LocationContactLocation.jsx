import React from "react";
import GoogleMap from "../../GoogleMap/GoogleMap";
import { Link, useLocation } from "react-router-dom";
import icon1 from "../../../assets/Location/ContactLocationIcons/send.png";
import icon2 from "../../../assets/Location/ContactLocationIcons/telephone.png";
import icon3 from "../../../assets/Location/ContactLocationIcons/envelope.png";
import "./LocationContactLocation.css";

const LocationContactLocation = () => {
  const googleMapPaths = [
    {
      id: 1,
      path: "/33-tuc-mac/contact-us-directions",
      addressLine1: "Số 33 ngõ Tục Mặc, phường Cửa Nam,",
      mapURL:
        "https://www.google.com/maps/dir//Narcissus+Hotel+%26+Apartment+33+Ng.+T%E1%BB%A9c+M%E1%BA%B7c+C%E1%BB%ADa+Nam+Ho%C3%A0n+Ki%E1%BA%BFm,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@21.0228222,105.8426037,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135ab908a6fcba1:0x70d3b6ce6055d2ff!2m2!1d105.8426037!2d21.0228222?entry=ttu",
      googleMapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2472189272216!2d105.83772158219556!3d21.022791938045547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab908a6fcba1%3A0x70d3b6ce6055d2ff!2sNarcissus%20Hotel%20%26%20Apartment!5e0!3m2!1sen!2sca!4v1712034744031!5m2!1sen!2sca",
    },
    {
      id: 2,
      path: "/84-le-duan/contact-us-directions",
      addressLine1: "Số 84 Lê Duẩn, phường Văn Miếu,",
      mapURL:
        "https://www.google.com/maps/dir//Narcissus+Hotel+%26+Apartment+33+Ng.+T%E1%BB%A9c+M%E1%BA%B7c+C%E1%BB%ADa+Nam+Ho%C3%A0n+Ki%E1%BA%BFm,+H%C3%A0+N%E1%BB%99i+100000,+Vietnam/@21.0228222,105.8426037,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135ab908a6fcba1:0x70d3b6ce6055d2ff!2m2!1d105.8426037!2d21.0228222?entry=ttu",
      googleMapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.14694739064!2d105.83885427540807!3d21.026805487845476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0785d794e5%3A0xa0d4eead5ebd05e!2sNarcissus%202%20(Le%20Duan)%20Hotel%20And%20Apartment!5e0!3m2!1sen!2sca!4v1712035955893!5m2!1sen!2sca",
    },
  ];
  const googleMapPath = useLocation();

  const currentGoogleMapPath = googleMapPaths.find((loc) =>
    googleMapPath.pathname.startsWith(loc.path)
  );
  return (
    <div className="contact-location">
      <h2>Liên hệ & Hướng dẫn đường đi</h2>
      <div className="contact-location-content">
        <div className="contact-location-content-col">
          <h3>Cách đến khách sạn</h3>
          <p className="contact-location-description">
            Tìm đường đến Khách sạn & Căn hộ Narcissus hoặc nhấp vào Xem Hướng
            dẫn bên dưới.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Chúng tôi rất mong được chào đón bạn.
          </p>
          <div className="contact-location-info">
            <img src={icon1} alt="" className="contact-location-icon" />
            <div className="contact-information">
              <a href={currentGoogleMapPath.mapURL}>Xem Hướng dẫn</a>
              <p>{currentGoogleMapPath.addressLine1}</p>
              <p>Quận Hoàn Kiếm, Hà Nội, Việt Nam</p>
            </div>
          </div>
          <div className="contact-location-info">
            <img src={icon2} alt="" className="contact-location-icon" />
            <div className="contact-information">
              <p>
                Điện thoại: <a href="tel:0337248276">0337248276</a>
              </p>
              <p>
                Đại diện của chúng tôi sẵn lòng phục vụ mỗi ngày từ 3:00 sáng
                đến 11:00 tối giờ chuẩn Thái Bình Dương. Nếu bạn gọi vào ngoài
                thời gian đó, vui lòng gọi trực tiếp cho khách sạn.
              </p>
            </div>
          </div>
          <div className="contact-location-info">
            <img src={icon3} alt="" className="contact-location-icon" />
            <div className="contact-information">
              <a href="mailto:Narcissus84leduan@gmail.com">
                Narcissus84leduan@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact-location-content-col">
          <GoogleMap url={currentGoogleMapPath.googleMapURL} />
        </div>
        <div style={{ marginBottom: "30px" }}></div>
      </div>
    </div>
  );
};

export default LocationContactLocation;
