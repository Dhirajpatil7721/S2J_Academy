import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCode, FaDatabase, FaCloud, FaProjectDiagram, FaCogs, FaFilePdf } from "react-icons/fa";

const PHPFullStack = () => {
  const pdfPath = "/phpfullstack.pdf"; // Path to your PDF file in the public folder
  const modules = [
    { title: "PHP Basics", details: "Syntax, Variables, Operators, Control Structures", icon: <FaCode className="w-8 h-8" /> },
    { title: "Object-Oriented PHP", details: "Classes, Objects, Inheritance, Interfaces", icon: <FaCogs className="w-8 h-8" /> },
    { title: "Database & MySQL", details: "CRUD Operations, Joins, PDO, Security", icon: <FaDatabase className="w-8 h-8" /> },
    { title: "Frontend Development", details: "HTML, CSS, JavaScript, Bootstrap, React/Vue.js", icon: <FaCode className="w-8 h-8" /> },
    { title: "Laravel Framework", details: "MVC Architecture, Routing, Blade Templates, Middleware", icon: <FaCogs className="w-8 h-8" /> },
    { title: "APIs & Authentication", details: "RESTful APIs, JWT, OAuth, API Integration", icon: <FaCloud className="w-8 h-8" /> },
    { title: "DevOps & Deployment", details: "Git, Docker, CI/CD, AWS, Apache/Nginx", icon: <FaCloud className="w-8 h-8" /> },
    { title: "Capstone Project", details: "Full Stack Web Application Development", icon: <FaProjectDiagram className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-300 to-purple-300 p-4 sm:p-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 max-w-4xl w-full text-center">
        {/* Course Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">PHP Full Stack Roadmap</h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Master frontend & backend with PHP, Laravel, MySQL, React/Vue.js, APIs, and DevOps.
        </p>

        {/* Roadmap Section */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">🚀 Course Roadmap</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2 hidden sm:block"></div>

            {/* Modules */}
            {modules.map((module, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center mb-6 sm:mb-8`}
              >
                {/* Icon and Content */}
                <div className="w-full sm:w-1/2 px-4">
                  <div className="bg-yellow-100 p-4 sm:p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                    <div className="flex items-center justify-center mb-2 sm:mb-4">
                      {module.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{module.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{module.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Open PDF Button */}
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            <FaFilePdf className="mr-2" /> Open Roadmap PDF
          </a>

          {/* Back to Courses Button */}
          <Link
            to="/"
            className="flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaArrowLeft className="mr-2" /> Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PHPFullStack;
