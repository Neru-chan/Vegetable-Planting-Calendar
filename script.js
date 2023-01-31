let Calendar = function(divId) {
    
    this.divId = divId;
  
    this.DaysOfWeek = [
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun'
    ];
  
    this.Months = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    this.today = new Date();
  
    this.currMonth = this.today.getMonth();
    this.currYear = this.today.getFullYear();
    this.currDay = this.today.getDate();
  };
    
  Calendar.prototype.prevMonth = function() {
    if (this.currMonth == 0) {
      this.currMonth = 11;
      this.currYear -= 1;
    }
    else this.currMonth -= 1;
    this.showcurr();
    console.log("btnPrev");
  };

  Calendar.prototype.nextMonth = function() {
    if (this.currMonth == 11) {
      this.currMonth = 0;
      this.currYear += 1;
    }
    else this.currMonth += 1;
    this.showcurr();
    console.log("btnNext");
    };

Calendar.prototype.showcurr = function() {
    this.showMonth(this.currYear, this.currMonth);

    //setTableStyle();
};

Calendar.prototype.showMonth = function(year, month) {
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


    // console.log("Days of previous month: " + n_daysOfPrevMonth);
    // let daysOfPrevMonth = new Array();
    // let i = 0;
    // while (i < n_daysOfPrevMonth) {
    //   let d = lastDayOfPrevMonth - n_daysOfPrevMonth + i + 1;
    //   daysOfPrevMonth.push(d);
    //   console.log(daysOfPrevMonth[i]);
    //   i++;
    // }

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

    
    // console.log("Days In Current Month: " + n_daysOfCurrentMonth);
    // let daysOfCurrentMonth = new Array();
    // i = 0;
    // while (i < n_daysOfCurrentMonth) {
    //   daysOfCurrentMonth.push(i + 1);
    //   console.log(daysOfCurrentMonth[i]);
    //   i++;
    // }


    // console.log("Days In next Month: " + n_daysOfNextMonth);
    // let daysOfNextMonth = new Array();
    // i = 0;
    // while (i < n_daysOfNextMonth) {
    //   daysOfNextMonth.push(i + 1);
    //   console.log(daysOfCurrentMonth[i]);
    //   i++;
    // }


    // for (let i = 0; i < weeks * 7; i++) {
    //   if (i % 7 == 0) html += "<tr>";
    //   html += "<td>" + i + "</td>";
    //   if (i % 7 == 6) html += "</tr>";
    // }

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

    // document.querySelector("td").addEventListener("click", () => {

    // })

    

    // i = 0;
    // daysOfPrevMonth.forEach(day => {
    //   if (i % 7 == 0) html += "<tr>";
    //   html += "<td class='prev-month'>" + day + "</td>"
    //   if (i % 7 == 6) html += "</tr>";
    //   i++;
    //   console.log("A " + i);
    // })

    // daysOfCurrentMonth.forEach(day => {
    //   if (i % 7 == 0) html += "<tr>";
    //   html += "<td class='curr-month'>" + day + "</td>"
    //   if (i % 7 == 6) html += "</tr>";
    //   i++;
    // })

    // daysOfNextMonth.forEach(day => {
    //   if (i % 7 == 0) html += "<tr>";
    //   html += "<td class='next-month'>" + day + "</td>"
    //   if (i % 7 == 6) html += "</tr>";
    // })  

    html += "</table>";

    getId(this.divId).innerHTML = html;
  };
  
  // При загрузке окна
  window.onload = function() {

    // Начать календарь
    var c = new Calendar("divCal");			
    c.showcurr();
  
    // Привязываем кнопки «Следующий» и «Предыдущий»
    getId('btnNext').onclick = function() {
      c.nextMonth();
    };
    getId('btnPrev').onclick = function() {
      c.prevMonth();
    };
  }
  

function getId(id) {
    return document.getElementById(id);
}

function getClass(classname) {
    return document.getElementsByClassName(classname);
}

function getElement(querry) {
    return document.querySelector(querry);
}

// function setTableStyle() {

//     const el = getElement('tr .column-days');
//     const style = window.getComputedStyle(el).width;

//     el.style.height = style;
// }