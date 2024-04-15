import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../../../assets/admin.css";

const HomeAdmin = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="home" />
      <div className="admin-dashboard-content">Content</div>
    </div>
  );
};

export default HomeAdmin;
