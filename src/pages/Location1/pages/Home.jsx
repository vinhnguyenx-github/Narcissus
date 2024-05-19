import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationAbout from "../../../components/Location/LocationAbout/LocationAbout";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import LocationTitle from "../../../components/Location/LocationTitle/LocationTitle";
import RoomPreview from "../../../components/Room/RoomPreview";
import Footer from "../../../components/Footer/Footer";
import LocationServices from "../../../components/Location/LocationServices/LocationServices";
import { Helmet } from "react-helmet-async";

const Home1 = ({ language, onLanguageChange }) => {
  return (
    <div>
      <Helmet>
        <title>Narcissus Tức Mặc</title>
        <meta
          name="description"
          content="Narcissus Hotel & Apartment - Khách sạn cao cấp trung tâm Hà Nội"
        />
        <link rel="canonical" href="https://www.narcissus.com.vn/33-tuc-mac" />
      </Helmet>
      <LocationNav language={language} onLanguageChange={onLanguageChange} />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationAbout language={language} />
        <LocationTitle
          left={language === "English" ? "Rooms" : "Phòng"}
          right={
            language === "English" ? "See all rooms" : "Xem tất cả các phòng"
          }
          rightURL="rooms"
        />
        <RoomPreview location="33-tuc-mac" start={0} end={2} />
        <LocationTitle
          left={language === "English" ? "Amenities" : "Tiện Ích"}
          right={
            language === "English" ? "See all amenities" : "Xem tất cả tiện ích"
          }
          rightURL="/33-tuc-mac/amenities"
        />
        <LocationServices language={language} />
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Home1;
