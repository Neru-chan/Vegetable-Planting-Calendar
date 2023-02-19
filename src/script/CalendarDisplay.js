import { Calendar } from "./Calendar.js";
import { PairDate } from "./PairDate.js";
import { Vegetables } from "./Vegetables.js";

export class CalendarDisplay {

  constructor(c) {
    if (! (c instanceof Calendar) )
      throw new Error(`${c} is not instance of ${Calendar}`);

    this.c = c;
    this.root = document.querySelector(this.c.divId);

    this.calendar = document.createElement("div");
      this.head = document.createElement("div");
        this.month = document.createElement("div");
        this.btnPrev = document.createElement("button");
        this.btnNext = document.createElement("button");
      this.daysOfWeek = document.createElement("div");
      this.days = document.createElement("div");
    this.info = document.createElement("div");
      this.legend = document.createElement("div");
  }

  draw() {
    if (this.root.querySelector("#calendar") === null) {
      this.#appendCalendar();
    }

    if (this.root.querySelector("#info") === null) {
      console.log("no info in root");
      this.#appendInfo();
    }



    this.#updateMonth();
    this.#updateDays();
  }

  // info(date) {
  //   if (! (date instanceof Date) )
  //     throw new Error (`${date} is not instance of ${Date}`);

  //   if (this.root.querySelector("#info") === null) {
  //     console.log("no info in root");
  //   }
  // }


  //calendar
  #appendCalendar() {
    this.calendar.id = "calendar";
    this.root.append(this.calendar);

    this.#appendHead();
    this.#appendDaysOfWeek();
    this.#appendDays();
  }

  //head begin
  #appendHead() {
    this.head.id = "head";
    this.calendar.append(this.head);

    this.#appendPrevButton();
    this.#appendMonth();
    this.#appendNextButton();
  }

  #appendMonth() {
    this.month.id = "month";
    this.head.append(this.month);
  }

  #updateMonth() {
    // this.month.innerText = Calendar.Months[this.c.currMonth];
    this.month.innerText = `${Calendar.Months[this.c.currMonth]} ${this.c.currYear}`;
  }

  #appendPrevButton() {
    this.btnPrev.id = "btn-prev";
    this.btnPrev.innerText = "Previous";
    this.head.append(this.btnPrev);

    this.btnPrev.onclick = () => {
      this.c.prevMonth();
      this.draw();
    }
  }

  #appendNextButton() {
    this.btnNext.innerText = "Next";
    this.btnNext.id = "btn-next";
    this.head.append(this.btnNext);

    this.btnNext.onclick = () => {
      this.c.nextMonth();
      this.draw();
    }
  }
  //head end

  //days of week
  #appendDaysOfWeek() {
    this.daysOfWeek.id = "days-of-week";
    this.calendar.append(this.daysOfWeek)

    Calendar.DaysOfWeek.forEach(day => {
      const d = document.createElement("div");
      d.classList.add("day-of-week"); 
      d.classList.add(day.toLowerCase());
      d.innerText = day;
      this.daysOfWeek.append(d);
    })
  }

  //days
  #appendDays() {
    this.days.id = "days";
    this.calendar.append(this.days);
  }

  #updateDays() {
    const n_daysOfPrevMonth = new Date (this.c.currYear, this.c.currMonth, 0).getDay();
    const n_daysOfCurrentMonth = new Date(this.c.currYear, this.c.currMonth + 1, 0).getDate();
    const weeks = Math.ceil((n_daysOfPrevMonth + n_daysOfCurrentMonth) / 7);
    const n_daysOfNextMonth = weeks * 7 - (n_daysOfPrevMonth + n_daysOfCurrentMonth);
    const lastDayOfPrevMonth = month == 0 ? new Date(this.c.currYear - 1, 12, 0).getDate() : new Date(this.c.currYear, this.c.currMonth, 0).getDate();

    let arr = new Array();

    let i = 1

    while (i <= n_daysOfPrevMonth) {
      const d = document.createElement("div");
      d.innerText = lastDayOfPrevMonth - n_daysOfPrevMonth + i;
      d.classList.add("prev-month");
      
      d.onclick = () => {
        let currMonth = this.c.currMonth;
        let currYear = this.c.currYear;
        if (this.c.currMonth == 0) {
          currMonth = 11;
          currYear -= 1;
        }
        else currMonth -= 1;
        this.#updateInfo(new Date(currYear, currMonth, d.innerText));
      }

      arr.push(d)
      i++;
    }

    i = 1;
    while (i <= n_daysOfCurrentMonth) {
      const d = document.createElement("div");
      d.innerText = i;
      d.classList.add("curr-month")

      d.onclick = () => {
        let currMonth = this.c.currMonth;
        let currYear = this.c.currYear;
        this.#updateInfo(new Date(currYear, currMonth, d.innerText));
      }

      arr.push(d);
      i++;
    }

    i = 1;
    while (i <= n_daysOfNextMonth) {
      const d = document.createElement("div");
      d.innerText = i;
      d.classList.add("next-month");

      d.onclick = () => {
        let currMonth = this.c.currMonth;
        let currYear = this.c.currYear;

        if (this.c.currMonth == 11) {
          currMonth = 0;
          currYear += 1;
        }
        else currMonth += 1;

        this.#updateInfo(new Date(currYear, currMonth, d.innerText));
      }
      arr.push(d);
      i++;
    }
    this.days.replaceChildren(...arr);
  }



  //INFO PANEL
  #appendInfo() {
    this.info.id = "info";
    this.root.append(this.info);

    this.#updateInfo(new Date(this.c.currYear, this.c.currMonth, this.c.currDay));
  }

  #updateInfo(date) {
    if (! (date instanceof Date) )
      throw new Error(`${date} is not instance of ${Date}`);
    
    let arr = new Array();

    //harvest
    Vegetables.forEach(vegetable => {
      let d = document.createElement("div");
      d.classList.add("vegetable");

      let push = false;
      // let text = [];

      if (vegetable.harvest !== undefined &&
      PairDate.isInBetween(new Date(0, date.getMonth(), date.getDate()), vegetable.harvest.begin, vegetable.harvest.end)) {
        d.classList.add("harvest");
        push = true;
      }

      if (vegetable.plantOut !== undefined &&
      PairDate.isInBetween(new Date(0, date.getMonth(), date.getDate()), vegetable.plantOut.begin, vegetable.plantOut.end)) {
        d.classList.add("plant-out");
        push = true;
      }

      if (vegetable.sowIndoors !== undefined &&
      PairDate.isInBetween(new Date(0, date.getMonth(), date.getDate()), vegetable.sowIndoors.begin, vegetable.sowIndoors.end)) {
        d.classList.add("sow-indoors");
        push = true;
      }

      if (vegetable.sowOutdoors !== undefined &&
      PairDate.isInBetween(new Date(0, date.getMonth(), date.getDate()), vegetable.sowOutdoors.begin, vegetable.sowOutdoors.end)) {
        d.classList.add("sow-outdoors");
        push = true;
      }

      d.classList.add(vegetable.name.replace(/ /g, '-'));

      if (push) arr.push(d);
      //d.innerText = `/${vegetable.name} ${text}`;
      d.innerText = ``;
    })

    this.info.replaceChildren(...arr);
  }
}
