import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul
        className={`w-full h-full grid gap-3 p-4 text-sm sm:text-base ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {Object.keys(detailsList).map((item) => (
          <li
            key={item}
            className={`flex justify-between items-center border-b pb-2 ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Label Styling */}
            <span className="font-medium">{detailsList[item]}</span>

            {/* Value Styling */}
            <span
              className={`font-bold text-right ${
                item === "exchange" || item === "finnhubIndustry"
                  ? darkMode
                    ? "text-indigo-400"
                    : "text-indigo-600"
                  : darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(details[item])}B`
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Details;
