const dayElement = document.querySelector("#day");
const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");


let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);

console.log(Date.now());
console.log(Date.parse(currentDate));

let difference = Date.parse(currentDate) - Date.now();
let sec = Math.floor(difference / 1000) % 60;
let min = Math.floor(difference / 1000 / 60);
let hour = Math.floor(difference / 1000 / (60 * 60));
let day = Math.floor(difference / 1000 / (60 * 60 * 24));

console.log("Seconds:", sec);
console.log("Minutes:", min);
console.log("Hour:", hour);
console.log("Day:", day);

// Get endTime -> 14 days
// Get value for current time (seconds, minute, hour, day)
// Get the difference of current time from endTime
// Do this every second until timer is at zero 

const timer = (duration) => {

}