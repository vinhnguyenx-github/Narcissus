import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import LocationRooms from "../../../components/Location/LocationRooms/LocationRooms";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import Footer from "../../../components/Footer/Footer";

const RoomBooking1 = () => {
  return (
    <div>
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
