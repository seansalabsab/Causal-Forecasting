// src/components/dashboard/Header.jsx
import React, { useState } from "react";
import { BarChart3, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side - Logo / Title */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600">
              Causal Forecasting & Simulation Platform
            </p>
          </div>
        </div>

        {/* Right side - Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <span className="font-medium text-gray-700">Menu</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/how-to-use"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                How to Use
              </Link>
              <Link
                to="/about-us"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                onClick={() => {
                  setOpen(false);
                  console.log("Logging out...");
                }}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;