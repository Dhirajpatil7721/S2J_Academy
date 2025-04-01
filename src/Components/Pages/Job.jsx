import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const jobListings = [
  { id: 1, title: "Front-end Developer Trainer", location: "Pune, India", type: "Full-Time", description: "Looking for a skilled frontend developer with experience in React and Tailwind CSS." },
  { id: 2, title: "Back-end Developer Trainer", location: "Pune, India", type: "Full-Time", description: "Seeking a backend developer proficient in Node.js, Express, and MongoDB." },
  { id: 3, title: "UI/UX Designer Trainer", location: "Pune, India", type: "Full-Time", description: "Creative UI/UX designer needed with expertise in Figma and Adobe XD." },
  { id: 4, title: "Full Stack Developer Trainer", location: "Pune, India", type: "Full-Time", description: "Looking for an experienced full-stack developer skilled in React, Node.js, and MongoDB." },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredJobs(
      jobListings.filter((job) =>
        job.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 sm:px-12 md:px-20">
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl font-extrabold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Team
        </motion.h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore exciting career opportunities at Saksham Softtech.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center bg-white shadow-md rounded-lg px-4 py-2">
        <FaSearch className="text-gray-500 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search job titles..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full bg-transparent outline-none text-lg"
        />
      </div>

      {/* Job Listings */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold text-blue-600">{job.title}</h3>
              <p className="text-gray-700 mt-2"><strong>Location:</strong> {job.location}</p>
              <p className="text-gray-700"><strong>Type:</strong> {job.type}</p>
              <p className="text-gray-600 mt-4">{job.description}</p>
              <button 
  className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfGFQ9IqLZcTDbSvBYmkXD6pZk0Ay_Y3TAzDBxBPMNFT-D7rw/viewform?usp=dialog', '_blank')}
>
  Apply Now
</button>

            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600">No job listings found.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
