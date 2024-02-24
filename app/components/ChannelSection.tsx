"use client";
import React, { useState } from "react";
import { FaPlus, FaChevronRight, FaChevronDown } from "react-icons/fa";
const ChannelSection = () => {
  return (
    // whole container for the channel section
    <div
      className=" fixed top-0 left-16 h-screen w-64 flex flex-col 
        bg-gray-800 text-gray-900 shadow-lg"
    >
      {/* channel header */}
      <div className="text-gray-50 py-6 pl-4">
        <p className="text-2xl font-bold">Channels</p>
      </div>

      {/* Channels list */}
      <div className="py-6">
        <ChannelComponent>Topics</ChannelComponent>
        <ChannelComponent>Questions</ChannelComponent>
        <ChannelComponent>Random</ChannelComponent>
      </div>
    </div>
  );
};

const ChannelComponent = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`m-2 rounded-lg transition-all duration-300 text-gray-500 select-none relative flex items-center py-2 px-2 hover:bg-gray-700 cursor-pointer`}
        onClick={handleClick}
      >
        {isOpen ? (
          <FaChevronDown className="text-secondary" />
        ) : (
          <FaChevronRight className="text-secondary" />
        )}
        <p className={`text-xl pl-2 ${isOpen ? "text-secondary" : ""}`}>
          {children}
        </p>
        <FaPlus className="ml-auto text-secondary" />
      </div>
      <div>
        <ul className={`${isOpen ? "" : "hidden"} text-gray-500`}>
          <li className="transition-all duration-300 m-2 rounded-lg py-2 pl-10 hover:bg-gray-700 cursor-pointer">
            <span className="text-gray-400">#</span> Item 1
          </li>
          <li className="transition-all duration-300 m-2 rounded-lg py-2 pl-10 hover:bg-gray-700 cursor-pointer">
            <span className="text-gray-400">#</span> Item 2
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
    </>
  );
};

export default ChannelSection;
