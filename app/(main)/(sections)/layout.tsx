import Header from "@/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full rounded-2xl ml-3 md:ml-9 shadow-sh2">
      <Header />
      {children}
    </div>
  );
};

export default layout;
