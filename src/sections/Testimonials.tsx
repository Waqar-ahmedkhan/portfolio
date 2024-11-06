"use client"
import TestimonialCard from "../components/TestimontailCard";
import { testimonials } from "@/libs/TestimonialDetails";
import { useState } from "react";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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

      <div className="relative w-full h-full flex justify-center items-center">
        <button onClick={handlePrev} className="absolute left-4">
          &#8249; {/* Left Arrow */}
        </button>
        
        <TestimonialCard testimonial={testimonials[currentIndex]} />

        <button onClick={handleNext} className="absolute right-4">
          &#8250; {/* Right Arrow */}
        </button>
      </div>
    </section>
  );
};
