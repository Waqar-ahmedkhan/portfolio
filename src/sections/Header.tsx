"use client"
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className="flex justify-between z-40 items-center relative top-3 px-4 max-w-7xl mx-auto">
            <nav className="flex md:gap-10 gap-1 p-2 border mx-auto border-gray-700 dark:border-gray-900 bg-gray-200 dark:bg-gray-800 rounded-full backdrop-blur">
                <a href="/" className="nav-item">Home</a>
                <a href="/projects" className="nav-item">Projects</a>
                <a href="/about" className="nav-item">About</a>
                <a href="/contact" className="bg-indigo-400  dark:bg-white nav-item text-gray-100 dark:text-black hover:bg-indigo-200 dark:hover:bg-gray-400 transition duration-200">Contact</a>
            </nav>
            <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hidden md:block bg-gray-200 dark:bg-gray-700  text-black dark:text-black hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    );
};
