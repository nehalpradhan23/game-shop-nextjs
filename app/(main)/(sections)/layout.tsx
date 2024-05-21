import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="w-full rounded-2xl ml-3 md:ml-9 shadow-sh">
    <div className="relative w-[80%] h-full rounded-2xl shadow-sh">
      <Header />
      {children}
    </div>
  );
};

export default layout;
