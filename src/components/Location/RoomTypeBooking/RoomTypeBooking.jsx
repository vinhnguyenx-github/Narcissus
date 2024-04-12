import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIService from "../../../services/APIService";
import LocationTitle from "../LocationTitle/LocationTitle";
import mvp from "../../../assets/angel.png";
import rating from "../../../assets/rating.png";

import "./RoomTypeBooking.css";
import RoomTypeImages from "../RoomTypeImages/RoomTypeImages";
import BookingForm from "../BookingForm/BookingForm";
import RoomTypeDescription from "../RoomTypeDescription/RoomTypeDescription";
import RoomTypeServices from "../RoomTypeServices/RoomTypeServices";
import RoomTypeExtraServices from "../RoomTypeExtraServices/RoomTypeExtraServices";

const RoomTypeBooking = () => {
  const { type } = useParams();
  const [rooms, setRooms] = useState([]);
  const [roomId, setRoomId] = useState(null);

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

  useEffect(() => {
    const room = rooms.find((room) => room.name === type);
    if (room) {
      setRoomId(room.id);
    }
  }, [type, rooms]);

  return (
    <div className="room-type-booking">
      <LocationTitle left={type} />
      <RoomTypeImages />
      <div className="room-type-main">
        <div className="room-type-information">
          <h5 className="heading-description">
            Luxury comfort in elegant setting.
          </h5>
          <ol>
            <li>3 guests</li>
            <li className="room-type-information-li">1 bed</li>
            <li className="room-type-information-li">1 bath</li>
            <li className="room-type-information-li">1 kitchen</li>
          </ol>
          <div className="room-type-review">
            <div className="mvp">
              <img src={mvp} alt="" />
              <h5>Popular choice</h5>
            </div>
            <div>
              <h5 className="mvp-description">
                A highly-rated and beloved Narcissus room known for its
                exceptional ratings and reliability.
              </h5>
            </div>
            <div className="rating">
              <h5>4.91</h5>
              <img src={rating} alt="" />
            </div>
          </div>
          <RoomTypeDescription />
          <RoomTypeServices />
          <RoomTypeExtraServices />
        </div>
        <div className="room-type-right">
          <BookingForm />
        </div>
      </div>
      {/* {roomId && <p>Room ID: {roomId}</p>} */}
    </div>
  );
};

export default RoomTypeBooking;
