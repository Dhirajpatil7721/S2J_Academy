import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Users, BookOpen, UserCheck, Briefcase, CheckCircle, Award } from "lucide-react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import slide4 from "../Images/slide4.jpg";

import comu from "../Images/Communication.jpg";
import indust from "../Images/Industry.png";
import expert from "../Images/Expert.png";
import place from "../Images/Placeent.png";
import techno from "../Images/techno.jpeg";
import mock from "../Images/mock.jpeg";

import Kalyanimam2 from "../Images/kalyanimam.jpg";
import Communication from "../Images/Communication.jpg";
import problemsolving from "../Images/problemsolving.jpg";
import thinkingabality from "../Images/thinkingabality.jpg";
import programing from "../Images/programing.jpg";
import react from "../Images/react1.jpg";
import angular from "../Images/angular2.avif";
import python from "../Images/python1.jpg";
import javascript from "../Images/html2.avif";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    image: programing,
    alt: "Java Programming Lab",
    title: "Java Programming Lab",
    description:
      "Experience hands-on learning in our Java Programming Lab. Master OOP, data structures, and design patterns through interactive projects and real-world challenges.",
  },
  {
    image: Communication,
    alt: "Data Analytics Lab",
    title: "Data Analytics Lab",
    description:
      "Unlock insights with our Data Analytics Lab. Learn data visualization, statistical analysis, and predictive modeling using state-of-the-art tools to drive strategic decisions.",
  },
  {
    image: react,
    alt: "React Development Lab",
    title: "React Development Lab",
    description:
      "Step into our React Development Lab and learn to build dynamic user interfaces. Master components, hooks, and state management to create modern web apps.",
  },
  {
    image: angular,
    alt: "Angular Development Lab",
    title: "Angular Development Lab",
    description:
      "Join our Angular Development Lab to learn how to build scalable, high-performance web applications using Angular's robust architecture.",
  },
  {
    image: python,
    alt: "Python Programming Lab",
    title: "Python Programming Lab",
    description:
      "Explore the versatility of Python in our Python Programming Lab. From web development to data analysis and automation, build your skills through hands-on projects.",
  },
  {
    image: problemsolving,
    alt: "PHP Development Lab",
    title: "PHP Development Lab",
    description:
      "Build dynamic web applications in our PHP Development Lab. Gain practical experience with PHP and popular frameworks like Laravel while tackling real-world projects.",
  },
  {
    image: programing,
    alt: "HTML & CSS Lab",
    title: "HTML & CSS Lab",
    description:
      "Learn the fundamentals of web design in our HTML & CSS Lab. Create structured, accessible, and responsive web pages that form the backbone of modern websites.",
  },
  {
    image: javascript,
    alt: "JavaScript Lab",
    title: "JavaScript Lab",
    description:
      "Develop interactive web applications in our JavaScript Lab. Master core concepts and modern techniques to build dynamic, engaging user experiences.",
  },

];




const images = [slide1, slide2, slide3, slide4];


