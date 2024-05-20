import { Heart, ShoppingBag } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-end gap-3 md:gap-5 p-1 md:p-2 m-2">
      <div className="shadow-sh p-2 md:p-3 rounded-md">
        <Heart />
      </div>
      <div className="shadow-sh p-2 md:p-3 rounded-md">
        <ShoppingBag />
      </div>
    </div>
  );
};

export default Header;
