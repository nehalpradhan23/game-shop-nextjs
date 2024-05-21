"use client";
import { createContext, useState } from "react";

const UserContext = createContext("");

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categoryData, setCategoryData] = useState();
  const [filterListData, setFilterListData] = useState();
  // =========================================
  return <UserContext.Provider value="">{children}</UserContext.Provider>;
};
