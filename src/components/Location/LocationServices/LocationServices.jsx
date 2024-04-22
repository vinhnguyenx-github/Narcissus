import React from "react";
import "./LocationServices.css";
import icon1 from "../../../assets/Location/AssetsAndAmenitites/free_breakfast.png";
import airportServiceIcon from "../../../assets/Location/AssetsAndAmenitites/airport_service.png";
import freeWifiIcon from "../../../assets/Location/AssetsAndAmenitites/free-wifi.png";
import smokeAreaIcon from "../../../assets/Location/AssetsAndAmenitites/smoke_area.png";
import motorbikeRentalIcon from "../../../assets/Location/AssetsAndAmenitites/two.png";
import laundryServiceIcon from "../../../assets/Location/AssetsAndAmenitites/washer.png";
import twentyFourHoursIcon from "../../../assets/Location/AssetsAndAmenitites/24-hours-support.png";
import excelRoomServiceIcon from "../../../assets/Location/AssetsAndAmenitites/waitress.png";
import rooftopCoffeShopIcon from "../../../assets/Location/AssetsAndAmenitites/rooftop.png";
import freeParkingIcon from "../../../assets/Location/AssetsAndAmenitites/free-parking.png";

const LocationServices = () => {
  const servicesAndAmenities = [
    { iconURL: icon1, iconDescription: "Free Breakfast" },
    { iconURL: airportServiceIcon, iconDescription: "Airport shuttle service" },
    { iconURL: freeWifiIcon, iconDescription: "Free Wifi" },
    { iconURL: smokeAreaIcon, iconDescription: "Smoking area" },
    { iconURL: motorbikeRentalIcon, iconDescription: "Motorbike Rental" },
    { iconURL: laundryServiceIcon, iconDescription: "Laundry Service" },
    { iconURL: twentyFourHoursIcon, iconDescription: "24-hour Front Desk" },
    {
      iconURL: excelRoomServiceIcon,
      iconDescription: "Excellent Room Service",
    },
    { iconURL: rooftopCoffeShopIcon, iconDescription: "Rooftop Coffee Shop" },
    { iconURL: freeParkingIcon, iconDescription: "Free Parking" },
  ];

  return (
    <div className="location-services">
      {servicesAndAmenities.map((service, index) => (
        <div key={index} className="location-service">
          <img alt="" src={service.iconURL} className="location-service-icon" />
          <p>{service.iconDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationServices;
