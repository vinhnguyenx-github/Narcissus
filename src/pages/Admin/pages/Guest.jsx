import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import GuestTable from "../../../components/Admin/GuestTable/GuestTable";

const AdminGuest = () => {
    return (
        <div className="admin-dashboard">
            <AdminSidebar activeItem="guest" />
            <div className="admin-dashboard-content">
                < GuestTable />
            </div>
        </div>
    );
};

export default AdminGuest;
