import React from "react";
import { Route, Routes } from "react-router-dom";
import Home2 from "./pages/Home";
import ContactLocation from "./pages/ContactLocation";

const App2 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/contact-us-directions" element={<ContactLocation />} />
    </Routes>
  );
};

export default App2;
