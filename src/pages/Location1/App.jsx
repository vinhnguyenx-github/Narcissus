import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery1 from "./pages/Gallery";
import Home1 from "./pages/Home";
import ContactLocation from "./pages/ContactLocation";

const App1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/gallery" element={<Gallery1 />} />
      <Route path="/contact-us-directions" element={<ContactLocation />} />
    </Routes>
  );
};

export default App1;
