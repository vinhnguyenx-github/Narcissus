import React from "react";
import { useParams } from "react-router-dom";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";

const RoomTypeBooking2 = () => {
  const { type } = useParams(); // Access the room type from the route parameter

  return (
    <div>
      <LocationNav />
      <div className="container">
        <h1>Booking Page for {type} Room</h1>;
      </div>
    </div>
  );
};

export default RoomTypeBooking2;
