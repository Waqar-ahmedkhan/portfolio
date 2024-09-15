import Image from "next/image";
import memoji from "../assets/images/memoji-computer.png";

export const HeroSection = () => {
  return (
    <div className="py-16 md:py-24 lg:py-32 flex justify-center text-black dark:text-white bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="flex flex-col items-center text-center z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="relative mb-8">
          <Image src={memoji} height={200} width={200} alt="Profile memoji" className="mb-2 rounded-md" />
          <div className="flex py-1 px-5 flex-row items-center space-x-4 bg-black dark:bg-gray-800 text-white rounded-md">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="">Available for new projects</div>
          </div>
        </div>

        <h1 className="text-3xl  md:text-6xl font-bold mb-6 leading-tight">
            Building Exceptional <br /> 
            <span className="text-indigo-600  dark:text-indigo-400">User Experiences</span>
          </h1>
        <p className="md:text-xl  text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            I specialize in transforming designs into functional, high-performing web applications. 
            Let's discuss your next project and bring your vision to life.
          </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gray-800 sm:text-sm text-white px-4 py-3 md:px-6 md:py-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center">
            Explore My Work
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="bg-black dark:bg-white dark:text-black text-white px-4 py-3 md:px-6 md:py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100 transition">
            Let's Connect 👋
          </button>
        </div>
      </div>
    </div>
  );
};
