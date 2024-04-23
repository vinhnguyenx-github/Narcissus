import React, { useState } from "react";
import "./BookingForm.css";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { addDays } from "date-fns";
import APIService from "../../../services/APIService";

const BookingForm = ({ roomId, price }) => {
  // console.log(roomId + " " + typeof roomId);
  const initialBookingState = {
    room: roomId,
    checkInDate: "",
    checkOutDate: "",
    fullName: "",
    phone: "",
    email: "",
    address: "",
  };
  const [booking, setBooking] = useState(initialBookingState);
  const [submitted, setSubmitted] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const saveBooking = (event) => {
    event.preventDefault();
    if (!booking.checkInDate || !booking.checkOutDate) {
      // If check-in or check-out date is not selected, set them to default values
      setBooking({
        ...booking,
        checkInDate: format(currentDate, "yyyy-MM-dd"),
        checkOutDate: format(minCheckOutDate, "yyyy-MM-dd"),
      });
    }
    console.log("Booking state:", booking);
    APIService.booking(booking)
      .then((response) => {
        setSubmitted(true);
        setBookingResult(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
    if (!newCheckInDate || new Date(newCheckInDate) < minCheckOutDate) {
      return; // Don't update state or perform further actions
    }
    setCheckInDate(newCheckInDate);
    const parsedCheckInDate = new Date(newCheckInDate);
    const newMinCheckOutDate = addDays(parsedCheckInDate, 3);
    setCheckOutDate(format(newMinCheckOutDate, "yyyy-MM-dd"));
  };

  const handleCheckOutChange = (e) => {
    const newCheckOutDate = e.target.value || null;
    if (!newCheckOutDate || new Date(newCheckOutDate) < new Date(checkInDate)) {
      return; // Don't update state or perform further actions
    }
    setCheckOutDate(newCheckOutDate);
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
        <h5>{formattedPrice} VND</h5>
        <p>per night</p>
      </div>
      <form>
        <div className="checkin-checkout">
          <input
            type="date"
            className="checkin"
            name="checkInDate"
            value={checkInDate}
            min={format(currentDate, "yyyy-MM-dd")}
            onChange={handleCheckInChange}
          />
          <input
            type="date"
            className="checkout"
            name="checkOutDate"
            min={format(new Date(checkOutDate), "yyyy-MM-dd")}
            value={checkOutDate}
            onChange={handleCheckOutChange}
          />
        </div>
        <div className="booking-user-info">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="user-input"
            value={booking.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            className="user-input"
            value={booking.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="user-input"
            value={booking.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="user-input"
            value={booking.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <select className="select-people" defaultValue="1 Guest">
          <option value="1 Guest">1 Guest</option>
          <option value="2 Guests">2 Guests</option>
          <option value="3 Guests">3 Guests</option>
          <option value="4 Guests">4 Guests</option>
        </select>
        <button className="reserve-button" type="submit" onClick={saveBooking}>
          Reservation
        </button>
      </form>
      <div className="total-price" style={{ textAlign: "right" }}>
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

      {submitted && bookingResult && (
        <div className="booking-result">
          <h2>Booking Successful!</h2>
          <p>Booking ID: {bookingResult.id}</p>
          {/* Hiển thị các thông tin khác từ kết quả */}
        </div>
      )}
    </div>
  );
};

export default BookingForm;
