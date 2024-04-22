import React from "react";
import HomeNav from "../components/Home/HomeNav/HomeNav";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import images from "../data/home/HomeHero";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeTitle from "../components/Home/HomeTitle/HomeTitle";
import HomeLocations from "../components/Home/HomeLocations/HomeLocations";
import HomeContact from "../components/Home/HomeContact/HomeContact";
import Footer from "../components/Footer/Footer";
import BubbleChat from "../components/BubbleChat/BubbleChat";

const Home = () => {
  return (
    <div>
      <HomeNav />
      <HomeHero>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </HomeHero>
      <BubbleChat />
      <div className="container">
        <HomeAbout />
        <HomeTitle
          subTitle="Our Locations"
          title="Discover Our Hotels' Destinations"
        />
        <HomeLocations />
        <HomeTitle subTitle="Get in Touch" title="Reach Out for Assistance" />
        <HomeContact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
