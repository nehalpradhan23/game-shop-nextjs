"use client";

import GameCard from "@/components/card/gameCard";
import { UserContext } from "@/components/context/userContext";
import { useContext } from "react";

const Library = () => {
  const { library } = useContext(UserContext);
  return (
    <div className="section no-scrollbar">
      {library.length === 0 ? (
        <h2 className="text-3xl p-5">Library is empty!</h2>
      ) : (
        <div className="flex gap-5 flex-wrap p-4">
          {library.map((item) => (
            <GameCard game={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
