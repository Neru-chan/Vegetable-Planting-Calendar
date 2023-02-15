import { PairDate } from "./PairDate";
import { Vegetable } from "./Vegetable";

/**
 * Array of Vegetable class objects
 */
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
  }),

  new Vegetable({
    name: "Aubergine indoors",
    sowIndoors: new PairDate(0, 2, 14, 14),
    harvest: new PairDate(6, 8, 21, 28)
  }),

  // new Vegetable({
  //   name: "Aubergine outdoors",
  //   sowIndoors: new PairDate(2, 2, 0, 14),
  //   plantOut: new PairDate(4, 5, 21, 21),
  //   harvest: new PairDate(6, 8, 21, 28)
  // }),

  // new Vegetable({
  //   name: "Beans",
  //   sowOutdoors: new PairDate(1, 4, 21, 14),
  //   harvest: new PairDate(6, 8, 0, 28)
  // }),

  // new Vegetable({
  //   name: "Beans (French)",
  //   sowOutdoors: new PairDate(3, 5, 21, 21),
  //   harvest: new PairDate(6, 9, 0, 28)
  // }),

  new Vegetable({
    name: "Broccoli",
    sowIndoors: new PairDate(2, 3, 0, 7),
    plantOut: new PairDate(4, 5, 10, 28),
    harvest: new PairDate(5, 8, 14, 21)
  }),

  // new Vegetable({
  //   name: "Cabbage",
  //   sowIndoors: new PairDate(2, 4, 0, 14),
  //   harvest: new PairDate(6, 7, 0, 28)
  // }),

  // new Vegetable({
  //   name: "Cabbage (Savoy)",
  //   sowOutdoors: new PairDate(3, 4 , 0, 14),
  //   plantOut: new PairDate(5, 6, 14, 28),
  //   harvest: new PairDate(9, 11, 21, 28)
  // }),

  new Vegetable({
    name: "Carrots",
    sowIndoors: new PairDate(3, 6 , 0, 7),
    harvest: new PairDate(6, 6, 0, 28)
  }),

  // new Vegetable({
  //   name: "Cauliflower",
  //   sowIndoors: new PairDate(3, 4 , 0, 28),
  //   harvest: new PairDate(9, 11, 14, 7)
  // }),

  // new Vegetable({
  //   name: "Celery",
  //   sowOutdoors: new PairDate(2, 3, 14, 7),
  //   plantOut: new PairDate(4, 5, 14, 14),
  //   harvest: new PairDate(9, 0, 0, 28)
  // }),

  new Vegetable({
    name: "Chillies",
    sowIndoors: new PairDate(1, 3, 0, 28),
    harvest: new PairDate(6, 9, 0, 14)
  }),

  // new Vegetable({
  //   name: "Courgette",
  //   sowIndoors: new PairDate(3, 4, 10, 7),
  //   sowOutdoors: new PairDate(4, 5, 14, 10),
  //   plantOut: new PairDate(4, 5, 28, 16),
  //   harvest: new PairDate(6, 9, 0, 28)
  // }),

  new Vegetable({
    name: "Cucumber",
    sowIndoors: new PairDate(1, 2, 7, 28),
    sowOutdoors: new PairDate(4, 5, 18, 16),
    harvest: new PairDate(5, 9, 19, 3)
  }),

  new Vegetable({
    name: "Garlic",
    // sowIndoors: new PairDate(3, 4, 10, 7),
    // sowOutdoors: new PairDate(4, 5, 14, 10),
    plantOut: new PairDate(9, 0, 0, 28),
    harvest: new PairDate(5, 7, 0, 30)
  }),

  // new Vegetable({
  //   name: "Leeks",
  //   // sowIndoors: new PairDate(3, 4, 10, 7),
  //   sowOutdoors: new PairDate(2, 3, 14, 14),
  //   plantOut: new PairDate(5, 5, 0, 30),
  //   harvest: new PairDate(10, 2, 0, 30)
  // }),

  // new Vegetable({
  //   name: "Marrow",
  //   // sowIndoors: new PairDate(3, 4, 10, 7),
  //   sowOutdoors: new PairDate(4, 5, 14, 14),
  //   // plantOut: new PairDate(5, 5, 0, 30),
  //   harvest: new PairDate(6, 9, 14, 14)
  // }),

  // new Vegetable({
  //   name: "Onions seed",
  //   // sowIndoors: new PairDate(3, 4, 10, 7),
  //   sowOutdoors: new PairDate(1, 3, 7, 7),
  //   // plantOut: new PairDate(5, 5, 0, 30),
  //   harvest: new PairDate(6, 8, 14, 28)
  // }),

  // new Vegetable({
  //   name: "Onions set",
  //   // sowIndoors: new PairDate(3, 4, 10, 7),
  //   // sowOutdoors: new PairDate(1, 3, 7, 7),
  //   plantOut: new PairDate(2, 3, 14, 14),
  //   harvest: new PairDate(6, 8, 28, 3)
  // }),

  // new Vegetable({
  //   name: "Onions spring",
  //   // sowIndoors: new PairDate(3, 4, 10, 7),
  //   sowOutdoors: new PairDate(2, 6, 0, 14),
  //   // plantOut: new PairDate(2, 3, 14, 14),
  //   harvest: new PairDate(5, 9, 0, 28)
  // }),

  // new Vegetable({
  //   name: "Parsnip",
  //   // sowIndoors: new PairDate(3, 4, 10, 7),
  //   sowOutdoors: new PairDate(1, 3, 28, 14),
  //   // plantOut: new PairDate(2, 3, 14, 14),
  //   harvest: new PairDate(10, 1, 0, 28)
  // }),

  new Vegetable({
    name: "Peas",
    // sowIndoors: new PairDate(3, 4, 10, 7),
    sowOutdoors: new PairDate(2, 6, 0, 0),
    // plantOut: new PairDate(2, 3, 14, 14),
    harvest: new PairDate(5, 9, 14, 5)
  }),

  new Vegetable({
    name: "Pepper",
    sowIndoors: new PairDate(1, 3, 28, 14),
    // sowOutdoors: new PairDate(2, 6, 0, 0),
    plantOut: new PairDate(4, 6, 0, 0),
    harvest: new PairDate(6, 8, 0, 28)
  }),

  new Vegetable({
    name: "Potatoes",
    // sowIndoors:  new PairDate(1, 3, 28, 14),
    // sowOutdoors: new PairDate(2, 6, 0, 0),
    plantOut:    new PairDate(2, 4, 28, 0),
    harvest:     new PairDate(5, 9, 28, 7)
  }),

  // new Vegetable({
  //   name: "Pumpkin",
  //   // sowIndoors:  new PairDate(1, 3, 28, 14),
  //   sowOutdoors: new PairDate(4, 5, 14, 14),
  //   // plantOut:    new PairDate(2, 4, 28, 0),
  //   harvest:     new PairDate(6, 9, 14, 14)
  // }),

  new Vegetable({
    name: "Radish",
    // sowIndoors:  new PairDate(1, 3, 28, 14),
    sowOutdoors: new PairDate(2, 4, 14, 28),
    // plantOut:    new PairDate(2, 4, 28, 0),
    harvest:     new PairDate(4, 7, 14, 28)
  }),

  // new Vegetable({
  //   name: "Rhubarb",
  //   // sowIndoors:  new PairDate(1, 3, 28, 14),
  //   // sowOutdoors: new PairDate(2, 4, 14, 28),
  //   plantOut:    new PairDate(1, 2, 14, 28),
  //   harvest:     new PairDate(3, 6, 0, 14)
  // }),
];