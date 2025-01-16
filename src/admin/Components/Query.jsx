import React from 'react'

const Query = ({ firstName, lastName, email, phone, address, subject, message }) => {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex">
        <div className="flex-grow rounded-xl overflow-hidden shadow-lg p-6 bg-white border border-gray-200 transform transition duration-500 hover:scale-105">
          <div className="text-center mb-4">
            <div className="inline-block bg-indigo-100 text-indigo-600 rounded-full p-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 010 5.656m1.414-1.414a4 4 0 010-5.656M12 3v1m0 16v1m8.485-8.485h-1M4.929 12H3.515M19.071 19.071l-.707-.707M5.636 5.636l-.707-.707M12 5.828a4 4 0 100 8.344 4 4 0 000-8.344z"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">{firstName} {lastName}</h2>
          <div className="text-gray-600 space-y-2">
            <p><span className="font-medium">Email:</span> {email}</p>
            <p><span className="font-medium">Phone:</span> {phone}</p>
            <p><span className="font-medium">Address:</span> {address}</p>
            <p><span className="font-medium">Subject:</span> {subject}</p>
            <p><span className="font-medium">Message:</span> {message}</p>
          </div>
        </div>
      </div>
    );
  };

export default Query
