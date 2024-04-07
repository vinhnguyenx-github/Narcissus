import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginSignup";
import HomeAdmin from "./pages/Home";
import AdminRooms from "./pages/Rooms";

const AppAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<HomeAdmin />} />
      <Route path="/rooms" element={<AdminRooms />} />
    </Routes>
  );
};

export default AppAdmin;