const stats = [
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    targetNumber: 700,
    label: "Students",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-green-500" />,
    targetNumber: 500,
    label: "Placements",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-purple-500" />,
    targetNumber: 10,
    label: "Years Experience",
  },
  {
    icon: <Award className="w-12 h-12 text-yellow-500" />,
    targetNumber: 12,
    label: "Achivement",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const typedElement = useRef(null);

  // Auto-advance slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initialize Typed.js effect
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Welcome To S2J Academy"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const navigate = useNavigate()


  const join = () => {
    navigate('/contact')
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-5 z-20">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span ref={typedElement} className="text-blue-300"></span>
          </motion.h1>
        </div>

        <div className="relative w-full h-[450px] overflow-hidden flex items-center">
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
            />
          ))}

          {/* Navigation Buttons */}
          {/* <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
          >
            <FaChevronLeft size={24} />
          </button> */}
          {/* <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
          >
            <FaChevronRight size={24} />
          </button> */}
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly px-6 py-14 gap-12 bg-gradient-to-r from-blue-50 to-indigo-100">
        {/* Image & Profile */}
        <motion.div
          className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={Kalyanimam2}
            alt="About S2J Java Academy"
            className="w-64 sm:w-72 md:w-80 h-48 md:h-56 rounded-lg shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}

          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
            Kalyani Ajalkar
          </h1>
          <p className="font-semibold text-lg text-gray-700">Director Of Saksham 2 Java Academy</p>
          <span className="text-md text-indigo-600 font-semibold">Mrs. Kalyani Ajalkar</span>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 p-8 bg-white rounded-xl shadow-lg border-l-4 border-blue-600"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        >
          <motion.h2
            className="text-4xl font-extrabold text-blue-700 text-center md:text-left"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose S2J Java Academy?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700 leading-relaxed font-serif text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At S2J Java Academy, we provide expert-led training in Java, Python, Spring Boot,
            Hibernate, and more. Our goal is to make coding easy and accessible for everyone.
            We offer hands-on projects, real-world applications, and one-on-one mentorship
            to ensure deep understanding. Whether you're a beginner looking to start your
            journey or an experienced developer aiming to enhance your skills, our structured
            courses will guide you toward success.
          </motion.p>
          <motion.button
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={join}
          >
            Join Us Today 🚀
          </motion.button>
        </motion.div>
      </div>


      {/* About Us and Stats Section */}
      <Section title="About Saksham To Java" bgClass="bg-gradient-to-r from-gray-50 to-gray-100">
        <motion.p
          className="text-gray-700 max-w-3xl mx-auto mb-10 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Saksham To Java is a cutting-edge IT institute that empowers businesses and individuals with innovative technology solutions.
          We specialize in delivering customized software development, responsive web & mobile applications, robust cybersecurity measures,
          and scalable cloud computing services—ensuring you stay ahead in a rapidly evolving digital world.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Section>
      <div className="flex flex-col items-center bg-gray-100 px-4 py-8">
        <h1 className="font-bold mb-5 text-4xl mt-4 text-center">Why Choose Us?</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          <div className="relative group">
            <img src={place} alt="" className="h-60 w-full object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Placement Assistance</span>
              <span className="text-white text-sm">Resume building, mock interviews, and job referrals.</span>
            </div>
          </div>

          <div className="relative group">
            <img src={comu} alt="" className="h-60 w-full object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Community & Networking</span>
              <span className="text-white text-sm">Join a community of like-minded learners and tech enthusiasts.</span>
            </div>
          </div>

          <div className="relative group">
            <img src={techno} alt="" className="h-60 w-full object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Cutting-Edge Technologies</span>
              <span className="text-white text-sm">Teaching the latest emerging technologies to ensure students stay updated and industry-ready.</span>
            </div>
          </div>

          <div className="relative group">
            <img src={indust} alt="" className="h-60 w-full object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Industry-Relevant Curriculum</span>
              <span className="text-white text-sm">Courses designed by industry experts to match current market demands.</span>
            </div>
          </div>

          <div className="relative group">
            <img src={expert} alt="" className="h-60 w-full object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Expert Instructors</span>
              <span className="text-white text-sm">Learn from experienced professionals with deep industry knowledge.</span>
            </div>
          </div>

          <div className="relative group">
            <img src={mock} alt="" className="h-60 w-full object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Mock Sessions</span>
              <span className="text-white text-sm">Regularly conducting mock interviews to help students become well-prepared and confident for real interviews.</span>
            </div>
          </div>
        </div>
      </div>




      {/* Skill Development Section */}
      <div className="py-16 bg-gradient-to-r from-blue-100 to-indigo-100">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Skill Development
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col items-center transform transition duration-300"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={skill.image}
                alt={skill.alt}
                className="w-72 h-32 object-cover rounded-md mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              />
              <motion.h2
                className="text-2xl font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {skill.title}
              </motion.h2>
              <motion.p
                className="text-gray-600 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </>
  );
}

const Section = ({ title, children, bgClass }) => (
  <section className={`py-16 px-8 text-center ${bgClass}`}>
    <motion.h2
      className="text-4xl font-bold text-gray-800 mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const StatCard = ({ icon, targetNumber, label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const duration = 2000;
          const steps = 50;
          const increment = targetNumber / steps;
          setHasAnimated(true);
          const counter = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              clearInterval(counter);
              setCount(targetNumber);
            } else {
              setCount(Math.ceil(start));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetNumber, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {icon}
      <motion.h3
        className="text-3xl font-bold text-gray-800 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {count}+
      </motion.h3>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};
