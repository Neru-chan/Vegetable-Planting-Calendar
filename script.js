import { Calendar } from "./Calendar";

window.onload = function() {
  let c = new Calendar(".main");			
  c.showcurr();

  // document.querySelector('.btn-prev').onclick = function() {
  //   c.prevMonth();
  // }

  // document.querySelector('.btn-next').onclick = function() {
  //   c.nextMonth();
}