import Image from "next/image";
import memoji from "../assets/images/memoji-computer.png";
import grainImage from "../assets/images/grain.jpg";
import EarthIcon from "../assets/icons/earth.png";
import Mars from "../assets/icons/mars.png";
import Mercury from "../assets/icons/mercury.png";
import HeroOrbit from "@/components/HeroOrbit";
import StarIcon from "../assets/icons/star.svg";
import Satellite from "../assets/icons/satellite.png";
import ISS from "../assets/icons/space-station.png";

export const HeroSection = () => {
  return (
    <>
      <div className="py-16 md:py-24 lg:py-30 flex justify-center text-black dark:text-white transition-colors duration-500 relative overflow-x-clip">
        <div className="container">
          {/* Background grain image */}
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage})`,
            }}
          ></div>

          {/* Hero rings */}
          <div className="hero-ring size-[650px] md:size-[710px]"></div>
          <div className="hero-ring size-[750px] md:size-[850px]"></div>
          <div className="hero-ring size-[850px] md:size-[1050px]"></div>
          <div className="hero-ring size-[950px] md:size-[1250px]"></div>
          <div className="hero-ring size-[1050px] md:size-[1450px]"></div>
          <div className="hero-ring size-[1050px] md:size-[1650px]"></div>
          <div className="hero-ring size-[1050px] md:size-[1850px]"></div>
          <div className="hero-ring size-[1050px] md:size-[2050px]"></div>
          <div className="hero-ring size-[1050px] md:size-[2250px]"></div>

          {/* Earth */}
          <HeroOrbit size={760} rotate={-45} duration={50}>
            <Image src={EarthIcon} alt="Earth icon" width={90} height={90} />
          </HeroOrbit>

          {/* Mercury */}
          <HeroOrbit size={600} rotate={90} duration={30}>
            <Image src={Mercury} alt="Mercury icon" width={90} height={90} />
          </HeroOrbit>

          {/* Mars */}
          <HeroOrbit size={950} rotate={-30} duration={90}>
            <Image src={Mars} alt="Mars icon" width={110} height={110} />
          </HeroOrbit>

          {/* Stars */}
          <HeroOrbit size={650} rotate={-60} duration={500}>
            <StarIcon className="text-emerald-500 size-28" />
          </HeroOrbit>

          <HeroOrbit size={430} rotate={-30} duration={500}>
            <StarIcon className="text-emerald-500 size-30" />
          </HeroOrbit>

          <HeroOrbit size={900} rotate={-45} duration={500}>
            <StarIcon className="text-emerald-500 size-20" />
          </HeroOrbit>

          <HeroOrbit size={1100} rotate={-80} duration={500}>
            <StarIcon className="text-emerald-500 size-30" />
          </HeroOrbit>

          {/* Extra Stars */}
          <HeroOrbit size={550} rotate={30} duration={600}>
            <StarIcon className="text-yellow-400 size-24" />
          </HeroOrbit>

          <HeroOrbit size={750} rotate={-100} duration={700}>
            <StarIcon className="text-blue-400 size-22" />
          </HeroOrbit>

          <HeroOrbit size={300} rotate={45} duration={400}>
            <StarIcon className="text-red-500 size-26" />
          </HeroOrbit>

        
        

          

          <div className="absolute right-40 satellite-circle">
          <Image src={Satellite} alt="Satellite" width={50} height={50} />
        </div>

        {/* Circular movement for ISS */}
        <div className="absolute top-1/2 left-1/5 iss-circle">
          <Image src={ISS} alt="International Space Station" width={50} height={50} />
        </div>

          {/* Decorative rings */}
          <div className="absolute w-48 h-48 rounded-full border-4 border-indigo-600 opacity-30 -top-10 -left-10 z-0"></div>
          <div className="absolute w-72 h-72 rounded-full border-4 border-indigo-400 opacity-20 bottom-10 -right-16 z-0"></div>
          <div className="absolute w-32 h-32 rounded-full border-4 border-purple-600 opacity-30 top-20 left-20 z-0"></div>
          <div className="absolute w-64 h-64 rounded-full border-4 border-indigo-500 opacity-20 -bottom-32 left-32 z-0"></div>

          {/* Content section */}
          <div className="flex flex-col items-center text-center z-10 max-w-5xl mx-auto px-6 sm:px-8">
            <div className="relative mb-8">
              <Image
                src={memoji}
                height={200}
                width={200}
                alt="Profile memoji"
                className="mb-2 rounded-md"
              />
              <div className="flex py-1 px-5 flex-row items-center space-x-4 bg-black dark:bg-gray-800 text-white rounded-md">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div>Available for new projects</div>
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Building Exceptional <br />
              <span className="text-indigo-600 dark:text-indigo-400">
                User Experiences
              </span>
            </h1>

            <p className="md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              I specialize in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project and bring your vision to life.
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 sm:space-x-4">
              <button className="bg-gray-800 sm:text-sm text-white px-4 py-3 md:px-6 md:py-3 rounded-full hover:bg-gray-700 transition flex items-center justify-center">
                Explore My Work
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <button className="bg-black text-sm dark:bg-white dark:text-black text-white px-4 py-3 md:px-6 md:py-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-100 transition">
                Let&apos;s Connect 👋
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
