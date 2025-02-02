import React from 'react';
import { FaUserTie, FaClock, FaChartPie, FaUsersCog, FaDollarSign, FaClipboardCheck, FaBriefcase } from 'react-icons/fa';

const CRMDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">CRM Solutions: Accelerate Customer Relationships</h1>
        <p className="text-color-600">A Comprehensive Customer Relationship Management System for Your Business</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">What is CRM?</h2>
        <p className="text-gray-700">
          CRM (Customer Relationship Management) is a powerful solution designed to help businesses manage and analyze
          customer interactions and data. It enables businesses to build strong relationships with their customers, optimize sales
          processes, and enhance customer support. From lead management to after-sales service, CRM offers the tools you need to
          accelerate your customer relationships.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Key Features of Our CRM Service:</h2>
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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Benefits of Using Our CRM Service:</h2>
        <ul className="list-disc list-inside text-color-600 space-y-2">
          <li>Streamlined customer communication and relationship management</li>
          <li>Enhanced sales pipeline visibility and lead management</li>
          <li>Improved customer service and support response times</li>
          <li>Increased customer retention and satisfaction</li>
          <li>Data-driven insights for informed decision-making</li>
          <li>Automated workflows to reduce manual efforts</li>
        </ul>
      </section>
    </div>
  );
};

const features = [
  { icon: FaUserTie, title: "Lead & Opportunity Management", description: "Track leads, opportunities, and sales progress from prospect to closure." },
  { icon: FaClock, title: "Sales & Activity Tracking", description: "Monitor sales team performance and keep track of customer interactions." },
  { icon: FaChartPie, title: "Customer Insights & Analytics", description: "Gain valuable insights into customer behaviors, sales trends, and opportunities." },
  { icon: FaUsersCog, title: "Customer Support & Service", description: "Provide exceptional customer support with ticketing, case management, and knowledge base." },
  { icon: FaDollarSign, title: "Billing & Invoicing", description: "Generate invoices, track payments, and manage customer billing cycles effortlessly." },
  { icon: FaClipboardCheck, title: "Marketing Automation", description: "Automate marketing campaigns, emails, and follow-ups for higher engagement." },
  { icon: FaBriefcase, title: "Customer Portal", description: "Empower customers with a self-service portal for inquiries, orders, and support." }
];

export default CRMDetails;
