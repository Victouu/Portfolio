"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//image
import Image from "next/image";
import aboutBlack from "../../../public/about-black.svg";
import aboutWhite from "../../../public/about-white.svg";
import contactBlack from "../../../public/contact-black.svg";
import contactWhite from "../../../public/contact-white.svg";
import homeIconDark from "../../../public/home-dark.svg";
import homeIconLight from "../../../public/home-light.svg";
import projectBlack from "../../../public/project-black.svg";
import projectWhite from "../../../public/project-white.svg";

export const Nav = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 items-center rounded-[25px] bg-slate-300 dark:bg-slate-600  px-8 py-2 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent  ">
      <nav className="sticky">
        <ul className="flex items-center justify-around space-x-6 md:justify-center md:space-x-14">
          <li>
            <a
              className="group relative flex-col items-center justify-center text-base before:absolute before:bottom-1 before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 md:text-lg flex md:hidden"
              href="."
            >
              <div className="mb-1 block md:mb-0 md:hidden">
                <Image
                  src={isDarkTheme ? homeIconLight : homeIconDark}
                  alt="alt"
                  width={17}
                  height={17}
                />
              </div>
              <div className=" hover:scale-105 duration-100 hidden sm:block">
                Home
              </div>
            </a>
          </li>
          <li>
            <a
              className="group relative flex-col items-center justify-center text-base before:absolute before:bottom-1 before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:bg-pink/40 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 md:text-lg text-red flex"
              href="/about"
            >
              <div className="mb-1 block md:mb-0 md:hidden">
                <Image
                  src={isDarkTheme ? aboutWhite : aboutBlack}
                  alt="alt"
                  width={17}
                  height={17}
                />
              </div>
              <div className="hover:scale-105 duration-100 hidden sm:block">
                A propos
              </div>
            </a>
          </li>
          <li>
            <a
              className="group relative flex-col items-center justify-center text-base before:absolute before:bottom-1 before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:bg-pink/40 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 md:text-lg text-red flex"
              href="/projets"
            >
              <div className="mb-1 block md:mb-0 md:hidden">
                <Image
                  src={isDarkTheme ? projectWhite : projectBlack}
                  alt="alt"
                  width={17}
                  height={17}
                />
              </div>
              <div className=" hover:scale-105 duration-100 hidden sm:block">
                Projets
              </div>
            </a>
          </li>
          <li>
            <a
              className="group relative flex-col items-center justify-center text-base before:absolute before:bottom-1 before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:bg-pink/40 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 md:text-lg text-red flex"
              href="/contact"
            >
              <div className="mb-1 block md:mb-0 md:hidden">
                <Image
                  src={isDarkTheme ? contactWhite : contactBlack}
                  alt="alt"
                  width={17}
                  height={17}
                />
              </div>
              <div className=" hover:scale-105 duration-100 hidden sm:block">
                Contact
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
