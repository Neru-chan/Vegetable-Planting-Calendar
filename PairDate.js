export class PairDate {
  /**
   * A pair of two dates
   * @param {*} date_or_month_begin first Date or first date month
   * @param {*} date_or_month_end second Date or second fate month
   * @param {*} day_begin day of first date
   * @param {*} day_end day of second fate
   */
  constructor(date_or_month_begin, date_or_month_end, day_begin, day_end) {
    // PairDate(date_begin, date_end)
    if (
      date_or_month_begin instanceof Date &&
      date_or_month_end   instanceof Date &&
      typeof(day_begin) === "undefined" &&
      typeof(day_end)   === "undefined") {

      this.begin = date_or_month_begin;
      this.end   = date_or_month_end;
      return;
    }

    // PairDate(month_begin)
    if (
      typeof(date_or_month_begin) === "number" &&
      typeof(date_or_month_end)   === "number" &&
      typeof(day_begin)           === "number" &&
      typeof(day_end)             === "number" 
    ) {
      this.begin = this.#makeDate(date_or_month_begin, day_begin);
      this.end   = this.#makeDate(date_or_month_end,   day_end);
      return;
    }

    throw new Error("incorrect parameters");
  }

  /**
   * 
   * @param {*} month Number;
   * @param {*} day Number;
   * @returns new Date
   */
  #makeDate(month, day) {
    if (month instanceof Number) throw new Error(`${month} is not instance of Number`);
    if (day   instanceof Number) throw new Error(`${day  } is not instance of Number`);
    return new Date(0, month, day);
  }

  static isInBetween(date, first, second) {
    if (!(date instanceof Date && first instanceof Date && second instanceof Date)) {
      throw new Error (`incorrect parameters`);
    }

    date   = date.getTime();
    first  = first.getTime();
    second = second.getTime();

    if (date === first || date === second) return true;

    if (first > second) {
      [first, second] = [second, first];
      return !(date >= first && date <= second)
    }

    return date >= first && date <= second
  }
}