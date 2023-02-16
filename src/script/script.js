import { Calendar } from "./Calendar";
import { CalendarDisplay } from "./CalendarDisplay";

window.onload = function() {
  let c = new Calendar(".app");	
  let display = new CalendarDisplay(c);
  display.draw();
}
