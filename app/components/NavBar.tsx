import React from "react";
import SearchBar from "./SearchBar";
import { FaRegBell, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed w-full flex bg-gray-700 shadow-xl items-center h-16 p-6">
      {/* Chat box title */}
      <div>
        <p className="text-secondary text-xl">
          <span className="text-gray-500">#</span> tailwind-css
        </p>
      </div>
      {/* Nav Bar right side */}
      <div className="flex items-center space-x-4 ml-auto pr-80">
        <SearchBar />
        <FaRegBell size={30} className="text-primary" />
        <FaUserCircle size={30} className="text-primary" />
      </div>
    </div>
  );
};

export default NavBar;
