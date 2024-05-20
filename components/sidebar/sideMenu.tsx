"use client";
import navListData from "@/data/navListData";
import { Gamepad2 } from "lucide-react";
import NavListItem from "./navListItem";
import DarkModeToggle from "./dark-mode-toggle";
import { useState } from "react";

const SideMenu = () => {
  const [navData, setNavData] = useState(navListData);
  // =======================================
  const handleNavOnClick = (id: number, target: string) => {
    // console.log(target, _id);
    const newNavData = navData.map((item) => {
      item.active = false;
      if (item._id === id) {
        item.active = true;
      }
      return item;
    });
    setNavData(newNavData);
  };
  // ========================================================
  return (
    <div className="flex flex-col w-[15%] h-full p-2 md:p-5 max-md:items-center rounded-2xl shadow-sh">
      <a href="/" className="flex gap-2 items-center">
        <Gamepad2 className="relative inline-flex w-10 h-10 md:w-14 md:h-14" />
        <span className="md:text-[1rem] lg:text-[1.5rem] xl:text-[2rem] max-md:hidden">
          Play
        </span>
      </a>
      <ul className="flex flex-col grow gap-5 mt-8 max-md:mt-16">
        {navListData.map((item) => (
          <NavListItem
            key={item._id}
            navOnClick={handleNavOnClick}
            item={item}
          />
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default SideMenu;
