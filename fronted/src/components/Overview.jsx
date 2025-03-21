import React from "react";
import Card from "./Card";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Card className="flex flex-wrap items-center justify-between p-4 sm:p-6">
      <span className="text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 ml-2">
            {currency}
          </span>
        </span>

        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
};

export default Overview;
