import { gamesData } from "@/data/gamesData";
import Home from "./home";
import { Categories } from "./categories";
import MyLibrary from "./myLibrary";
import Bag from "./bag";

const Main = () => {
  return (
    <>
      <Home />
      <Categories />
      <MyLibrary />
      <Bag />
    </>
  );
};

export default Main;
