import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoomPreview.css";
import { useRoomData } from "../../provider/roomtype/roomTypeProvider.jsx";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import BookBtn from "../Location/BookBtn/BookBtn";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", cursor: "pointer" }} // Customize styles as needed
      onClick={onClick}
    >
      <LiaAngleRightSolid size={24} className="next-arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", cursor: "pointer" }} // Customize styles as needed
      onClick={onClick}
    >
      <LiaAngleLeftSolid size={24} className="next-arrow" />
    </div>
  );
}

function RoomPreview({ location, start, end }) {
  const { rooms, defaultImage } = useRoomData();
  const firstTwoRooms = rooms.slice(start, end);
  const disabledRoomIds = [5, 6];
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {firstTwoRooms.map((room) => (
          <div
            key={room.id}
            className={`card ${
              disabledRoomIds.includes(room.id) ? "disabled-card" : ""
            }`}
          >
            <div className="card-top">
              <img
                src={`http://localhost:8080/api/roomType/getImage/${room.id}`}
              />
              <h4>{room.name}</h4>
              <p>{room.description}</p>
            </div>
            <div className="card-bottom">
              {!disabledRoomIds.includes(room.id) && (
                <Link
                  to={`/${location}/rooms/${room.name}`}
                  className="card-readmore"
                >
                  Read More
                </Link>
              )}
              <p>
                Prices: {new Intl.NumberFormat("en").format(room.pricePerNight)}
                VND
              </p>
              {disabledRoomIds.includes(room.id) ? (
                <button className="disable-button">Unavailable</button>
              ) : (
                <Link to={`/${location}/rooms/${room.name}`}>
                  <BookBtn />
                </Link>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RoomPreview;
