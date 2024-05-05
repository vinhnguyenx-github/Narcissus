import React from "react";
import LocationNav from "../../../components/Location/LocationNav/LocationNav";
import Footer from "../../../components/Footer/Footer";
import LocationContactLocation from "../../../components/Location/LocationContactLocation/LocationContactLocation";
import LocationHero from "../../../components/Location/LocationHero/LocationHero";
import LocationPageTitle from "../../../components/Location/LocationPageTitle/LocationPageTitle";
import BubbleChat from "../../../components/BubbleChat/BubbleChat";
import { Helmet } from "react-helmet-async";

const ContactLocation1 = () => {
  return (
    <div>
      <Helmet>
        <title>Liên Hệ - Narcissus Tức Mặc</title>
        <meta
          name="description"
          content="Narcissus Tức Mặc - Khách sạn cao cấp trung tâm Hà Nội. Đặt phòng ngay hôm nay để trải nghiệm kỳ nghỉ tuyệt vời tại Hà Nội."
        />
        <link
          rel="canonical"
          href="https://www.narcissus.com.vn/33-tuc-mac/contact-us-directions"
        />
      </Helmet>
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
