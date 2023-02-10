import { PairDate } from "./PairDate";
import { Vegetable } from "./Vegetable";

export const Vegetables = [
  new Vegetable({
    name: "Tomato",
    sowIndoors: new PairDate(2, 3, 28, 14 ),
    plantOut: new PairDate(4, 5, 14, 7),
    harvest: new PairDate(7, 8, 14, 21)
  }),

  new Vegetable({
    name: "Beetroot",
    sowOutdoors: new PairDate(2, 6, 0, 14),
    harvest: new PairDate(5, 9, 14, 14)
  })
];