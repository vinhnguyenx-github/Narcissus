import React from "react";
import { useLocation } from "react-router-dom";
import "./LocationAbout.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const LocationAbout = () => {
  const aboutContents = [
    {
      id: 1,
      path: "/33-tuc-mac",
      header: "Narcissus Tuc Mac",
      description1:
        "Conveniently located in the Hoan Kiem district of Hanoi, Narcissus 2 Hotel & Apartment is set 1.4 km from Trang Tien Plaza, 1.2 km from St. Joseph Cathedral and 1 km from Imperial Citadel. Offering private parking, the aparthotel is less than 1 km from the Hanoi Temple of Literature. The property is 1.3 km from the city centre and 300 metres from Ha Noi Railway station.",
      description2:
        "All units feature a private bathroom and have air conditioning, a flat-screen TV and a minibar.",
      description3:
        "Popular points of interest near Narcissus 2 Hotel & Apartment include the Imperial Citadel, Vietnam Fine Arts Museum and Hoan Kiem Lake. The nearest airport is Noi Bai International, 25 km from the accommodation, and the property offers a paid airport shuttle service.",
    },
    {
      id: 2,
      path: "/84-le-duan",
      header: "Narcissus Le Duan",
      description1:
        "Conveniently located in the Hoan Kiem district of Hanoi, Narcissus 2 Hotel & Apartment is set 1.4 km from Trang Tien Plaza, 1.2 km from St. Joseph Cathedral and 1 km from Imperial Citadel. Offering private parking, the aparthotel is less than 1 km from the Hanoi Temple of Literature. The property is 1.3 km from the city centre and 300 metres from Ha Noi Railway station.",
      description2:
        "All units feature a private bathroom and have air conditioning, a flat-screen TV and a minibar.",
      description3:
        "Popular points of interest near Narcissus 2 Hotel & Apartment include the Imperial Citadel, Vietnam Fine Arts Museum and Hoan Kiem Lake. The nearest airport is Noi Bai International, 25 km from the accommodation, and the property offers a paid airport shuttle service.",
    },
  ];
  const aboutContent = useLocation();

  const currentAboutContent = aboutContents.find((loc) =>
    aboutContent.pathname.startsWith(loc.path)
  );

  return (
    <div className="location-about">
      <h2>{currentAboutContent.header}</h2>
      <p>
        {currentAboutContent.description1} <br />
        <br /> {currentAboutContent.description2} <br />
        <br />
        {currentAboutContent.description3}
      </p>
    </div>
  );
};

export default LocationAbout;
