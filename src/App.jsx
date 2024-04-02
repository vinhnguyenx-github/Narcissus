import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import App1 from "./pages/Location1/App";
import AppAdmin from "./pages/Admin/App";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/33-tuc-mac/*" element={<App1 />} />
      <Route path="/admin/*" element={<AppAdmin />} />
    </Routes>
  );
};

export default App;
