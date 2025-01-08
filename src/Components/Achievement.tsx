import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "/assets/bground5.jpg";
import certi1 from "/assets/cmjd.jpg";
import certi2 from "/assets/webdesign1.png";
import certi3 from "/assets/frontend.png";
import certi4 from "/assets/serverside.png";
import certi5 from "/assets/python1.png";
import certi6 from "/assets/python2.png";
import certi7 from "/assets/MSProject.png";
import certi8 from "/assets/MepQs.png";
import certi9 from "/assets/CivilQs.png";

const AboutMe: React.FC = () => {
    const [showContact, setShowContact] = useState(false);
    const handleGetInTouch = () => {
        setShowContact(!showContact); // Toggle contact details visibility
    };

  return (
    <section
      className="bg-cover bg-center text-white min-h-screen py-12 mt-10 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      

      <div className="container mx-auto px-6 relative z-10">
        {/* Title with enhanced fade-in and scaling animation */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-8 text-yellow-500"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 1.2,
          }}
        >
        Achiement
        </motion.h1>

        {/* Certifications Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

             {/* Certification 1 - CMJD */}
             <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src={certi1}
                alt="cmjd Certification"
                className="w-full h-full object-contain rounded-lg mb-4 "
              />
              <h3 className="text-xl font-bold text-gray-100">Diploma in Comprehensive Master Java Developer-IJSE(Institute of Software Engineering)</h3>
              

            </motion.div>

            {/* Certification 2 - Web Design */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <img
                src={certi2}
                alt="Web Design Certification"
                className="w-full h-full object-contain rounded-lg mb-4 "
              />
              <h3 className="text-xl font-bold text-gray-100">Web Design for Beginners </h3>
              <h3 className="text-xl font-bold text-gray-100">University of Moratuwa (CODL) </h3>

            </motion.div>

            {/* Certification 3 - Frontend */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src={certi3}
                alt="Frontend Development Certification"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">Frontend Web Development </h3>
              <h3 className="text-xl font-bold text-gray-100">University of Moratuwa (CODL) </h3>
            </motion.div>

            {/* Certification 4 - Server Side */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <img
                src={certi4}
                alt="Server Side Development Certification"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">Server Side Web Development</h3>
              <h3 className="text-xl font-bold text-gray-100">University of Moratuwa (CODL) </h3>
            </motion.div>

            {/* Certification 5 - Python 1 */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <img
                src={certi5}
                alt="Python Certification 1"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">Python for Beginners</h3>
              <h3 className="text-xl font-bold text-gray-100">University of Moratuwa (CODL) </h3>
            </motion.div>

            {/* Certification 6 - Python 2 */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <img
                src={certi6}
                alt="Python Certification 2"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">Python Programming</h3>
              <h3 className="text-xl font-bold text-gray-100">University of Moratuwa (CODL) </h3>
            </motion.div>

            {/* Certification 7 - MS Project */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <img
                src={certi7}
                alt="MS Project"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">MS Project</h3>
              <h3 className="text-xl font-bold text-gray-100">Tectra Academy</h3>
            </motion.div>

            {/* Certification 8 - MEP QS */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <img
                src={certi8}
                alt="MEP QS"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">MEP QS</h3>
              <h3 className="text-xl font-bold text-gray-100">Tectra Academy</h3>
            </motion.div>
            {/* Certification 9 - Civil QS */}
            <motion.div
              className="bg-opacity-70 bg-gray-600 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <img
                src={certi9}
                alt="Civil QS"
                className="w-full h-full object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-100">Civil QS</h3>
              <h3 className="text-xl font-bold text-gray-100">Tectra Academy</h3>
            </motion.div>
          </div>
        </motion.div>

        
        {/* Call to Action Section with bounce effect */}
        <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="text-lg">
        I am currently seeking an <strong>internship opportunity</strong> in the IT industry, where I can contribute my skills,
        grow professionally, and make a meaningful impact.
      </p>
      <motion.button
        onClick={handleGetInTouch}
        className="inline-block mt-6 bg-yellow-500 text-black text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600"
        whileHover={{ scale: 1.1 }}
      >
        Get In Touch
      </motion.button>

      {showContact && (
        <motion.div
          className="mt-8 text-center bg-gray-100 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">Contact Details</h3>
          <p className="mt-2 text-lg text-gray-600">
            Email: lihinichami1998@gmail.com
          </p>
          <p className="text-lg text-gray-600">Phone: +94 77 421 3509</p>
        </motion.div>
      )}
    </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
