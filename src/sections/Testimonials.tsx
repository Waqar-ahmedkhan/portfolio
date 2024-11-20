"use client"
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "../components/TestimontailCard";
import { testimonials } from "@/libs/TestimonialDetails";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");

  const nextTestimonial = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000); // Auto-slide every 7 seconds
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-teal-500 text-sm uppercase tracking-wider mb-3">
            Client Testimonials
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
            Voices of Success
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Discover the impact we&apos;ve  made through the voices of our satisfied clients.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-10 p-2 rounded-full bg-white/70 dark:bg-gray-700 hover:bg-teal-500 hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Animated Testimonial */}
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: direction === "right" ? 100 : -100,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction === "right" ? -100 : 100,
                }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} isActive />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-10 p-2 rounded-full bg-white/70 dark:bg-gray-700 hover:bg-teal-500 hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-teal-500 w-6" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
