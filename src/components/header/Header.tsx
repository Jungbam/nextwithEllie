import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";

const Header = () => {
  const currentPath = usePathname();
  return (
    <div>
      <Link href="/home">
        <h1>Instagram</h1>
      </Link>
      <nav>
        <Link href="/home">
          {currentPath === "/home" ? <AiFillHome /> : <AiOutlineHome />}
        </Link>
        <Link href="/search">
          {currentPath === "/search" ? <RiSearchFill /> : <RiSearchLine />}
        </Link>
        <Link href="/plus">
          {currentPath === "/plus" ? <BsPlusSquareFill /> : <BsPlusSquare />}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
