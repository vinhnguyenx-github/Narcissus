import React from "react";
import "./LocationServices.css";
import icon1 from "../../../assets/Location/AssetsAndAmenitites/free_breakfast.png";
import airportServiceIcon from "../../../assets/Location/AssetsAndAmenitites/airport_service.png";
import freeWifiIcon from "../../../assets/Location/AssetsAndAmenitites/free-wifi.png";
import smokeAreaIcon from "../../../assets/Location/AssetsAndAmenitites/smoke_area.png";
import motorbikeRentalIcon from "../../../assets/Location/AssetsAndAmenitites/two.png";
import laundryServiceIcon from "../../../assets/Location/AssetsAndAmenitites/washer.png";
import twentyFourHoursIcon from "../../../assets/Location/AssetsAndAmenitites/24-hours-support.png";
import excelRoomServiceIcon from "../../../assets/Location/AssetsAndAmenitites/waitress.png";
import rooftopCoffeShopIcon from "../../../assets/Location/AssetsAndAmenitites/rooftop.png";
import freeParkingIcon from "../../../assets/Location/AssetsAndAmenitites/free-parking.png";

const LocationServices = () => {
  const servicesAndAmenities = [
    { iconURL: icon1, iconDescription: "Buffet sáng miễn phí" },
    { iconURL: airportServiceIcon, iconDescription: "Xe đưa đón sân bay" },
    { iconURL: freeWifiIcon, iconDescription: "Wifi miễn phí" },
    { iconURL: smokeAreaIcon, iconDescription: "Chỗ hút thuốc" },
    { iconURL: motorbikeRentalIcon, iconDescription: "Cho thuê xe máy" },
    { iconURL: laundryServiceIcon, iconDescription: "Dịch vụ giặt là" },
    { iconURL: twentyFourHoursIcon, iconDescription: "Dịch vụ 24/7" },
    {
      iconURL: excelRoomServiceIcon,
      iconDescription: "Dịch vụ phòng xuất sắc",
    },
    { iconURL: rooftopCoffeShopIcon, iconDescription: "Rooftop Coffee" },
    { iconURL: freeParkingIcon, iconDescription: "Đỗ xe miễn phí" },
  ];

  return (
    <div className="location-services">
      {servicesAndAmenities.map((service, index) => (
        <div key={index} className="location-service">
          <img alt="" src={service.iconURL} className="location-service-icon" />
          <p>{service.iconDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationServices;
