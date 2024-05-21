"use client";
import { filterDataProps } from "@/data/filterListData";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

const FilterAndSearch = ({
  data,
  onFilterClick,
}: {
  data: filterDataProps[];
  onFilterClick: (item: string) => void;
}) => {
  return (
    <div className="flex items-center flex-wrap p-3 justify-between gap-5">
      {/* filter items */}
      <div className="flex gap-2 flex-wrap">
        {data.map((item) => (
          <span
            key={item._id}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-purple-700 cursor-pointer",
              item.active ? "bg-purple-700" : ""
            )}
            onClick={() => onFilterClick(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>
      {/* search ============= */}
      <div className="inline-flex w-[300px] h-[50px] items-center gap-2 shadow-sh rounded-md text-white px-2 hover:bg-gray-950">
        <Search />
        <input
          type="text"
          className="bg-transparent outline-none border-none"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default FilterAndSearch;
