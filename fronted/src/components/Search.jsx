import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import { searchSymbol } from "../utils/api/stock-api";
import SearchResults from "./SearchResults";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const { darkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (input.trim()) {
        updateBestMatches();
      }
    }, 500); // Delay to prevent excessive API calls

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  const updateBestMatches = async () => {
    try {
      if (!input.trim()) return;

      const searchResults = await searchSymbol(input);
      console.log("API Response:", searchResults);

      if (!searchResults || !Array.isArray(searchResults.result)) {
        throw new Error("Invalid API response");
      }

      setBestMatches(searchResults.result);
      console.log("Updated Matches:", bestMatches); // Debugging
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setBestMatches([]);
    }
  };

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Search Bar */}
      <div
        className={`flex items-center border-2 rounded-lg overflow-hidden shadow-md transition duration-300 ${
          darkMode
            ? "bg-gray-900 border-gray-800 shadow-gray-800"
            : "bg-white border-neutral-200"
        }`}
      >
        {/* Search Input */}
        <input
          type="text"
          value={input}
          className={`w-full px-4 py-2 text-lg focus:outline-none transition-all ${
            darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-800"
          }`}
          placeholder="Search stock..."
          onChange={(e) => setInput(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex gap-x-2 pr-2">
          {/* Clear Button */}
          {input && (
            <button
              onClick={clear}
              className="transition-transform transform hover:scale-110"
            >
              <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
            </button>
          )}

          {/* Search Button */}
          <button
            onClick={updateBestMatches}
            className="h-10 w-10 bg-indigo-600 text-white rounded-lg flex justify-center items-center transition duration-300 hover:bg-indigo-700 hover:ring-2 ring-indigo-400"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {bestMatches.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 z-500 border border-gray-200 dark:border-gray-700">
          <SearchResults results={bestMatches} />
        </div>
      )}
    </div>
  );
};

export default Search;
