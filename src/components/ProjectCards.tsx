import Image from "next/image";
import React from 'react'

interface CardInfo {
  title: string;
  company: string;
  year: string;
  description: string;
  achievements: string[];
  imageUrl: string;
}

function ProjectCards({ title, company, year, description, achievements, imageUrl }: CardInfo) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 pr-4">
        <p className="text-teal-400 text-sm mb-2">{company} • {year}</p>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="text-gray-300 mb-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {achievement}
            </li>
          ))}
        </ul>
        <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Visit Live Site
        </button>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        {/* <Image src={imageUrl} alt={title} width={100} className="rounded-lg w-full h-auto" /> */}
      </div>
    </div>
  </div>
  )
}

export default ProjectCards

