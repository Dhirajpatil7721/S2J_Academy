import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import s2j from "../Images/s2j.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  return (
    <footer className="bg-gray-300 text-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Get in Touch */}
          <div className="flex flex-col items-center md:items-start">
            <img src={s2j} alt="Saksham 2 Java Logo" className="w-28 h-auto mb-4 mx-auto md:mx-0" />
            <div className="flex justify-center md:justify-start space-x-4 mt-3">
              {[
                { name: faFacebook, path: "https://www.facebook.com/profile.php?id=61574817923337" },
                { name: faTwitter, path: "https://x.com/Saksham2Java" },
                { name: faLinkedin, path: "https://www.linkedin.com/in/saksham2java-academy-24a875358" },
                { name: faInstagram, path: "https://www.instagram.com/s2j_academy?igsh=bmFoMmc0cWkwaWM3" }
              ].map((icon, index) => (
                <a
                  key={index}
                  href={icon.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500 transition duration-300"
                >
                  <FontAwesomeIcon icon={icon.name} className="text-2xl" />
                </a>
              ))}
            </div>
            
            <p className="mt-2"><a href="mailto:saksham2java@gmail.com" className="text-blue-600">saksham2java@gmail.com</a></p>
            <p className="text-center mt-1"><a href="tel:+918010540275" className="text-blue-600">+91 8010540275</a></p>
          </div>

          {/* Useful Links */}
          <div>
            <button
              className="w-full flex justify-between items-center text-xl font-semibold text-gray-900 hover:text-blue-600 md:cursor-default text-center"
              onClick={() => setShowLinks(!showLinks)}
            >
              Useful Links
            </button>
            <ul className={`mt-3 space-y-2 ${showLinks ? "block" : "hidden"} md:block`}>
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Batches", path: "/batches" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Jobs", path: "/job" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <button
              className="w-full flex justify-between items-center text-xl font-semibold text-gray-900 hover:text-blue-600 md:cursor-default"
              onClick={() => setShowCourses(!showCourses)}
            >
              Our Courses
            </button>
            <div className={`mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 ${showCourses ? "block" : "hidden"} md:grid`}>
              {[
                { name: "Java Full Stack", path: "/java" },
                { name: "Python Full Stack", path: "/python" },
                { name: "PHP Full Stack", path: "/Phpfullstack" },
                { name: "Cloud Computing", path: "/cloud" },
                { name: "Data Analyst", path: "/dataanalytics" },
                { name: "Angular", path: "/angular" },
                { name: "ReactJs", path: "/react" },
                { name: "Frontend", path: "/frontend" },
                { name: "Database", path: "/database" },
                { name: "C, C++", path: "/ccpp" },
              ].map((course, index) => (
                <Link
                  key={index}
                  to={course.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-400 mt-10 pt-6 text-center">
          <p className="text-gray-700">&copy; {new Date().getFullYear()} Saksham 2 Java Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
