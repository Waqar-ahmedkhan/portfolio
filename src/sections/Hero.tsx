import Image from "next/image";
import memoji from "../assets/images/memoji-computer.png";

export const HeroSection = () => {
  return (
    <div className="py-24 flex justify-center  text-white">
    <div className="flex flex-col items-center text-center z-10 max-w-3xl mx-auto">
        <div className="relative mb-8">
          <Image src={memoji} height={200} width={200} alt="Profile memoji" className="mb-2" />
          <div className="flex py-1 px-5 flex-row items-center space-x-4 bg-black text-white rounded-md ">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <div className="">Available for new projects</div>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-6">Building Scalable Web Solutions</h1>
        
        <p className="text-xl mb-8 text-gray-300">
        Full-stack developer with DevOps expertise. Let’s build something 
        powerful and scalable for your business.
        </p>
        
        <div className="flex space-x-4">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition flex items-center">
            Explore My Work
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Let's Connect 👋
          </button>
        </div>
      </div>
    </div>
  );
};