import React from "react";
import { Link } from "react-router-dom";
import "./LocationPageTitle.css";

const LocationPageTitle = ({ url, current }) => {
  return (
    <div className="location-page-title">
      <Link to={url} className="location-page-link">
        Trang Chủ
      </Link>
      <p> &gt; {current}</p>
    </div>
  );
};

export default LocationPageTitle;
