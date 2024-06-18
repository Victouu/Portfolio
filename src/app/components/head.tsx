"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
//composants
import { ThemeSwitch } from "./ThemeSwitch";
import { Nav } from "./nav";
import { Reseaux } from "./reseaux";
//import photo
import logodark from "../../../public/LOGO_dark.png";
import logolight from "../../../public/LOGO_light.png";
import { Cv } from "./cv";

export default function Head() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div>
      <Reseaux />
      <Cv />
      <div className="mt-10 flex w-full items-center justify-between md:mt-20 z-20">
        <a href="." className="duration-300 hover:scale-110">
          <Image
            src={isDarkTheme ? logolight : logodark}
            alt="logo Victor Roué"
            title="logo Victor Roué"
            width={100}
            height={100}
          />
        </a>
        <Nav />
        <ThemeSwitch />
      </div>
    </div>
  );
}
