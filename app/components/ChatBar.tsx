import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatBar = () => {
  return (
    <div
      className="flex flex-row items-center justify-between 
    fixed left-88 right-8 bottom-4 
    rounded-lg shadow-lg 
    bg-primary
    h-12;"
    >
      <div className="rounded-lg overflow-hidden relative flex w-full flex-wrap items-stretch">
        <input
          type="input"
          className="p-2 text-gray-100 bg-primary focus:text-gray-50"
          placeholder="Enter message..."
          aria-label="Send"
          aria-describedby="button-addon1"
        />

        {/* <!--Search button--> */}
        <button
          className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
        >
          <FaPaperPlane size={25} />
        </button>
      </div>
    </div>
  );
};

export default ChatBar;
