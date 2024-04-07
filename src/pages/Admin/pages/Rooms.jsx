import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../../../assets/admin.css";
import AdminRoomGrid from "../../../components/Admin/RoomGrid/RoomGrid";

const AdminRooms = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="rooms" />
      <div className="admin-dashboard-content">
        <AdminRoomGrid />
      </div>
    </div>
  );
};

export default AdminRooms;
