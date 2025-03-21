import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaChartLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-8 px-6 sm:px-12">
      
      {/* Top Section */}
      <div className="max-w-[1050px] mx-auto text-center sm:text-left">
        <hr className="border-gray-600 mb-5" />
        <h1 className="text-[2rem] sm:text-[2.5rem] font-semibold tracking-[5px] sm:tracking-[8px] text-green-400 animate-pulse flex justify-center sm:justify-start items-center gap-2">
          <FaChartLine /> Thanks for Scrolling
        </h1>
        <p className="text-gray-400 text-md mt-2">
          Crafted with ❤️ by Shraddha Kumari | Empowering Investors & Traders
        </p>
      </div>

      {/* Footer Links & Socials */}
      <div className="max-w-[1050px] mx-auto mt-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
        
        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          <a href="/privacy" className="hover:text-green-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-green-400 transition">Terms & Conditions</a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="https://linkedin.com/in/shraddha-kumari" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shraddha-kumari" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-300 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com/shraddha-kumari" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Stock Market Dashboard. All Rights Reserved.
      </div>
      
    </footer>
  );
};

export default Footer;
