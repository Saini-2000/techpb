// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-600">Oops! Page not found.</p>
        <Link to="/" className="mt-6 inline-block bg-[var(--primary-color)] text-white px-4 py-2 rounded hover:bg-blue-600">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
