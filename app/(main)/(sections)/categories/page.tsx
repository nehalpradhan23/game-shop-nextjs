"use client";
import GameCard from "@/components/card/gameCard";
import FilterAndSearch from "@/components/categories/filterAndSearch";
import { filterListData } from "@/data/filterListData";
import { gamesData } from "@/data/gamesData";
import { useState } from "react";

const page = () => {
  const [games, setGames] = useState(gamesData); // filtered games
  const [filters, setFilters] = useState(filterListData);

  const handleFilterGames = (category: string) => {
    // console.log(item);
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
    // console.log(category, "category");

    // console.log("setting games data");

    if (category === "All") {
      setGames(gamesData);
      return;
    }
    setGames(gamesData.filter((game) => game.category === category));
    // console.log(games, "games");
  };
  // ===============================================
  return (
    <div className="section no-scrollbar">
      {/* filter and search ==================== */}
      <FilterAndSearch data={filters} onFilterClick={handleFilterGames} />
      {/* show filtered data ============ */}
      <div className="flex gap-5 flex-wrap p-4">
        {games.map((item) => (
          <GameCard game={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
