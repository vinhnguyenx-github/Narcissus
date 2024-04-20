import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaAlignJustify } from "react-icons/fa";
import "./LocationNav.css";
const LocationNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const Locations_path = [
    {
      id: 1,
      path: "/33-tuc-mac",
      galleryPath: "/33-tuc-mac/gallery",
      bookPath: "/33-tuc-mac/rooms",
      contactAndLocationPath: "/33-tuc-mac/contact-us-directions",
    },
    {
      id: 2,
      path: "/84-le-duan",
      galleryPath: "/84-le-duan/gallery",
      bookPath: "/84-le-duan/rooms",
      contactAndLocationPath: "/84-le-duan/contact-us-directions",
    },
  ];
  const Location_path = useLocation();

  // Get the current location's ID based on the pathname
  const currentLocationPath = Locations_path.find((loc) =>
    Location_path.pathname.startsWith(loc.path)
  );
  return (
    <nav className="container">
      <Link to={currentLocationPath ? currentLocationPath.path : "/"}>
        <img
          src={logo}
          alt="logo"
          className={mobileMenu ? "toggle-logo" : "logo"}
        />
      </Link>
      <ul className={mobileMenu ? "" : "toggle-menu"}>
        <Link to={currentLocationPath ? currentLocationPath.path : "/"}>
          <li className="nav-link">Home</li>
        </Link>
        {currentLocationPath && (
          <Link to={currentLocationPath.bookPath}>
            <li className="nav-link">Rooms</li>
          </Link>
        )}
        {currentLocationPath && (
          <Link>
            <li className="nav-link">Gallery</li>
          </Link>
        )}
        {currentLocationPath && (
          <Link to={currentLocationPath.contactAndLocationPath}>
            <li className="nav-link">Contacts & Directions</li>
          </Link>
        )}
        {currentLocationPath && (
          <Link to={currentLocationPath.bookPath}>
            <button className="NavBtn">Book Now</button>
          </Link>
        )}
      </ul>
      <FaAlignJustify
        size={30}
        className={mobileMenu ? "toggle-btn" : "menu-icon"}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default LocationNav;
