"use client";

import { usePathname } from "next/navigation";

export const HeaderTitle = () => {
  const pathname = usePathname();
  const str = pathname;
  if (str)
    return (
      <div className="capitalize text-3xl font-bold ml-5">
        {str === "/" ? "Home" : str.slice(1, str.length)}
      </div>
    );
};
