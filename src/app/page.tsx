'use client';
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
//composants
import { Nav } from "./components/nav";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Image from "next/image";
//import photo
import imgProfil from "../app/photo/111.jpg";
import logolight from "../../public/LOGO_light.png"
import logodark from "../../public/LOGO_dark.png"
import cvWhite from "../../public/cv-white.svg";
import cvBlack from "../../public/cv-black.svg";
import githubBlack from "../../public/github-black.svg";
import githubWhite from "../../public/github-white.svg";
import linkedinBlack from "../../public/linkedin-black.svg";
import linkedinWhite from "../../public/linkedin-white.svg";


import { TextGenerateEffect } from "./components/text-reveal";
import { clsx } from 'clsx';
const words = `Victor Roué
`;


export default function Home() {

  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl overflow-hidden">
 \
        <div className="hidden fixed md:flex flex-col items-center justify-center bottom-1 left-10 bg-transparent">
          <a href="https://github.com/Victouu" target="_blank" className=" mb-4 hover:scale-110 duration-100">
            <Image
              src={isDarkTheme ? githubWhite : githubBlack}
              alt="github"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.linkedin.com/in/victor-roue-0081222a6/" target="_blank" className="mb-4 hover:scale-110 duration-100">
            <Image
              src={isDarkTheme ? linkedinWhite : linkedinBlack}
              alt="linkedin"
              width={20}
              height={20}
            />
          </a>
          <div className="bg-black dark:bg-slate-50  h-24 w-0.5 mb-4"></div>
        </div>
        <div className="mt-10 flex w-full items-center justify-between md:mt-20">
          <a href=".">
            <Image
              src={isDarkTheme ? logolight : logodark}
              alt="logo"
              width={100}
              height={100}
            />
          </a>
          <Nav />
          <ThemeSwitch />
        </div>
        <div
          className="hidden w-full flex-1 items-center"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
            display: "flex",
          }}
        >
          <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
            <Image
              src={imgProfil}
              alt="profile"
              width={250}
              height={250}
              className="rounded-full"
            />
            <h2 className=" text-xl w-full  font-extralight uppercase tracking-widest dark:text-blue md:text-xl text-tuscan text-center">
              Bonjour ! Je m &apos;appelle
            </h2>
            <TextGenerateEffect words={words} />
            <p className="text-center md:whitespace-pre-line">Je suis étudiant en première année de BUT Informatique à l&apos;IUT de Lannion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
