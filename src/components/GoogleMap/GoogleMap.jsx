import React from "react";
import "./GoogleMap.css";

const GoogleMap = ({ url }) => {
  return (
    <div>
      <iframe
        src={url}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        className="google-map"
      />
    </div>
  );
};
export default GoogleMap;
