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
          </div>
          <div className="address">
            <h5>
              No. 84 Le Duan, Van Mieu ward, Hoan Kiem district, Ha Noi, Viet
              Nam
            </h5>
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact us</h4>
          <p>
            Tel: <a href="tel:0337248276">0337248276</a>
          </p>
          <p>
            Email: <a href="mailto:">testemail@gmail.com</a>
          </p>
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
