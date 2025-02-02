import React from 'react';
import { FaHeartbeat, FaUserNurse, FaClipboardList, FaShieldAlt, FaUserMd, FaCalendarCheck, FaArchive } from 'react-icons/fa';

const ERPNextHealthcareSolution = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Digitize Your Healthcare Business with ERPNext Solution</h1>
        <p className="text-color-600">Optimize Healthcare Operations with Cutting-Edge ERP Technology</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">The Biggest Challenge of Healthcare Businesses</h2>
        <p className="text-gray-700">
          Healthcare industries and businesses such as hospitals, clinics, and dispensaries face the biggest challenge in managing patients, doctors, and resources simultaneously. To overcome this challenge, software or systems are needed to streamline all medical business activities in a productive and efficient manner.
        </p>
        <p className="text-gray-700 mt-4">
          This is only achievable when you choose the best ERPNext Healthcare software, tailored to meet real-time needs and produce optimal outcomes while minimizing costs, time, and effort. ERPNext Healthcare Solution is a comprehensive tool to plan, execute, and manage multiple hospital operations like Appointment Booking, Treatment Planning, Cash Flow Management, Inventory Management, and much more. By centralizing all data across multiple branches, it ensures accurate and streamlined operations for healthcare industries.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Why Choose ERPNext Healthcare Solution?</h2>
        <p className="text-gray-700">
          At NestorBird, we provide a fully digitized ERPNext Healthcare platform that centralizes medical records, billing, and inventory in one place. Our ERP solution boosts hospital industry productivity, saves resources, reduces effort, and provides supervisors with an overview of business expenses, income, and assets. This solution bridges the gap between patients and doctors while improving business operations globally.
        </p>
      </section>

      <section className="mb-8" id="section3">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Benefits of ERPNext Healthcare Software</h2>

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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Features of ERPNext Healthcare</h2>
        <p className="text-gray-700">
          As a customizable open-source solution, ERPNext Healthcare software enables you to revamp and optimize internal processes, making it a perfect fit for your healthcare facility’s unique business style.
        </p>
      </section>
    </div>
  );
};

const benefits = [
  { icon: FaHeartbeat, title: "Online Workflow", description: "Maximize data availability and minimize data loss with an effective online workflow for healthcare industries." },
  { icon: FaUserMd, title: "Best Communication Mode", description: "Keep all concerned healthcare professionals in the loop by interconnecting all departments." },
  { icon: FaShieldAlt, title: "Data Security", description: "Simplify data storage and security while eliminating all risks of data leakage in hospitals/clinics." },
  { icon: FaCalendarCheck, title: "Easy Appointment", description: "Allow patients to book appointments online, saving time and improving efficiency." },
  { icon: FaUserNurse, title: "Patient Portal", description: "Patients can track their appointments, medical reports, and clinical details online, enhancing their healthcare experience." },
  { icon: FaClipboardList, title: "Time-Saving", description: "The online healthcare portal saves patients time and effort by allowing easy appointment scheduling." },
  { icon: FaArchive, title: "Customization", description: "Being an open-source system, ERPNext can be customized to meet the specific requirements of any healthcare facility." }
];

export default ERPNextHealthcareSolution;
