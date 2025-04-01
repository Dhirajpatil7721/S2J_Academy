import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaDatabase, FaServer, FaLock, FaChartBar, FaFilePdf, FaProjectDiagram } from "react-icons/fa";

const Database = () => {
  const pdfPath = "/Database.pdf"; // Add the roadmap PDF to the public folder

  const modules = [
    { title: "Fundamentals", details: "What is a Database? RDBMS vs. NoSQL", icon: <FaProjectDiagram className="w-8 h-8" /> },
    { title: "SQL Basics", details: "DDL, DML, Joins, Constraints, Subqueries", icon: <FaDatabase className="w-8 h-8" /> },
    { title: "Database Design", details: "Normalization, Indexing, Relationships", icon: <FaServer className="w-8 h-8" /> },
    { title: "Advanced SQL", details: "Stored Procedures, Triggers, Views", icon: <FaChartBar className="w-8 h-8" /> },
    { title: "NoSQL Databases", details: "MongoDB, Firebase, Redis, Cassandra", icon: <FaDatabase className="w-8 h-8" /> },
    { title: "Optimization & Security", details: "Query Optimization, Caching, Backups", icon: <FaLock className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-300 to-purple-300 p-4 sm:p-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Database Roadmap</h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Master relational and NoSQL databases, optimization, security, and deployment.
        </p>

        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">🚀 Course Roadmap</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2 hidden sm:block"></div>

            {modules.map((module, index) => (
              <div key={index} className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center mb-6 sm:mb-8`}>
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

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300">
            <FaFilePdf className="mr-2" /> Open Roadmap PDF
          </a>

          <Link to="/" className="flex items-center px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <FaArrowLeft className="mr-2" /> Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Database;
