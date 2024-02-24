"use client";
import React, { useState } from "react";
import { FaPlus, FaChevronRight, FaChevronDown } from "react-icons/fa";
const ChannelSection = () => {
  return (
    // whole container for the channel section
    <div
      className=" fixed top-0 left-16 h-screen w-60 flex flex-col 
        bg-gray-100 text-gray-900 shadow-lg"
    >
      {/* channel header */}
      <div className="bg-gray-200 py-6 pl-4">
        <p className="text-2xl font-bold">Channels</p>
      </div>

      {/* Channels list */}
      <div className="py-6">
        <ChannelComponent />
        <ChannelComponent />
      </div>
    </div>
  );
};

const ChannelComponent = () => {
  const dropdownContent = (
    <ul className="relative z-50">
      <li className="py-2 pl-10 hover:bg-gray-200 cursor-pointer">
        <span className="text-gray-500">#</span> Item 1
      </li>
      <li className="py-2 pl-10 hover:bg-gray-200 cursor-pointer">
        <span className="text-gray-500">#</span> Item 2
      </li>
      {/* Add more items as needed */}
    </ul>
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`select-none relative flex items-center py-2 px-2 hover:bg-gray-300 cursor-pointer
        ${isOpen ? "transition-all duration-500 ease-in-out" : ""}`}
        onClick={handleClick}
      >
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        <p className="text-xl pl-2">Topics</p>
        <FaPlus className="ml-auto" />
      </div>
      <div
        className={`${
          isOpen ? "transition-all duration-500 ease-in-out" : "hidden"
        }`}
      >
        {dropdownContent}
      </div>
    </>
  );
};

export default ChannelSection;
