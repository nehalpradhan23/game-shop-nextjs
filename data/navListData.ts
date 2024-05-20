import { Home, Layers, Library, LucideProps, ShoppingBag } from "lucide-react";
import React from "react";

export interface navListType {
  _id: number;
  target: string;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  active: boolean;
}

const navListData: navListType[] = [
  {
    _id: 1,
    target: "home",
    name: "Home",
    icon: Home,
    active: true,
  },
  {
    _id: 2,
    target: "categories",
    name: "Categories",
    icon: Layers,
    active: false,
  },
  {
    _id: 3,
    target: "library",
    name: "My Library",
    icon: Library,
    active: false,
  },
  {
    _id: 4,
    target: "bag",
    name: "My Bag",
    icon: ShoppingBag,
    active: false,
  },
];

export default navListData;
