import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCode, FaDatabase, FaCloud, FaProjectDiagram, FaCogs , FaFilePdf} from "react-icons/fa";

const Python = () => {
  const pdfPath = "/PythonFullStack.pdf";
  const modules = [
    { title: "Python Basics", details: "Syntax, Data Types, OOPs, Functions", icon: <FaCode className="w-8 h-8 text-green-600" /> },
    { title: "Web Frameworks", details: "Django, Flask, FastAPI", icon: <FaCogs className="w-8 h-8 text-blue-600" /> },
    { title: "Frontend Development", details: "HTML, CSS, JavaScript, React", icon: <FaCode className="w-8 h-8 text-green-600" /> },
    { title: "Database Management", details: "SQL, PostgreSQL, MongoDB, SQLAlchemy ORM", icon: <FaDatabase className="w-8 h-8 text-blue-600" /> },
    { title: "RESTful APIs", details: "Django REST Framework, Flask APIs, Authentication", icon: <FaCogs className="w-8 h-8 text-green-600" /> },
    { title: "Microservices & Cloud", details: "Docker, Kubernetes, AWS, CI/CD", icon: <FaCloud className="w-8 h-8 text-blue-600" /> },
    { title: "DevOps & Deployment", details: "Jenkins, GitHub Actions, Serverless Deployment", icon: <FaCloud className="w-8 h-8 text-green-600" /> },
    { title: "Capstone Project", details: "Build & Deploy a Full-Stack Python Web App", icon: <FaProjectDiagram className="w-8 h-8 text-blue-600" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r  from-blue-300 to-purple-300 p-4 sm:p-6">
      <div className="bg-white shadow-2xl rounded-lg p-6 sm:p-8 max-w-4xl w-full text-center">
        {/* Course Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Python Full Stack Roadmap</h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Follow this roadmap to master Python Full Stack, covering frontend, backend, databases, and deployment.
        </p>

        {/* Roadmap Section */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">🐍 Learning Path</h2>
          <div className="relative">
            {/* Timeline Line (Hidden on Mobile) */}
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

export default Python;
