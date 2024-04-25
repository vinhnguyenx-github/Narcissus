import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationAbout from "../../../components/Location/LocationAbout/LocationAbout";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import LocationTitle from "../../../components/Location/LocationTitle/LocationTitle";
import RoomPreview from "../../../components/Room/RoomPreview";
import Footer from "../../../components/Footer/Footer";
import LocationServices from "../../../components/Location/LocationServices/LocationServices";

const Home1 = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationAbout />
        <LocationTitle
          left="Phòng"
          right="Xem tất cả các phòng"
          rightURL="rooms"
        />
        <RoomPreview location="33-tuc-mac" start={0} end={2} />
        <LocationTitle
          left="Tiện Ích"
          right="Xem tất cả tiện ích"
          rightURL="/33-tuc-mac/amenities"
        />
        <LocationServices />
      </div>
      <Footer />
    </div>
  );
};

export default Home1;
