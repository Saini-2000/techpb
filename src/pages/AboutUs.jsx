import React from 'react';
import {Link} from "react-router-dom"
import handyman from "../assets/handyman.jpg"
const AboutUs = () => {
  return (
    <>
    <div className='' style={{backgroundImage:`url(${handyman})`}}>
    <div className='bg-[#000000c2] h-100 pt-20'>
    <div className="min-h-screen text-white mt-2 animate-zoomOutCenter">
      {/* Hero Section */}
      <section className="py-20 bg-black text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          We are a dedicated team, bringing innovation and excellence to every project we handle. Our focus is on delivering quality and building lasting relationships with our clients.
        </p>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 px-8 bg-[#0000007a]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Our Mission */}
          <div className="lg:w-1/2 bg-gray-600 p-4 rounded-xl bg-opacity-30 flex-grow">
            <h2 className="text-4xl font-semibold text-[var(--primary-color)] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300">
              Our mission is to empower our clients with the best solutions and exceed expectations in every way. We are committed to transparency and excellence in everything we do.
            </p>
          </div>

          {/* Our Values */}
          <div className="lg:w-1/2  bg-gray-600 p-4 rounded-xl bg-opacity-30 flex-grow">
            <h2 className="text-4xl font-semibold text-[var(--primary-color)] mb-6">Our Values</h2>
            <ul className="text-lg text-gray-300 space-y-4">
              <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
              <li><strong>Innovation:</strong> We embrace creativity and continuous improvement.</li>
              <li><strong>Excellence:</strong> We strive for the highest standards in our work.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center text-[var(--primary-color)] mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white">John Doe</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white">Jane Smith</h3>
              <p className="text-gray-400">Lead Designer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-700 p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white">Mike Johnson</h3>
              <p className="text-gray-400">Project Manager</p>
            </div>

            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8 bg-[#0000007a] text-center">
        <h2 className="text-4xl font-semibold text-[var(--primary-color)] mb-6">
          Ready to Work with Us?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Contact us today to discuss how we can help with your next project. Our team is ready to bring your vision to life.
        </p>
        <Link
          to="/contact-us"
          className="inline-block py-3 px-6 bg-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] text-white font-semibold rounded-lg"
        >
          Get in Touch
        </Link>
      </section>
    </div>
    </div>
    </div>
    </>
  );
};

export default AboutUs;
