import { useState, useEffect } from "react";
import "./RoomTypeServices.css";
import RoomTypeAllServices from "../RoomTypeAllServices/RoomTypeAllServices.jsx";
import icon1 from "../../../assets/Location/RoomServices/free_breakfast.png";
import icon2 from "../../../assets/Location/RoomServices/spatula.png";
import freeWifiIcon from "../../../assets/Location/RoomServices/free-wifi.png";
import smokeAreaIcon from "../../../assets/Location/RoomServices/smoke_area.png";
import hairdryerIcon from "../../../assets/Location/RoomServices/hairdryer.png";
import smartTvIcon from "../../../assets/Location/RoomServices/smart-tv.png";
import slippersIcon from "../../../assets/Location/RoomServices/slippers.png";
import rooftopIcon from "../../../assets/Location/RoomServices/rooftop.png";
import freeParkingIcon from "../../../assets/Location/RoomServices/free-parking.png";
import shampooIcon from "../../../assets/Location/RoomServices/shampoo.png";
import toothCareIcon from "../../../assets/Location/RoomServices/tooth-care.png";
import towelsIcon from "../../../assets/Location/RoomServices/towels.png";
import bathtubIcon from "../../../assets/Location/RoomServices/bathtub.png";
import hangerIcon from "../../../assets/Location/RoomServices/hanger.png";
import foldingIcon from "../../../assets/Location/RoomServices/folding.png";
import wipeIcon from "../../../assets/Location/RoomServices/wipe.png";
import eventIcon from "../../../assets/Location/RoomServices/event.png";
import clothesIcon from "../../../assets/Location/RoomServices/clothes.png";
import airConditionerIcon from "../../../assets/Location/RoomServices/air-conditioner.png";
import waterBottleIcon from "../../../assets/Location/RoomServices/water-bottle.png";

const RoomTypeServices = () => {
  const roomServices = [
    {
      id: 1,
      iconURL: icon1,
      iconDescription: "Free Breakfast",
      type: "extra-services",
      subtitle: "Only applicable to customers booking via Booking.com apps.",
    },
    { id: 2, iconURL: icon2, iconDescription: "Kitchen" },
    {
      id: 3,
      iconURL: freeWifiIcon,
      iconDescription: "Free Wifi",
      type: "entertainment",
    },
    { id: 4, iconURL: smokeAreaIcon, iconDescription: "Smoking Area" },
    {
      id: 5,
      iconURL: hairdryerIcon,
      iconDescription: "Hair Dryer",
      type: "bathroom",
    },
    {
      id: 6,
      iconURL: smartTvIcon,
      iconDescription: "Smart TV",
      type: "entertainment",
    },
    {
      id: 7,
      iconURL: slippersIcon,
      iconDescription: "Slippers",
      type: "bedroom",
    },
    {
      id: 8,
      iconURL: rooftopIcon,
      iconDescription: "Rooftop Coffee Shop",
      type: "extra-services",
    },
    {
      id: 9,
      iconURL: freeParkingIcon,
      iconDescription: "Free Parking",
      type: "extra-services",
    },
    {
      id: 10,
      iconURL: shampooIcon,
      iconDescription: "Shampoo and Conditioner",
      type: "bathroom",
    },
    {
      id: 11,
      iconURL: toothCareIcon,
      iconDescription: "Toothbrush and Toothpaste",
      type: "bathroom",
    },
    {
      id: 12,
      iconURL: towelsIcon,
      iconDescription: "Towels",
      type: "bathroom",
    },
    {
      id: 13,
      iconURL: bathtubIcon,
      iconDescription: "Hot Water",
      type: "bathroom",
    },
    {
      id: 14,
      iconURL: hangerIcon,
      iconDescription: "Hanger for Clothing",
      type: "bedroom",
    },
    {
      id: 15,
      iconURL: foldingIcon,
      iconDescription: "Extra Amenities",
      type: "bedroom",
      subtitle:
        "For extra pillows, blankets or additional amenities, please contact the receptionist for further assistance.",
    },
    {
      id: 16,
      iconURL: wipeIcon,
      iconDescription: "Room Cleaning",
      type: "extra-services",
      subtitle:
        "Please tell us if you need room service or privacy. Hang 'Do Not Disturb' for privacy; ask Reception for amenities.",
    },
    {
      id: 17,
      iconURL: eventIcon,
      iconDescription: "Long Stay Allowed",
      type: "extra-services",
      subtitle: "Allow stay for 1 month or more",
    },
    {
      id: 18,
      iconURL: clothesIcon,
      iconDescription: "Clothing Storage",
      type: "bedroom",
    },
    {
      id: 19,
      iconURL: airConditionerIcon,
      iconDescription: "Air Conditioner",
      type: "bedroom",
    },
    {
      id: 20,
      iconURL: waterBottleIcon,
      iconDescription: "Free Water",
      type: "extra-services",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [showItems, setShowItems] = useState([]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
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

  const filterServicesByType = (type) => {
    return roomServices.filter((service) => service.type === type);
  };

  const bathrooms = filterServicesByType("bathroom");
  const extra_services = filterServicesByType("extra-services");
  const entertainments = filterServicesByType("entertainment");
  const bedrooms = filterServicesByType("bedroom");
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
        <h5>What you will experience</h5>
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
        <div className="services-overlay">
          <h6>Entertainments</h6>
          <ul>
            {entertainments.map((service) => (
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
          <h6>Extra Services</h6>
          <ul>
            {extra_services.map((service) => (
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
