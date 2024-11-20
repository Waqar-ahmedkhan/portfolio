"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "../libs/TestimonialDetails";

interface TestimonialCardProps {
  testimonial: any;
  isActive?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive = true }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header: Avatar, Name, Position */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={64}
            height={64}
            className="rounded-full border-2 border-teal-500"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
          <p className="text-sm text-teal-600 dark:text-teal-400">{testimonial.position}</p>
          {testimonial.company && (
            <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
          )}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">{testimonial.text}</p>

      {/* Footer: Rating & Date */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
        {testimonial.date && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(testimonial.date).toLocaleDateString()}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
