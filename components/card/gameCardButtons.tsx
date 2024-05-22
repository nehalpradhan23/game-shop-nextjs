"use client";
import { Heart, ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { gameProps } from "@/data/gamesData";
import { cn } from "@/lib/utils";

const GameCardButtons = ({ game }: { game: gameProps }) => {
  const { library, setLibrary, bag, setBag } = useContext(UserContext);
  const handleAddToLibrary = (game: gameProps) => {
    // console.log(game, "added");
    setLibrary([...library, game]);
  };
  const handleRemoveFromLibrary = (game: gameProps) => {
    // console.log(game, "removed");
    setLibrary(library.filter((item) => item._id !== game._id));
  };

  const handleAddToBag = (game: gameProps) => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  };
  // ================================================
  return (
    <div>
      <span
        className={cn(
          "absolute right-0 top-0 p-2 rounded-bl-lg hover:bg-purple-700 transition-all cursor-pointer",
          bag.includes(game)
            ? "bg-green-700 text-white"
            : "bg-white/80 dark:bg-slate-950 hover:text-white dark:hover:bg-purple-700"
        )}
        onClick={() => handleAddToBag(game)}
      >
        <ShoppingBag />
      </span>
      {/* add to library button ==================== */}
      <span
        className={cn(
          "absolute left-0 top-0 p-2 rounded-br-lg hover:bg-purple-700 transition-all cursor-pointer",
          library.includes(game)
            ? "bg-purple-700 hover:bg-purple-950 text-white"
            : "hover:text-white bg-white/80 dark:hover:bg-purple-700 dark:bg-slate-600"
        )}
        onClick={
          library.includes(game)
            ? () => handleRemoveFromLibrary(game)
            : () => handleAddToLibrary(game)
        }
      >
        <Heart />
      </span>
    </div>
  );
};

export default GameCardButtons;
