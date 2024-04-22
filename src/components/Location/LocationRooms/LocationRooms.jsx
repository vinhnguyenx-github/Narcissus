import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LocationRooms.css";
import BookBtn from "../BookBtn/BookBtn";
import { useRoomData } from "../../../provider/roomtype/roomTypeProvider.jsx";

function LocationRooms({ location, start, end }) {
  const { rooms, defaultImage } = useRoomData();
  const firstTwoRooms = rooms.slice(start, end);
  const disabledRoomIds = [5, 6];

  return (
    <div className="location-rooms">
      {firstTwoRooms.map((room) => (
        <div
          key={room.id}
          className={`location-room ${
            disabledRoomIds.includes(room.id) ? "disabled-card" : ""
          }`}
        >
          <div className="location-room-top">
            <img
              src={`http://localhost:8080/api/roomType/getImage/${room.id}`}
            />
            <h4>{room.name}</h4>
            <p>{room.description}</p>
          </div>
          <div className="location-room-bottom">
            {!disabledRoomIds.includes(room.id) && (
              <Link
                to={`/${location}/rooms/${room.name}`}
                className="card-readmore"
              >
                Read More
              </Link>
            )}
            <p>
              Prices: {new Intl.NumberFormat("en").format(room.pricePerNight)}{" "}
              VND
            </p>
            {disabledRoomIds.includes(room.id) ? (
              <button className="disable-button">Unavailable</button>
            ) : (
              <Link to={`/${location}/rooms/${room.name}`}>
                <BookBtn />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationRooms;
