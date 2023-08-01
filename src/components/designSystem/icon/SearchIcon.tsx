"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";

const SearchIcon = () => {
  const currentPath = usePathname();
  return (
    <>
      {currentPath === "/search" ? (
        <RiSearchFill className="w-6 h-6" />
      ) : (
        <RiSearchLine className="w-6 h-6" />
      )}
    </>
  );
};

export default SearchIcon;
