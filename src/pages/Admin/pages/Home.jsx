import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../../components/Admin/Sidebar/Sidebar";
import "../../../assets/admin.css";
import { AuthDataContext } from "../../../provider/auth/AuthProvider";
import profilePicture from "../../../assets/Admin/profile.png";

const HomeAdmin = () => {
  const { user } = useContext(AuthDataContext);
  return (
    <div className="admin-dashboard">
      <AdminSidebar activeItem="home" />
      <div className="admin-dashboard-content">
        <div className="profile-container">
          <div className="profile-container-left">
            <div className="profile-picture">
              <img src={profilePicture} alt="Profile Picture"/>
            </div>
            <div className="profile-info">
              <p className="name">{user ? user.name : 'loading'} </p>
              <p>{user ? user.phone : 'loading'} </p>
            </div>
            <button>
              Edit my profile
            </button>
          </div>

          <div className="profile-container-right">
            <div className="about-me">
              <h2>About me:</h2>
              <p>"Passionate about technology and creativity, always eager to learn and explore new ideas."</p>
            </div>
            <div className="hotel-info">
              <p><strong>Privileges:</strong> {user ? user.role.map((role, index) => (
                <span key={index}>{role}{index !== user.role.length - 1 ? ', ' : ''}</span>
              )) : 'loading'} </p>
              <p><strong>Hotel:</strong> {user ? user.hotel : 'loading'}</p>
            </div>
            <div className="user-links">
              <h2>Web:</h2>
              <p><strong>Email:</strong> {user ? user.email : 'loading'}</p>
              <p><strong>Facebook:</strong> </p>
              <p><strong>Instagram:</strong></p>
              <p><strong>Twitter:</strong> </p>
              <p><strong>LinkedIn:</strong> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
