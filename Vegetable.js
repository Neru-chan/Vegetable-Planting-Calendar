import { PairDate } from "./PairDate";

export class Vegetable {
  constructor(options) {
    this.name = options?.name ?? "?????";
    this.sowIndoors = options?.sowIndoors ?? 0;
    this.sowOutdoors = options?.sowOutoors ?? 0;
    this.plantOut = options?.plantOut ?? 0;
    this.harvest = options?.harvest ?? 0;
  } 
}