import React from "react";
import SideMenu from "../components/sidebar/sideMenu";

const Main = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 p-7 transition-all dark:bg-slate-950">
      <SideMenu />
    </div>
  );
};

export default Main;
