import React from "react";
import { useLocation } from "react-router-dom";
import "./LocationHero.css";
import Location1ContactImage from "../../../assets/Location/LocationHeroImage/banner3.jpg";
import Location1HomeImage from "../../../assets/Location/LocationHeroImage/homehero1.jpg";
import Location1RoomImage from "../../../assets/Location/LocationHeroImage/location1room.jpg";
import location2Image from "../../../assets/Location/LocationHeroImage/banner3.jpg";

const LocationHero = () => {
  const imagesPath = [
    {
      id: 1,
      path: "/33-tuc-mac/contact-us-directions",
      imageURL: Location1ContactImage,
    },
    {
      id: 2,
      path: "/33-tuc-mac",
      imageURL: Location1RoomImage,
    },
    {
      id: 6,
      path: "/33-tuc-mac/rooms",
      imageURL: Location1RoomImage,
    },
    {
      id: 4,
      path: "/84-le-duan",
      imageURL: Location1HomeImage,
    },
    {
      id: 3,
      path: "/84-le-duan/contact-us-directions",
      imageURL: location2Image,
    },
  ];
  const imagePath = useLocation();

  // Get the current location's ID based on the pathname
  const currentImagePath = imagesPath.find((loc) =>
    imagePath.pathname.startsWith(loc.path)
  );
  return (
    <div className="location-hero">
      <img
        src={currentImagePath.imageURL}
        alt=""
        className="location-hero-img"
      />
    </div>
  );
};

export default LocationHero;
