import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import { useData } from "../../../provider/gallery/galleryProvider";
import "../../../assets/admin_gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AdminGallery = () => {
  const { groupedImages } = useData();


  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="gallery" />
      <div className="admin-dashboard-content">
          {Object.keys(groupedImages).map((type) => (
            <div key={type}>
              <h2>{type}</h2>
              <div className="slider-container">
                <div className="gallery">
                  {groupedImages[type].map((link, index) => (
                    <div key={index} className="gallery-item">
                      <img src={link} alt={`${type} ${index}`} />
                      <div className="btn-container">
                        <button onClick={() => window.open(link, "_blank")} >Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminGallery;
