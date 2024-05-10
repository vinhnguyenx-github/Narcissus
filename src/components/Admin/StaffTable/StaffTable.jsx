import * as React from "react";
import "./StaffTable.css";
import { useData } from "../../../provider/staff/StaffDataProvider";

const StaffTable = () => {
  const { staffs } = useData();
  console.log(staffs)
  return (
    <div className="staff-table">
      <h2>Chỉnh sửa thông tin nhân viên</h2>
      <div className="info-table">
        <table>
          <thead>
              <tr>
                  <th>Staff ID</th>
                  <th>Hotel</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Privileges</th>
              </tr>
          </thead>
          <tbody>
            {staffs.map((staff, index) => (
                <tr key={index}>
                  <td>{staff.id}</td>
                  <td>{staff.hotel.address}</td>
                  <td>{staff.firstName}</td>
                  <td>{staff.lastName}</td>
                  <td>{staff.phone}</td>
                  <td>{staff.email}</td>
                  <td>
                    {staff.roles.map((role, roleIndex) => (
                      <span key={roleIndex}>{role.name}</span>
                    ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTable;
