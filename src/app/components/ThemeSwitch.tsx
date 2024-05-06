"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className=" ml-24">
      <button
        className={`relative inline-block h-6 w-12 rounded-full p-1 transition duration-300 focus:outline-none bg-gray-300 dark:bg-gray-800`}
        onClick={toggleTheme}
      >
        <span
          className={`block h-4 w-4 rounded-full  bg-slate-600 dark:bg-slate-50 shadow-md transform transition-transform ease-in-out duration-300 ${
            isDarkMode ? "translate-x-6" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};