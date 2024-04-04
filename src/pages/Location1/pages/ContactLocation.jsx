import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import Footer from "../../../components/Footer/Footer";
import LocationContactLocation from "../../../components/Location/LocationContactLocation/LocationContactLocation";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";

const ContactLocation = () => {
  return (
    <div>
      <LocationNav />
      <LocationHero />
      <BubbleChat />
      <div className="container">
        <LocationPageTitle url="/" current="Contact Us & Directions" />
        <LocationContactLocation />
      </div>
      <Footer />
    </div>
  );
};

export default ContactLocation;
