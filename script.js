import { Calendar } from "./Calendar";

window.onload = function() {
  let c = new Calendar("divCal");			
  c.showcurr();
  
  document.getElementById('btnPrev').onclick = function() {
    c.prevMonth();
  }

  document.getElementById('btnNext').onclick = function() {
    c.nextMonth();
  }
}