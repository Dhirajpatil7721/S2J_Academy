import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Contactus() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fname.trim() || !/^[A-Za-z]+$/.test(formData.fname)) {
      newErrors.fname = "First name should contain only letters";
    }
    if (!formData.lname.trim() || !/^[A-Za-z]+$/.test(formData.lname)) {
      newErrors.lname = "Last name should contain only letters";
    }
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    console.log("Form Submitted:", formData);
    toast.success("Message Sent Successfully!");

    setFormData({ fname: "", lname: "", mobile: "", message: "" });
    setErrors({});
  };

  return (
    <div className="p-6 bg-gray-300">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-10 rounded-xl shadow-xl text-center mb-3">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
      </div>

      <div className="mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8882749655863!2d73.81075377426978!3d18.488719270148245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8aa9383f0b%3A0x15e0e910cbf9a53a!2sSaksham%202%20Java%20Academy!5e0!3m2!1sen!2sin!4v1743355827732!5m2!1sen!2sin"
          className="w-full h-[450px] md:h-[400px] lg:h-[250px]  rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Get in Touch
          </h2>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow-lg border border-gray-300">
              <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Address</h2>
                <Link to="https://maps.app.goo.gl/GfPbQ3sjuo1QEsin8" target="_blank" className="text-gray-600">
                  Hingane Home Colony, Pune, Maharashtra 411052
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow-lg border border-gray-300">
              <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full">
                <FaEnvelope size={20} />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Email</h2>
                <Link className="text-gray-600 hover:text-blue-500" to="mailto:saksham2java@gmail.com">
                  saksham2java@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-lg shadow-lg border border-gray-300">
              <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full">
                <FaPhone size={20} />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">Mobile</h2>
                <Link to="tel:+918010540275" className="text-gray-600 hover:text-blue-500">
                  +918010540275
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-red-500 text-sm">{errors.fname}</span>
            </div>

            <div>
              <input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-red-500 text-sm">{errors.lname}</span>
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No."
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-red-500 text-sm">{errors.mobile}</span>
            </div>

            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
