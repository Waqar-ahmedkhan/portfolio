import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-500 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Let&apos;s create something amazing together</h2>
              <p className="text-gray-800 text-lg">Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.</p>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-800 transition-all duration-300 text-lg font-semibold shadow-md">
              Contact Me
              <ArrowUpRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-sm">© 2024. All rights reserved.</p>
          <div className="flex space-x-8">
            {['YouTube', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
              <a key={platform} href="#" className="hover:text-white transition-colors duration-200 text-sm">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;