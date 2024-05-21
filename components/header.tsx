import { Heart, ShoppingBag } from "lucide-react";
import React from "react";
import { HeaderTitle } from "./headerTitle";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full items-center flex justify-between z-[1000] p-1 md:p-2">
      <div className="">
        <HeaderTitle />
      </div>
      <div className="flex gap-3">
        <div className="shadow-sh p-2 md:p-3 rounded-md">
          <Heart />
        </div>
        <div className="shadow-sh p-2 md:p-3 rounded-md">
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Header;
