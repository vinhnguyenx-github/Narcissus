import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import Footer from "../../../components/Footer/Footer";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import AdditionalInfo from "../../../components/Location/AdditionalInfo/AdditionalInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";

const RoomTypeBooking1 = () => {
  const { type } = useParams();
  const { rooms } = useRoomData();
  const navigate = useNavigate();

  const roomExists = rooms.some((room) => room.type === type);

  if (!roomExists) {
    // Redirect to the /rooms route if the room type doesn't exist
    navigate("/33-tuc-mac/rooms");
    return null; // Return null to prevent rendering anything for this case
  }

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
