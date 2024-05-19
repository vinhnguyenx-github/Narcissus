import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LocationRooms.css";
import BookBtn from "../BookBtn/BookBtn";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider.jsx";

function LocationRooms({ location, start, end }) {
  const { rooms, defaultImage } = useRoomData();
  const firstTwoRooms = rooms.slice(start, end);

  return (
    <div className="location-rooms">
      {firstTwoRooms.map((room) => (
        <div key={room.id} className="location-room">
          <div className="location-room-top">
            <img
              src={defaultImage[room.id]} // Sử dụng defaultImage[room.id]
              alt={room.name} // Thêm alt cho ảnh
            />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
          </div>
          <div className="location-room-bottom">
            <Link
              to={`/${location}/rooms/${room.name}`}
              className="card-readmore"
            >
              Xem thêm
            </Link>
            <p>
              Giá: {new Intl.NumberFormat("en").format(room.pricePerNight)} VND
            </p>
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
