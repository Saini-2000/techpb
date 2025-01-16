import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import FeedbackModal from "./FeedbackModal";
const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };

  const location = useLocation();
  const path = location.pathname.split("/");
  const currPath = path[1];

  useEffect(() => {
    if (isMobileView) {
      // Prevent body scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scrolling
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Cleanup function
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [isMobileView]);
  return (
    <div>
      <FeedbackModal
        isOpen={feedbackModal}
        onClose={() => setFeedbackModal(false)}
      />
    
      <section className="bg-#6b728063 absolute w-full z-10 t-10 flex justify-between px-6 pt-2 backdrop-blur-sm">
        <div className="flex justify-start items-center">
          <div className="w-auto text-[var(--primary-color)]">
            <a
              href="/"
              rel="home"
              className=" flex items-center font-bold text-xl"
              style={{
                fontFamily: '"Kaushan Script", cursive',
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              <img src={logo} alt="Mezan" className="w-auto h-20" />
              {/* <p>GG BROTHERS</p> */}
            </a>
          </div>
        </div>
        <div className=" text-white flex items-center">
          <nav className="hidden md:flex items-center">
            <ul className="flex flex-col md:flex-row items-center md:space-y-0 md:space-x-4 lg:text-xl">
              <li>
                <Link
                  to="/"
                  className={`block p-4 hover:text-[var(--primary-color)] ${
                    currPath == ""
                      ? "text-[var(--primary-color)]"
                      : "text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`block p-4 hover:text-[var(--primary-color)] ${
                    currPath == "about-us"
                      ? "text-[var(--primary-color)]"
                      : "text-white"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="/services"
                  className={`block p-4 hover:text-[var(--primary-color)] ${
                    currPath == "services"
                      ? "text-[var(--primary-color)]"
                      : "text-white"
                  }`}
                >
                  Services
                </Link>
                {/* <a href="/" className="block p-4 hover:text-[var(--primary-color)]">Services</a> */}
              </li>
              <li className="relative group">
                <Link
                  to="/work"
                  className={`block p-4 hover:text-[var(--primary-color)] ${
                    currPath == "work"
                      ? "text-[var(--primary-color)]"
                      : "text-white"
                  }`}
                >
                  Work
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="/contact-us"
                  className={`block p-4 hover:text-[var(--primary-color)] ${
                    currPath == "contact-us"
                      ? "text-[var(--primary-color)]"
                      : "text-white"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li className="relative group">
                <Link
                  to="/admin"
                  className={`block p-4 hover:text-[var(--primary-color)] `}
                >
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center">
          <div className="hidden sm:block text-center">
            <button
              onClick={() => setFeedbackModal(true)}
              className="bg-[var(--primary-color)] px-6 font-semibold py-3 rounded-3xl shadow hover:bg-white hover:text-[var(--primary-color)] transition"
            >
              Share a thought{" "}
            </button>
          </div>

          <div
            className={`fixed bottom-0 left-0 inset-0 h-100 bg-gray-800k bg-black bg-opacity-50m transition-opacity ${
              isMobileView ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMobileView}
          ></div>
          <div className="md:hidden flex items-center px-4 relative">
            <div
              className="menu-trigger flex items-center text-white"
              onClick={toggleMobileView}
            >
              <i className="text-3xl fa-solid fa-bars "></i>
            </div>

           
          </div>
        </div>
      </section>
       <div className={`fixed w-[100vw] h-[100vh] z-40 bg-gray-800 bg-opacity-50 transition-opacity ${
              isMobileView ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMobileView}></div>
            {/* <div className="absolute w-full h-full bg-black top-0 right-0 z-50">
            </div> */}
             <nav
              className={`absolute top-6 right-6 z-50 w-64 rounded-lg  bg-[var(--primary-color)] shadow-lg transform transition-transform duration-300 ease-in-out ${
                isMobileView ? "translate-x-0" : "translate-x-full"
              }`}
            >
             
              <ul
                className={`py-4 ${
                  isMobileView ? "block" : "hidden"
                } w-64 text-lg text-white`}
              >
                <li
                  className="menu-item flex items-center justify-end px-4 "
                  onClick={toggleMobileView}
                >
                  <i className="text-3xl fa-solid fa-x ease-in-out"></i>
                </li>
                <li className="menu-item">
                  <Link
                    to="/"
                    className={`flex items-center justify-center border-b-2 py-3 ${ currPath == ""
                      ? "text-black font-semibold"
                      : "text-white"}`}                    onClick={toggleMobileView}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/about-us"
                    className={`flex items-center justify-center border-b-2 py-3 ${ currPath == "about-us"
                      ? "text-black font-semibold"
                      : "text-white"}`}                    onClick={toggleMobileView}
                  >
                    About Us
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/services"
                    className={`flex items-center justify-center border-b-2 py-3 ${ currPath == "services"
                      ? "text-black font-semibold"
                      : "text-white"}`}
                    onClick={toggleMobileView}
                  >
                    Service
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/work"
                    className={`flex items-center justify-center border-b-2 py-3 ${ currPath == "work"
                      ? "text-black font-semibold"
                      : "text-white"}`}   
                                       onClick={toggleMobileView}
                  >
                    Work
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/contact-us"
                    className={`flex items-center justify-center border-b-2 py-3 ${ currPath == "contact-us"
                      ? "text-black font-semibold"
                      : "text-white"}`}                    onClick={toggleMobileView}
                  >
                    Contact
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/admin"
                    className="flex items-center justify-center border-b-2 py-3"
                    onClick={toggleMobileView}
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </nav>
    </div>
  );
};

export default Header;
