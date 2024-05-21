import GameCard from "@/components/card/gameCard";
import HomeCarousel from "@/components/home/homeCarousel";
import { gamesData } from "@/data/gamesData";

export default function Page() {
  // =========================================
  return (
    <div className="section no-scrollbar">
      <HomeCarousel />
      <div className="px-4">
        <p className="text-3xl font-bold mt-6">Explore</p>

        <div className="flex justify-between flex-wrap">
          {gamesData.slice(0, 4).map((item) => (
            <GameCard game={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
