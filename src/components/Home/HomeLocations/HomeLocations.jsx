import React from "react";
import "./HomeLocations.css";
import { Link } from "react-router-dom";
import location1 from "../../../assets/Home/HomeLocationsImages/location1.jpg";
import location2 from "../../../assets/Home/HomeLocationsImages/location2.jpg";
import { LuExternalLink } from "react-icons/lu";

const HomeLocations = () => {
  return (
    <div className="home-locations">
      <div className="home-location">
        <Link to="33-tuc-mac" target="blank">
          <img
            src={location1}
            alt="Location 1 Image"
            loading="lazy"
            title="Ảnh cơ sở Tức Mặc"
            width="100%"
            height="auto"
          />
          <div className="home-location-caption">
            <LuExternalLink size={40} className="home-location-caption-icon" />
            <p>33 Tức Mặc</p>
          </div>
        </Link>
      </div>
      <div className="home-location">
        <Link to="84-le-duan" target="blank">
          <img
            src={location2}
            alt="Location 2 Image"
            loading="lazy"
            title="Ảnh cơ sở Lê Duẩn"
            width="100%"
            height="auto"
          />
          <div className="home-location-caption">
            <LuExternalLink size={40} className="home-location-caption-icon" />
            <p>84 Lê Duẩn</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeLocations;
