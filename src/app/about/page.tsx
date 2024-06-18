"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//composants
import Image from "next/image";
//import photo
import cLogo from "../../../public/c.svg";
import cssLogo from "../../../public/css.svg";
import dockerLogo from "../../../public/docker.svg";
import gitLogo from "../../../public/git.svg";
import htmlLogo from "../../../public/html.svg";
import javaLogo from "../../../public/java.svg";
import javascriptLogo from "../../../public/js.svg";
import nextLogo from "../../../public/nextjs.svg";
import phpLogo from "../../../public/php.svg";
import postgreLogo from "../../../public/postgresql.svg";
import pythonLogo from "../../../public/python.svg";
import reactLogo from "../../../public/react.svg";
import tailwindLogo from "../../../public/tailwind.svg";
import typescriptLogo from "../../../public/typescript.svg";

import Head from "../components/head";

function About() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const words = [
    {
      text: "informatique",
    },
    {
      text: "web design",
    },
    {
      text: "web development",
    },
  ];

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl">
        <Head />
        <div className="flex items-center pt-5">
          <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
              Me connaitre
            </h2>
            <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
              <p className="w-full whitespace-pre-line text-lg">
                J&apos;ai 19 ans et je suis diplômé d&apos;un BAC STI2D option
                SIN, actuellement en BUT Informatique à l&apos;IUT de Lannion,
                je me suis découvert une affection pour le web design et
                développement.
                <br />À côté de mes études je suis passionné par la musique, le
                sport, les jeux vidéos et le cinéma.
              </p>
            </div>
            <h2 className="w-full text-xs font-extralight uppercase tracking-widest md:text-xl text-tuscan text-left">
              Mes compétences
            </h2>
            <div className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40">
              <ul className="flex flex-wrap justify-center gap-2 text-lg">
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={htmlLogo} alt="html" width={50} height={50} />
                  <span className="mt-2">HTML</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={cssLogo} alt="css" width={50} height={50} />
                  <span className="mt-2">CSS</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image
                    src={javascriptLogo}
                    alt="javascript"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2">Javascript</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={reactLogo} alt="react" width={50} height={50} />
                  <span className="mt-2">React</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <div className="bg-slate-50 rounded-full">
                    <Image src={nextLogo} alt="next" width={50} height={50} />
                  </div>
                  <span className="mt-2">NextJS</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image
                    src={tailwindLogo}
                    alt="tailwind"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2">Tailwind</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image
                    src={typescriptLogo}
                    alt="typescript"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2">Typescript</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={cLogo} alt="c" width={50} height={50} />
                  <span className="mt-2">C</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={phpLogo} alt="php" width={50} height={50} />
                  <span className="mt-2">PHP</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={javaLogo} alt="java" width={50} height={50} />
                  <span className="mt-2">Java</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={pythonLogo} alt="python" width={50} height={50} />
                  <span className="mt-2">Python</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image
                    src={postgreLogo}
                    alt="postgresql"
                    width={50}
                    height={50}
                  />
                  <span className="mt-2">PostgreSQL</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={dockerLogo} alt="docker" width={50} height={50} />
                  <span className="mt-2">Docker</span>
                </li>
                <li className="flex flex-col items-center px-4 py-3 hover:scale-105 duration-100">
                  <Image src={gitLogo} alt="git" width={50} height={50} />
                  <span className="mt-2">Git</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
