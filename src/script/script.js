import { Calendar } from "./Calendar.js";
import { CalendarDisplay } from "./CalendarDisplay.js";

window.onload = function() {
  let c = new Calendar(".app");	
  let display = new CalendarDisplay(c);
  display.draw();
}
