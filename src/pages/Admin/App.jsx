import React from "react";
import { Route, Routes, Navigate  } from "react-router-dom";
import Login from "./pages/LoginSignup";
import HomeAdmin from "./pages/Home";
import AdminRooms from "./pages/Rooms";
import { RoomDataProvider } from "../../provider/roomtype/roomTypeProvider";
import { StaffDataProvider } from "../../provider/staff/StaffDataProvider";
import { AuthProvider } from "../../provider/auth/AuthProvider";
import { GalleryDataProvider } from "../../provider/gallery/galleryProvider";
import { BookingDataProvider } from "../../provider/guest/GuestDataProvider";
import AdminStaff from "./pages/Staff";
import AdminGallery from "./pages/Gallery";
import AdminRegister from "./pages/Register";
import AdminGuest from "./pages/Guest";
import AdminCreateRoom from "./pages/CreateRoom";

const PrivateRoute = ({ element: Element }) => {
  return localStorage.getItem('token') ? <Element /> : <Navigate to="/admin" />;
};

const AppAdmin = () => {
  return (
    <RoomDataProvider>
      <StaffDataProvider>
        <AuthProvider>
          <GalleryDataProvider>
            <BookingDataProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute element={HomeAdmin} />} />
                <Route path="/staff" element={<PrivateRoute element={AdminStaff} />} />
                <Route path="/rooms" element={<PrivateRoute element={AdminRooms} />} />
                <Route path="/register" element={<PrivateRoute element={AdminRegister} />} />
                <Route path="/addRoom" element={<PrivateRoute element={AdminCreateRoom} />} />
                <Route path="/gallery" element={<PrivateRoute element={AdminGallery} />} />
                <Route path="/guest" element={<PrivateRoute element={AdminGuest} />} />
              </Routes>
            </BookingDataProvider>
          </GalleryDataProvider>
        </AuthProvider>
      </StaffDataProvider>
    </RoomDataProvider>
  );
};

export default AppAdmin;
