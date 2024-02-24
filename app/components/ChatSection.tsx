import React from "react";
import NavBar from "./NavBar";
import ChatBox from "./ChatBox";

const ChatSection = () => {
  return (
    <div className="pl-80 bg-gray-700 h-screen w-full top 0">
      <NavBar />
      <ChatBox />
    </div>
  );
};

export default ChatSection;
