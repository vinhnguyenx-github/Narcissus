import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginSignup";
import HomeAdmin from "./pages/Home";

const AppAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<HomeAdmin />} />
    </Routes>
  );
};

export default AppAdmin;
