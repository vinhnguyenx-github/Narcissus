import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginSignup";
import HomeAdmin from "./pages/Home";
import AdminRooms from "./pages/Rooms";
import { RoomDataProvider } from "../../provider/roomtype/roomTypeProvider";
import { StaffDataProvider } from "../../provider/staff/StaffDataProvider";
import { AuthProvider } from "../../provider/auth/AuthProvider";
import AdminStaff from "./pages/Staff";
import AdminGallery from "./pages/Gallery";

const AppAdmin = () => {
  return (
    <RoomDataProvider>
      <StaffDataProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<HomeAdmin />} />
            <Route path="/staff" element={<AdminStaff />} />
            <Route path="/rooms" element={<AdminRooms />} />
            <Route path="/gallery" element={<AdminGallery />} />
          </Routes>
        </AuthProvider>
      </StaffDataProvider>
    </RoomDataProvider>
  );
};

export default AppAdmin;
