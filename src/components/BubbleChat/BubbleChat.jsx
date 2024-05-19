import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./BubbleChat.css";
import { FaWhatsapp } from "react-icons/fa";
import zalo from "../../assets/BubbleChat/zalo.png";

const BubbleChat = () => {
  return (
    <div className="bubble-chat">
      <div className="bubble-chat-icon react-icon">
        <a href="tel:0337248276">
          <FaPhoneAlt className="bubble-chat-each-icon" />
        </a>
      </div>
      <div className="bubble-chat-icon">
        <a href="https://zalo.me/0912666360" target="blank">
          <img
            src={zalo}
            alt="Zalo icon"
            loading="lazy"
            title="Zalo Icon"
            width={40}
            height={40}
          />
        </a>
      </div>
      <div className="bubble-chat-icon react-icon">
        <a href="https://wa.me/0943220192" target="blank">
          <FaWhatsapp size={25} className="bubble-chat-each-icon" />
        </a>
      </div>
      <div className="bubble-chat-icon react-icon">
        <a href="https://www.facebook.com/narcissus.apartment" target="blank">
          <FaFacebookF className="bubble-chat-each-icon" />
        </a>
      </div>
    </div>
  );
};

export default BubbleChat;
