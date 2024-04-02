import React from "react";
import "./HomeTitle.css";

const HomeTitle = ({ subTitle, title }) => {
  return (
    <div className="home-title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default HomeTitle;
