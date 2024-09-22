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
  "MAINTAINABLE",
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
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <div
      className="relative w-full h-16 overflow-hidden bg-gray-900 cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Create a repeating background with slight tilt */}
      <div
        className="absolute inset-0 transform -skew-y-2 bg-gradient-to-r from-teal-400 to-cyan-500"
        style={{ top: "-15%", height: "130%" }}
      />
      <motion.div
        className="flex items-center h-full whitespace-nowrap"
        animate={{ x: isPaused ? 0 : [0, -4000] }}  // Increased width for longer tape
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,  // Slower scrolling speed
            ease: "linear",
          },
        }}
        style={{ gap: "2rem" }}  // Add spacing between elements
      >
        {/* Repeat content to fill the tape without cut-off */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-6">
            {features.map((feature, index) => (
              <motion.span
                key={index}
                className="mx-3 text-gray-900 font-bold text-sm uppercase tracking-wider transition-all duration-300 ease-in-out"
                onMouseEnter={() => setHoveredFeature(feature)}
                onMouseLeave={() => setHoveredFeature(null)}
                whileHover={{ scale: 1.15 }}  // Improved hover scaling
                style={{
                  textShadow:
                    hoveredFeature === feature
                      ? "0 0 10px rgba(255,255,255,0.8)"
                      : "none",
                  color: hoveredFeature === feature ? "white" : "#1e3a8a",  // Text color change on hover
                }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TiltedScrollingTape;
