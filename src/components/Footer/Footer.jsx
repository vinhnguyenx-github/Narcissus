import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>{language === "English" ? "Address" : "Địa chỉ"}</h4>
          <div className="address">
            <h5>
              {language === "English"
                ? "Location 1: No. 84 Le Duan, Cua Nam ward, Hoan Kiem district, Ha Noi, Viet Nam"
                : "CS1: 84 Lê Duẩn, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội, Việt Nam"}
            </h5>
          </div>
          <div className="address">
            <h5>
              {language === "English"
                ? "Location 2: No. 33 Tuc Mac lane, Cua Nam ward, Hoan Kiem district, Ha Noi, Viet Nam"
                : "CS2: 33 ngõ Tức Mặc, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội, Việt Nam"}
            </h5>
          </div>
        </div>
        <div className="footer-col">
          <h4>{language === "English" ? "Contact" : "Liên hệ"}</h4>
          <p>
            {language === "English" ? "Telphone: " : "Số Điện Thoại: "}
            <a href="tel:0337248276">0337248276</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:Narcissus84leduan@gmail.com">
              Narcissus84leduan@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-col">
          <h4>{language === "English" ? "Social Media" : "Mạng xã hội"}</h4>
          <a
            href="https://www.facebook.com/narcissus.apartment"
            target="_blank"
          >
            <FaFacebookSquare size={25} style={{ fill: "white" }} />
          </a>
          <a
            href="https://www.facebook.com/narcissus.apartment"
            target="_blank"
          >
            <FaInstagram size={25} style={{ fill: "white" }} />
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <div className="footer-copyright">
          @{new Date().getFullYear()} Narcissus.{" "}
          {language === "English"
            ? "All rights reserved."
            : "Bảo lưu mọi quyền."}
        </div>
        <div className="footer-below">
          <div className="footer-link">
            <a href="">
              <div>
                <p>
                  {language === "English"
                    ? "Terms & Conditions"
                    : "Điều khoản & Điều kiện"}
                </p>
              </div>
            </a>
            <a href="">
              <div>
                <p>
                  {language === "English" ? "Privacy Policy" : "Quyền riêng tư"}
                </p>
              </div>
            </a>
            <a href="">
              <div>
                <p>{language === "English" ? "Security" : "Bảo mật"}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
