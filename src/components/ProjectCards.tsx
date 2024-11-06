import React from "react";
import Image from "next/image";

export const ProjectCard = ({ project }: any) => (
  <div className="dark:bg-gray-800 bg-gray-500  rounded-lg ">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-8">
        <p className="text-teal-400 text-sm mb-2">
          {project.company} • {project.year}
        </p>
        <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
        <ul className="text-gray-300 mb-6 space-y-2">
          {project.results.map((result: any, index: number) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 text-teal-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{result.title}</span>
            </li>
          ))}
        </ul>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Visit Live Site
        </a>
      </div>
      <div className="md:w-[40rem] relative overflow-x-auto  md:h-full">
        <Image src={project.image} alt={project.title} />
      </div>
    </div>
  </div>
);
