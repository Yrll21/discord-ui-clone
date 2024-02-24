import React, { Component } from "react";
import { IconType } from "react-icons";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-primary text-secondary shadow-lg z-10">
      <SidebarIcon icon={<FaFire size="28" />}>Fire Icon!</SidebarIcon>
      <SidebarIcon icon={<BsPlus size="32" />}>Plus Icon!</SidebarIcon>
      <SidebarIcon icon={<BsFillLightningFill size="20" />}>
        Lightning Icon!
      </SidebarIcon>
      <SidebarIcon icon={<FaPoo size="20" />}>Poop Icon!</SidebarIcon>
    </div>
  );
};

const SidebarIcon = ({ icon, children }: any) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{children}</span>
  </div>
);

export default SideBar;
