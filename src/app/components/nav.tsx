'use client'

import * as React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import homeIconDark from "../../../public/home-dark.svg";
import homeIconLight from "../../../public/home-light.svg";

export const Nav = () => {
  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  return (
    <nav className={`absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 items-center rounded-[25px] bg-slate-500 px-8 py-2 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent ${isDarkTheme ? 'dark' : ''}`}>
      <ul className="flex items-center justify-around space-x-6 md:justify-end md:space-x-14">
        <li>
          <a className="group relative flex-col items-center justify-center text-base before:absolute before:bottom-1 before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:bg-pink/40 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 md:text-lg text-red flex md:hidden" href=".">
            <div className="mb-1 block md:mb-0 md:hidden">
              {/* Utilisation de l'icône en fonction du thème */}
              <Image src={isDarkTheme ? homeIconLight : homeIconDark} alt="alt" width={17} height={17} />
            </div>
            <div className="hidden sm:block">
              Home
            </div>
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/project">Projects</a>
        </li>
      </ul>
    </nav>
  );
};
