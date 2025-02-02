import React, { useState } from 'react';
import { api_url } from '../config';

const HomeFooter = () => {
    
  const base_url = api_url
  // Initialize form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // API call (replace 'https://example.com/api' with your actual endpoint)
    try {
      const response = await fetch(`${base_url}/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          subject: '',
          message: ''
        });
        setSubmitted(true);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <section id="comp-lsvshsim1" className="flex flex-col items-center bg-white" tabIndex="-1">
        <div className="container mx-auto p-8">
          <div className="flex flex-wrap -mx-4">
            <section className="w-full lg:w-1/2 p-6 mb-8 text-[var(--primary-color)]">
              <div className="space-y-7">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-semibold">Let's Discuss<br />Your Next Project</h2>
                </div>
                <p className="text-gray-400 text-lg">Fill out the form, or call us to set up a free in-home consultation.</p>
                <p className="font-bold text-lg">Service Areas:</p>
                <p className="text-gray-400">Mohali, Punjab</p>
                <p className="text-gray-400">India</p>
                <p className="text-gray-100"><a href="techpanjab6@gmail.com" className="text-blue-500">techpanjab6@gmail.com</a></p>
                <p className="text-blue-500">9816455684</p>
              </div>
            </section>
            <section className="w-full lg:w-1/2 px-4 mb-8 text-[var(--primary-color)]">
              <div className="space-y-4 font-medium">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex">
                    <div className="text-lg w-6/12 px-2">
                      <label htmlFor="firstName">First Name*</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-1 border-b bg-transparent border-gray-300 rounded focus:outline-none"
                        required
                        maxLength="100"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text-lg w-6/12 px-2">
                      <label htmlFor="lastName" className="block">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-1 border-b bg-transparent border-gray-300 rounded focus:outline-none"
                        maxLength="100"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-lg w-6/12 px-2">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-1 border-b bg-transparent border-gray-300 rounded focus:outline-none"
                        required
                        pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                        maxLength="250"
                        autoComplete="off"
                      />
                    </div>
                    <div className="text-lg w-6/12 px-2">
                      <label htmlFor="phone" className="block">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-1 border-b border-gray-300 bg-transparent rounded focus:outline-none"
                        maxLength="50"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="px-2 text-lg">
                    <label htmlFor="address" className="block">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-1 border-b border-gray-200 bg-transparent rounded focus:outline-none"
                      maxLength="250"
                      autoComplete="off"
                    />
                  </div>
                  <div className="text-lg px-2">
                    <label htmlFor="subject" className="block">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-1 border-b border-gray-300 bg-transparent rounded focus:outline-none"
                      autoComplete="off"
                    />
                  </div>
                  <div className="text-lg px-2">
                    <label htmlFor="message" className="block">Type your message here...</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-2 border-b bg-transparent border-gray-300 rounded focus:outline-none"
                    />
                  </div>
                  <div className="text-lg px-2">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-[var(--primary-color)] text-white rounded hover:bg-white hover:text-[var(--primary-color)] focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                  {submitted && (
                    <div className="text-center text-gray-200">Thanks for submitting!</div>
                  )}
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeFooter;
