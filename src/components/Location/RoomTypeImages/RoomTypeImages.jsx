import React from "react";
import "./RoomTypeImages.css";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";

const RoomTypeImages = () => {
  const { rooms, defaultImage } = useRoomData();
  return (
    <div className="room-type-images">
      <div></div>
    </div>
  );
};

export default RoomTypeImages;
