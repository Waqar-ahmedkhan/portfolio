import Image from "next/image";

const TestimonialCard = ({ testimonial }:any) => {
  return (
    <div className="w-[90%] md:w-[50%] h-[350px] bg-gray-500 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg mx-auto transition-transform duration-500">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-200 dark:text-gray-400">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-200 dark:text-gray-300 leading-relaxed">{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;
