// Getting and storing the actuall date and time in objekt "dateNow".
let dateNow = new Date();

//Names och the days in an array for reference.
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = days[dateNow.getDay()];
const time = dateNow.getTime();
const msgDay = "Today is: ";
const msgTime = "Current Time: ";

console.log(day);
console.log(time);
document.querySelector("#day").textContent = msgDay + day;
document.querySelector("#time").textContent = msgTime + time;
