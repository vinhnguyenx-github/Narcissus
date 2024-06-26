import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeImages.css";
import APIService from "../../../services/APIService";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider.jsx";
import RoomTypeAllImages from "../RoomTypeAllImages/RoomTypeAllImages";

const RoomTypeImages = ({ id }) => {
  const { type } = useParams();
  const { defaultImage } = useRoomData();
  const [showGallery, setShowGallery] = useState(false);
  const [roomImages, setRoomImages] = useState([]);
  const imagesLeft = roomImages.slice(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await APIService.getImageByRoom(id);
        if (response && response.data) {
          const imageUrls = response.data.map(image => image.image_url);
          setRoomImages(imageUrls);
        }
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };
  
    fetchImages();
  }, [id]);
  
  

  return (
    <div className="room-type-images">
      <div className="image-left">
        <img
          src={defaultImage[id]} // Sử dụng defaultImage[room.id]
          alt= "image1"
          className="image1"
        />
      </div>
      <div className="image-right">
      {imagesLeft.map((image, index) => {
          if (index === 0) return null;
          return (
            <img
              key={index}
              src={image}
              alt={`Room Image ${index}`}
              className={`image${index}`}
            />
          );
        })}
      </div>

      <button className="image-show-all">
        <AiOutlineMenu className="show-all-icon" />
        Show All Photos
      </button>

      {showGallery && (
        <div
          className={
            showGallery ? "all-images-container " : "all-images-container"
          }
        >
          <FaAngleRight size={30} className="close-gallery-btn" />
          <RoomTypeAllImages />
        </div>
      )}
    </div>
  );
};

export default RoomTypeImages;
