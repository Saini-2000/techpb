import React from 'react';
import { FaBullhorn, FaChartLine, FaLaptop, FaMobileAlt, FaSearch, FaUsers } from 'react-icons/fa';

const DigitalMarketingServices = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
     <nav className=" text-white ">
     </nav>
      <header className="text-center mb-12 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Our Digital Marketing Services</h1>
        <p className="text-gray-600 mt-2">Helping businesses grow online with data-driven marketing strategies</p>
      </header>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-[color:var(--primary-color)] mb-4">Why Choose Our Services?</h2>
        <p className="text-gray-700 mx-auto max-w-2xl">
          We offer comprehensive digital marketing solutions to increase your brand visibility, drive traffic, and generate leads effectively.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[color:var(--primary-color)] mb-6 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow duration-300 hover:shadow-[0_0px_3px_var(--primary-color)] ">
              <service.icon className="text-[color:var(--primary-color)] text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <footer className="text-center mt-12 text-gray-600 text-lg">
        <p>Boost your online presence today! Contact us at 
          <a href="https://yourcompany.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">YourCompany.com</a>
        </p>
      </footer> */}
    </div>
  );
};

const services = [
  { icon: FaSearch, title: "SEO Optimization", description: "Improve search rankings and increase organic traffic." },
  { icon: FaBullhorn, title: "Social Media Marketing", description: "Engage and grow your audience on major platforms." },
  { icon: FaChartLine, title: "Pay-Per-Click Advertising", description: "Drive instant traffic with strategic ad campaigns." },
  { icon: FaMobileAlt, title: "Mobile Marketing", description: "Optimize for mobile users and increase conversions." },
  { icon: FaUsers, title: "Content Marketing", description: "Create valuable content to attract and retain customers." },
  { icon: FaLaptop, title: "Email Marketing", description: "Personalized email campaigns for lead nurturing." }
];

export default DigitalMarketingServices;
