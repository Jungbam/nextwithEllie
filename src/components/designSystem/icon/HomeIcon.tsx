"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

const HomeIcon = () => {
  const currentPath = usePathname();
  return <>{currentPath === "home" ? <AiFillHome /> : <AiOutlineHome />}</>;
};

export default HomeIcon;
