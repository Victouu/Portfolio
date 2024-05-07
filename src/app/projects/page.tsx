"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
//composants
import Image from "next/image";
//import photo

import Head from "../components/head";
import Contact from '../contact/page';

function Projects() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl overflow-hidden">
        <Head />
        <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          <h2 className="w-full text-xs font-extralight uppercase tracking-widest dark:text-blue md:text-xl text-tuscan text-left">Projets</h2>  
          <h2 className="whitespace-pre-line dark:text-blue text-tuscan text-md xs:text-2xl md:text-6xl font-extrabold">
              </h2> 

        </div>
      </div>
    </div>
  );
}

export default Projects;
