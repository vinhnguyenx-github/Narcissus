import React from "react";
import { useParams } from "react-router-dom";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import Footer from "../../../components/Footer/Footer";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import AdditionalInfo from "../../../components/Location/AdditionalInfo/AdditionalInfo";
import { Helmet } from "react-helmet-async";

const RoomTypeBooking1 = () => {
  const { roomType } = useParams();

  console.log(roomType);

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
