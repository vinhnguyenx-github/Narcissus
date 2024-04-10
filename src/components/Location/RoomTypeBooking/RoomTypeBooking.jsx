import React from "react";
import { useParams, useLocation } from "react-router-dom";

import "./RoomTypeBooking.css";

const RoomTypeBooking = () => {
  const { type } = useParams();
  const location = useLocation();
  const { roomID, roomName, roomDescription, roomPrice } = location.state || {};
  console.log(location);
  return (
    <div className="room-type-booking">
      <h1 className="room-type-header">{roomName}</h1>
    </div>
  );
};

export default RoomTypeBooking;
