import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import LocationRooms from "../../../components/Location/LocationRooms/LocationRooms";

const RoomBooking1 = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <div className="container">
        <LocationPageTitle url="/33-tuc-mac" current="Rooms" />
        <LocationRooms />
      </div>
    </div>
  );
};

export default RoomBooking1;
