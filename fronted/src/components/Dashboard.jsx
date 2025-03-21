import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import Header from "./Header";
import StockContext from "../context/StockContext";
import { fetchStockDetails, fetchQuote } from "../utils/api/stock-api";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    if (!stockSymbol) return; // Prevent API call if stockSymbol is undefined or empty

    const updateStockDetails = async () => {
      try {
        console.log("Fetching stock details for:", stockSymbol);
        const result = await fetchStockDetails(stockSymbol);
        console.log("Stock Details Response:", result);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.error("Error fetching stock details:", error);
      }
    };

    const updateStockOverview = async () => {
      try {
        console.log("Fetching stock quote for:", stockSymbol);
        const result = await fetchQuote(stockSymbol);
        console.log("Stock Quote Response:", result);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.error("Error fetching stock quote:", error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);

  return (
    <div
      className={`min-h-screen w-full flex flex-col gap-6 p-5 md:p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      {/* Header */}
      <div className="w-full flex justify-start items-center">
        <Header name={stockDetails?.name ?? "Stock Dashboard"} />
      </div>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="md:col-span-2 row-span-4 min-h-[300px]">
          <Chart />
        </div>

        {/* Overview Section */}
        <div className="row-span-1">
          <Overview
            symbol={stockSymbol}
            price={quote?.pc ?? "N/A"}
            change={quote?.d ?? "N/A"}
            changePercent={quote?.dp ?? "N/A"}
            currency={stockDetails?.currency ?? "N/A"}
          />
        </div>

        {/* Details Section */}
        <div className="row-span-2 xl:row-span-3">
          <Details details={stockDetails} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
