import React from "react";
import "./RoomTypeExtraServices.css";
import tour from "../../../assets/destination.png";
import exchange from "../../../assets/exchange-rate.png";
import find from "../../../assets/loupe.png";

const RoomTypeExtraServices = () => {
  return (
    <div className="extra-services">
      <h5>Extra Services</h5>
      <div className="extra-services-items">
        <div className="extra-services-item">
          <img src={tour} alt="" />
          <div className="extra-services-item-col">
            <h6>Booking Tours: </h6>
            <p>
              We will be delighted to help you with a reservation or buying
              tour. Please contact our Receptionist for further assistance.
            </p>
          </div>
        </div>
        <div className="extra-services-item">
          <img src={exchange} alt="" />
          <div className="extra-services-item-col">
            <h6>Exchange Currency: </h6>
            <p>
              We're eager to assist you with any inquiries regarding foreign
              currency transactions. Please reach out to our Receptionist for
              further assistance.
            </p>
          </div>
        </div>
        <div className="extra-services-item">
          <img src={find} alt="" />
          <div className="extra-services-item-col">
            <h6>Further Assitance: </h6>
            <p>
              Our goal is to ensure your stay is comfortable and tailored to
              your needs. Whether you require extra pillows for added coziness,
              an iron for last-minute wardrobe touch-ups, or room cleaning
              services for a refreshed space, we're here to accommodate your
              requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeExtraServices;
