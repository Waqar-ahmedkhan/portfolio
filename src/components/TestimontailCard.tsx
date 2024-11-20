import Image from "next/image";

const TestimonialCard = ({ testimonial }: any) => {
  return (
    <div className="min-w-[90%] md:min-w-[60%] lg:min-w-[40%] h-[350px] bg-gray-100 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg mx-auto flex flex-col justify-between">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
          width={64}
          height={64}
        />
        <div>
          <p className="text-lg font-semibold text-black dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.position}
          </p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );
};

export default TestimonialCard;
