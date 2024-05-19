import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import App1 from "./pages/Location1/App";
import AppAdmin from "./pages/Admin/App";
import App2 from "./pages/Location2/App";

const App = () => {
  const [language, setLanguage] = useState("Vietnamese");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.startsWith("en")) {
      setLanguage("English");
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home language={language} onLanguageChange={handleLanguageChange} />
        }
      />
      <Route
        path="/33-tuc-mac/*"
        element={
          <App1 language={language} onLanguageChange={handleLanguageChange} />
        }
      />
      <Route path="/84-le-duan/*" element={<App2 language={language} />} />
      <Route path="/admin/*" element={<AppAdmin language={language} />} />
    </Routes>
  );
};

export default App;
