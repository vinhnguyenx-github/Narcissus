import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Address</h4>
          <div className="address">
            <h5>
              No. 33 Tuc Mac lane, Cua Nam ward, Hoan Kiem district, Ha Noi,
              Viet Nam
            </h5>
            <p>Tel: </p>
          </div>
          <div className="address">
            <h5>
              No. 33 Tuc Mac lane, Cua Nam ward, Hoan Kiem district, Ha Noi,
              Viet Nam
            </h5>
            <p>Tel: </p>
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact us</h4>
          <p>Tel: </p>
          <p>Email: </p>
        </div>
        <div className="footer-col">
          <h4>Social Media</h4>
          <a
            href="https://www.facebook.com/narcissus.apartment"
            target="_blank"
          >
            <FaFacebookSquare size={30} style={{ fill: "white" }} />
          </a>
          <a
            href="https://www.facebook.com/narcissus.apartment"
            target="_blank"
          >
            <FaInstagram size={30} style={{ fill: "white" }} />
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <div className="footer-copyright">
          @{new Date().getFullYear()} Narcissus. All right reserved.
        </div>
        <div className="footer-below">
          <div className="footer-link">
            <a href="">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Security</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
