"use client"
import TestimonialCard from "../components/TestimontailCard";
import { testimonials } from "@/libs/TestimonialDetails";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white h-screen dark:bg-gray-900 py-12 flex items-center justify-center">
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

      <div className="relative w-full overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute w-full transition-transform duration-700 ease-in-out ${
              index === currentIndex
                ? "transform translate-x-0"
                : index < currentIndex
                ? "transform -translate-x-full"
                : "transform translate-x-full"
            }`}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};
