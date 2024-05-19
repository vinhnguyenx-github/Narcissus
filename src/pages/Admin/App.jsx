import React from "react";
import { Route, Routes, Navigate  } from "react-router-dom";
import Login from "./pages/LoginSignup";
import HomeAdmin from "./pages/Home";
import AdminRooms from "./pages/Rooms";
import { RoomDataProvider } from "../../provider/roomtype/roomTypeProvider";
import { StaffDataProvider } from "../../provider/staff/StaffDataProvider";
import { AuthProvider } from "../../provider/auth/AuthProvider";
import { GalleryDataProvider } from "../../provider/gallery/galleryProvider";
import AdminStaff from "./pages/Staff";
import AdminGallery from "./pages/Gallery";

const PrivateRoute = ({ element: Element }) => {
  console.log("Please login before you use the admin page")
  return localStorage.getItem('token') ? <Element /> : <Navigate to="/admin" />;
};

const AppAdmin = () => {
  return (
    <RoomDataProvider>
      <StaffDataProvider>
        <AuthProvider>
          <GalleryDataProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<PrivateRoute element={HomeAdmin} />} />
              <Route path="/staff" element={<PrivateRoute element={AdminStaff} />} />
              <Route path="/rooms" element={<PrivateRoute element={AdminRooms} />} />
              <Route path="/gallery" element={<PrivateRoute element={AdminGallery} />} />
            </Routes>
          </GalleryDataProvider>
        </AuthProvider>
      </StaffDataProvider>
    </RoomDataProvider>
  );
};

export default AppAdmin;
