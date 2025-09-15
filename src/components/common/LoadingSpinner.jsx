import React from 'react';

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
    <p className="mt-4 text-lg text-gray-700 font-semibold">Loading Dashboard...</p>
  </div>
);

export default LoadingSpinner;