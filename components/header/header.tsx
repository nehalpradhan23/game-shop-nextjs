import React from "react";
import { HeaderTitle } from "./headerTitle";
import HeaderIcons from "./headerIcons";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full items-center flex justify-between z-[1000] p-2 md:p-3">
      <div className="">
        <HeaderTitle />
      </div>
      <HeaderIcons />
    </div>
  );
};

export default Header;
