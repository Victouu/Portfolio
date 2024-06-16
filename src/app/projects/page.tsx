"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//composants
//import photo

import Image from "next/image";
import Head from "../components/head";
function Projects() {
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
            Projets
          </h2>
          <div className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold">Semestre 1</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 1.01
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 1"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 1
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 1.02
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 2"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 2
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 1.03
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 3"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 3
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 1.04
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 4"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 4
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 1.05
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 5"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 5
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 1.06
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 6"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 6
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Semestre 2</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 2.01
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 1"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 1
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 2.02
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 2"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 2
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 2.03
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 3"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 3
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 2.04
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 4"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 4
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 2.05
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 5"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 5
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        SAÉ 2.06
                      </h3>
                    </div>
                    <div className="p-6">
                      <Image
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Projet 6"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Description du projet 6
                      </p>
                      <div className="mt-4">
                        <a className="text-primary underline" href="#">
                          Voir sur GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
