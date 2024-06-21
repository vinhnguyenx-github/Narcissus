import React, { useState, useContext } from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import { useData } from "../../../provider/gallery/galleryProvider";
import "../../../assets/admin_gallery.css";
import addIcon from "../../../assets/Admin/add-vector-icon.jpg";
import AddImageOverlay from "../../../components/Admin/AddNewImage/AddImageOverlay"
import APIService from "../../../services/APIService";
import { AuthDataContext } from "../../../provider/auth/AuthProvider";
import ConfirmationOverlay from "../../../components/Admin/ConfirmationOverlay/ConfirmOverlay";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const AdminGallery = () => {
  const { imagesLinks, groupedImages, fetchData } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);
  const { token } = useContext(AuthDataContext);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const openConfirmOverlay = (image) => {
    setImageToDelete(image);
    setIsConfirmOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeConfirmOverlay = () => {
    setIsConfirmOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleAddImage = (newImageLink) => {
    fetchData();
  };

  const handleDelete = () => {
    if (!imageToDelete) return;

    const imageName = extractImageName(imageToDelete);

    APIService.deleteImage(imageName, token)
    .then(response => {
      console.log("Image deleted successfully:", response.data);
      fetchData();
      closeConfirmOverlay();
    })
    .catch(error => {
      console.error("Error deleting image:", error);
      closeConfirmOverlay();
    });
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="gallery" />
      <div className="admin-dashboard-content">
        <div className="admin-dashboard-add">
          <button onClick={() => toggleOverlay()}>
            <img src={addIcon} alt="Add Icon"/>
            Add
            </button>
        </div>

        {isOpen && (
          <AddImageOverlay
            isOpen={isOpen}
            onClose={toggleOverlay}
            onAddImage={handleAddImage}
          ></AddImageOverlay>
        )}

        {isConfirmOpen && (
          <ConfirmationOverlay
            isOpen={isConfirmOpen}
            onClose={closeConfirmOverlay}
            onConfirm={handleDelete}
          />
        )}

          {Object.keys(groupedImages).map((type) => (
            <div key={type}>
              <h2>{type}</h2>
              <div className="slider-container">
                <div className="gallery">
                  {groupedImages[type].map((link, index) => (
                    <div key={index} className="gallery-item">
                      <img src={link} alt={`${type} ${index}`} />
                      <div className="btn-container">
                        <button onClick={() => window.open(link, "_blank")} >View</button>
                        <button onClick={() => openConfirmOverlay(link)}>Delete</button>
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

function extractImageName(imageUrl) {
  return imageUrl.split('/').pop();
}

export default AdminGallery;
