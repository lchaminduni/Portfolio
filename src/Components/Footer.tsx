import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 ">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">© 2025 Lihini Chamiduni Wickrama Senevirathna</p>
        <div className="mt-2">
          <a
            href="https://github.com/yourgithubprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourtwitterprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 mx-2"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
