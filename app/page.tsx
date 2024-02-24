import Image from "next/image";
import SideBar from "./components/SideBar";
import ChannelSection from "./components/ChannelSection";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelSection />
    </div>
  );
}
