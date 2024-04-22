import React from "react";
import { Route, Routes } from "react-router-dom";
import Home2 from "./pages/Home";
import ContactLocation from "./pages/ContactLocation";
import RoomBooking2 from "./pages/RoomBooking";
import RoomTypeBooking2 from "./pages/RoomTypeBooking";
import { RoomDataProvider } from "../../provider/roomtype/roomTypeProvider";
import Amenities2 from "./pages/Amenities";

const App2 = () => {
  return (
    <RoomDataProvider>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/contact-us-directions" element={<ContactLocation />} />
        <Route path="/rooms" element={<RoomBooking2 />} />
        <Route path="/rooms/:type" element={<RoomTypeBooking2 />} />
        <Route path="/amenities" element={<Amenities2 />} />
      </Routes>
    </RoomDataProvider>
  );
};

export default App2;
