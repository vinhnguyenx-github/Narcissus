import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeImages.css";
import APIService from "../../../services/APIService";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import RoomTypeAllImages from "../RoomTypeAllImages/RoomTypeAllImages";

const RoomTypeImages = ({ id }) => {
  const { type } = useParams();
  const [showGallery, setShowGallery] = useState(false);
  const [roomImages, setRoomImages] = useState([]);
  const [images, setImages] = useState({}); // Sử dụng useState với kiểu dữ liệu phù hợp
  const imagesLeft = roomImages.slice(1, 4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getImageByRoom(id);
        const { data } = response;
        if (Array.isArray(data)) {
          setRoomImages(data);
        } else {
          console.error("Data received from API is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRequests = roomImages.map(async (image) => {
          try {
            if (image) {
              const response = await APIService.getImage(
                image.image_url,
                image.image_format
              );
              const imageBlob = new Blob([response.data]);
              const imageUrl = URL.createObjectURL(imageBlob);
              return { id: image.id, imageUrl: imageUrl };
            }
          } catch (error) {
            console.error("Failed to fetch image: ", error);
            return null;
          }
        });

        const images = await Promise.all(imageRequests);
        const filteredImages = images.filter((image) => image !== null);
        const imageMap = filteredImages.reduce((acc, curr) => {
          acc[curr.id] = curr.imageUrl;
          return acc;
        }, {});

        setImages(imageMap); // Sửa tên state thành defaultImages
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, [roomImages]);

  return (
    <div className="room-type-images">
      <div className="image-left">
        <img
          src={`http://localhost:8080/api/roomType/getImage/${id}`}
          className="image1"
          alt="Image 1"
        />
      </div>
      <div className="image-right">
        {imagesLeft.map((image) => (
          <img
            src={images[image.id]}
            alt="Images"
            className={`image${image.id}`}
          />
        ))}
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
