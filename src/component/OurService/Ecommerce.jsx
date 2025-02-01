import React from 'react';
import { FaCode, FaShoppingCart, FaMobileAlt, FaSearch, FaShieldAlt, FaServer } from 'react-icons/fa';

const EcommerceServices = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
     <nav className=" text-white ">
     </nav>
      <header className="text-center mb-12 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Our E-commerce Development Services</h1>
        <p className="text-gray-600 mt-2">Empowering businesses with scalable and high-performing e-commerce solutions</p>
      </header>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-[color:var(--primary-color)] mb-4">Why Choose Our Services?</h2>
        <p className="text-gray-700 mx-auto max-w-2xl">
          We provide cutting-edge e-commerce development solutions to help businesses grow, increase sales, and enhance customer experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[color:var(--primary-color)] mb-6 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow duration-300 hover:shadow-[0_0px_3px_var(--primary-color)]">
              <service.icon className="text-[color:var(--primary-color)] text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <footer className="text-center mt-12 text-gray-600 text-lg">
        <p>Let's build your e-commerce success together! Contact us at 
          <a href="https://yourcompany.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">YourCompany.com</a>
        </p>
      </footer> */}
    </div>
  );
};

const services = [
  { icon: FaCode, title: "Custom E-commerce Development", description: "Tailor-made solutions to fit your unique business needs." },
  { icon: FaShoppingCart, title: "Platform Development", description: "Building stores on Shopify, Magento, WooCommerce, and more." },
  { icon: FaMobileAlt, title: "Mobile Commerce", description: "Responsive and mobile-friendly e-commerce experiences." },
  { icon: FaSearch, title: "SEO & Marketing", description: "Optimized for search engines and digital marketing integration." },
  { icon: FaShieldAlt, title: "Secure Payments & Data Protection", description: "Ensuring safe transactions and customer trust." },
  { icon: FaServer, title: "Hosting & Maintenance", description: "Reliable infrastructure with ongoing support." }
];

export default EcommerceServices;
