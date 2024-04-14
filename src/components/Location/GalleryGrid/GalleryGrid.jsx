import React from "react";
import "./GalleryGrid.css";

const GalleryGrid = () => {
  return (
    <div className="gallery-grid">
      <div className="gallery-list">
        <ul>
          <li className="list-active">ALL</li>
          <li>INTERIOR</li>
          <li>ACCOMMODATIONS</li>
          <li>DINING</li>
          <li>ROOF TOP COFFE</li>
          <li>COMMON AREAS</li>
        </ul>
      </div>
      <div className="images-grid">a</div>
    </div>
  );
};

export default GalleryGrid;
