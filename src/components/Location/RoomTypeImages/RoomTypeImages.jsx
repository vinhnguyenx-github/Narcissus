import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeImages.css";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider";
import image_1 from "../../../assets/Location/roomSlider/img_1.jpg";
import image_2 from "../../../assets/Location/roomSlider/img_2.jpg";
import image_3 from "../../../assets/Location/roomSlider/img_3.jpg";
import image_4 from "../../../assets/Location/roomSlider/img_4.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import RoomTypeAllImages from "../RoomTypeAllImages/RoomTypeAllImages";

const RoomTypeImages = () => {
  const { rooms, defaultImage } = useRoomData();
  const { type } = useParams();
  const [showGallery, setShowGallery] = useState(false);
  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  return (
    <div className="room-type-images">
      <div className="image-left">
        <img src={image_1} className="image1" alt="Image 1" />
      </div>
      <div className="image-right">
        <img src={image_2} className="image2" alt="Image 2" />
        <img src={image_3} className="image3" alt="Image 3" />
        <img src={image_4} className="image4" alt="Image 4" />
      </div>

      <button className="image-show-all" onClick={toggleGallery}>
        <AiOutlineMenu className="show-all-icon" />
        Show All Photos
      </button>

      {showGallery && (
        <div
          className={
            showGallery ? "all-images-container " : "all-images-container"
          }
        >
          <FaAngleRight
            size={30}
            className="close-gallery-btn"
            onClick={closeGallery}
          />
          <RoomTypeAllImages />
        </div>
      )}
    </div>
  );
};

export default RoomTypeImages;
