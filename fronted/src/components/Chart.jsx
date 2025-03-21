import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./ChartFilter";
import Card from "./Card";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";
import { fetchHistoricalData } from "../utils/api/stock-api";
import {
  createDate,
  convertDateToUnixTimestamp,
} from "../utils/helpers/date-helper";
import { chartConfig } from "../constants/config";

const Chart = () => {
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      return {
        startTimestampUnix: convertDateToUnixTimestamp(startDate),
        endTimestampUnix: convertDateToUnixTimestamp(endDate),
      };
    };

    const updateChartData = async () => {
      setLoading(true);
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const result = await fetchHistoricalData(stockSymbol, startTimestampUnix, endTimestampUnix);
        
        console.log("API Response:", result);

        if (result?.data?.length > 0) {
          const formattedData = result.data.map((item) => ({
            value: item.close.toFixed(2),
            date: item.date.split("T")[0], 
          }));
          setData(formattedData);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
      setLoading(false);
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <Card className="p-4">
      {/* Filter Buttons */}
      <ul className="flex flex-wrap justify-center gap-2 mb-4">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter text={item} active={filter === item} onClick={() => setFilter(item)} />
          </li>
        ))}
      </ul>

      {/* Chart Container */}
      <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-500">Fetching chart data...</span>
          </div>
        ) : data.length > 0 ? (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={darkMode ? "#6d28d9" : "#93c5fd"} stopOpacity={0.8} />
                <stop offset="95%" stopColor={darkMode ? "#4c1d95" : "#bfdbfe"} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#1e293b" : "#f8fafc",
                borderRadius: "8px",
              }}
              itemStyle={{ color: darkMode ? "#c084fc" : "#1e40af" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={darkMode ? "#a78bfa" : "#3b82f6"}
              fill="url(#chartColor)"
              fillOpacity={1}
              strokeWidth={2}
            />
            <XAxis 
              dataKey="date" 
              tick={{ fill: darkMode ? "#e5e7eb" : "#1f2937", fontSize: 12 }}
              angle={isMobile ? -45 : 0} 
              textAnchor="end"
            />
            <YAxis 
              domain={["dataMin", "dataMax"]} 
              tick={{ fill: darkMode ? "#e5e7eb" : "#1f2937", fontSize: 12 }} 
            />
          </AreaChart>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-gray-500">No data available.</span>
          </div>
        )}
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
