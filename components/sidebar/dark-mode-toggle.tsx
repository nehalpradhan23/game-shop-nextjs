"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    setCurrentTheme("dark");
  }, []);

  const changeTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };
  return (
    <button
      className="flex gap-2 hover:bg-purple-700 p-2 rounded-md transition-all hover:text-white items-center"
      onClick={changeTheme}
    >
      {currentTheme === "dark" ? <Moon /> : <Sun />}

      <span className="max-lg:hidden">Toggle theme</span>
    </button>
  );
};

export default DarkModeToggle;
