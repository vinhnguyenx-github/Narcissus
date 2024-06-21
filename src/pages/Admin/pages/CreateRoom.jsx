import React from "react";
import AddNewRoom from "../../../components/Admin/AddNewRoom/AddNewRoom.jsx"
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";

const AdminCreateRoom = () => {
    return (
        <div className="admin-dashboard">
            <AdminSidebar activeItem="register" />
            <div className="admin-dashboard-content">
                <AddNewRoom />
            </div>
        </div>
    );
};

export default AdminCreateRoom;
