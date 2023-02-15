import { PairDate } from "./PairDate";

/**
 * Vegetable class
 */
export class Vegetable {
  /**
   * Creates an object of Vegetable class
   * @param {*} options 
   * @param name - String
   * @param sowIndoors - PairDate
   * @param sowOutdoors - PairDate
   * @param plantOut - PairDate
   * @param harvest - PairDate
   */
  constructor(options) {
    this.name = options?.name ?? "???";
    this.sowIndoors = options?.sowIndoors;
    this.sowOutdoors = options?.sowOutdoors;
    this.plantOut = options?.plantOut;
    this.harvest = options?.harvest;
  } 
}