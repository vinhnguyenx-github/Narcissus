import React, { useState } from "react";
import HomeNav from "../components/Home/HomeNav/HomeNav";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeTitle from "../components/Home/HomeTitle/HomeTitle";
import HomeLocations from "../components/Home/HomeLocations/HomeLocations";
import HomeContact from "../components/Home/HomeContact/HomeContact";
import Footer from "../components/Footer/Footer";
import BubbleChat from "../components/BubbleChat/BubbleChat";
import image1 from "../assets/Home/HomeHeroImages/banner1.png";
import image2 from "../assets/Home/HomeHeroImages/banner2.jpg";
import image3 from "../assets/Home/HomeHeroImages/banner3.jpg";
import image4 from "../assets/Home/HomeHeroImages/banner4.jpeg";
import image5 from "../assets/Home/HomeHeroImages/banner5.jpg";
import image6 from "../assets/Home/HomeHeroImages/banner6.jpg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // State to track the current language
  const [language, setLanguage] = useState("Vietnamese");

  const home_hero_images = [
    {
      imgURL: image1,
      imgAlt: "image-1",
    },
    {
      imgURL: image2,
      imgAlt: "image-2",
    },
    {
      imgURL: image3,
      imgAlt: "image-3",
    },
    {
      imgURL: image4,
      imgAlt: "image-4",
    },
    {
      imgURL: image5,
      imgAlt: "image-5",
    },
    {
      imgURL: image6,
      imgAlt: "image-6",
    },
  ];

  // Function to handle language change
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <Helmet>
        <title>Narcissus Hotel & Apartment</title>
        <meta
          name="description"
          content="Narcissus Hotel & Apartment - Khách sạn cao cấp trung tâm Hà Nội"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <HomeNav onLanguageChange={handleLanguageChange} />
      <HomeHero>
        {home_hero_images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </HomeHero>
      <BubbleChat />
      <div className="container">
        <HomeAbout language={language} />
        <HomeTitle
          subTitle={language === "English" ? "Locations" : "Các Cơ sở"}
          title={
            language === "English"
              ? "DISCOVER OUR HOTEL LOCATIONS"
              : "KHÁM PHÁ ĐỊA ĐIỂM KHÁCH SẠN CỦA CHÚNG TÔI"
          }
        />
        <HomeLocations />
        <HomeTitle
          subTitle={language === "English" ? "Contact" : "Liên Hệ"}
          title={
            language === "English" ? "Connect with Us" : "Kết nối với chúng tôi"
          }
        />
        <HomeContact language={language} />
      </div>
      <Footer language={language} />
    </div>
  );
};

export default Home;
