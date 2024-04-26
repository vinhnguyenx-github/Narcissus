import React, { useState, useEffect } from "react";
import "./BookingForm.css";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { addDays } from "date-fns";
import APIService from "../../../services/APIService";

const BookingForm = ({ roomId, price }) => {
  // console.log(roomId + " " + typeof roomId);
  const initialBookingState = {
    room: "",
    checkInDate: "",
    checkOutDate: "",
    fullName: "",
    phone: "",
    email: "",
    address: "",
    totalPrice: "",
  };
  const [booking, setBooking] = useState(initialBookingState);
  const [submitted, setSubmitted] = useState(false);
  const [bookingResult, setBookingResult] = useState(null);
  const [room, setRoom] = useState("");

  useEffect(() => {
    setRoom(roomId);
  }, [roomId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, room: room, [name]: value });
  };

  const saveBooking = (event) => {
    event.preventDefault();
    const updatedBooking = {
      ...booking,
      checkInDate,
      checkOutDate,
      totalPrice,
    };
    APIService.booking(updatedBooking)
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
        <p>một đêm</p>
      </div>
      <input
        type="hidden"
        name="room"
        className="user-input"
        value={booking.room}
      />
      <form>
        <div className="checkin-checkout">
          <input
            type="date"
            className="checkin"
            name="checkInDate"
            value={checkInDate}
            min={format(currentDate, "yyyy-MM-dd")}
            onChange={(e) => {
              const selectedDate = e.target.value;
              setCheckInDate(selectedDate);
              if (new Date(selectedDate) >= new Date(checkOutDate)) {
                setCheckOutDate(
                  format(addDays(new Date(selectedDate), 1), "yyyy-MM-dd")
                );
              }
            }}
          />

          <input
            type="date"
            className="checkout"
            name="checkOutDate"
            min={format(new Date(checkInDate), "yyyy-MM-dd")}
            value={checkOutDate}
            onChange={(e) => {
              const selectedDate = e.target.value;
              if (new Date(selectedDate) >= new Date(checkInDate)) {
                setCheckOutDate(selectedDate);
              }
            }}
          />
        </div>
        <div className="booking-user-info">
          <input
            type="text"
            name="fullName"
            placeholder="Họ và tên:"
            className="user-input"
            value={booking.fullName}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại: "
            className="user-input"
            value={booking.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email: "
            className="user-input"
            value={booking.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            className="user-input"
            value={booking.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <select className="select-people" defaultValue="1 Guest">
          <option value="1 Guest">1 Người</option>
          <option value="2 Guests">2 Người</option>
          <option value="3 Guests">3 Người</option>
          <option value="4 Guests">4 Người</option>
        </select>
        <button className="reserve-button" type="submit" onClick={saveBooking}>
          Đặt Phòng
        </button>
      </form>
      <div className="total-price" style={{ textAlign: "right" }}>
        <p>
          {formattedPrice} VND x {lengthOfStay} đêm
        </p>
        <p>{formattedTotalPrice} VND</p>
      </div>
      <div className="service-price">
        <p>Phí dịch vụ</p>
        <p>0 VND</p>
      </div>
      <div className="final-price">
        <h6>Tổng</h6>
        <h6>{formattedTotalPrice} VND</h6>
      </div>

      {submitted && bookingResult && (
        <div className="booking-result">
          <h6>Đặt phòng thành công!</h6>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
