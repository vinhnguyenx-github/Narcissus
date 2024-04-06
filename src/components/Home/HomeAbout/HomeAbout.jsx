import React from "react";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="home-about">
      <div className="home-about-left">
        <iframe
          src="https://www.youtube.com/embed/PC1iMPr4Qbg?si=ftxvIIu3aw30gKMJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="home-about-img"
        ></iframe>
      </div>
      <div className="home-about-right">
        <h3>About Narcissus</h3>
        <h2>Unveiling Hotel Excellence</h2>
        <p>
          Narcissus Hotel & Apartment presents 25 opulent rooms, each
          meticulously designed with distinct styles and lavish furnishings.
          Guests are treated to a range of amenities, including air
          conditioning, deluxe seating areas, and flat-screen TVs with an array
          of cable channels. The private bathrooms are adorned with plush
          bathrobes, soft slippers, and elegant hairdryers. Every room is
          equipped with an electric kettle, and complimentary teas and coffees
          add a touch of luxury.
        </p>
        <p>
          Our 24-hour front desk stands ready to provide unparalleled service,
          offering assistance with tours, ticket bookings, currency exchange,
          and secure luggage storage. Additional services such as airport
          transfers, bike rentals, and motorbike hire are available upon request
        </p>
        <p>
          At Narcissus Hotel & Apartment, our unwavering dedication and genuine
          passion for hospitality ensure a memorable and unparalleled experience
          for every guest.
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
