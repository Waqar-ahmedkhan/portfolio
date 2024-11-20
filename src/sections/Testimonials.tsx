"use client"
import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimontailCard";
import { testimonials } from "@/libs/TestimonialDetails";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white h-screen dark:bg-gray-900 py-12">
      <div className="text-center mb-12">
        <h2 className="text-teal-400 text-sm uppercase tracking-wide mb-2">
          Happy clients
        </h2>
        <h2 className="text-4xl font-bold text-black dark:text-white">
          What Clients Say about Me
        </h2>
        <p className="text-gray-400 dark:text-gray-300 mt-4">
          Don&apos;t just take my word for it. See what my clients have to say
          about my work.
        </p>
      </div>

      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-teal-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
