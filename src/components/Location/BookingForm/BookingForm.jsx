import React from "react";
import PickDate from "../PickDate/PickDate";
import "./BookingForm.css";

const BookingForm = () => {
  return (
    <div className="booking-form">
      <div class="booking-price">
        <div class="price-text">
          <h2>$Price</h2>
          <p>night</p>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
