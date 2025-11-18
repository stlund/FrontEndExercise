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

//Getting time and date
const day = days[dateNow.getDay()];
const time = dateNow.toLocaleTimeString("en-US");

let hour = dateNow.getHours();
let minute = dateNow.getMinutes();
let second = dateNow.getSeconds();

let ampm = hour >= 12 ? "PM" : "AM";
hour = hour % 12;
hour = hour ? hour : 12;
const timeReOrderd = `${hour} ${ampm} : ${minute} : ${second}`;

const msgDay = "Today is: " + day;
const msgTime = "Current time: " + timeReOrderd;

document.querySelector("#day").textContent = msgDay;
document.querySelector("#time").textContent = msgTime;

//I found this function to late :)
// console.log(dateNow.toDateString());
