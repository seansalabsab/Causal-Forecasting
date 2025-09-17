// src/pages/Profile.jsx
import React from "react";
import Header from "../components/dashboard/Header";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
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