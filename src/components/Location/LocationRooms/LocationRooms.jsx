import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LocationRooms.css";
import default_img from "../../../assets/default_img.png";
import APIService from "../../../services/APIService";
import BookBtn from "../BookBtn/BookBtn";

function LocationRooms({ location }) {
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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: default_img, // Make sure to import default_img from the correct path
    }));
  };

  return (
    <div className="location-rooms">
      {rooms.map((room) => (
        <div key={room.id} className="location-room">
          <div className="location-room-top">
            <img src={default_img} alt="" />
            <h4>{room.name}</h4>
            <p>{room.description}</p>
          </div>
          <div className="location-room-bottom">
            <a href="" className="location-room-readmore">
              Read More
            </a>
            <p>Prices: {room.pricePerNight}.999 VND</p>
            <Link to={`/${location}/rooms/${room.name}`}>
              <BookBtn />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationRooms;
