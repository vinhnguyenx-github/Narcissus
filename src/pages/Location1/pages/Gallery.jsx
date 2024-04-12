import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import HomeTitle from "../../../components/Home/HomeTitle/HomeTitle";
import BookingForm from "../../../components/Location/BookingForm/BookingForm";
import PickDate from "../../../components/Location/PickDate/PickDate";
import Footer from "../../../components/Footer/Footer";

const Gallery1 = () => {
  return (
    <div>
      <LocationNav />
      <div className="container">
        <div style={{ margin: "130px" }}></div>
        <LocationPageTitle current="Gallery" url="/33-tuc-mac" />
        <HomeTitle title="Gallery" />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery1;
