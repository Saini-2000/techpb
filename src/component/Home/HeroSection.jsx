import React from 'react'
import {Link} from 'react-router-dom'
const HeroSection = () => {
  return (
    <section
    className="relative h-screen flex items-center justify-center bg-dark bg-cover bg-center fadeIn "
    style={{minHeight:"500px", animationDelay: '100ms' }}
  >
    
    <div className="absolute inset-0 z-0">
      <video
        className="object-cover w-full h-full "
        src="https://cdn.pixabay.com/video/2021/07/12/81188-576082864_large.mp4"
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="container mx-auto px-4 z-10 text-start min-h-[var(500)]">
      <div className="w-full lg:w-1/2 ">
      <p className="text-white text-lg mb-6">
LET'S GET TO WORK        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[var(--primary-color)] z-10">YOUR BUSINESS ,<br/> OUR PRIORITY</h2>
        <p className="text-white text-lg mb-6 z-10">
        Empowering your business with solutions that make it our top priority.
        </p>
        <div className="flex  items-center space-x-4 mb-4">
          {/* <a href="#" className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[var(--primary-color)]">
            Get a quote
          </a> */}
          <Link to="/about-us" className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600">
            Learn More
          </Link>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default HeroSection
