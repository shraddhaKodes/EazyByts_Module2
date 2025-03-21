import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = ({ children, className = "" }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl relative p-4 sm:p-6 border transition-all duration-300 
      ${darkMode ? 
        "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg shadow-gray-800/50 text-gray-200"
        : "bg-white border-gray-200 shadow-md shadow-gray-300/50 hover:shadow-xl"}
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
