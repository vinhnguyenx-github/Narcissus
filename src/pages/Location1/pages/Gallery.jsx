import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import HomeTitle from "../../../components/Home/HomeTitle/HomeTitle";
import Footer from "../../../components/Footer/Footer";
import GalleryGrid from "../../../components/Location/GalleryGrid/GalleryGrid";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";

const Gallery1 = () => {
  return (
    <div>
      <LocationNav />
      <BubbleChat />
      <div className="container">
        <div style={{ margin: "130px" }}></div>
        <LocationPageTitle current="Gallery" url="/33-tuc-mac" />
        <HomeTitle title="Gallery" />
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery1;
