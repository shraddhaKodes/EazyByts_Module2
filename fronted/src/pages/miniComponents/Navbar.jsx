import React, { useState, useContext } from "react";
import { FaMoon, FaSun, FaBars, FaTimes, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md shadow-lg px-6 py-4 
      ${darkMode ? "bg-gray-900/80 text-white border-b-2 border-white" : "bg-white/80 text-gray-900 border-b border-gray-300"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold flex items-center gap-2">
          <FaChartLine className="text-4xl text-blue-600 dark:text-blue-400" />
          <span className="transition-all duration-300">StockTracker</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-lg">
          <li className="relative group">
            <Link to="/" className="transition-all hover:text-blue-600">Home</Link>
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#about" className="cursor-pointer transition-all hover:text-blue-600">About</a>
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <a href="#contact" className="cursor-pointer transition-all hover:text-blue-600">Contact</a>
            <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          {["Stocks", "Login / Sign Up"].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={`/${item.toLowerCase().replace(" / sign up", "").replace(" ", "")}`}
                className="transition-all hover:text-blue-600"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="text-2xl transition">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl transition">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-56 h-full bg-black/70 text-white shadow-lg transform transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-center justify-center h-full gap-4 text-xs">
          <Link to="/" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#about" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="hover:text-blue-400 transition-all" onClick={() => setMenuOpen(false)}>Contact</a>
          {["Stocks", "Login / Sign Up"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" / sign up", "").replace(" ", "")}`}
              className="hover:text-blue-400 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
