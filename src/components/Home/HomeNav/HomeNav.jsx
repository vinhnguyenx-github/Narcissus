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

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
