"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const features = [
  "PERFORMANT",
  "ACCESSIBLE",
  "SECURE",
  "INTERACTIVE",
  "SCALABLE",
  "USER FRIENDLY",
  "RESPONSIVE",
  "MAINTAINABLE"
];

const TiltedScrollingTape = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="py-24 overflow-hidden">
    <div className="min-w-[100%] h-12 md:h-16 bg-gray-900 cursor-pointer"
         style={{ transform: "rotate(-5deg) scale(1.05)" }}
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}>
      {/* Gradient background */}
      <div className="absolute inset-0" 
           style={{
             background: "linear-gradient(90deg, #4ade80 0%, #22d3ee 100%)",
             zIndex: -1,
           }} />
      
      {/* Content container */}
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          className="flex items-center h-full whitespace-nowrap"
          animate={{ x: isPaused ? 0 : "-100%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {features.map((feature, index) => (
                <motion.span
                  key={index}
                  className="mx-4 text-gray-900 font-bold text-sm uppercase tracking-wider"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    transform: "rotate(2deg)", // Counter-rotate text
                  }}
                >
                  {feature}
                  {index < features.length - 1 && <span className="mx-2">★</span>}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlay for fading edges */}
      <div className=" inset-0 pointer-events-none"
           style={{
             background: "linear-gradient(90deg, #111827 0%, transparent 5%, transparent 95%, #111827 100%)",
           }} />
    </div>
    </div>
  );
};

export default TiltedScrollingTape;