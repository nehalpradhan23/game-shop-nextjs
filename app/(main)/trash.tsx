import GameCard from "@/components/card/gameCard";
import Header from "@/components/header";
import HomeCarousel from "@/components/home/homeCarousel";
import { gamesData } from "@/data/gamesData";

export default function Home() {
  // =========================================
  return (
    // <div className="w-full rounded-2xl shadow-sh">
    <div className="relative w-[80%] h-full rounded-2xl shadow-sh">
      {/* <Header /> */}
      {/* home ================= */}
      <div className="section no-scrollbar">
        {/* <div className="w-full absolute overflow-hidden top-[50px] bottom-0 z-[1000] h-auto p-5 no-scrollbar"> */}
        {/* <HomeCarousel />
        <div className="px-4">
          <p className="text-3xl font-bold mt-6">Explore</p>

          <div className="flex justify-between flex-wrap">
            {gamesData.slice(0, 4).map((item) => (
              <GameCard game={item} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
