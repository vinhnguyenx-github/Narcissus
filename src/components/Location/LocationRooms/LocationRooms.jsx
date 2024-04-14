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
            <img src={defaultImage[room.id]} alt="" />
            <h4>{room.name}</h4>
            <p>{room.description}</p>
          </div>
          <div className="location-room-bottom">
            <Link
              to={`/${location}/rooms/${room.name}`}
              className="location-room-readmore"
            >
              Read More
            </Link>
            <p>
              Prices: {new Intl.NumberFormat("en").format(room.pricePerNight)}{" "}
              VND
            </p>
            <Link
              to={{
                pathname: `/${location}/rooms/${room.name}`,
                state: {
                  roomID: room.type_id,
                  roomName: room.name,
                  roomDescription: room.description,
                  roomPrice: room.pricePerNight,
                },
              }}
            >
              <BookBtn />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationRooms;
