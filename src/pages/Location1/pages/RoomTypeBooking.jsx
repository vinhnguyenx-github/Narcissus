import React from "react";
import { useParams } from "react-router-dom";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import Footer from "../../../components/Footer/Footer";
import RoomPolicy from "../../../components/Location/RoomPolicy/RoomPolicy";

const RoomTypeBooking1 = () => {
  return (
    <div>
      <LocationNav />
      <div className="container">
        <RoomTypeBooking />
        <RoomPolicy />
      </div>
      <Footer />
    </div>
  );
};

export default RoomTypeBooking1;
