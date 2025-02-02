import React from 'react';
import { FaIndustry, FaCogs, FaWarehouse, FaTruck, FaChartLine, FaClipboardCheck, FaDatabase } from 'react-icons/fa';

const ERPNextManufacturingSolution = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Enhance Your Manufacturing Efficiency with ERPNext</h1>
        <p className="text-color-600">Streamline Operations, Improve Productivity, and Optimize Costs</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Challenges in the Manufacturing Industry</h2>
        <p className="text-gray-700">
          Manufacturing businesses face various challenges, from managing raw materials and production schedules to ensuring efficient supply chain operations. Without a robust system, tracking resources, reducing waste, and maintaining product quality becomes difficult.
        </p>
        <p className="text-gray-700 mt-4">
          ERPNext Manufacturing provides a fully integrated solution to optimize production processes, manage inventory efficiently, and ensure seamless operations with real-time data and analytics. It enables manufacturers to gain control over their production and supply chain, improving overall efficiency and profitability.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Why Choose ERPNext Manufacturing?</h2>
        <p className="text-gray-700">
          Our ERPNext Manufacturing solution offers a centralized platform to manage production planning, quality control, supply chain logistics, and financial tracking. With real-time reporting and automation, manufacturers can increase efficiency, reduce waste, and optimize their workflows effortlessly.
        </p>
      </section>

      <section className="mb-8" id="section3">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Benefits of ERPNext Manufacturing</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transition-shadow duration-300 hover:shadow-[0_0px_3px_var(--primary-color)]">
              <benefit.icon className="text-[color:var(--primary-color)] text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-medium text-color-600">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8" id="section4">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Key Features of ERPNext Manufacturing</h2>
        <p className="text-gray-700">
          ERPNext Manufacturing is an open-source, highly customizable ERP solution designed to meet the unique needs of the manufacturing industry. It helps manufacturers streamline operations, enhance visibility, and scale production effectively.
        </p>
      </section>
    </div>
  );
};

const benefits = [
  { icon: FaIndustry, title: "Production Planning", description: "Optimize resource allocation and track production schedules efficiently." },
  { icon: FaCogs, title: "Automated Workflows", description: "Reduce manual tasks and increase productivity with automation." },
  { icon: FaWarehouse, title: "Inventory Management", description: "Monitor stock levels, avoid shortages, and reduce wastage." },
  { icon: FaTruck, title: "Supply Chain Optimization", description: "Seamless integration with suppliers and logistics partners." },
  { icon: FaChartLine, title: "Real-Time Analytics", description: "Access key production insights to drive better decision-making." },
  { icon: FaClipboardCheck, title: "Quality Control", description: "Ensure product quality with systematic inspections and compliance tracking." },
  { icon: FaDatabase, title: "Centralized Data", description: "Manage all manufacturing processes in a unified platform." }
];

export default ERPNextManufacturingSolution;
