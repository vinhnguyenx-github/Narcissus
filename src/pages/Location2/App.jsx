import React from "react";
import { Route, Routes } from "react-router-dom";
import Home2 from "./pages/Home";
import ContactLocation from "./pages/ContactLocation";
import RoomBooking2 from "./pages/RoomBooking";
import RoomTypeBooking2 from "./pages/RoomTypeBooking";

const App2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/contact-us-directions" element={<ContactLocation />} />
      <Route path="/rooms" element={<RoomBooking2 />} />
      <Route path="/rooms/:type" element={<RoomTypeBooking2 />} />
    </Routes>
  );
};

export default App2;
