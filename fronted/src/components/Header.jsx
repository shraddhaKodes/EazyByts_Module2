import React, { useContext } from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";
import ThemeContext from "../context/ThemeContext";

const Header = ({ name }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between xl:px-32 py-6 z-50">
      {/* Title and Search Bar */}
      <div className="w-full text-center md:text-left relative">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {name}
        </h1>

        {/* Ensure search bar has relative positioning */}
        <div className="relative">
          <Search />
        </div>
      </div>

      {/* Theme Toggle Button */}
      <div className="mt-4 md:mt-0">
        <ThemeIcon />
      </div>
    </div>
  );
};

export default Header;
