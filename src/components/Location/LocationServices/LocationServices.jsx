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

const LocationServices = ({ language }) => {
  const servicesAndAmenities = [
    {
      iconURL: icon1,
      iconDescriptions: {
        English: "Free breakfast buffet",
        Vietnamese: "Buffet sáng miễn phí",
      },
    },
    {
      iconURL: airportServiceIcon,
      iconDescriptions: {
        English: "Airport shuttle service",
        Vietnamese: "Xe đưa đón sân bay",
      },
    },
    {
      iconURL: freeWifiIcon,
      iconDescriptions: {
        English: "Free Wifi",
        Vietnamese: "Wifi miễn phí",
      },
    },
    {
      iconURL: smokeAreaIcon,
      iconDescriptions: {
        English: "Smoking area",
        Vietnamese: "Chỗ hút thuốc",
      },
    },
    {
      iconURL: motorbikeRentalIcon,
      iconDescriptions: {
        English: "Motorbike rental",
        Vietnamese: "Cho thuê xe máy",
      },
    },
    {
      iconURL: laundryServiceIcon,
      iconDescriptions: {
        English: "Laundry service",
        Vietnamese: "Dịch vụ giặt là",
      },
    },
    {
      iconURL: twentyFourHoursIcon,
      iconDescriptions: {
        English: "24/7 service",
        Vietnamese: "Dịch vụ 24/7",
      },
    },
    {
      iconURL: excelRoomServiceIcon,
      iconDescriptions: {
        English: "Excellent room service",
        Vietnamese: "Dịch vụ phòng xuất sắc",
      },
    },
    {
      iconURL: rooftopCoffeShopIcon,
      iconDescriptions: {
        English: "Rooftop Coffee",
        Vietnamese: "Rooftop Coffee",
      },
    },
    {
      iconURL: freeParkingIcon,
      iconDescriptions: {
        English: "Free parking",
        Vietnamese: "Đỗ xe miễn phí",
      },
    },
  ];

  return (
    <div className="location-services">
      {servicesAndAmenities.map((service, index) => (
        <div key={index} className="location-service">
          <img alt="" src={service.iconURL} className="location-service-icon" />
          <p>{service.iconDescriptions[language]}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationServices;
