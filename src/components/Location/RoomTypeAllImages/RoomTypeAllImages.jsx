import React from "react";
import "./RoomTypeAllImages.css";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";

const RoomTypeAllImages = () => {
  const { rooms, defaultImage } = useRoomData();
  return (
    <div>
      <div>a</div>
    </div>
  );
};

export default RoomTypeAllImages;
