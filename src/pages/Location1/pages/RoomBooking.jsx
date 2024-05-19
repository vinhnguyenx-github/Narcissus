import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import LocationRooms from "../../../components/Location/LocationRooms/LocationRooms";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const RoomBooking1 = () => {
  return (
    <div>
      <Helmet>
        <title>Các Phòng Narcissus Tức Mặc</title>
        <meta
          name="description"
          content="Khám phá các phòng và căn hộ sang trọng tại Narcissus Hotel & Apartment, tọa lạc tại trung tâm Hà Nội. Khám phá các phòng nghỉ tinh tế của chúng tôi, được thiết kế tỉ mỉ để mang lại sự thoải mái và sang trọng tối đa cho kỳ nghỉ của bạn tại Hà Nội. Đặt phòng ngay tại Narcissus Hotel & Apartment."
        />
        <link
          rel="canonical"
          href="https://www.narcissus.com.vn/33-tuc-mac/rooms"
        />
      </Helmet>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationPageTitle url="/33-tuc-mac" current="Các loại phòng" />
        <LocationRooms location="33-tuc-mac" start={0} end={2} />
      </div>
      <Footer />
    </div>
  );
};

export default RoomBooking1;
