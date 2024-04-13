import React from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeImages.css";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";
import image_1 from "../../../assets/Location/roomSlider/img_1.jpg";
import image_2 from "../../../assets/Location/roomSlider/img_2.jpg";
import image_3 from "../../../assets/Location/roomSlider/img_3.jpg";
import image_4 from "../../../assets/Location/roomSlider/img_4.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const RoomTypeImages = () => {
  const { rooms, defaultImage } = useRoomData();
  const { type } = useParams();
  return (
    <div className="room-type-images">
      <div className="image-left">
        <img src={image_1} className="image1" />
      </div>
      <div className="image-right">
        <img src={image_2} className="image2" />
        <img src={image_3} className="image3" />
        <img src={image_4} className="image4" />
      </div>

      <button className="image-show-all">
        <AiOutlineMenu className="show-all-icon" />
        Show All Photos
      </button>
    </div>
  );
};

export default RoomTypeImages;
