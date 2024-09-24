import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

const TestimonialCard = ({ testimonial }:any) => (
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
    <div className="flex items-center space-x-4 mb-4">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="text-lg font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.position}</p>
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
  </div>
);

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">What Clients Say about Me</h2>
        <p className="text-gray-400 mt-4">Don&apos;t just take my word for it. See what my clients have to say about my work.</p>
      </div>
      <div className="flex justify-center space-x-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};