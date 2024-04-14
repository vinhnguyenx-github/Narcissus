import React, { useState } from "react";
import "./BookingForm.css";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { addDays } from "date-fns";

const BookingForm = ({ price, onCheckInChange, onCheckOutChange }) => {
  const currentDate = new Date();
  const minCheckOutDate = addDays(currentDate, 1);

  const [checkInDate, setCheckInDate] = useState(
    format(currentDate, "yyyy-MM-dd")
  );
  const [checkOutDate, setCheckOutDate] = useState(
    format(minCheckOutDate, "yyyy-MM-dd")
  );

  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value || null;
    setCheckInDate(newCheckInDate);
    const parsedCheckInDate = new Date(newCheckInDate);
    const newMinCheckOutDate = addDays(parsedCheckInDate, 3);
    setCheckOutDate(format(newMinCheckOutDate, "yyyy-MM-dd"));
    onCheckInChange(newCheckInDate); // Call the callback with new check-in date
  };

  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value || null;
    if (new Date(newCheckOutDate) < new Date(checkInDate)) {
      return;
    }

    setCheckOutDate(newCheckOutDate);
    onCheckOutChange(newCheckOutDate); // Call the callback with new check-out date
  };
  const lengthOfStay = differenceInDays(
    new Date(checkOutDate),
    new Date(checkInDate)
  );

  const totalPrice = lengthOfStay * price;
  const formattedPrice = new Intl.NumberFormat("en").format(price);
  const formattedTotalPrice = new Intl.NumberFormat("en").format(totalPrice);

  return (
    <div className="booking-form">
      <div className="booking-form-header">
        {/* Display the price as a string */}
        <h5>{formattedPrice} VND</h5>
        <p>per night</p>
      </div>
      <form action="">
        <div className="checkin-checkout">
          {/* Set min attribute for check-in input */}
          <input
            type="date"
            className="checkin"
            value={checkInDate}
            min={format(currentDate, "yyyy-MM-dd")}
            onChange={handleCheckInChange}
          />
          {/* Set min attribute for check-out input */}
          <input
            type="date"
            className="checkout"
            min={format(new Date(checkOutDate), "yyyy-MM-dd")} // Dynamic min attribute
            value={checkOutDate}
            onChange={handleCheckOutChange}
          />
        </div>
        <div className="booking-user-info">
          <input
            type="text"
            name="name"
            placeholder="Full Name: "
            className="user-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email: "
            className="user-input"
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Contact Number: "
            className="user-input"
            required
          />
        </div>
        <select className="select-people" defaultValue="1 Guest">
          <option value="1 Guest">1 Guest</option>
          <option value="2 Guests">2 Guests</option>
          <option value="3 Guests">3 Guests</option>
        </select>
        <button className="reserve-button" type="submit">
          Reservation
        </button>
      </form>
      <div className="total-price">
        <p>
          {formattedPrice} VND x {lengthOfStay} nights
        </p>
        <p>{formattedTotalPrice} VND</p>
      </div>
      <div className="service-price">
        <p>Service Fees</p>
        <p>0 VND</p>
      </div>
      <div className="final-price">
        <h6>Total</h6>
        <h6>{formattedTotalPrice} VND</h6>
      </div>
    </div>
  );
};

export default BookingForm;
