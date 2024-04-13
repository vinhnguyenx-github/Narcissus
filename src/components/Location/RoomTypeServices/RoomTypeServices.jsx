import { useState } from "react";
import "./RoomTypeServices.css";
import roomServices from "../../../data/location/RoomServices.jsx";
import RoomTypeAllServices from "../RoomTypeAllServices/RoomTypeAllServices.jsx";

const RoomTypeServices = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="room-type-services">
      <h5>What you will experience</h5>
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
      <button className="room-services-button" onClick={toggleOverlay}>
        Show All Services
      </button>

      <RoomTypeAllServices isOpen={isOpen} onClose={toggleOverlay}>
        <h1>Content in Overlay</h1>
      </RoomTypeAllServices>
    </div>
  );
};

export default RoomTypeServices;
