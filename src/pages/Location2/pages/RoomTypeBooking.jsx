import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import Footer from "../../../components/Footer/Footer";

const RoomTypeBooking2 = () => {
  return (
    <div>
      <LocationNav />
      <BubbleChat />
      <div className="container">
        <RoomTypeBooking />
      </div>
      <Footer />
    </div>
  );
};

export default RoomTypeBooking2;
