"use client";
import { UserContext } from "@/components/context/userContext";
import { gameProps } from "@/data/gamesData";
import Image from "next/image";
import React, { useContext } from "react";

const Bag = () => {
  const { bag, setBag } = useContext(UserContext);

  const removeFromBag = (game: gameProps) => {
    setBag(bag.filter((item) => item._id !== game._id));
  };

  return (
    <div className="section no-scrollbar">
      {bag.length === 0 ? (
        <h2 className="text-3xl p-5">Bag is empty!</h2>
      ) : (
        <div className="flex gap-6 flex-wrap p-4">
          {bag.map((item) => (
            <div
              key={item._id}
              className="flex max-md:flex-col rounded-md md:gap-3 shadow-sh w-full"
            >
              <div className="max-md:w-[100%] w-[30%] h-[150px] md:h-[200px] object-cover rounded-md overflow-hidden p-2">
                <Image
                  src={item.img}
                  alt="image"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full rounded-md"
                />
                {/* <GameCard game={item} /> */}
              </div>
              {/* right side ================= */}
              <div className="w-full flex flex-col relative">
                <div className="flex flex-col gap-2 md:mt-5 mb-5 max-md:mb-11 w-full max-md:p-3">
                  <span className="text-2xl font-bold">{item.title}</span>
                  <span className="text-wrap text-md  max-lg:line-clamp-3">
                    {item.description}
                  </span>
                  <span>category: {item.category}</span>
                </div>
                <div
                  className="absolute right-4 bottom-4 cursor-pointer transition-all"
                  onClick={() => removeFromBag(item)}
                >
                  <span className="rounded-md bg-purple-700 hover:bg-red-500 text-white px-3 py-2">
                    Remove from bag
                  </span>
                </div>
                {/* <div className="flex items-end justify-end">
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bag;
