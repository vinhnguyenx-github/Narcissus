import React from "react";
import "./RoomTypeExtraServices.css";
import tour from "../../../assets/destination.png";
import exchange from "../../../assets/exchange-rate.png";
import find from "../../../assets/loupe.png";

const RoomTypeExtraServices = () => {
  return (
    <div className="extra-services">
      <h5>Dịch Vụ Đi Kèm</h5>
      <div className="extra-services-items">
        <div className="extra-services-item">
          <img src={tour} alt="" />
          <div className="extra-services-item-col">
            <h6>Đặt Tour: </h6>
            <p>
              Chúng tôi sẽ rất vui lòng giúp bạn đặt tour hoặc mua tour. Vui
              lòng liên hệ với Lễ tân của chúng tôi để được hỗ trợ thêm.
            </p>
          </div>
        </div>
        <div className="extra-services-item">
          <img src={exchange} alt="" />
          <div className="extra-services-item-col">
            <h6>Hoán Đổi Tiền Tệ: </h6>
            <p>
              Chúng tôi rất sẵn lòng hỗ trợ bạn với bất kỳ thắc mắc nào về giao
              dịch ngoại tệ. Vui lòng liên hệ với Lễ tân của chúng tôi để được
              hỗ trợ thêm.
            </p>
          </div>
        </div>
        <div className="extra-services-item">
          <img src={find} alt="" />
          <div className="extra-services-item-col">
            <h6>Hỗ Trợ Thêm: </h6>
            <p>
              Mục tiêu của chúng tôi là đảm bảo kỳ nghỉ của bạn thoải mái và
              được điều chỉnh theo nhu cầu của bạn. Cho dù bạn cần thêm gối cho
              sự thoải mái hơn, một cái bàn là để chỉnh sửa quần áo phút cuối,
              hoặc dịch vụ dọn phòng để có không gian sạch sẽ hơn, chúng tôi ở
              đây để phục vụ các yêu cầu của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeExtraServices;
