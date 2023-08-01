"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";

const SearchIcon = () => {
  const currentPath = usePathname();
  return (
    <>
      {currentPath === "/plus" ? (
        <BsPlusSquareFill className="w-7 h-7" />
      ) : (
        <BsPlusSquare className="w-7 h-7" />
      )}
    </>
  );
};

export default SearchIcon;
