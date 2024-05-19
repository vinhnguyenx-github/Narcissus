import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIService from "../../../services/APIService";
import LocationTitle from "../LocationTitle/LocationTitle";
import mvp from "../../../assets/angel.png";
import "./RoomTypeBooking.css";
import RoomTypeImages from "../RoomTypeImages/RoomTypeImages";
import BookingForm from "../BookingForm/BookingForm";
import RoomTypeDescription from "../RoomTypeDescription/RoomTypeDescription";
import RoomTypeServices from "../RoomTypeServices/RoomTypeServices";
import RoomTypeExtraServices from "../RoomTypeExtraServices/RoomTypeExtraServices";
import PickDate from "../PickDate/PickDate";

const RoomTypeBooking = () => {
  const { type } = useParams();
  const [roomId, setRoomId] = useState(null);
  const [roomPrice, setRoomPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.getTypes();
        const { data } = response;
        if (Array.isArray(data)) {
          const filteredRooms = data.filter((room) => room.name === type);
          if (filteredRooms.length > 0) {
            const { id, pricePerNight } = filteredRooms[0];
            setRoomId(id);
            setRoomPrice(pricePerNight);
          } else {
            console.error("Không tìm thấy phòng cho loại:", type);
          }
        } else {
          console.error("Dữ liệu nhận từ API không phải là mảng:", data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu phòng:", error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="room-type-booking">
      <LocationTitle left={type} />
      <RoomTypeImages id={roomId} />
      <div className="room-type-main">
        <div className="room-type-information">
          <h5 className="heading-description">
            Sự thoải mái sang trọng trong không gian tinh tế.
          </h5>
          <ol>
            <li>2 khách</li>
            <li className="room-type-information-li">1 giường</li>
            <li className="room-type-information-li">1 phòng tắm</li>
            <li className="room-type-information-li">1 nhà bếp</li>
          </ol>
          {(roomId === 1 || roomId === 3) && (
            <div className="room-type-review">
              <div className="mvp">
                <img src={mvp} alt="" />
                <h5>Lựa chọn phổ biến</h5>
              </div>
              <div>
                <h5 className="mvp-description">
                  {type} được đánh giá cao và được yêu thích với những đánh giá
                  xuất sắc và đáng tin cậy.
                </h5>
              </div>
            </div>
          )}
          <RoomTypeDescription />
          <RoomTypeServices />
          <RoomTypeExtraServices />
        </div>
        <div className="room-type-right">
          <BookingForm roomId={roomId} price={roomPrice} />
          <PickDate />
        </div>
      </div>
    </div>
  );
};

export default RoomTypeBooking;
