import React from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeImages.css";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";

const RoomTypeImages = () => {
  const { rooms, defaultImage } = useRoomData();
  const { type } = useParams();
  return (
    <div className="room-type-images">
      <div>{type}</div>
    </div>
  );
};

export default RoomTypeImages;
