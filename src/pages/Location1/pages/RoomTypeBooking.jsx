import React from "react";
import { useParams } from "react-router-dom";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";

const RoomTypeBooking1 = () => {
  return (
    <div>
      <LocationNav />
      <RoomTypeBooking />
    </div>
  );
};

export default RoomTypeBooking1;
