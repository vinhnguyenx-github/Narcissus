import React from "react";
import { useParams } from "react-router-dom";

const RoomTypeBooking1 = () => {
  const { type } = useParams(); // Access the room type from the route parameter

  return <h1>Booking Page for {type} Room</h1>;
};

export default RoomTypeBooking1;
