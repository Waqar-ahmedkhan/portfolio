import TestimonialCard from "@/components/TestimontailCard";
import { testimonials } from "@/libs/TestimonialDetails";

export const TestimonialsSection = () => {
  return (
    <section className="bg-white h-screen dark:bg-gray-900 py-12">
      <div className="text-center mb-12">
      <h2 className="text-teal-400 text-sm uppercase tracking-wide mb-2">Happy clients</h2>
        <h2 className="text-4xl font-bold text-black dark:text-white ">What Clients Say about Me</h2>
        <p className="text-gray-400 dark:text-gray-300 mt-4">Don&apos;t just take my word for it. See what my clients have to say about my work.</p>
      </div>


    <div className=" relative w-[100%] h-full">
     console.log("hello world")  

      <div className=" flex flex-row justify-center space-x-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
    </section>
  );
};