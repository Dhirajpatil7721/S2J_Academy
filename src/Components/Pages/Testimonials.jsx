import React from 'react'
import { motion } from "framer-motion";
import './Testimonials.css'

function Testimonials() {
  const cards = [
    {
      title: "Beginner to Pro in Java!",
      description: "Before joining Saksham 2 Java, I had zero coding experience. The structured lessons and real-world projects helped me master Java quickly. Highly recommended!",
      name: "Amit P."
    },
    {
      title: "Excellent Teaching & Support",
      description: "The instructors explain every concept clearly, from OOP to advanced frameworks. The hands-on coding sessions and doubt-solving are top-notch!",
      name: "Pooja R."
    },
    {
      title: "Job-Ready Training",
      description: "This course gave me practical knowledge of Java, Spring Boot, and databases. The mock interviews and guidance helped me land my first IT job!",
      name: "Rahul S."
    },
    {
      title: "Best Learning Experience",
      description: "The best part of Saksham 2 Java is the interactive classes, real-world projects, and friendly mentors. I now feel confident in Java development.",
      name: "Sneha K."
    },
    {
      title: "Perfect for Freshers & Career Switchers",
      description: "I switched from a non-tech background to Java development, all thanks to Saksham 2 Java. The structured syllabus and assignments made learning easy!",
      name: "Vivek M."
    },
    {
      title: "Great Hands-on Experience",
      description: "The course includes practical assignments and real-world projects that helped me apply Java concepts effectively.",
      name: "Neha T."
    },
    {
      title: "Supportive Faculty & Community",
      description: "The mentors are always available to help. The doubt-solving sessions were super helpful in understanding tough concepts.",
      name: "Akash D."
    },
    {
      title: "Best Decision for My Career",
      description: "I was confused about which course to join, but Saksham 2 Java turned out to be the best decision! The syllabus is industry-relevant.",
      name: "Rohan J."
    },
    {
      title: "Confidence Boosting Course",
      description: "Initially, I lacked confidence in coding, but now I can easily build Java applications and even guide others!",
      name: "Megha S."
    },
    {
      title: "From Theory to Real-World",
      description: "Unlike other courses that focus only on theory, this course helped me build real projects that boosted my confidence.",
      name: "Kiran B."
    },
    {
      title: "Highly Structured & Easy to Follow",
      description: "The step-by-step approach made learning Java super easy. I didn't feel overwhelmed at any stage!",
      name: "Tanvi M."
    },
    {
      title: "Got My First Internship!",
      description: "Thanks to Saksham 2 Java, I landed my first internship as a Java developer. The projects and guidance were extremely helpful!",
      name: "Sagar K."
    }
  ];


  return (

    <div className="p-6 bg-gray-300">
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-10 rounded-xl shadow-xl text-center">
        <motion.h1
          className="text-3xl md-text-xl font-extrabold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials 
        </motion.h1>
        <motion.p
          className="text-lg text-white leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
         "Real stories, real success!  Hear from our students and see how Saksham 2 Java transformed their careers!"
        </motion.p>
      </div>

      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 center'>
        {cards.map((card, index) => (
          <div key={index} className="card border p-4 rounded-lg shadow-lg bg-white">
            <p className="card-title text-lg font-bold">{card.title}</p>
            <p className="small-desc text-gray-700">{card.description}</p>
            <p className="text-right font-semibold mt-2">- {card.name}</p>
            <div className="go-corner">
              <div className="go-arrow text-blue-500 text-lg">→</div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4">
    {cards.map((card, index) => (
      <div key={index} className="card border p-4 rounded-lg shadow-lg bg-white text-center">
        <p className="card-title text-lg font-bold">{card.title}</p>
        <p className="small-desc text-gray-700">{card.description}</p>
        <p className="text-right font-semibold mt-2">- {card.name}</p>
        <div className="go-corner">
          <div className="go-arrow text-blue-500 text-lg">→</div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

export default Testimonials
