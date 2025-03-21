import React from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-6">
      {/* Background Image */}
      <img
        src="/assets/stock.png"
        alt="Stock Market"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Hero Content */}
      <div className="relative z-10 pt-32 text-center max-w-2xl">
        <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm animate-bounce">
          🚀 Track Stocks Like a Pro!
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in">
          Stock Tracker: Stay Ahead of the Market
        </h1>
        <p className="text-lg text-green-600 font-semibold mt-2 animate-fade-in">
          Real-time stock insights to make smart investments.
        </p>

        <button
          className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          onClick={() => navigate("/login")}
        >
          Get Started for Free
        </button>
      </div>
    </div>
  );
};

export default Hero;
