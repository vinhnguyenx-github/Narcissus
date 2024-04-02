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
      name: "Location 1",
      path: "/33-tuc-mac",
      aboutPath: "/33-tuc-mac/about",
      bookPath: "/33-tuc-mac/booking",
      contactAndLocationPath: "/33-tuc-mac/contact-us-directions",
    },
    {
      id: 2,
      name: "Location 2",
      path: "/84-le-duan",
      aboutPath: "/84-le-duan/about",
      bookPath: "/84-le-duan/booking",
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
        <Link to="">
          <li className="nav-link">Rooms</li>
        </Link>
        {currentLocationPath && (
          <Link to={currentLocationPath.aboutPath}>
            <li className="nav-link">About Us</li>
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
