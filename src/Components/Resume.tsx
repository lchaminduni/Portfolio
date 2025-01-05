import React from "react";
import { motion } from "framer-motion";
import cvFile from "/src/assets/cv.pdf";

const Resume: React.FC = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const rotateVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
  };

  return (
    <section className="bg-blue-50 text-gray-800 min-h-screen py-12 mt-10 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-teal-100 opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-8 text-coral-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Resume
        </motion.h1>

        {/* Education Section */}
        <motion.div
          className="bg-white text-gray-700 rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold text-coral-500 mb-4"
            variants={rotateVariants}
          >
            Education
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Bachelor of Information Technology (BIT)",
                subtitle: "University of Moratuwa (2020 - Present)",
              },
              {
                title: "Diploma in Comprehensive Master Java Developer (CMJD)",
                subtitle: "Institute of Software Engineering (IJSE)",
              },
              {
                title:
                  "National Diploma for Industrial Technology-Civil Engineering (NVQ 5)",
                subtitle: "Sri Lanka College of Technology, Rathmalana (2020 - 2021)",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h3 className="text-2xl font-bold text-teal-600">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="bg-white text-gray-700 rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold text-coral-500 mb-4"
            variants={rotateVariants}
          >
            Projects
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Student Management System",
                description:
                  "Developed a desktop application to manage student data for an educational institution using Java, Java Swing, and MySQL.",
                tech: "Technologies: Java, Java Swing, MySQL",
                link: "https://github.com/lchaminduni/Student-Management-System.git",
                linkText: "GitHub Repository",
              },
              {
                title: "Point of Sale (POS) System",
                description:
                  "Developed a robust POS system backend with secure user authentication and a responsive frontend for managing sales and inventory.",
                tech:
                  "Technologies: Spring Boot, MySQL, JWT, Spring Security, Swagger, Tailwind CSS, TypeScript",
                link1: "https://github.com/lchaminduni/Point-of-Sale-System-Backend.git",
                linkText1: "Backend Repository",
                link2: "https://github.com/lchaminduni/Point-of-Sale-System-Frontend.git",
                linkText2: "Frontend Repository",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h3 className="text-2xl font-bold text-teal-600">{project.title}</h3>
                <p className="text-gray-600">{project.tech}</p>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-teal-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText}
                    </a>
                  )}
                  {project.link1 && (
                    <a
                      href={project.link1}
                      className="text-teal-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText1}
                    </a>
                  )}
                  {project.link2 && (
                    <a
                      href={project.link2}
                      className="text-teal-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText2}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-white text-gray-700 rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold text-coral-500 mb-4"
            variants={rotateVariants}
          >
            Skills
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={sectionVariants}
          >
            {[
              "Java",
              "Python",
              "C#",
              "HTML & CSS",
              "JavaScript",
              "React JS",
              "MySQL",
              "Spring Boot",
              "Hibernate",
              "Tailwind CSS",
              "Git/GitHub",
              "MS Project",
              "AutoCAD",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-teal-50 rounded-xl p-4 text-center text-teal-600 font-semibold"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Download Resume & Links */}
        <motion.div
          className="text-center mt-12 space-y-4"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href={cvFile}
            download="Lihini_Chamiduni_CV.pdf"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>

          <motion.div className="space-x-4">
            <motion.a
              href="https://www.linkedin.com/in/lihini-senevirathna/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/lchaminduni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
