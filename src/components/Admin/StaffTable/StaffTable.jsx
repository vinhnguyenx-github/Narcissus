import React, { useState } from "react";
import "./StaffTable.css";
import { useData } from "../../../provider/staff/StaffDataProvider";
import ProfileEdit from "../EditUserProfile/ProfileEdit";

const StaffTable = () => {
  const { staffs, fetchStaffs } = useData();
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleEditClick = (staff) => {
    setSelectedStaff(staff);
  };

  const handleProfileUpdate = async (updatedStaff) => {
    try {
      await fetchStaffs();
      setSelectedStaff(null);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="staff-table">
      <h2>Chỉnh sửa thông tin nhân viên</h2>
      {selectedStaff ? (
        <ProfileEdit staff={selectedStaff} onProfileUpdate={handleProfileUpdate} />
      ) : (
        <div className="info-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Hotel</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Privileges</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staffs.map((staff, index) => (
                <tr key={index}>
                  <td>{staff.id}</td>
                  <td>{staff.hotel.address}</td>
                  <td>{staff.firstName} {staff.lastName}</td>
                  <td>{staff.phone}</td>
                  <td>{staff.email}</td>
                  <td>
                    {staff.roles.map((role, roleIndex) => (
                      <span key={roleIndex}>{role.name}</span>
                    ))}
                  </td>
                  <td><span className="edit-info" onClick={() => handleEditClick(staff)}>EDIT</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StaffTable;
