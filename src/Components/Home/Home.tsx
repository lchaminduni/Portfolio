import React from "react";
import photo from "/assets/me.jpg";
import Navbar from "./Navbar";
import emailIcon from "/assets/email.png";
import callIcon from "/assets/callicon2.png";
import locationIcon from "/assets/location.webp";
import "animate.css/animate.min.css";
import Footer from "../Footer";
const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Home Section */}
      <section className="bg-gray-800 min-h-[66.67vh] flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-20">
          {/* Text Content */}
          <div className="text-gray-800 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl text-yellow-500 md:text-6xl font-bold mb-4 mt-20">
    <span className="inline-block animate-slide">
      Hi, I'm Lihini Chamiduni
    </span>
  </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-6 justify-between">
              A passionate software developer with expertise in Java, and Full Stack Development. I’m dedicated to creating efficient, user-friendly solutions and constantly evolving with the latest technologies. Ready to take on new challenges and make an impact in the IT industry.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              
            </div>
          </div>

          {/* Profile Image */}
          <div className="mt-10 mb-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <img
              src={photo}
              alt="Professional Profile"
              className="w-64 h-68 rounded-full border-8 border-gray-800 shadow-2xl object-cover transform transition-transform duration-700 ease-in-out hover:rotate-3 hover:scale-110 hover:shadow-3xl hover:border-yellow-500"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section className="bg-yellow-400 min-h-[33.33vh] flex items-center justify-center ">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-20">
    <div className="text-gray-800 w-full text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-700">
        Get In Touch
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-6">
        Feel free to reach out to me via email, phone, or visit me in person.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="flex flex-col items-center">
          <img
            src={emailIcon}
            alt="Email Icon"
            className="w-10 h-10 mb-4"
          />
          <span className="text-xl font-semibold text-blue-500">Email</span>
          <p className="text-gray-900 font-bold mt-2">lihinichami1998@gmail.com</p>
        </div>
        {/* Phone */}
        <div className="flex flex-col items-center">
          <img
            src={callIcon}
            alt="Phone Icon"
            className="w-10 h-10 mb-4"
          />
          <span className="text-xl font-semibold text-blue-500">Phone</span>
          <p className="text-gray-900 font-bold mt-2">+94 77 421 3509</p>
        </div>
        {/* Address */}
        <div className="flex flex-col items-center">
          <img
            src={locationIcon}
            alt="Location Icon"
            className="w-10 h-10 mb-4"
          />
          <span className="text-xl font-semibold text-blue-500">Address</span>
          <p className="text-gray-900 font-bold mt-2">69/A,Keppitiyagoda, Nagoda, Galle, Sri Lanka</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Other page content */}
<Footer />
    </div>
  );
};

export default Home;
