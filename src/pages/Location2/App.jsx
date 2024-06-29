import React from "react";
import { Route, Routes } from "react-router-dom";
import Home2 from "./pages/Home";
import ContactLocation from "./pages/ContactLocation";
import RoomBooking2 from "./pages/RoomBooking";
import RoomTypeBooking2 from "./pages/RoomTypeBooking";
import { RoomDataProvider } from "../../provider/roomtype/roomTypeProvider";
import Amenities2 from "./pages/Amenities";

const App2 = ({ language, onLanguageChange }) => {
  return (
    <RoomDataProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Home2 language={language} onLanguageChange={onLanguageChange} />
          }
        />
        <Route
          path="/contact-us-directions"
          element={<ContactLocation language={language} />}
        />
        <Route path="/rooms" element={<RoomBooking2 language={language} />} />
        <Route
          path="/rooms/:type"
          element={<RoomTypeBooking2 language={language} />}
        />
        <Route path="/amenities" element={<Amenities2 language={language} />} />
      </Routes>
    </RoomDataProvider>
  );
};

export default App2;
