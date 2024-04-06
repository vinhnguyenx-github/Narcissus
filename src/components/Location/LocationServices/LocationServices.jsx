import React from "react";
import "./LocationServices.css";
import servicesData from "../../../data/location/ServicesAndAmenities.jsx";

const LocationServices = () => {
  return (
    <div className="location-services">
      {servicesData.map((service) => (
        <div key={service.id} className="location-service">
          <img alt="" src={service.iconURL} className="location-service-icon" />
          <p>{service.iconDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationServices;
