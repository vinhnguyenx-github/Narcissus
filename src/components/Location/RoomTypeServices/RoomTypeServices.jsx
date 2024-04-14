import { useState, useEffect } from "react";
import "./RoomTypeServices.css";
import roomServices from "../../../data/location/RoomServices.jsx";
import RoomTypeAllServices from "../RoomTypeAllServices/RoomTypeAllServices.jsx";

const RoomTypeServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showItems, setShowItems] = useState([]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const updateItemsToShow = () => {
      const screenWidth = window.innerWidth;
      const itemsToShow = screenWidth < 525 ? 4 : 8;
      setShowItems(roomServices.slice(0, itemsToShow));
    };

    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const bathrooms = roomServices.filter(
    (bathroom) => bathroom.type === "bathroom"
  );
  const bedrooms = roomServices.filter((bedroom) => bedroom.type === "bedroom");

  return (
    <div className="room-type-services">
      <h5>What you will experience</h5>
      <div className="services-grid">
        {showItems.slice(0, 8).map((service) => (
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
        Show All {roomServices.length} Services
      </button>

      <RoomTypeAllServices isOpen={isOpen} onClose={toggleOverlay}>
        <h5 st>What you will experience</h5>
        <div className="services-overlay">
          <h6>Bathroom</h6>
          <ul>
            {bathrooms.map((service) => (
              <li key={service.id}>
                <img
                  alt=""
                  src={service.iconURL}
                  className="room-type-service-icon"
                />
                <div className="service-description">
                  <p>{service.iconDescription}</p>
                  <div className="service-subtitle">{service.subtitle}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="services-overlay">
          <h6>Bedroom</h6>
          <ul>
            {bedrooms.map((service) => (
              <li key={service.id}>
                <img
                  alt=""
                  src={service.iconURL}
                  className="room-type-service-icon"
                />
                <div className="service-description">
                  <p>{service.iconDescription}</p>
                  <div className="service-subtitle">{service.subtitle}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </RoomTypeAllServices>
    </div>
  );
};

export default RoomTypeServices;
