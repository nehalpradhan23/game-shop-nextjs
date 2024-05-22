"use client";
import GameCard from "@/components/card/gameCard";
import FilterAndSearch from "@/components/categories/filterAndSearch";
import { UserContext } from "@/components/context/userContext";
import { filterListData } from "@/data/filterListData";
import { gamesData } from "@/data/gamesData";
import { useContext, useEffect, useState } from "react";

const page = () => {
  // const [games, setGames] = useState(gamesData); // filtered games
  const [filters, setFilters] = useState(filterListData);
  const { games } = useContext(UserContext);
  const [data, setData] = useState(games);

  // ===============================================
  const handleFilterGames = (category: string) => {
    // set active on filter ===================
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );
    // filter data ========================

    if (category === "All") {
      setData(gamesData);
      return;
    }
    setData(gamesData.filter((game) => game.category === category));
  };

  // ===============================================
  const handleSearch = (data: string) => {
    // console.log(data, "search data");
    setData(
      games.filter((game) =>
        game.title.toLowerCase().includes(data.toLowerCase())
      )
    );
  };
  // ===============================================

  useEffect(() => {
    setFilters(
      filters.map((filter) => {
        if (filter.name === "All") {
          filter.active = true;
        } else {
          filter.active = false;
        }
        return filter;
      })
    );
  }, []);
  // ===============================================
  return (
    <div className="section no-scrollbar">
      {/* filter and search ==================== */}
      <FilterAndSearch
        data={filters}
        onFilterClick={handleFilterGames}
        onSearch={handleSearch}
      />
      {/* show filtered data ============ */}
      <div className="flex gap-5 flex-wrap p-4">
        {data.map((item) => (
          <GameCard game={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default page;
