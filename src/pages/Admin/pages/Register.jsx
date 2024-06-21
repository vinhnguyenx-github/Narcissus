import React from "react";
import RegisterForm from "../../../components/Admin/RegisterForm/RegisterForm.jsx"
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";

const AdminRegister = () => {
    return (
        <div className="admin-dashboard">
            <AdminSidebar activeItem="register" />
            <div className="admin-dashboard-content">
                <RegisterForm />
            </div>
        </div>
    );
};

export default AdminRegister;
