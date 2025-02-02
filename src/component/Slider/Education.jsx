import React from 'react';
import { FaBook, FaUsers, FaClipboardCheck, FaShieldAlt, FaChalkboardTeacher, FaCalendarCheck, FaCogs } from 'react-icons/fa';

const ERPNextEducation = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="text-center mb-8 mt-32">
        <h1 className="text-4xl font-bold text-[color:var(--primary-color)]">Digitizing Education with ERPNext</h1>
        <p className="text-color-600">The Best Academic ERP Software</p>
      </header>

      <section className="mb-8" id="section1">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Transforming Education Management</h2>
        <p className="text-gray-700">
          Educational institutions face challenges in managing administrative tasks like admissions, exams, fees, attendance, and more. Manual processes consume time and create inefficiencies that impact the overall academic system.
        </p>
        <p className="text-gray-700 mt-4">
          NestorBird’s ERPNext Education software is the best solution to streamline and digitize administrative operations. This software eliminates paperwork and automates student admissions, attendance tracking, examinations, fee payments, grade books, school calendars, libraries, transportation, and more.
        </p>
      </section>

      <section className="mb-8" id="section2">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Why Choose ERPNext Education?</h2>
        <p className="text-gray-700">
          With ERPNext Education, institutions can seamlessly manage student lifecycles, automate workflows, and provide real-time access to essential data. Teachers, students, and parents benefit from an easy-to-use interface, ensuring smooth academic management and collaboration.
        </p>
      </section>

      <section className="mb-8" id="section3">
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-6">Benefits of ERPNext Education Software</h2>

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
        <h2 className="text-2xl font-semibold text-[color:var(--primary-color)] mb-4">Features of ERPNext Education</h2>
        <p className="text-gray-700">
          ERPNext Education software offers automation, real-time data access, advanced reporting, curriculum planning, and 100% data accuracy to revolutionize academic institutions.
        </p>
      </section>
    </div>
  );
};

const benefits = [
  { icon: FaBook, title: "Automation", description: "Automate admissions, attendance, and grading for streamlined operations." },
  { icon: FaUsers, title: "Student Lifecycle Management", description: "Track student progress from enrollment to graduation." },
  { icon: FaClipboardCheck, title: "Advanced Reporting", description: "Generate insightful reports to improve academic performance." },
  { icon: FaShieldAlt, title: "Data Security", description: "Ensure student and institutional data security with ERPNext." },
  { icon: FaChalkboardTeacher, title: "Teacher Training & Development", description: "Facilitate teacher growth with structured training modules." },
  { icon: FaCalendarCheck, title: "Curriculum Planning", description: "Plan and schedule courses effectively with a robust ERP system." },
  { icon: FaCogs, title: "Customization", description: "Tailor ERPNext to fit the unique needs of your institution." }
];

export default ERPNextEducation;
