"use client";
import GameCard from "@/components/card/gameCard";
import { UserContext } from "@/components/context/userContext";
import HomeCarousel from "@/components/home/homeCarousel";
import { useContext } from "react";

export default function Page() {
  const { games } = useContext(UserContext);
  // =========================================
  return (
    <div className="section no-scrollbar">
      <HomeCarousel />
      <div className="px-4">
        <p className="text-3xl font-bold my-6">Explore</p>

        <div className="flex justify-between flex-wrap gap-5 max-md:items-center max-md:justify-center">
          {games.slice(0, 4).map((item) => (
            <GameCard game={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
