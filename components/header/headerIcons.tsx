"use client";
import { Heart, ShoppingBag } from "lucide-react";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const HeaderIcons = () => {
  const { bag, library } = useContext(UserContext);
  return (
    <div className="flex gap-3">
      <div className="shadow-sh p-2 md:p-3 rounded-md relative dark:bg-slate-900">
        <Heart />
        {library.length > 0 && (
          <span className="absolute -bottom-1 -right-1 rounded-full bg-purple-700 px-[6px] py-[2px] text-xs text-white">
            {library.length}
          </span>
        )}
      </div>
      <div className="shadow-sh p-2 md:p-3 rounded-md relative dark:bg-slate-900">
        <ShoppingBag />
        {bag.length > 0 && (
          <span className="absolute -bottom-1 -right-1 rounded-full bg-purple-700 px-[6px] py-[2px] text-xs text-white">
            {bag.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
