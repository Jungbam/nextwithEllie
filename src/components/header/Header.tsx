"use client";
import Link from "next/link";
import React from "react";

import { HomeIcon, PlusIcon, SearchIcon } from "../designSystem/icon";
import ColorBtn from "../common/ColorBtn";

const navMenu = [
  {
    href: "/home",
    icon: <HomeIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
  },
  {
    href: "/plus",
    icon: <PlusIcon />,
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-10 border-b">
      <div className="flex justify-between items-center">
        <Link href="/home" passHref>
          <h1 className="text-3xl font-bold">Instagram</h1>
        </Link>
        <nav>
          <ul className="flex justify-between items-center mx-auto gap-4 p-4">
            {navMenu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  {item.icon}
                </Link>
              </li>
            ))}
            <ColorBtn text="Sign In" onClick={() => {}} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
