import { PairDate } from "./PairDate";

/**
 * Vegetable class
 */
export class Vegetable {
  /**
   * Creates an object of Vegetable class
   * @param {*} options 
   * name - String
   * sowIndoors - PairDate
   * sowOutdoors - PairDate
   * plantOut - PairDate
   * harvest - PairDate
   */
  constructor(options) {
    // this.name = options?.name ?? "???";
    // this.sowIndoors = options?.sowIndoors ?? 0;
    // this.sowOutdoors = options?.sowOutoors ?? 0;
    // this.plantOut = options?.plantOut ?? 0;
    // this.harvest = options?.harvest ?? 0;

    this.name = options?.name ?? "???";
    this.sowIndoors = options?.sowIndoors;
    this.sowOutdoors = options?.sowOutdoors;
    this.plantOut = options?.plantOut;
    this.harvest = options?.harvest;
  } 
}