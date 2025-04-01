import { motion } from 'framer-motion'
import React from 'react'
import java from '../../Components/Images/java.png'


function Batches() {
  const batches = [
    {
      title: "FULL STACK JAVA (React.js)",
      dept: "Java",
      dura: "6 Months",
      mode: "Offline & Online"
    },
    {
      title: "CORE JAVA",
      dept: "Java",
      dura: "2 Months",
      mode:  "Offline & Online"
    },
    {
      title: "Full Stack Java(Angular.js)",
      dept: "Java",
      dura: " 6 month",
      mode:  "Offline & Online"
    },
    {
      title: "Advance Java+Angular",
      dept: "Java",
      dura: " 4.5 months",
      mode: "Offline & Online"
    },
    {
      title: "Backend-Java(Advance+WS+MS)",
      dept: "Java",
      dura: " 2 month",
      mode:  "Offline & Online"
    },
    {
      title: "FRONTEND DEVELOPMENT",
      dept: "Web Development",
      dura: "3 Months",
      mode:  "Offline & Online"
    },
    {
      title: "Angular",
      dept: "UI",
      dura: "1 Months",
      mode:  "Offline & Online"
    },
    {
      title: "React JS",
      dept: "UI",
      dura: "1 Months",
      mode:  "Offline & Online"
    },
    {
      title: "UI(Front End-Angular)",
      dept: "UI",
      dura: "3.5 Months",
      mode:  "Offline & Online"
    },
    {
      title: "UI(Front End-RectJS)",
      dept: "UI",
      dura: "3.5 Months",
      mode:  "Offline & Online"
    },
    {
      title: "Cloud Computing",
      dept: "Cloud",
      dura: "4 Months",
      mode: "Offline & Online"
    },
    {
      title: "Python Full Stack",
      dept: "Development",
      dura: "4.5 Months",
      mode: "Offline & Online"
    },
    {
      title: "Software Testing",
      dept: "QA & Testing",
      dura: "3 Months",
      mode: "Offline & Online"
    },
    {
      title: "PHP Developer",
      dept: "Development",
      dura: "3.5 Months",
      mode: "Offline & Online"
    }
    
  ];

  const jobbat = [
    {
      title: "Full Stack Java",
      dept: "Java",
      dura: "6 month",
      mode: "Offline & Online"
    },
    {
      title: "Software Testing",
      dept: "Testing",
      dura: "6 Months",
      mode: "Offline & Online"
    },
    {
      title: "UI(Front End)+Node- Project",
      dept: "UI",
      dura: "4.5 Months",
      mode: "Offline & Online"
    },
    {
      title: "Power BI",
      dept: "Power BI",
      dura: "4 Months",
      mode: " Offline & Online"
    },
    
  ]


  return (
    <div className='bg-white-700 min-h-screen p-6 space-y-16'>
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-10 rounded-xl shadow-xl text-center">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Batches
        </motion.h1>
        <motion.p
          className="text-lg text-white max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          "Learn. Grow. Succeed. Join our Batches and kickstart your journey today! "
        </motion.p>
      </div>

      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 my-4">Skill Oriented</h2>
      <div className="flex flex-wrap justify-center gap-6 p-4 ">
        {batches.map((batch, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-72 lg:w-64 bg-yellow-100 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-bold text-gray-800 text-center mb-4">{batch.title}</h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <h1 className="text-zinc-800 font-medium">Department: {batch.dept}</h1>
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <h1 className="text-zinc-800  font-medium">Duration: {batch.dura}</h1>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-zinc-800  font-medium">Mode: {batch.mode}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 my-4">
        Job Oriented
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {jobbat.map((jobb, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-72 lg:w-64 bg-yellow-100 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 transition-transform transform hover:scale-105 hover:shadow-xl mb-8"
          >
            <h2 className="text-xl font-bold text-gray-800 text-center mb-4">{jobb.title}</h2>

            <div className="space-y-3 ">
              <div className="flex justify-between items-center border-b pb-2">
                <h1 className="text-zinc-800  font-medium">Department: {jobb.dept}</h1>
              </div>

              <div className="flex justify-between items-center border-b pb-2">
                <h1 className="text-zinc-800  font-medium">Duration: {jobb.dura}</h1>
              </div>

              <div className="flex justify-between items-center">
                <h1 className="text-zinc-800  font-medium">Mode: {jobb.mode}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Batches
