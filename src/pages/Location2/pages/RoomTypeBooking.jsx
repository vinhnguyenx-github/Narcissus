import React from "react";
import { useParams, useLocation } from "react-router-dom";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";

const RoomTypeBooking2 = () => {
  const { type } = useParams(); // Access the room type from the route parameter

  return (
    <div>
      <LocationNav />
      <BubbleChat />
      <div className="container">
        <RoomTypeBooking />
      </div>
    </div>
  );
};

export default RoomTypeBooking2;
