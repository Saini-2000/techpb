import React, { useEffect } from "react";
import handyman from "../../assets/handyman.jpg";
const CustomerReviews = () => {

  // useEffect(() => {
    // const section = document.getElementById('reviews-section');
    // const reviewItems = document.querySelectorAll('.review-item');

    // const handleScroll = () => {
    //   const sectionTop = section.getBoundingClientRect().top;
    //   const triggerBottom = window.innerHeight * 0.9;

    //   if (sectionTop < triggerBottom) {
    //     reviewItems.forEach((item, index) => {
    //       setTimeout(() => {
    //         item.classList.add('show');
    //       }, index * 200); // Adjust the delay as needed
    //     });
    //   }
    // };

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  // }, []);


  return (
    <>
      <section style={{ backgroundImage: `url(${handyman})` }}>
        <div className="py-8">
          <div className="text-center text-[var(--primary-color)] py-4 flex items-center justify-evenly mb-4">
            <div className="w-1/4 border border-[var(--primary-color)]"></div>
            <h2 className="text-4xl font-bold leading-tight">
              Our Satisfied Customer
            </h2>
            <div className="w-1/4 border border-[var(--primary-color)]"></div>
          </div>
          <div className="flex flex-wrap justify-center py-8">
            <div
              className="w-full md:w-1/3 lg:w-1/4 p-4 review-item"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="p-4 flex items-center flex-col">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="-0.02 -0.005 54.82 38.305"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-8 w-8"
                  >
                    <g>
                      <path d="M2.1 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.4-.8-2.6-2.1-3.3-3.7C.3 16.4 0 14.5 0 12.7-.2 9.3 1.1 6 3.4 3.5 5.7 1.2 8.8-.1 12 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                      <path d="M33.4 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.5-.9-2.6-2.2-3.3-3.8-.8-1.7-1.1-3.6-1.1-5.4-.2-3.4 1.1-6.7 3.4-9.2C37 1.2 40.1-.1 43.3 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                    </g>
                  </svg>
                  <p className="my-4 w-10/12 text-gray-600 text-md">
                    “I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services. Let your
                    customers review you and tell their friends how great you
                    are.”
                  </p>
                  <p className="mt-2 text-[var(--primary-color)] text-xl font-bold">
                    Dave Reddington
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-1/3 lg:w-1/4 p-4 review-item"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="p-4 flex flex-col items-center">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="-0.02 -0.005 54.82 38.305"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-8 w-8"
                  >
                    <g>
                      <path d="M2.1 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.4-.8-2.6-2.1-3.3-3.7C.3 16.4 0 14.5 0 12.7-.2 9.3 1.1 6 3.4 3.5 5.7 1.2 8.8-.1 12 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                      <path d="M33.4 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.5-.9-2.6-2.2-3.3-3.8-.8-1.7-1.1-3.6-1.1-5.4-.2-3.4 1.1-6.7 3.4-9.2C37 1.2 40.1-.1 43.3 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                    </g>
                  </svg>
                  <p className="my-4 w-10/12 text-gray-600 text-md">
                    “I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services. Let your
                    customers review you and tell their friends how great you
                    are.”
                  </p>
                  <p className="mt-2 text-[var(--primary-color)] text-xl font-bold">
                    Amelia Banks
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-full md:w-1/3 lg:w-1/4 p-4 review-item"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="p-4 flex flex-col items-center">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="-0.02 -0.005 54.82 38.305"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-8 w-8"
                  >
                    <g>
                      <path d="M2.1 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.4-.8-2.6-2.1-3.3-3.7C.3 16.4 0 14.5 0 12.7-.2 9.3 1.1 6 3.4 3.5 5.7 1.2 8.8-.1 12 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                      <path d="M33.4 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.5-.9-2.6-2.2-3.3-3.8-.8-1.7-1.1-3.6-1.1-5.4-.2-3.4 1.1-6.7 3.4-9.2C37 1.2 40.1-.1 43.3 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                    </g>
                  </svg>
                  <p className="my-4 text-gray-600 w-10/12 text-md">
                    “I'm a testimonial. Click to edit me and add text that says
                    something nice about you and your services. Let your
                    customers review you and tell their friends how great you
                    are.”
                  </p>
                  <p className="mt-2 text-[var(--primary-color)] text-xl font-bold">
                    James Lannister
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
