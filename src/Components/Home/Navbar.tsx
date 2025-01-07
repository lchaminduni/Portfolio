import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaTrophy, FaBlog } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-yellow-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold flex items-center space-x-2">
          <Link to="/" className="hover:text-yellow-300 transition-all">
            <span className="text-white">Lihini Chamiduni</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          {[
            { name: "Home", path: "/portfolio", icon: <FaHome /> },
            { name: "About Me", path: "/about", icon: <FaUser /> },
            { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
            { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
            { name: "Achievement", path: "/achievement", icon: <FaTrophy /> },
            { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-2 text-lg font-medium hover:text-yellow-300 transition-all transform hover:scale-105 hover:underline underline-offset-4"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {[
          { name: "Home", path: "/portfolio", icon: <FaHome /> },
          { name: "About Me", path: "/about", icon: <FaUser /> },
          { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
          { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
          { name: "Achievement", path: "/achievement", icon: <FaTrophy /> },
          { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block px-6 py-3 flex items-center gap-2 hover:bg-gray-700 rounded-md transition-all"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
