"use client";
import { filterDataProps } from "@/data/filterListData";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

const FilterAndSearch = ({
  data,
  onFilterClick,
  onSearch,
}: {
  data: filterDataProps[];
  onFilterClick: (item: string) => void;
  onSearch: (item: string) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");

  // let timer: ReturnType<typeof setTimeout>;
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // onSearch(searchText);
    onSearch(e.target.value);
    setSearchText(e.target.value);
    // clearTimeout(timer);
    // // console.log(searchText);
    // timer = setTimeout(() => {
    //   onSearch(searchText);
    // }, 1500);
    // console.log(timer);
    // console.log(searchText);
    // console.log(e.target.value);
  };
  // ==================================
  return (
    <div className="flex items-center flex-wrap p-3 justify-between gap-5">
      {/* filter items */}
      <div className="flex gap-2 flex-wrap">
        {data.map((item) => (
          <span
            key={item._id}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-purple-700 cursor-pointer",
              item.active ? "bg-purple-700 text-white" : "hover:text-white"
            )}
            onClick={() => onFilterClick(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>
      {/* search ============= */}
      <div className="inline-flex w-[300px] h-[50px] items-center gap-2 shadow-sh rounded-md text-white px-2 hover:bg-gray-100 dark:hover:bg-gray-950 dark:bg-slate-900">
        <Search className="text-black dark:text-white" />
        <input
          type="text"
          className="bg-transparent outline-none border-none text-black dark:text-white"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default FilterAndSearch;
