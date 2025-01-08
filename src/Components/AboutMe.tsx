import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "/assets/bground5.jpg";
import image from "/assets/myphoto.jpg";
const AboutMe: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  const handleGetInTouch = () => {
    setShowContact(!showContact); // Toggle contact details visibility
  };

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="bg-cover bg-center text-white min-h-screen py-12 mt-10 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-yellow-400"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          About Me
        </motion.h2>
        {/* Profile Image */}
        <div className="mt-10  flex justify-center ">
            <img
              src={image}
              alt="Professional Profile"
              className="w-64 h-64 rounded-full border-8 border-gray-800 shadow-2xl object-cover transform transition-transform duration-700 ease-in-out hover:rotate-3 hover:scale-110 hover:shadow-3xl hover:border-yellow-500"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        <motion.p
          className="mt-6 text-lg text-center text-gray-200"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          Hello! I'm <strong>Lihini Chamiduni Wickrama Senevirathna</strong>, an
          aspiring IT professional pursuing a{" "}
          <strong>Bachelor of Information Technology (BIT)</strong> at the
          University of Moratuwa.
        </motion.p>

        {/* My Story Section */}
        <motion.div
          className="mt-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold text-yellow-400">🎓 My Story</h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          My educational journey began with a focus on <strong>Civil Engineering</strong>, earning a{" "}
          <strong>National Diploma in Civil Engineering</strong> from the Rathmalana Technical College. During this time, I developed a
          strong foundation in technical problem-solving and analytical thinking.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          However, my passion for innovation and technology inspired me to pivot toward the IT field, where I discovered my true calling.
          This decision led me to pursue a <strong>Bachelor of Information Technology</strong> at the University of Moratuwa, complemented
          by certifications in <strong>Full Stack Development</strong>, <strong>Java Development</strong>, and other technology-driven
          disciplines.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          This transition not only shaped my career path but also equipped me with a unique perspective, combining the structured approach
          of engineering with the dynamic problem-solving mindset of IT. Today, I’m dedicated to building impactful software solutions while
          continuing to learn and grow in this exciting field.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-12"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            💻 My Skills and Expertise
          </h3>
          <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
            {[
              "Programming Languages: Java, Python, C#, JavaScript",
              "Frameworks & Tools: Spring Boot, React, MySQL, Hibernate",
              "Web Development: HTML, CSS, Tailwind CSS",
              "Others: MS Office, AutoCAD, MS Project",
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="mt-2"
                variants={itemVariants}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* My Vision Section */}
        <motion.div
          className="mt-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            🎯 My Vision
          </h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I aspire to become an expert software engineer, contributing to
            transformative projects that improve lives. My career goal is to
            bridge innovation with real-world impact.
          </p>
        </motion.div>

        {/* Beyond Coding Section */}
        <motion.div
          className="mt-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-semibold text-yellow-400">
            🎉 Beyond Coding
          </h3>
          <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
            {[
              "Exploring emerging technologies and trends",
              "Reading and brainstorming creative design ideas",
              "Learning something new every day to expand my knowledge",
            ].map((hobby, index) => (
              <motion.li
                key={index}
                className="mt-2"
                variants={itemVariants}
              >
                {hobby}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <p className="text-lg text-gray-300">
            I am currently seeking an{" "}
            <strong>internship opportunity</strong> in the IT industry to
            contribute my skills and grow professionally.
          </p>
          <motion.button
            onClick={handleGetInTouch}
            className="mt-6 bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 transform transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Get In Touch
          </motion.button>

          {showContact && (
            <motion.div
              className="mt-8 bg-gray-800 text-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold">Contact Details</h3>
              <p className="mt-2">Email: lihinichami1998@gmail.com</p>
              <p>Phone: +94 77 421 3509</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
