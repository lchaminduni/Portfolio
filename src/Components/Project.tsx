import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "/assets/bground5.jpg";
import loginImg from "/assets/login.png";
import dashboardImg from "/assets/dashboard.png";
import enrollmentImg from "/assets/enrollment.png";
import registrationImg from "/assets/registration.png";
import classManageImg from "/assets/classmanage.png";
import paymentImg from "/assets/payment.png";

const images = [
  { src: loginImg, title: "Login Page" },
  { src: dashboardImg, title: "Dashboard" },
  { src: enrollmentImg, title: "Enrollment Page" },
  { src: registrationImg, title: "Registration Page" },
  { src: classManageImg, title: "Class Management Page" },
  { src: paymentImg, title: "Payment Page" },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section
      className="bg-cover bg-center text-white min-h-screen py-10 mt-14 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px- relative z-10">
        {/* Title Section */}
        <motion.h1
          className="text-5xl md:text-5xl font-bold text-center mb-8 text-yellow-500"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1.2,
          }}
        >
          Student Management System
        </motion.h1>

        {/* Description */}
        <motion.div
          className="text-center text-lg text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Technologies: Java, Java Swing, MySQL
          </p>
          <p>
            Developed a desktop application to manage student data for an
            educational institution using Java, Java Swing, and MySQL.
          </p>
          <p>
            Implemented key features including student registration, class
            management, student enrollment, and payment details management.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-3/4 h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="text-center mt-4 text-xl font-bold text-gray-100 mb-10">
            {images[currentIndex].title}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-70 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-70 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            ❯
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Projects;
