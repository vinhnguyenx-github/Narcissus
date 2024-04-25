import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import Footer from "../../../components/Footer/Footer";
import LocationContactLocation from "../../../components/Location/LocationContactLocation/LocationContactLocation";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";

const ContactLocation1 = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationPageTitle url="/33-tuc-mac" current="Liên Hệ" />
        <LocationContactLocation />
      </div>
      <Footer />
    </div>
  );
};

export default ContactLocation1;
