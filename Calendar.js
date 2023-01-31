export class Calendar {
  constructor(divId) {
    this.divId = divId;
  };
    
  DaysOfWeek = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  Months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];

  today = new Date();

  currYear = this.today.getFullYear();
  currMonth = this.today.getMonth();
  currDay = this.today.getDate();

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
  }

  showMonth(year, month) {
    var html = "<table>";

    //Month + Year
    html +=
      "<tr class='cal-head'><td colspan='7' class='cal-head'>" + this.Months[month] + ' ' + year + "</td></tr>";

    //days of week
    html += "<tr class='column-days'>"
    this.DaysOfWeek.forEach(day => {
        html += "<td class='column-days'>" + day + "</td>";
    });
    html += "</tr>";
    
    let n_daysOfPrevMonth = new Date (year, month, 0).getDay();
    let n_daysOfCurrentMonth = new Date(year, month + 1, 0).getDate();
    let weeks = Math.ceil((n_daysOfPrevMonth + n_daysOfCurrentMonth) / 7);
    let n_daysOfNextMonth = weeks * 7 - (n_daysOfPrevMonth + n_daysOfCurrentMonth);
    let lastDayOfPrevMonth = month == 0 ? new Date(year - 1, 12, 0).getDate() : new Date(year, month, 0).getDate();

    let days = new Array();
    while (days.length != weeks * 7) {
      if (days.length < n_daysOfPrevMonth) {
        days.push(lastDayOfPrevMonth - n_daysOfPrevMonth + days.length + 1);
        continue;
      }
      if (days.length < n_daysOfPrevMonth + n_daysOfCurrentMonth) {
        days.push(days.length - n_daysOfPrevMonth + 1);
        continue;
      }
      if (days.length < n_daysOfPrevMonth + n_daysOfCurrentMonth + n_daysOfNextMonth) {
        days.push(days.length - (n_daysOfPrevMonth +  n_daysOfCurrentMonth) + 1);
      }
    }

    let i = 0;
    days.forEach(day => {

      let classes = "";

      if (i < n_daysOfPrevMonth) {
        classes += "prev-month";
        if (day == this.today.getDate() && this.currMonth - 1 == this.today.getMonth() && this.currYear == this.today.getFullYear()) classes += " today";
      }
      else if (i < n_daysOfPrevMonth + n_daysOfCurrentMonth) {
        classes += "curr-month";
        if (day == this.today.getDate() && this.currMonth == this.today.getMonth() && this.currYear == this.today.getFullYear()) classes += " today";
      } 
      else
        classes += "next-month";
        if (day == this.today.getDate() && this.currMonth + 1 == this.today.getMonth() && this.currYear == this.today.getFullYear()) classes += " today";

      if (i % 7 == 0) html += "<tr>";
      html += `<td class="${classes}"> ${day} </td>`;
      if (i % 7 == 6) html += "</tr>";

      i++;
    })

    html += "</table>";

    document.getElementById(this.divId).innerHTML = html;
  };
}