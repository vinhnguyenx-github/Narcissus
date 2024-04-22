import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIService from "../../../services/APIService";
import LocationTitle from "../LocationTitle/LocationTitle";
import mvp from "../../../assets/angel.png";
import "./RoomTypeBooking.css";
import RoomTypeImages from "../RoomTypeImages/RoomTypeImages";
import BookingForm from "../BookingForm/BookingForm";
import RoomTypeDescription from "../RoomTypeDescription/RoomTypeDescription";
import RoomTypeServices from "../RoomTypeServices/RoomTypeServices";
import RoomTypeExtraServices from "../RoomTypeExtraServices/RoomTypeExtraServices";
import PickDate from "../PickDate/PickDate";

const RoomTypeBooking = () => {
  const { type } = useParams();
  const [roomId, setRoomId] = useState(null);
  const [roomPrice, setRoomPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getTypes();
        const { data } = response;
        if (Array.isArray(data)) {
          const filteredRooms = data.filter((room) => room.name === type);
          if (filteredRooms.length > 0) {
            const { id, pricePerNight } = filteredRooms[0];
            setRoomId(id);
            setRoomPrice(pricePerNight);
          } else {
            console.error("Room not found for type:", type);
          }
        } else {
          console.error("Data received from API is not an array:", data);
        }
      } catch (error) {
        console.error("Failed to fetch room data:", error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="room-type-booking">
      <LocationTitle left={type} />
      <RoomTypeImages id={roomId} />
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
          {(roomId === 1 || roomId === 3) && (
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
            </div>
          )}
          <RoomTypeDescription />
          <RoomTypeServices />
          <RoomTypeExtraServices />
        </div>
        <div className="room-type-right">
          <BookingForm price={roomPrice} />
          <PickDate />
        </div>
      </div>
    </div>
  );
};

export default RoomTypeBooking;
