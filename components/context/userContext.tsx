"use client";
import { gameProps, gamesData } from "@/data/gamesData";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type ContextProps = {
  library: gameProps[];
  setLibrary: Dispatch<SetStateAction<gameProps[]>>;
  bag: gameProps[];
  setBag: Dispatch<SetStateAction<gameProps[]>>;
  games: gameProps[];
  setGames: Dispatch<SetStateAction<gameProps[]>>;
};

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [games, setGames] = useState(gamesData);
  const [library, setLibrary] = useState<gameProps[]>([]);
  const [bag, setBag] = useState<gameProps[]>([]);
  // const [bag, setBag] = useState<gameProps[]>(gamesData);
  // =========================================
  return (
    <UserContext.Provider
      value={{ library, setLibrary, bag, setBag, games, setGames }}
    >
      {children}
    </UserContext.Provider>
  );
};
