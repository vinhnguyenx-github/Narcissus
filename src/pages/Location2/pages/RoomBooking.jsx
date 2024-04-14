import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import LocationRooms from "../../../components/Location/LocationRooms/LocationRooms";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";

const RoomBooking2 = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationPageTitle url="/84-le-duan" current="Rooms" />
        <LocationRooms location="84-le-duan" start={2} end={6} />
      </div>
    </div>
  );
};

export default RoomBooking2;
