// src/pages/Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "../components/dashboard/Header";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Back Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back to Dashboard
          </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-700">
            This is your profile page. You can display user info here.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;