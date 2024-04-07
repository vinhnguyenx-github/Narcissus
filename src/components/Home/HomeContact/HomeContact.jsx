import React from "react";
import "./HomeContact.css";
import { LuMail } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";

const HomeContact = () => {
  return (
    <div className="home-contact">
      <div className="home-contact-col">
        <h3>Send us a message</h3>
        <p className="home-contact-description">
          Have questions or feedback? Reach out via phone, email, or the form
          below. We're here to assist you and ensure your stay with us is
          exceptional.
        </p>
        <ul>
          <li>
            <LuPhoneCall size={20} className="icon" />
            <p>
              Telephone: <a href="tel:">0123456789</a>
            </p>
          </li>
          <li>
            <LuMail size={20} className="icon" />
            <p>
              Email: <a href="mailto:">testemail@gmail.com</a>
            </p>
          </li>
          <li>
            <LuFacebook size={20} className="icon" />
            <p>
              Facebook:{" "}
              <a href="https://www.facebook.com/narcissus.apartment">
                Narcissus Apartment
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div className="home-contact-col">
        <form action="">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your phone number"
            required
          />
          <label>Message to us</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
