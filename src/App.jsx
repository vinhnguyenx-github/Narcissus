import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import App1 from "./pages/Location1/App";
import AppAdmin from "./pages/Admin/App";
import App2 from "./pages/Location2/App";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/33-tuc-mac/*" element={<App1 />} />
      <Route path="/84-le-duan/*" element={<App2 />} />
      <Route path="/admin/*" element={<AppAdmin />} />
    </Routes>
  );
};

export default App;
