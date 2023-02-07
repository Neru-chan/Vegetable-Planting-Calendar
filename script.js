import { Calendar } from "./Calendar";
import { Vegetable } from "./Vegetable";
import { Vegetables } from "./Vegetables";

window.onload = function() {
  
  //console.log(Vegetables.Tomato);

  // Object.keys(Vegetables).forEach(veg => {
  //   console.log(veg); 
  // })

  console.log(Object.values(Vegetables));

  let c = new Calendar(".app");			
  c.showcurr();
}