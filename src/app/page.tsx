import React from "react";
import { Nav } from "./components/nav";
import { ThemeSwitch } from "./components/ThemeSwitch";
import Image from "next/image";


import { TextGenerateEffect } from "./components/text-reveal";
const words = `Victor Roué
`;
export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl overflow-hidden">
        <div className="mt-10 flex w-full items-center justify-between md:mt-20">
          <a href=".">
            Portfolio
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
            <h2 className=" text-xl w-full  font-extralight uppercase tracking-widest dark:text-blue md:text-xl text-tuscan text-center">
              Bonjour ! Je m &apos;appelle
            </h2>
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </div>
    </div>
  );
}
