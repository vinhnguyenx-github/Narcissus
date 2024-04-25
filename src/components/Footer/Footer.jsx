import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>Địa chỉ</h4>
          <div className="address">
            <h5>
              33 ngõ Tục Mặc, phường Cửa Nam, quận Hoàn Kiếm, Hà Nội, Việt Nam
            </h5>
          </div>
          <div className="address">
            <h5>
              84 Lê Duẩn, phường Văn Miếu, quận Hoàn Kiếm, Hà Nội, Việt Nam
            </h5>
          </div>
        </div>
        <div className="footer-col">
          <h4>Liên hệ</h4>
          <p>
            Số điện thoại: <a href="tel:0337248276">0337248276</a>
          </p>
          <p>
            Email: <a href="mailto:">testemail@gmail.com</a>
          </p>
        </div>
        <div className="footer-col">
          <h4>Mạng xã hội</h4>
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
          @{new Date().getFullYear()} Narcissus. Bảo lưu mọi quyền.
        </div>
        <div className="footer-below">
          <div className="footer-link">
            <a href="">
              <div>
                <p>Điều khoản & Điều kiện</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Quyền riêng tư</p>
              </div>
            </a>
            <a href="">
              <div>
                <p>Bảo mật</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
