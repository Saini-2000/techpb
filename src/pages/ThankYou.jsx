import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">
          Your enquiry has been successfully submitted. We appreciate your interest and will get back to you shortly.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
