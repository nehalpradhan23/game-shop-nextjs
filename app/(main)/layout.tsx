import SideMenu from "@/components/sidebar/sideMenu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="absolute top-0 left-0 right-0 bottom-0 p-4 md:p-[30px] bg-white dark:bg-slate-950 flex justify-between gap-4 md:gap-[30px] overflow-hidden">
      <SideMenu />
      {children}
    </main>
  );
};

export default layout;
