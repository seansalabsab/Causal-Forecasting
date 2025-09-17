// src/pages/HowToUse.jsx
import React from "react";
import Header from "../components/dashboard/Header";

const HowToUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h1>
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <p className="text-gray-700">
            This platform allows you to upload data, run forecasting models, and
            view simulations.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Go to Dashboard → Upload Data.</li>
            <li>Check Forecast tab for predictions.</li>
            <li>Explore Causal Analysis for insights.</li>
            <li>Run Simulation to test scenarios.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HowToUse;