import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import "./HomeNav.css";

const HomeNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
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
              Trang chủ
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
              Giới thiệu
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
              Cơ Sở
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
              Liên hệ
            </Link>
          </li>
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
