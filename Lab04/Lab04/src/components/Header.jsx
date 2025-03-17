import React from "react";
import './Header.css'
import logo from "./img/logo.png";
import loupe from "./img/loupe.png";
import user from "./img/user.jpg";

function Header() {
  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Logo */}
      <div>
        <img className="w-[220px] h-[100px] mr-5" src={logo} alt="Logo" />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <img src={loupe} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" alt="Search" />
        <input
          type="search"
          placeholder="Search..."
          className="w-[180px] h-[30px] pl-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-500 text-[15px] font-semibold">
        <li className="hover:text-pink-600 cursor-pointer transition duration-300">What to cook</li>
        <li className="hover:text-pink-600 cursor-pointer transition duration-300">Recipes</li>
        <li className="hover:text-pink-600 cursor-pointer transition duration-300">Ingredients</li>
        <li className="hover:text-pink-600 cursor-pointer transition duration-300">Occasions</li>
        <li className="hover:text-pink-600 cursor-pointer transition duration-300">About Us</li>
      </ul>

     
      <button className="bg-pink">
        Your Recipe Box
      </button>

      <div>
        <img src={user} className="w-12 h-12 rounded-full ml-10 border border-gray-300" alt="User" />
      </div>
    </div>
  );
}

export default Header;
