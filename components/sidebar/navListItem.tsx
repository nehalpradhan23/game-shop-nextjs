"use client";
import { navListType } from "@/data/navListData";
import { cn } from "@/lib/utils";
import React from "react";

interface navProps {
  item: navListType;
  navOnClick: (_id: number, target: string) => void;
}

const NavListItem = ({ item, navOnClick }: navProps) => {
  return (
    <div
      className={cn(
        "flex gap-3 max-lg:items-center  hover:bg-purple-700 p-2 rounded-md transition-all hover:text-white cursor-pointer",
        item.active ? "bg-purple-700 text-white" : ""
      )}
      onClick={() => navOnClick(item._id, item.target)}
    >
      <item.icon className="max-lg:w-full" />
      <span className="lg:text-[0.7rem] xl:text-[1rem] max-lg:hidden">
        {item.name}
      </span>
    </div>
  );
};

export default NavListItem;
