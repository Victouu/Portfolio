"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//composants
//import photo

import Head from "../components/head";
function Competences() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
          <h2 className="w-full text-xs font-extralight uppercase tracking-widest dark:text-blue md:text-xl text-tuscan text-left">
            Compétences
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Competences;
