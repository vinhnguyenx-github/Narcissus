import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import HomeTitle from "../../../components/Home/HomeTitle/HomeTitle";
import PickDate from "../../../components/Location/PickDate/PickDate";

const Gallery1 = () => {
  return (
    <div>
      <LocationNav />
      <div className="container">
        <div style={{ margin: "130px" }}></div>
        <LocationPageTitle current="Gallery" />
        <HomeTitle title="Gallery" />
        <PickDate />
      </div>
    </div>
  );
};

export default Gallery1;
