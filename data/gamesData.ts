export interface gameProps {
  _id: number;
  title: string;
  description: string;
  level: string;
  category: string;
  rating: number;
  discount: number;
  price: number;
  img: string;
  trailer: string;
  active: boolean;
}
export const gamesData: gameProps[] = [
  {
    _id: 1,
    title: "League of Legends",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Median",
    category: "MOBA",
    rating: 3,
    discount: 0.5,
    price: 79.0,
    img: "/assets/games/lol-bg.jpeg",
    trailer: "https://www.youtube.com/embed/vzHrjOMfHPY",
    active: true,
  },
  {
    _id: 2,
    title: "Mario Kart 8 Deluxe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Entry",
    category: "Racing",
    rating: 3,
    discount: 0.3,
    price: 52.56,
    img: "/assets/games/mario-bg.jpeg",
    trailer: "https://www.youtube.com/embed/tKlRN2YpxRE",
    active: false,
  },

  {
    _id: 3,
    title: "Dota II",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Median",
    category: "MOBA",
    rating: 4,
    discount: 0.5,
    price: 85.0,
    img: "/assets/games/dota-2-bg.jpg",
    trailer: "https://www.youtube.com/embed/-cSFPIwMEq4",
    active: false,
  },
  {
    _id: 4,
    title: "King of Fighters XV",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Entry",
    category: "Fighting",
    rating: 3,
    discount: 0.2,
    price: 65.6,
    img: "/assets/games/king-of-fighters-xv.jpeg",
    trailer: "https://www.youtube.com/embed/_o7Ip64-Sio",
    active: false,
  },

  {
    _id: 5,
    title: "Forza Horizon 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "High",
    category: "Racing",
    rating: 4,
    discount: 0,
    price: 129.0,
    img: "/assets/games/forza-horizon-5-bg.jpeg",
    trailer: "https://www.youtube.com/embed/FYH9n37B7Yw",
    active: false,
  },
  {
    _id: 6,
    title: "Halo Infinite",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Median",
    category: "Battle",
    rating: 4,
    discount: 0,
    price: 85.8,
    img: "/assets/games/halo-infinite-bg.jpeg",
    trailer: "https://www.youtube.com/embed/PyMlV5_HRWk",
    active: false,
  },
  {
    _id: 7,
    title: "Fortnite Spider-Man",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "Entry",
    category: "Battle",
    rating: 3,
    discount: 0.6,
    price: 69.0,
    img: "/assets/games/fortnite-bg.jpeg",
    trailer: "https://www.youtube.com/embed/7bq0Boq2B3Y",
    active: false,
  },
  {
    _id: 8,
    title: "Diablo III",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non nobis, molestiae eum quod qui",
    level: "High",
    category: "RPG",
    rating: 5,
    discount: 0.5,
    price: 99.0,
    img: "/assets/games/diablo-3-bg.jpeg",
    trailer: "https://www.youtube.com/embed/M2TpNQhfkp4",
    active: false,
  },
];
