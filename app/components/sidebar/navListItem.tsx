"use client";
import { navListType } from "@/app/data/navListData";
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
        "flex max-lg:flex-col gap-3 lg:items-center hover:bg-purple-700 p-2 rounded-md transition-all hover:text-white cursor-pointer",
        item.active ? "bg-purple-700" : ""
      )}
      onClick={() => navOnClick(item._id, item.target)}
    >
      <item.icon className="" />
      <span className="lg:text-[1rem] xl:text-[1.5rem] max-md:hidden">
        {item.name}
      </span>
    </div>
  );
};

export default NavListItem;
