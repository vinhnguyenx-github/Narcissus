import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationAbout from "../../../components/Location/LocationAbout/LocationAbout";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import LocationTitle from "../../../components/Location/LocationTitle/LocationTitle";
import RoomPreview from "../../../components/Room/RoomPreview";

const Home1 = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationAbout />
        <LocationTitle left="Rooms" right="See all Rooms" />
        <RoomPreview />
      </div>
    </div>
  );
};

export default Home1;
