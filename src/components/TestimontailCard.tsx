import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
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
};

export default TestimonialCard;
