import React from "react";
import { Link } from "react-router-dom";
import "./LocationTitle.css";

const LocationTitle = ({ left, right, rightURL }) => {
  return (
    <div className="location-title">
      <h2>{left}</h2>
      <Link to={rightURL} className="location-title-link">
        {right}
      </Link>
    </div>
  );
};

export default LocationTitle;
