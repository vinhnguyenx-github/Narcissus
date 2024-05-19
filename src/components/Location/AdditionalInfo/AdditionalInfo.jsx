import React from "react";
import "./AdditionalInfo.css";
import icon1 from "../../../assets/Location/AdditionalInfoIcon/check-in.png";
import icon2 from "../../../assets/Location/AdditionalInfoIcon/checkout.png";
import icon3 from "../../../assets/Location/AdditionalInfoIcon/injection.png";

const AdditionalInfo = () => {
  return (
    <div className="additional-info">
      <h5>Additional Informations</h5>
      <div className="additional-info-row">
        <img src={icon1} />
        <p>Check-in after 2:00 PM</p>
      </div>
      <div className="additional-info-row">
        <img src={icon2} />
        <p>Check-out before 12:00 AM </p>
      </div>
      <div className="additional-info-row">
        <img src={icon3} alt="" />
        <p>
          smoking, drug use, or any illegal substances are strictly prohibited
          on the premises
        </p>
      </div>
      <div style={{ marginBottom: "20px" }}></div>
    </div>
  );
};

export default AdditionalInfo;
