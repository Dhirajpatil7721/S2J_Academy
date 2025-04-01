import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import missionImg from "../Images/about.png";
import visionImg from "../Images/class.png";
import { Users, BookOpen, UserCheck, Briefcase, CheckCircle, Award } from "lucide-react";


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

const StatCard = ({ icon, targetNumber, label }) =>
 {
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


const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-10 rounded-xl shadow-xl text-center">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-6 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About S2J
        </motion.h1>
        <motion.p
          className="text-lg text-white max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
"We provide expert Full Stack coaching, covering front-end and back-end development with hands-on projects to make students job-ready."
        </motion.p>

      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Mission Section (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-left sm:text-center px-4 md:px-10 lg:px-20">
              Our mission is to bridge the gap between candidates and the corporate sector by creating skilled professionals who can confidently build their careers in the industry. We are dedicated to equipping learners with the right technical expertise, problem-solving skills, and hands-on experience needed to succeed in the ever-evolving IT landscape. By providing industry-oriented training, we aim to empower individuals to utilize their skills effectively for the growth of both themselves and the industry. Our goal is to create a benchmark for quality education and career development, ensuring that every candidate is job-ready and future-proof in the competitive market.
            </p>
          </div>
          <motion.img
            src={missionImg}
            alt="Our Mission"
            className="w-full md:max-w-md h-auto rounded-xl shadow-2xl hover:scale-105 transition duration-500 object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Vision Section (Image Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={visionImg}
            alt="Our Vision"
            className="w-full md:max-w-md h-auto rounded-xl shadow-2xl hover:scale-105 transition duration-500 object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-left sm:text-center px-4 md:px-10 lg:px-20">
              Our vision is to provide candidates with top-notch knowledge that aligns with the latest industry standards while ensuring affordability so that everyone can benefit from our courses. We strive to make high-quality IT education accessible to all, enabling individuals to build successful careers without financial barriers. Additionally, we focus on bridging the gap between corporate needs and workforce skills by offering specialized training programs tailored to industry demands. Our goal is to empower both aspiring professionals and established organizations with expert-led training, equipping them with the right skills and knowledge to stay ahead in the ever-evolving technological landscape.
            </p>
          </div>
        </div>
      </div>


      {/* Stats Section */}
      <div >
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default About;