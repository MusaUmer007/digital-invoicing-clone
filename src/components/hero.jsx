import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            Simplify Your <span className="text-blue-500">Invoicing</span> Process
          </h1>
          <p className="text-gray-600 text-xl">
            Create, send, and track professional invoices in minutes.
            Our powerful tool saves time and gets you paid faster.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
              Get Started →
            </button>
            <button className="text-gray-700 text-lg hover:text-blue-500 transition font-medium">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + BOXES */}
        <motion.div
          className="md:w-1/2 relative"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Enlarged IMAGE */}
          <img
            src="/invoice.png"
            alt="Invoice"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          />

          {/* BOX 1: Top Left */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-5 left-5 bg-white border border-gray-200 shadow-xl px-5 py-3 rounded-xl"
          >
            <p className="text-sm font-medium text-gray-500">Digital Invoicing</p>
            <p className="text-base font-semibold text-gray-700">Invoice Sent</p>
            <p className="text-blue-600 font-bold text-xl">Rs. 1,245</p>
          </motion.div>

          {/* BOX 2: Bottom Right */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-5 right-5 bg-white border border-gray-200 shadow-xl px-5 py-3 rounded-xl"
          >
            <p className="text-sm font-medium text-gray-500">Paid Today</p>
            <p className="text-green-600 font-bold text-xl">Rs. 3,420</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
