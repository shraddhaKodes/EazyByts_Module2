import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaBriefcase, FaClock, FaMoneyBillWave } from "react-icons/fa";
import stockImage from "../../assets/stock.png";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 sm:px-12 lg:px-24 py-12 text-white" id="about">

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center mb-12"
      >
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold tracking-wide flex items-center justify-center gap-4">
          ABOUT  
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-xl shadow-xl">
            US
          </span>
        </h1>
        <p className="text-gray-400 text-lg uppercase tracking-wide">
          Empowering investors with real-time stock insights.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 items-center gap-12 my-12">
        
        {/* Image Section */}
        <motion.div 
          initial={{ scale: 0.8, rotate: -5 }} 
          animate={{ scale: 1, rotate: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex justify-center relative"
        >
          <div className="backdrop-blur-lg p-2 rounded-lg shadow-lg border border-gray-700">
            <img
              src={stockImage}
              alt="Stock Dashboard"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500 h-[260px] sm:h-[340px] md:h-[400px] lg:h-[450px]"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-left md:text-justify text-lg tracking-wide space-y-6"
        >
          <p>
            <span className="text-green-400 font-bold">Stock Market Dashboard</span> is an **interactive platform** 
            designed to provide **real-time stock market insights, portfolio management, and trading analytics.**  
          </p>
          <p>
            Our goal is to make financial data **accessible** and **easy to analyze** for investors, traders, and finance enthusiasts.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 text-center text-gray-300">
            <motion.div whileHover={{ scale: 1.1 }} className="p-5 bg-black/30 rounded-xl shadow-lg">
              <FaChartLine className="text-green-400 text-3xl mx-auto mb-2" />
              <p className="font-semibold">Real-Time Market Data</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="p-5 bg-black/30 rounded-xl shadow-lg">
              <FaBriefcase className="text-blue-400 text-3xl mx-auto mb-2" />
              <p className="font-semibold">Portfolio Tracking</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="p-5 bg-black/30 rounded-xl shadow-lg">
              <FaClock className="text-yellow-400 text-3xl mx-auto mb-2" />
              <p className="font-semibold">Historical Analysis</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} className="p-5 bg-black/30 rounded-xl shadow-lg">
              <FaMoneyBillWave className="text-purple-400 text-3xl mx-auto mb-2" />
              <p className="font-semibold">Trading Performance</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            className="backdrop-blur-lg p-5 rounded-xl shadow-lg text-xl font-semibold flex items-center justify-center gap-4 text-green-400"
          >
            "Invest smarter, track better, and stay ahead of the market."
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
