import SideMenu from "@/components/sidebar/sideMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-slate-950">
      <div className="absolute top-0 left-0 right-0 bottom-0 p-7 transition-all dark:bg-slate-950">
        <SideMenu />
      </div>
      {children}
    </div>
  );
};

export default layout;
