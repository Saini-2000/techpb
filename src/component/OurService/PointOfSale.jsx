import React from 'react';
import { FaCashRegister, FaCreditCard, FaUsers, FaChartLine, FaShoppingCart, FaCogs, FaShieldAlt } from 'react-icons/fa';

const POSDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Point of Sale (POS): Streamline Your Sales</h1>
        <p className="text-color-600">Fast, Secure, and Efficient POS Solutions for Your Business</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">What is Our POS Solution?</h2>
        <p className="text-gray-700">
          Our Point of Sale (POS) system is designed to simplify sales, inventory management, and customer interactions. 
          Whether you run a retail store, restaurant, or e-commerce business, our POS solution provides an intuitive interface, real-time analytics, and seamless integration with your operations.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Key Features of Our POS System:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow duration-300 hover:shadow-[0_0px_3px_var(--primary-color)]">
              <feature.icon className="text-[color:var(--primary-color)] text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-medium text-color-600">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8" id="section3">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Benefits of Using Our POS System:</h2>
        <ul className="list-disc list-inside text-color-600 space-y-2">
          <li>Faster and more secure transactions</li>
          <li>Better inventory control and stock management</li>
          <li>Improved customer experience and engagement</li>
          <li>Detailed sales reporting and analytics</li>
          <li>Seamless integration with online stores and accounting</li>
          <li>Scalable to grow with your business</li>
        </ul>
      </section>
    </div>
  );
};

const features = [
  { icon: FaCashRegister, title: "Intuitive Checkout", description: "Quick and easy sales processing with a user-friendly interface." },
  { icon: FaCreditCard, title: "Multiple Payment Options", description: "Accept cash, credit/debit cards, mobile payments, and more." },
  { icon: FaUsers, title: "Customer Management", description: "Track customer purchases, preferences, and loyalty programs." },
  { icon: FaChartLine, title: "Real-Time Sales Analytics", description: "Get insights into sales trends and business performance." },
  { icon: FaShoppingCart, title: "Inventory Tracking", description: "Monitor stock levels and automate reordering." },
  { icon: FaCogs, title: "Customizable Workflows", description: "Adapt the system to your unique business requirements." },
  { icon: FaShieldAlt, title: "Secure Transactions", description: "Ensure data security and fraud prevention with advanced encryption." }
];

export default POSDetails;
