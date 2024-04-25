import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import RoomTypeBooking from "../../../components/Location/RoomTypeBooking/RoomTypeBooking";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import Footer from "../../../components/Footer/Footer";

const RoomTypeBooking2 = () => {
  const { type } = useParams();
  const { rooms } = useRoomData();
  const navigate = useNavigate();

  if (!rooms) {
    // Redirect to the /rooms route if the room type doesn't exist
    navigate("/84-le-duan/rooms");
    return null; // Return null to prevent rendering anything for this case
  } // Access the room type from the route parameter

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
