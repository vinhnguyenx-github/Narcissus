import React from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeDescription.css";

const RoomTypeDescription = () => {
  const { type } = useParams();
  return (
    <div className="room-type-description">
      <p>
        Enjoy a luxurious stay in our spacious {type}, complete with modern
        amenities such as a private kitchen, en-suite bathroom, air
        conditioning, smart TV, and more. Benefit from additional conveniences
        like in-room breakfast service and the option to rent a motorbike for
        exploring the area.
      </p>
    </div>
  );
};

export default RoomTypeDescription;
