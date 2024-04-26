import React from "react";
import { useParams } from "react-router-dom";
import "./RoomTypeDescription.css";

const RoomTypeDescription = () => {
  const { type } = useParams();
  return (
    <div className="room-type-description">
      <p>
        Tận hưởng một kỳ nghỉ sang trọng tại căn phòng rộng rãi của chúng tôi,
        với đầy đủ tiện nghi hiện đại như bếp riêng, phòng tắm riêng, điều hòa
        không khí, TV thông minh và nhiều hơn nữa. Hưởng lợi từ những tiện ích
        bổ sung như dịch vụ ăn sáng tại phòng và lựa chọn thuê xe máy để khám
        phá khu vực.
      </p>
    </div>
  );
};

export default RoomTypeDescription;
