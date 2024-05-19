import React from "react";
import "./GalleryGrid.css";
import { useData } from "../../../provider/gallery/galleryProvider.jsx";

function GalleryGrid() {
  const { imagesLinks } = useData();

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
      <div className="images-grid">
        {imagesLinks.map((image, index) => {
            if (index === 0) return null;
            return (
              <img
                key={index}
                src={image}
                alt={`Room Image ${index}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GalleryGrid;
