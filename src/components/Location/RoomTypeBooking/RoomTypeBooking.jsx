import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIService from "../../../services/APIService";
import LocationTitle from "../LocationTitle/LocationTitle";

import "./RoomTypeBooking.css";
import RoomTypeImages from "../RoomTypeImages/RoomTypeImages";

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
    <div className="room-type-booking container">
      <LocationTitle left={type} />
      <RoomTypeImages />
      {roomId && <p>Room ID: {roomId}</p>}
    </div>
  );
};

export default RoomTypeBooking;
