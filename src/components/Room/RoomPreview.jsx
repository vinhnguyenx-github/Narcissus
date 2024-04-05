import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoomPreview.css";
import default_img from "../../assets/default_img.png";
import APIService from "../../services/APIService";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleLeftSolid } from "react-icons/lia";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", cursor: "pointer" }} // Customize styles as needed
      onClick={onClick}
    >
      <LiaAngleRightSolid size={24} className="next-arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", cursor: "pointer" }} // Customize styles as needed
      onClick={onClick}
    >
      <LiaAngleLeftSolid size={24} className="next-arrow" />
    </div>
  );
}

function RoomPreview() {
  const [rooms, setRooms] = useState([]);
  const [defaultImage, setDefaultImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getTypes();
        const { data } = response;
        if (Array.isArray(data)) {
          setRooms(data);
        } else {
          console.error("Data received from API is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to fetch room data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: default_img, // Make sure to import default_img from the correct path
    }));
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {rooms.map((room) => (
          <div key={room.id} className="card">
            <div className="card-top">
              <h4>{room.name}</h4>
              <p>{room.description}</p>
            </div>
            <div className="card-bottom">
              <p>Prices: {room.pricePerNight}</p>
              <p>Capacity: {room.capacity}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RoomPreview;
