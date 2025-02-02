import React from 'react';
import { FaChartLine, FaUsers, FaClipboardCheck, FaShieldAlt, FaHandshake, FaCalendarCheck, FaCogs } from 'react-icons/fa';

const ERPNextBusinessConsultancy = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Digitize Your Business with ERPNext Consultancy</h1>
        <p className="text-color-600">Optimize Business Operations with Cutting-Edge ERP Technology</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">The Biggest Challenge of Businesses</h2>
        <p className="text-gray-700">
          Businesses of all sizes face significant challenges in managing operations, resources, and strategic planning. To overcome these challenges, software or systems are needed to streamline all business activities in a productive and efficient manner.
        </p>
        <p className="text-gray-700 mt-4">
          This is only achievable when you choose the best ERPNext Business Consultancy services, tailored to meet real-time needs and produce optimal outcomes while minimizing costs, time, and effort. ERPNext Consultancy provides a comprehensive tool to plan, execute, and manage multiple business operations like Financial Planning, HR Management, Project Management, Inventory Management, and much more. By centralizing all data across multiple departments, it ensures accurate and streamlined operations for businesses.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Why Choose ERPNext Business Consultancy?</h2>
        <p className="text-gray-700">
          At NestorBird, we provide a fully digitized ERPNext Business Consultancy platform that centralizes financial records, HR processes, and inventory in one place. Our ERP solution boosts business productivity, saves resources, reduces effort, and provides supervisors with an overview of business expenses, income, and assets. This solution bridges the gap between departments while improving business operations globally.
        </p>
      </section>

      <section className="mb-8" id="section3">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Benefits of ERPNext Business Consultancy</h2>

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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Features of ERPNext Business Consultancy</h2>
        <p className="text-gray-700">
          As a customizable open-source solution, ERPNext Business Consultancy enables you to revamp and optimize internal processes, making it a perfect fit for your business’s unique requirements.
        </p>
      </section>
    </div>
  );
};

const benefits = [
  { icon: FaChartLine, title: "Business Growth", description: "Streamline operations and drive business growth with data-driven insights." },
  { icon: FaUsers, title: "HR & Payroll Management", description: "Automate HR processes, payroll management, and employee records efficiently." },
  { icon: FaShieldAlt, title: "Data Security", description: "Simplify data storage and security while eliminating all risks of data leakage." },
  { icon: FaCalendarCheck, title: "Project Management", description: "Effectively manage projects, deadlines, and resources with an integrated ERP solution." },
  { icon: FaClipboardCheck, title: "Compliance & Regulations", description: "Ensure compliance with legal and industry standards effortlessly." },
  { icon: FaHandshake, title: "Customer Relationship Management", description: "Enhance customer engagement and streamline CRM operations." },
  { icon: FaCogs, title: "Customization", description: "Being an open-source system, ERPNext can be customized to meet the specific requirements of any business." }
];

export default ERPNextBusinessConsultancy;