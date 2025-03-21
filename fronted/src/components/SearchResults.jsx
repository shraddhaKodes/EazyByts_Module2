import React, { useContext } from "react";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul
      className={`absolute top-full left-0 w-full rounded-md h-64 overflow-y-auto z-50 shadow-lg ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {results.map((item) => (
        <li
          key={item.symbol}
          className={`cursor-pointer p-4 flex items-center justify-between rounded-md ${
            darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"
          } transition duration-300`}
          onClick={() => setStockSymbol(item.symbol)}
        >
          <span>{item.symbol}</span>
          <span>{item.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
