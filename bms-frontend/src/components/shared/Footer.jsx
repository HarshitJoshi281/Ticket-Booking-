import React from "react";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import mainLogo from "../../assets/main-icon-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">
      <div className="border-t border-gray-600 w-full">

        {/* Logo */}
        <div className="flex flex-col items-center py-6">
          <img
            src={mainLogo}
            alt="BookMyScreen Logo"
            className="w-28 mb-4"
          />

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="w-8 h-8 p-2 bg-gray-700 text-white cursor-pointer" />
            <FaTwitter className="w-8 h-8 p-2 bg-gray-700 text-white cursor-pointer" />
            <FaInstagram className="w-8 h-8 p-2 bg-gray-700 text-white cursor-pointer" />
            <FaYoutube className="w-8 h-8 p-2 bg-gray-700 text-white cursor-pointer" />
            <FaPinterest className="w-8 h-8 p-2 bg-gray-700 text-white cursor-pointer" />
            <FaLinkedinIn className="w-8 h-8 p-2 bg-gray-700 text-white cursor-pointer" />
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs max-w-4xl mx-auto pb-6">
          Hey, you can use it. I don't mind.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
