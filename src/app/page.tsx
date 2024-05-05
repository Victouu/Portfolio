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


import { TextGenerateEffect } from "./components/text-reveal";
import { clsx } from 'clsx';
const words = `Victor Roué
`;


export default function Home() {

  const { theme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl overflow-hidden">
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
