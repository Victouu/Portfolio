"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//composants
//import photo
import Image from "next/image";
import sae101 from "../../../public/sae101.png";
import sae102 from "../../../public/sae102.png";
import sae103 from "../../../public/sae103.png";
import sae104 from "../../../public/sae104.png";
import sae105 from "../../../public/sae105.png";
import sae106 from "../../../public/sae106.png";
import sae201 from "../../../public/sae201.png";
import sae202 from "../../../public/sae202.png";
import sae203 from "../../../public/sae203.png";
import sae204 from "../../../public/sae204.png";
import sae205 from "../../../public/sae205.png";
import sae206 from "../../../public/sae206.png";

import Head from "../components/head";
function Projets() {
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
                        src={sae101}
                        width={400}
                        height={300}
                        alt="Projet 1"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Création d&apos;un sudoku en C.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae102}
                        width={400}
                        height={300}
                        alt="Projet 2"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Solveur de sudoku en C avec Backtracking etc.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae103}
                        width={400}
                        height={300}
                        alt="Projet 3"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Utilisation de docker pour faire un script bash qui
                        génère une page HTML a partir d&apos;un fichier PHP
                        page.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae104}
                        width={400}
                        height={300}
                        alt="Projet 4"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Conception d&apos;une base de données et modélisation
                        avec un diagramme de classe et Traduction Diagramme de
                        Classe en SQL.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae105}
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
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        ></a>
                        Création d&apos;un site web de critique de film et série
                        en HTML/CSS/JS.
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
                        src={sae106}
                        width={400}
                        height={300}
                        alt="Projet 6"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Découverte de l&apos;environnement économique et
                        écologique.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae201}
                        width={400}
                        height={300}
                        alt="Projet 1"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        creation d&apos;une application pour gérer les facture
                        d&apos;une salle de spectacle.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae202}
                        width={400}
                        height={300}
                        alt="Projet 2"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Comparaison d&apos;algorithmes servant à résoudre le
                        problème des n-reines en python.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae203}
                        width={400}
                        height={300}
                        alt="Projet 3"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        installation et la configuration des services
                        nécessaires au développement d&apos;un site web sur une
                        machine virtuelle en utilisant MySql/PHP/Apache2.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae204}
                        width={400}
                        height={300}
                        alt="Projet 4"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Création d&apos; et peuplement d&apos;une base de
                        données sur les colleges de France en SQL. Et analuse
                        des données avec Python et Matplotlib.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae205}
                        width={400}
                        height={300}
                        alt="Projet 5"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Gestion d&apos;un projet du début à la fin du projet, de
                        la creation d&apos;une application de gestion des
                        reservation d&apos;une salle de spectacle.
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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
                        src={sae206}
                        width={400}
                        height={300}
                        alt="Projet 6"
                        className="rounded-md mb-4"
                        style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        Création d&pos;un événement de team building pour une
                        entreprise (flyer, film événementiel)
                      </p>
                      <div className="mt-4">
                        <a
                          className="text-primary underline"
                          href="https://github.com/Victouu/Projets-1ere-annee-BUT-Info"
                        >
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

export default Projets;
