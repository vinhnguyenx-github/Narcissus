import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";

const Amenities1 = () => {
  return (
    <div>
      <LocationNav />
      <BubbleChat />
      <div className="container">
        <div style={{ margin: "130px" }}></div>
        <LocationPageTitle current="Amenities" url="/33-tuc-mac" />
      </div>
    </div>
  );
};

export default Amenities1;
