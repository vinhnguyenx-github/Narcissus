import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../../../assets/admin.css";
import APIService from "../../../services/APIService";
import { AuthDataContext } from "../../../provider/auth/AuthProvider";
import profilePicture from "../../../assets/Admin/profile.png";

const HomeAdmin = () => {
  const { token } = useContext(AuthDataContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIService.userProfile(token);
        setUser(response.data.data);
        
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(user);
  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="home" />
      <div className="admin-dashboard-content">
        <div className="profile-container">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile Picture"/>
          </div>
          <h1>User Profile</h1>
          <div className="profile-info">
            <p><strong>Username:</strong> {user ? user.firstName : 'loading'} {user ? user.lastName : 'loading'}</p>
            <p><strong>Email:</strong> {user ? user.email : 'loading'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
