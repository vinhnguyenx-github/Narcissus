import React, { useState, useEffect } from "react";
import HomeNav from "../components/Home/HomeNav/HomeNav";
import HomeHero from "../components/Home/HomeHero/HomeHero";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import HomeTitle from "../components/Home/HomeTitle/HomeTitle";
import HomeLocations from "../components/Home/HomeLocations/HomeLocations";
import HomeContact from "../components/Home/HomeContact/HomeContact";
import Footer from "../components/Footer/Footer";
import BubbleChat from "../components/BubbleChat/BubbleChat";
import image1 from "../assets/Home/HomeHeroImages/banner1.jpg";
import image2 from "../assets/Home/HomeHeroImages/banner2.jpg";
import image3 from "../assets/Home/HomeHeroImages/banner3.jpg";
import image4 from "../assets/Home/HomeHeroImages/banner4.jpg";
import image5 from "../assets/Home/HomeHeroImages/banner5.jpg";
import image6 from "../assets/Home/HomeHeroImages/banner6.jpg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // State to track the current language
  const [language, setLanguage] = useState("Vietnamese");

  // Function to handle language change
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Effect hook to set default language based on browser settings
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.startsWith("en")) {
      setLanguage("English");
    }
  }, []); // Run only once on component mount

  // Array of home hero images
  const homeHeroImages = [
    {
      imgURL: image1,
      imgAlt: "Home Hero Image 1",
      title: "Phòng khách sạn Narcissus Hà Nội",
      width: 1080,
      height: 680,
    },
    {
      imgURL: image2,
      imgAlt: "Home Hero Image 2",
      title: "Phòng khách sạn Narcissus Hà Nội",
    },
    {
      imgURL: image3,
      imgAlt: "Home Hero Image 3",
      title: "Coffe Roof Top Khách sạn Narcissus Hà Nội",
    },
    {
      imgURL: image4,
      imgAlt: "Home Hero Image 4",
      title: "Đồ ăn khách sạn Narcissus Hà Nội",
    },
    {
      imgURL: image5,
      imgAlt: "Home Hero Image 5",
      title: "Theme khách sạn Narcissus Hà Nội",
    },
    {
      imgURL: image6,
      imgAlt: "Home Hero Image 6",
      title: "Lobby Khách sạn Narcissus Hà Nội",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Narcissus Hotel & Apartment</title>
        <meta
          name="description"
          content="Narcissus Hotel & Apartment - Khách sạn cao cấp trung tâm Hà Nội"
        />
        <link rel="canonical" href="https://www.narcissus.com.vn" />
      </Helmet>
      <HomeNav onLanguageChange={handleLanguageChange} />
      <HomeHero>
        {homeHeroImages.map((image, index) => (
          <img
            key={index}
            src={image.imgURL}
            alt={image.imgAlt}
            title={image.title}
            width={image.width}
            height={image.height}
          />
        ))}
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
