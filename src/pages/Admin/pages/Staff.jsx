import React from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import StaffTable from "../../../components/Admin/StaffTable/StaffTable";

const AdminStaff = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="employees" />
      <div className="admin-dashboard-content">
        <StaffTable />
      </div>
    </div>
  );
};

export default AdminStaff;
