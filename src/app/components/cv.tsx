"use client";
import React from "react";
import { HoverBorderGradient } from "../components/bouton-rgb";
 
export function Cv() {
  return (
    <div className="hidden fixed md:flex flex-col items-center justify-center bottom-1 right-10 bg-transparent z-20 mb-4">
        <a href="../../../public/CV.pdf" download="CV_ROUE_Victor.pdf">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-slate-600    bg-slate-300  text-black dark:text-white flex items-center space-x-2"
      >
        
        <span>Mon CV</span>
      </HoverBorderGradient>
      </a>
    </div>
  );
};