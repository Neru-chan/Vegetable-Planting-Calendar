export class Calendar {
  constructor(divId) {
    this.divId = divId;
  }
  
  test() {
    console.log(this.divId);
  }
    
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
  }

  nextMonth() {
    if (this.currMonth == 11) {
      this.currMonth = 0;
      this.currYear += 1;
    }
    else this.currMonth += 1;
  }

  // showInfo(month, week) {
  //   let main = document.querySelector(this.divId);
  //   let info = main.querySelector("#info");
  //   if(info === null) {
  //     info = document.createElement("div");
  //     info.id = "info";
  //     main.append(info);
  //   }

  //   info.innerText = `${month}, ${week}`;
  //}

}