import { gameProps } from "@/data/gamesData";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import GameCardButtons from "./gameCardButtons";

const GameCard = ({ game }: { game: gameProps }) => {
  return (
    <div className="w-[250px] h-[200px] bg-slate-950 flex rounded-lg flex-col shadow-sh overflow-hidden relative">
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
      <GameCardButtons game={game} />
    </div>
  );
};

export default GameCard;
