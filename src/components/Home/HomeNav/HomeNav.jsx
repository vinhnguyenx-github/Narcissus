import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import "./HomeNav.css";

const HomeNav = ({ onLanguageChange }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState("Vietnamese"); // Default language is English

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const handleLanguageChange = () => {
    const newLanguage = language === "English" ? "Vietnamese" : "English";
    setLanguage(newLanguage);
    onLanguageChange(newLanguage); // Notify parent component about language change
  };

  return (
    <nav className="container">
      <a href="">
        <img
          src={logo}
          alt="logo"
          className={mobileMenu ? "toggle-logo" : "logo"}
        />
      </a>
      <div className="left">
        <ul className={mobileMenu ? "" : "toggle-menu"}>
          <li>
            <Link
              to="home-hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              {language === "English" ? "Home" : "Trang chủ"}
            </Link>
          </li>
          <li>
            <Link
              to="home-about"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              {language === "English" ? "About" : "Giới thiệu"}
            </Link>
          </li>
          <li>
            <Link
              to="home-locations"
              smooth={true}
              spy={true}
              offset={-280}
              duration={500}
              onClick={closeMenu}
            >
              {language === "English" ? "Locations" : "Cơ Sở"}
            </Link>
          </li>
          <li>
            <Link
              to="home-contact"
              smooth={true}
              offset={-280}
              duration={500}
              onClick={closeMenu}
            >
              {language === "English" ? "Contact" : "Liên hệ"}
            </Link>
          </li>
          <button
            onClick={handleLanguageChange}
            className="switching-language-button"
          >
            {language === "English" ? "Vietnamese" : "English"}
          </button>
        </ul>
        <FaAlignJustify
          size={30}
          className={mobileMenu ? "toggle-btn" : "menu-icon"}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default HomeNav;
