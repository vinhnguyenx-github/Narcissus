import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { BiBookAlt, BiHomeAlt2, BiUserCircle } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import {
  FaBuilding,
  FaArrowRightToBracket,
  FaPhotoFilm,
} from "react-icons/fa6";
import { AuthDataContext } from "../../../provider/auth/AuthProvider";

const AdminSidebar = ({ activeItem }) => {
  const { logout, user } = useContext(AuthDataContext);
  return (
    <div className="admin-menu">
      <Link to="/admin/dashboard">
        <div className="admin-sidebar-logo">
          <BiBookAlt />
          <h2>Narcissus</h2>
        </div>
      </Link>

      <div className="admin-menu-list">
        <p>Welcome, {user ? user.name : 'loading'}!</p>
        <Link
          to="/admin/dashboard"
          className={`admin-item ${
            activeItem === "home" ? "admin-item-active" : ""
          }`}
        >
          <BiHomeAlt2 />
          Trang Chủ
        </Link>
        <h2>Dữ liệu</h2>
        <Link
          to="/admin/staff"
          className={`admin-item ${
            activeItem === "employees" ? "admin-item-active" : ""
          }`}
        >
          <BiUserCircle />
          Quản Trị Nhân Viên
        </Link>
        <Link
          to="/admin/guest"
          className={`admin-item ${
            activeItem === "customers" ? "admin-item-active" : ""
          }`}
        >
          <FaPeopleArrows />
          Quản Trị Thông Tin Khách Hàng
        </Link>
        <Link
          to="/admin/rooms"
          className={`admin-item ${
            activeItem === "rooms" ? "admin-item-active" : ""
          }`}
        >
          <FaBuilding />
          Quản Trị Thông Tin Phòng
        </Link>
        <Link
          to="/admin/gallery"
          className={`admin-item ${
            activeItem === "gallery" ? "admin-item-active" : ""
          }`}
        >
          <FaPhotoFilm />
          Quản Trị Mục Hình Ảnh
        </Link>
        <h2>Tạo</h2>
        <Link 
          to="/admin/register" 
          className="admin-item">
          <FaArrowRightToBracket />
          Tạo Tài Khoản
        </Link>
        <Link to="/admin/addRoom" className="admin-item">
          <FaArrowRightToBracket />
          Tạo Phòng Mới
        </Link>
        <h2>Cài Đặt</h2>
        <Link to="/admin" className="admin-item" onClick={logout}>
          <FaArrowRightToBracket />
          Đăng Xuất
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
