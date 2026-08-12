
import React from "react";
import {FaSearch} from "react-icons/fa"
import mainLogo from "../../assets/main-icon.png";

const Header = () => {
  return (
    <div className="w-full bg-white text-sm">
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={mainLogo}
              alt="logo"
              className="h-8 object-contain cursor-pointer"
            />
          

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Movies, Events, Plays"
              className="border border-gray-500 rounded px-4 py-1.5 w-[400px] text-sm outline-none focus:border-red-500"
            />
            <FaSearch className ="absolute right-2 top-2.5 text-gray-400"/>
          </div>
          </div>  
          <div className=" flex text-sm font-medium cursor-pointer">
            <div className="text-sm font-medium cursor-pointer ">
                 Dehradun &nbsp; 
            </div>
            <button className="bg bg-red-600 cursor-pointer text-white px-3 py-1.5 rounded text-sm font-medium">
                 Sign in
            </button>
           
          </div>



        </div>
      </div>
      <div className="bg-[#f2f2f2] px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-gray-700">
            <div className="flex items-center space-x-6 font-medium">
                <span className="cursor-pointer hover:text-red-500">Movies</span>
                <span className="cursor-pointer hover:text-red-500">Stream</span>
                <span className="cursor-pointer hover:text-red-500">Events</span>
                <span className="cursor-pointer hover:text-red-500">Plays</span>
                <span className="cursor-pointer hover:text-red-500">Sports</span>
                <span className="cursor-pointer hover:text-red-500">Activities</span>
            </div>
            <div className="flex item-center space-x-6 text-sm">
                <span className="cursor-pointer hover:underline">ListYourShow</span>
                <span className="cursor-pointer hover:underline">Corporates</span>
                <span className="cursor-pointer hover:underline">Offers</span>
                <span className="cursor-pointer hover:underline">GiftCards</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



