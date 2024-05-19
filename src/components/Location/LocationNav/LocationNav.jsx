import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaAlignJustify } from "react-icons/fa";
import "./LocationNav.css";

const LocationNav = ({ language, onLanguageChange }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
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

  // Function to toggle the language
  const toggleLanguage = () => {
    onLanguageChange(language === "English" ? "Vietnamese" : "English");
  };

  return (
    <nav className="container">
      <Link to={currentLocationPath ? currentLocationPath.path : "/"}>
        <img
          src={logo}
          alt="logo"
          className={mobileMenu ? "toggle-logo" : "logo"}
          width={180}
        />
      </Link>
      <ul className={mobileMenu ? "" : "toggle-menu"}>
        <Link to={currentLocationPath ? currentLocationPath.path : "/"}>
          <li className="nav-link">
            {language === "English" ? "Home" : "Trang chủ"}
          </li>
        </Link>
        {currentLocationPath && (
          <Link to={currentLocationPath.bookPath}>
            <li className="nav-link">
              {language === "English" ? "Rooms" : "Các loại phòng"}
            </li>
          </Link>
        )}
        {currentLocationPath && (
          <Link to={currentLocationPath.galleryPath}>
            <li className="nav-link">
              {language === "English" ? "Gallery" : "Thư viện ảnh"}
            </li>
          </Link>
        )}
        {currentLocationPath && (
          <Link to={currentLocationPath.contactAndLocationPath}>
            <li className="nav-link">
              {language === "English" ? "Contact" : "Liên hệ"}
            </li>
          </Link>
        )}
        {currentLocationPath && (
          <Link to={currentLocationPath.bookPath}>
            <button className="NavBtn">
              {language === "English" ? "Book Now" : "Đặt phòng"}
            </button>
          </Link>
        )}
        <button className="switching__btn" onClick={toggleLanguage}>
          {language === "English" ? "Vietnamese" : "English"}
        </button>
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
