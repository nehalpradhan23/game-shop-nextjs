import Header from "@/components/header";
import SideMenu from "@/components/sidebar/sideMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-slate-950 flex h-screen p-2 md:p-6">
      <SideMenu />
      {children}
    </div>
  );
};

export default layout;
