import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery1 from "./pages/Gallery";
import Home1 from "./pages/Home";
import ContactLocation from "./pages/ContactLocation";
import RoomBooking1 from "./pages/RoomBooking";
import RoomTypeBooking1 from "./pages/RoomTypeBooking";
import { RoomDataProvider } from "../../provider/roomtype/roomTypeProvider";
import { GalleryDataProvider } from "../../provider/gallery/galleryProvider";
import Amenities1 from "./pages/Amenities";

const App1 = ({ language, onLanguageChange }) => {
  return (
    <RoomDataProvider>
      <GalleryDataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home1 language={language} onLanguageChange={onLanguageChange} />
            }
          />
          <Route path="/gallery" element={<Gallery1 language={language} />} />
          <Route
            path="/contact-us-directions"
            element={<ContactLocation language={language} />}
          />
          <Route path="/rooms" element={<RoomBooking1 language={language} />} />
          <Route
            path="/rooms/:type"
            element={<RoomTypeBooking1 language={language} />}
          />
          <Route
            path="/amenities"
            element={<Amenities1 language={language} />}
          />
        </Routes>
      </GalleryDataProvider>
    </RoomDataProvider>
  );
};

export default App1;
