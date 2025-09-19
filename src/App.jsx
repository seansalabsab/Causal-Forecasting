// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import HowToUse from "./pages/HowToUse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/how-to-use" element={<HowToUse />} />
    </Routes>
  );
}

export default App;
