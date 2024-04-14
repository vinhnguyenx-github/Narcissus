import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationAbout from "../../../components/Location/LocationAbout/LocationAbout";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import LocationTitle from "../../../components/Location/LocationTitle/LocationTitle";
import RoomPreview from "../../../components/Room/RoomPreview";
import Footer from "../../../components/Footer/Footer";
import LocationServices from "../../../components/Location/LocationServices/LocationServices";

const Home2 = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationAbout />
        <LocationTitle left="Rooms" right="See all Rooms" />
        <RoomPreview location="84-le-duan" start={2} end={7} />
        <LocationTitle
          left="Services & Amenities"
          right="Explore More Amenities"
          rightURL="/84-le-duan/amenities"
        />
        <LocationServices />
      </div>
      <Footer />
    </div>
  );
};

export default Home2;
