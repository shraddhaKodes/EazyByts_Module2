import React from "react";
const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[2rem] px-2 py-1 m-1 h-6 border rounded-md 
                  flex items-center justify-center text-xs
                  sm:text-sm md:text-base cursor-pointer 
                  transition duration-200
                  ${
                    active
                      ? "bg-indigo-600 border-indigo-700 text-gray-100"
                      : "border border-indigo-300 text-indigo-300"
                  } 
                  hover:bg-indigo-600 hover:text-gray-100 hover:border-indigo-700`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
