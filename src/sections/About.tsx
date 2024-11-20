"use client";
import React from "react";
import Image from "next/image";
import books from "../assets/images/book-cover.png";
import map from "../assets/images/map.png";
import HtmlIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import GithubIcon from "../assets/icons/github.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import ReactIcon from "../assets/icons/react.svg";

const AboutMe = () => {
  const tools = [
    { name: "HTML5", icon: <HtmlIcon className="text-teal-500" size={8} /> },
    { name: "CSS3", icon: <CssIcon className="text-teal-500" size={8} /> },
    { name: "React", icon: <ReactIcon className="text-teal-500" size={8} /> },
    { name: "Chrome", icon: <ChromeIcon className="text-teal-500" size={8} /> },
    { name: "Github", icon: <GithubIcon className="text-teal-500" size={8} /> },
    { name: "HTML5", icon: <HtmlIcon className="text-teal-500" size={8} /> },
    { name: "CSS3", icon: <CssIcon className="text-teal-500" size={8} /> },
    { name: "React", icon: <ReactIcon className="text-teal-500" size={8} /> },
    { name: "Chrome", icon: <ChromeIcon className="text-teal-500" size={8} /> },
    { name: "Github", icon: <GithubIcon className="text-teal-500" size={8} /> },
  ];

  return (
    <div className="dark:bg-gradient-to-b from-gray-900 to-gray-800 text-black dark:text-white p-8 min-h-screen">
      <div className="text-center mb-12">
        <h3 className="text-teal-400 uppercase text-sm tracking-wide mb-2">
          ABOUT ME
        </h3>
        <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
          A Glimpse Into My World
        </h2>
        <p className="text-gray-400">
          Learn more about who I am, what I do, and what inspires me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg p-6">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-black dark:text-white">
            <span className="text-teal-400 mr-2">✦</span> My Reads
          </h3>
          <p className="text-gray-400 mb-4">
            Explore the books shaping my perspectives.
          </p>
          <Image
            src={books}
            width={100}
            height={150}
            alt="Atomic Habits book cover"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 text-black  dark:bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
          <h3 className="flex items-center text-xl font-semibold mb-2 dark:text-white text-black">
            <span className="text-teal-400 mr-2">✦</span> My Toolbox
          </h3>
          <p className="dark:text-gray-400  mb-4">
            Explore the technologies and tools I use to craft exceptional
            digital experiences.
          </p>
          <div className="grid grid-cols-7 md:grid-cols-15 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="dark:bg-gray-700 bg-white rounded-lg p-3 flex flex-row gap-2 items-center justify-center hover:bg-teal-500 transition-all duration-300"
              >
                {tool.icon}
                <span className="text-xs mt-1 text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex py-20 gap-5">
        <div className="dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 bg-white rounded-2xl  shadow-lg p-6">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-black dark:text-white">
            <span className="text-teal-400 mr-2">✦</span> Beyond the Code
          </h3>
          <p className="text-gray-400 mb-4">
            Explore my interests and hobbies beyond the digital realm.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Painting 🎨",
              "Photography 📷",
              "Gaming 🎮",
              "Hiking 🥾",
              "Music 🎵",
              "Fitness 🏋️‍♂️",
              "Reading 📚",
            ].map((hobby) => (
              <span
                key={hobby}
                className="bg-teal-600 text-white rounded-full px-3 py-1 text-sm hover:bg-teal-400 transition-all duration-300"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
        <div className="dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 bg-white rounded-2xl shadow-lg p-4 overflow-hidden">
          <Image
            src={map}
            layout="responsive"
            width={300}
            height={300}
            alt="Map with avatar"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
