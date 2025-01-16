import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import handyman from "../assets/handyman.jpg"
import { api_url } from '../config';

const ContactUs = () => {
  const Navigate = useNavigate()
  const base_url = api_url
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
    try {
      const response = await fetch(`${base_url}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      const data = await response.json();
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: ''
      })
      Navigate('/thankyou')
    } catch (error) {
      setError(error.message);
    }
    console.log(formData);
  };

  return (
    <div style={{backgroundImage:`url(${handyman})`}}>
    <div  className="min-h-screen bg-[#000000c2] text-white flex justify-center items-center py-10">
      
      <div className="bg-gray-700 bg-opacity-30 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-2xl w-full mt-14 animate-zoomOutCenter">
        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--primary-color)]">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {/* Flex container for first and last name */}
          <div className="flex flex-wrap md:flex-nowrap justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Flex container for email and phone */}
          <div className="flex flex-wrap md:flex-nowrap justify-between mt-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Address field */}
          <div className="mt-4">
            <label htmlFor="address" className="block text-sm font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject field */}
          <div className="mt-4">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message textarea */}
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
