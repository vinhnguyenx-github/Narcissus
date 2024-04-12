import React from "react";
import "./RoomTypeServices.css";
import roomServices from "../../../data/location/RoomServices.jsx";

const RoomTypeServices = () => {
  return (
    <div className="room-type-services">
      <h5>Services</h5>
      <div className="services-grid">
        {roomServices.slice(0, 8).map((service) => (
          <div key={service.id} className="room-type-service">
            <img
              alt=""
              src={service.iconURL}
              className="room-type-service-icon"
            />
            <p>{service.iconDescription}</p>
          </div>
        ))}
      </div>
      <button className="room-services-button">Show All Services</button>
    </div>
  );
};

export default RoomTypeServices;
