import { PairDate } from "./PairDate";
import { Vegetable } from "./Vegetable";

export const Vegetables = [
  new Vegetable({
    name: "Tomato",
    sowIndoors: new PairDate(2, 4, 3, 2),
    plantOut: new PairDate(4, 2, 5, 0),
    harvest: new PairDate(7, 2, 8, 3)
  }),

  new Vegetable({
    name: "Beetroot",
    sowOutdoors: new PairDate(2, 0, 6, 2),
    harvest: new PairDate(5, 2, 9, 2)
  })
];