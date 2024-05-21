import { gameProps } from "@/data/gamesData";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const GameCard = ({ game }: { game: gameProps }) => {
  return (
    <div className="w-[250px] h-[200px] bg-slate-950 flex rounded-lg flex-col shadow-sh overflow-hidden relative mt-5">
      <div className="h-[80%] overflow-hidden">
        <Image
          className="object-cover h-full"
          src={game.img}
          alt="image"
          width={300}
          height={200}
        />
      </div>
      {/* description ======================== */}
      <div className="bg-white/80 dark:bg-slate-900 p-2">
        <div className="text-xl font-bold">{game.title}</div>
        {/* <span>{game.discount}</span> */}
      </div>
      {/* buttons ===================== */}
      <span className="absolute right-0 top-0 bg-slate-950 p-2 rounded-bl-lg hover:bg-purple-700 transition-all cursor-pointer">
        <ShoppingBag />
      </span>
      <span className="absolute left-0 top-0 bg-slate-950 p-2 rounded-br-lg hover:bg-purple-700 transition-all cursor-pointer">
        <Heart />
      </span>
    </div>
  );
};

export default GameCard;
