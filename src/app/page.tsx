"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//composants
import Image from "next/image";
//import photo
import imgProfil from "../app/photo/111.jpg";

import Head from "./components/head";
import { TextGenerateEffect } from "./components/text-reveal";
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
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
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
          <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11 z-10">
            <Image
              src={imgProfil}
              alt="profile"
              width={250}
              height={250}
              className="rounded-full  h-44  w-44 md:w-64 md:h-64"
            />
            <h2 className=" text-xl w-full  font-extralight uppercase tracking-widest dark:text-blue md:text-xl text-tuscan text-center">
              Bonjour ! Je m &apos;appelle
            </h2>
            <TextGenerateEffect words={words} />
            <p className="text-center md:whitespace-pre-line sm:text-wrap">
              Je suis étudiant en première année de BUT Informatique à
              l&apos;IUT de Lannion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
