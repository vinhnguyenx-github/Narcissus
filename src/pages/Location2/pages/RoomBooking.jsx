import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import LocationRooms from "../../../components/Location/LocationRooms/LocationRooms";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const RoomBooking2 = () => {
  return (
    <div>
      <Helmet>
        <title>Các Phòng Narcissus Lê Duẩn</title>
        <meta
          name="description"
          content="Khám phá các phòng và căn hộ sang trọng tại Narcissus Lê Duẩn. Đặt phòng ngay tại Narcissus Hotel & Apartment."
        />
        <link
          rel="canonical"
          href="https://www.narcissus.com.vn/84-le-duan/rooms"
        />
      </Helmet>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationPageTitle url="/84-le-duan" current="Rooms" />
        <h1
          style={{ fontSize: "1.4rem", marginTop: "20px", fontWeight: "500" }}
        >
          Khám phá các phòng cơ sở Lê Duẩn
        </h1>
        <LocationRooms location="84-le-duan" start={2} end={6} />
      </div>
      <Footer />
    </div>
  );
};

export default RoomBooking2;
