import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; 

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 md:right-8 xl:right-12 z-50
                  rounded-lg border border-neutral-400 p-2 shadow-lg
                  transition duration-300 hover:scale-110 
                  ${darkMode ? "shadow-gray-800 bg-gray-800" : "bg-white shadow-md"}`}
    >
      {darkMode ? (
        <SunIcon className="h-8 w-8 cursor-pointer fill-yellow-400" />
      ) : (
        <MoonIcon className="h-8 w-8 cursor-pointer fill-gray-500" />
      )}
    </button>
  );
};

export default ThemeIcon;
