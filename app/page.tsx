import Image from "next/image";
import SideBar from "./components/SideBar";
import ChannelSection from "./components/ChannelSection";
import ChatSection from "./components/ChatSection";

export default function Home() {
  return (
    <div className="flex bg-gray-700 overflow-y-scroll">
      <SideBar />
      <ChannelSection />
      <ChatSection />
    </div>
  );
}
