import React from 'react';
import { FaUserTie, FaClock, FaChartPie, FaUsersCog, FaDollarSign, FaClipboardCheck, FaBriefcase } from 'react-icons/fa';

const HRMSDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">HRMS Solutions: Empower Your Workforce</h1>
        <p className="text-color-600">A Comprehensive Human Resource Management System for Your Business</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">What is HRMS?</h2>
        <p className="text-gray-700">
          HRMS (Human Resource Management System) is a powerful software solution designed to streamline HR operations
          and improve organizational efficiency. From employee management and payroll to attendance tracking and performance evaluations,
          HRMS offers a comprehensive platform that optimizes your workforce, enhances employee satisfaction, and simplifies administrative tasks.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Key Features of Our HRMS Service:</h2>
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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Benefits of Using Our HRMS Service:</h2>
        <ul className="list-disc list-inside text-color-600 space-y-2">
          <li>Automated HR processes and reduced paperwork</li>
          <li>Accurate payroll and tax calculations</li>
          <li>Improved employee satisfaction and engagement</li>
          <li>Better workforce planning and performance tracking</li>
          <li>Seamless leave and attendance management</li>
          <li>Data-driven HR insights for strategic decision-making</li>
        </ul>
      </section>
    </div>
  );
};

const features = [
  { icon: FaUserTie, title: "Employee Management", description: "Manage employee records, profiles, and HR documentation efficiently." },
  { icon: FaClock, title: "Attendance & Leave Tracking", description: "Monitor employee attendance and automate leave requests seamlessly." },
  { icon: FaChartPie, title: "Performance Management", description: "Track performance reviews, set goals, and evaluate employee growth." },
  { icon: FaUsersCog, title: "Recruitment & Onboarding", description: "Simplify hiring processes and ensure smooth employee onboarding." },
  { icon: FaDollarSign, title: "Payroll & Compensation", description: "Automate payroll, salary structures, and tax calculations accurately." },
  { icon: FaClipboardCheck, title: "Compliance & Policy Management", description: "Ensure adherence to labor laws and company policies with ease." },
  { icon: FaBriefcase, title: "Employee Self-Service", description: "Empower employees with self-service portals for HR requests." }
];

export default HRMSDetails;
