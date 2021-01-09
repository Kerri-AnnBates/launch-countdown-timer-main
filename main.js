const dayElement = document.querySelector("#day");
const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");

let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 1); // 1 day
currentDate.setDate(currentDate.getDate() + 14); // 14 day

let diff = Date.parse(currentDate) - Date.now();
let sec, min, hour, day;

console.log(diff);

sec = Math.floor(diff / 1000) % 60;
min = Math.floor(diff / 1000 / 60) % 60;
hour = Math.floor(diff / 1000 / (60 * 60)) % 24;
day = Math.floor(diff / 1000 / (60 * 60 * 24));

console.log(`Starting at day: ${day} hour: ${hour}, min: ${min}, sec: ${sec}`);

setInterval(() => {
    diff -= 1000;
    sec = Math.floor(diff / 1000) % 60;
    min = Math.floor(diff / 1000 / 60) % 60;
    hour = Math.floor(diff / 1000 / (60 * 60)) % 24;
    day = Math.floor(diff / 1000 / (60 * 60 * 24));

    console.log(`day: ${day} hour: ${hour}, min: ${min}, sec: ${sec}`);

    dayElement.textContent = day < 10 ? `0${day}` : day;
    hourElement.textContent = hour < 10 ? `0${hour}` : hour;
    minuteElement.textContent = min < 10 ? `0${min}` : min;
    secondElement.textContent = sec < 10 ? `0${sec}` : sec;

}, 1000);

// Get endTime -> 14 days
// Get value for current time (seconds, minute, hour, day)
// Get the diff of current time from endTime
// Do this every second until timer is at zero 

const timer = (duration) => {

}