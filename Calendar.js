import { Vegetables } from "./Vegetables";

export class Calendar {
  constructor(divId) {
    this.divId = divId;
  };
    
  static DaysOfWeek = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  static Months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  static today = new Date();
  currYear = Calendar.today.getFullYear();
  currMonth = Calendar.today.getMonth();
  currDay = Calendar.today.getDate();

  prevMonth() {
    if (this.currMonth == 0) {
      this.currMonth = 11;
      this.currYear -= 1;
    }
    else this.currMonth -= 1;
    this.showcurr();
    console.log("btnPrev");
  }

  nextMonth() {
    if (this.currMonth == 11) {
      this.currMonth = 0;
      this.currYear += 1;
    }
    else this.currMonth += 1;
    this.showcurr();
    console.log("btnNext");
  }

  showcurr() {
    this.showMonth(this.currYear, this.currMonth);
    this.showInfo(this.currMonth, this.currDay);
  }

  showMonth(year, month) {
    let main = document.querySelector(this.divId);

    if(main.querySelector("#calendar") === null) {
      const calendar = document.createElement("div");
      calendar.id = "calendar"
      main.append(calendar);

      const head = document.createElement("div");
      head.id = "head";
      calendar.append(head);  

      const daysOfWeek = document.createElement("div");
      daysOfWeek.id = "days-of-week";
      calendar.append(daysOfWeek);

      Calendar.DaysOfWeek.forEach(day => {
        const d = document.createElement("div");
        d.classList.add("day-of-week"); 
        d.classList.add(day.toLowerCase());
        d.innerText = day;
        daysOfWeek.append(d);
      })

      const days = document.createElement("div");
      days.id = "days"
      calendar.append(days);

      const btnPrev = document.createElement("button");
      const btnNext = document.createElement("button");
      const month   = document.createElement("div");

      btnPrev.innerText = "Previous";
      btnNext.innerText = "Next";

      btnPrev.id = "btn-prev";
      btnNext.id = "btn-next";
      month.id   = "month";

      head.append(btnPrev);
      head.append(month);
      head.append(btnNext);

      

      btnPrev.onclick = () => {
        this.prevMonth();
      }

      btnNext.onclick = () => {
        this.nextMonth();
      }
    };

    const monthName = main.querySelector("#month");
    monthName.innerHTML = `${Calendar.Months[month]} ${year}`;

    const n_daysOfPrevMonth = new Date (year, month, 0).getDay();
    const n_daysOfCurrentMonth = new Date(year, month + 1, 0).getDate();
    
    const weeks = Math.ceil((n_daysOfPrevMonth + n_daysOfCurrentMonth) / 7);
    const n_daysOfNextMonth = weeks * 7 - (n_daysOfPrevMonth + n_daysOfCurrentMonth);
    const lastDayOfPrevMonth = month == 0 ? new Date(year - 1, 12, 0).getDate() : new Date(year, month, 0).getDate();
    
    let arr = new Array();

    let i = 1
    while (i <= n_daysOfPrevMonth) {
      const d = document.createElement("div");
      d.innerText = lastDayOfPrevMonth - n_daysOfPrevMonth + i;
      d.classList.add("prev-month");
      d.onclick = () => {
        let currMonth = this.currMonth;
        let currYear = this.currYear;
        if (this.currMonth == 0) {
          currMonth = 11;
          currYear -= 1;
        }
        else currMonth -= 1;
        console.log(`${Calendar.Months[currMonth]} ${currYear} ${d.innerText}`);
        this.showInfo(currMonth, Math.floor(Number(d.innerText) / 7));
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
        let currMonth = this.currMonth;
        let currYear = this.currYear;

        console.log(`${Calendar.Months[currMonth]} ${currYear} ${d.innerText}`);
        this.showInfo(currMonth, Math.floor(Number(d.innerText) / 7));
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
        let currMonth = this.currMonth;
        let currYear = this.currYear;

        if (this.currMonth == 11) {
          currMonth = 0;
          currYear += 1;
        }
        else currMonth += 1;

        console.log(`${Calendar.Months[currMonth]} ${currYear} ${d.innerText}`);
        this.showInfo(currMonth, Math.floor(Number(d.innerText) / 7));
      }
      arr.push(d);
      i++;
    }
    
    days.replaceChildren(...arr);
  };

  showInfo(month, week) {
    let main = document.querySelector(this.divId);
    let info = main.querySelector("#info");
    if(info === null) {
      info = document.createElement("div");
      info.id = "info";
      main.append(info);
    }

    info.innerText = `${month}, ${week}`;

    // Object.keys(Vegetables).forEach(veg => {
    //   console.log(veg);
    //   // Object.keys(veg).forEach(property => {
    //   //   console.log(property);
    //   // })
    // })


    // console.log(Vegetables.tomato.harvest);

    // for (const key in Vegetables) {
    //   console.log(key?.sowIndoors);
    // }
    

    //console.log(`show info month:${month}, week:${week}`)
  }

}