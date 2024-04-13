import React from "react";
import { useParams } from "react-router-dom";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import Footer from "../../../components/Footer/Footer";

const RoomTypeBooking1 = () => {
  return (
    <div>
      <LocationNav />
      <div className="container">
        <RoomTypeBooking />
      </div>
      <Footer />
    </div>
  );
};

export default RoomTypeBooking1;
