import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./LocationTitle.css";

const LocationTitle = ({ left, right }) => {
  const locationTitleLinks = [
    {
      id: 1,
      path: "/33-tuc-mac",
      linkPath: "",
    },
    {
      id: 2,
      path: "/84-le-duan",
      linkPath: "",
    },
  ];
  const locationTitleLink = useLocation();

  const currentLocationTitleLink = locationTitleLinks.find((loc) =>
    locationTitleLink.pathname.startsWith(loc.path)
  );
  return (
    <div className="location-title">
      <h4>{left}</h4>
      <Link
        to={currentLocationTitleLink.linkPath}
        className="location-title-link"
      >
        {right}
      </Link>
    </div>
  );
};

export default LocationTitle;
