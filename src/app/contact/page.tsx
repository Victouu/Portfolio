"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
//composants
import Image from "next/image";
//import photo

import Head from "../components/head";

function Contact() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl overflow-hidden">
        <Head />
        <div className=" items-center flex">
          <h1 className=" uppercase">Comming soon ...</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
