import React from 'react';
import { FaPuzzlePiece, FaChartLine, FaUsers, FaShoppingCart, FaWarehouse, FaMoneyBill, FaUserCog } from 'react-icons/fa';

const ErpnextDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Navbar with background color */}
      <nav className=" text-white ">
      </nav>

      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">ERPNext: Streamline Your Business</h1>
        <p className="text-color-600">A Modern, Open-Source ERP System</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">What is ERPNext?</h2>
        <p className="text-gray-700">
          ERPNext is a powerful, open-source Enterprise Resource Planning (ERP) system. 
          It’s designed to help businesses manage and automate their core processes, from accounting and finance to sales, 
          inventory, and human resources. It provides a unified platform for all your business needs, improving efficiency and reducing complexity.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">How ERPNext Simplifies Your Enterprise:</h2>
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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Benefits of Using ERPNext:</h2>
        <ul className="list-disc list-inside text-color-600 space-y-2">
          <li>Improved operational efficiency</li>
          <li>Reduced manual data entry and human error</li>
          <li>Better business insights through real-time data</li>
          <li>Enhanced communication and collaboration</li>
          <li>Scalable and adaptable to growing businesses</li>
          <li>Cost-effective solution compared to proprietary ERPs</li>
        </ul>
      </section>

    </div>
  );
};

const features = [
  { icon: FaPuzzlePiece, title: "Integrated Modules", description: "All business processes in one system, eliminating data silos and increasing visibility." },
  { icon: FaChartLine, title: "Real-Time Reporting", description: "Access accurate, up-to-date insights into your business performance, enabling better decision-making." },
  { icon: FaUsers, title: "Human Resource Management", description: "Efficiently manage employee information, payroll, leave, and attendance." },
  { icon: FaShoppingCart, title: "Sales and CRM", description: "Manage leads, sales orders, customer relationships, and post-sales activities effectively." },
  { icon: FaWarehouse, title: "Inventory Management", description: "Keep track of your stock, monitor inventory levels, and manage the flow of goods." },
  { icon: FaMoneyBill, title: "Accounting and Finance", description: "Handle all financial transactions, manage invoices, and generate financial reports." },
  { icon: FaUserCog, title: "Customizable", description: "Adapt ERPNext to your specific needs with custom fields, workflows, and integrations." }
];

export default ErpnextDetails;
