import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";

const AdminGallery = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="gallery" />
      <div className="admin-dashboard-content">Content</div>
    </div>
  );
};

export default AdminGallery;
