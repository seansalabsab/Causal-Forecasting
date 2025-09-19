// src/pages/AboutUs.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "../components/dashboard/Header";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
                <button
          onClick={() => navigate("/Dashboard")} // 👈 change this to your actual dashboard route
          className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          ← Back to Dashboard
        </button>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">About Us</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-700">
            Our mission is to optimize supply chain forecasting using AI-driven
            causal analysis and simulation. This platform is built for research
            and practical applications in business operations.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;