"use client";
import cvWhite from "../../../public/cv-white.svg";
import cvBlack from "../../../public/cv-black.svg";
import githubBlack from "../../../public/github-black.svg";
import githubWhite from "../../../public/github-white.svg";
import linkedinBlack from "../../../public/linkedin-black.svg";
import linkedinWhite from "../../../public/linkedin-white.svg";
import discordBlack from "../../../public/discord-black.svg";
import discordWhite from "../../../public/discord-white.svg";

import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Reseaux = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="hidden fixed md:flex flex-col items-center justify-center bottom-1 left-10 bg-transparent">
      <a
        href="https://github.com/Victouu"
        target="_blank"
        className=" mb-4 hover:scale-110 duration-100"
      >
        <Image
          src={isDarkTheme ? githubWhite : githubBlack}
          alt="github"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/victor-roue-0081222a6/"
        target="_blank"
        className="mb-4 hover:scale-110 duration-100"
      >
        <Image
          src={isDarkTheme ? linkedinWhite : linkedinBlack}
          alt="linkedin"
          width={20}
          height={20}
        />
      </a>
      <a
        href="https://discord.com/users/411123727577776129"
        target="_blank"
        className="mb-4 hover:scale-110 duration-100"
      >
        <Image
          src={isDarkTheme ? discordWhite : discordBlack}
          alt="discord"
          width={22}
          height={22}
        />
      </a>

      <div className="bg-black dark:bg-slate-50  h-24 w-0.5 mb-4"></div>
    </div>
  );
};
