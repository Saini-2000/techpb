import React from 'react';
import { FaStore, FaBoxOpen, FaShoppingCart, FaTruck, FaTag, FaDollarSign, FaWarehouse } from 'react-icons/fa';

const RetailServicesDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Retail Services: Streamline Your Retail Operations</h1>
        <p className="text-color-600">Comprehensive Retail Solutions to Enhance Your Business</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">What Are Retail Services?</h2>
        <p className="text-gray-700">
          Retail services encompass a range of solutions designed to help businesses manage their retail operations effectively.
          From inventory management and order fulfillment to customer service and sales optimization, our retail services
          provide businesses with the tools needed to enhance operational efficiency, improve customer satisfaction, and boost sales.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Key Features of Our Retail Services:</h2>
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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Benefits of Using Our Retail Services:</h2>
        <ul className="list-disc list-inside text-color-600 space-y-2">
          <li>Efficient inventory and stock management</li>
          <li>Faster order fulfillment and delivery</li>
          <li>Improved customer experience and support</li>
          <li>Optimized pricing and promotional strategies</li>
          <li>Streamlined retail operations and workflows</li>
          <li>Data-driven insights to drive sales and growth</li>
        </ul>
      </section>
    </div>
  );
};

const features = [
  { icon: FaStore, title: "Retail Management", description: "Manage all aspects of your retail business, from store operations to customer service." },
  { icon: FaBoxOpen, title: "Inventory Management", description: "Track and manage your stock levels, reordering, and stock movements with ease." },
  { icon: FaShoppingCart, title: "Order Fulfillment", description: "Ensure smooth and timely order processing, packing, and shipping to your customers." },
  { icon: FaTruck, title: "Logistics & Delivery", description: "Optimize shipping routes, manage delivery schedules, and track orders in real-time." },
  { icon: FaTag, title: "Pricing & Promotions", description: "Implement dynamic pricing and promotional campaigns to boost sales and attract customers." },
  { icon: FaDollarSign, title: "Point of Sale (POS)", description: "Streamline sales transactions and manage customer purchases efficiently." },
  { icon: FaWarehouse, title: "Warehouse Management", description: "Manage warehousing, storage, and distribution to ensure smooth product flow." }
];

export default RetailServicesDetails;
