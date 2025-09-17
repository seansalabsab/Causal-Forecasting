// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import HowToUse from "./pages/HowToUse";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/how-to-use" element={<HowToUse />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default App;