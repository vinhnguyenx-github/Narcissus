import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import Footer from "../../../components/Footer/Footer";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import AdditionalInfo from "../../../components/Location/AdditionalInfo/AdditionalInfo";

const RoomTypeBooking1 = () => {
  return (
    <div>
      <LocationNav />
      <BubbleChat />
      <div className="container">
        <RoomTypeBooking />
        <AdditionalInfo />
      </div>
      <Footer />
    </div>
  );
};

export default RoomTypeBooking1;
