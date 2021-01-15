const dayElement = document.querySelector("#day");
const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 14); // 14 day

let endtime = (Date.parse(currentDate) - Date.now()) + 1000;
let sec, min, hour, day;

const timer = (duration) => { }

const formatTime = (dy, hr, mn, sc) => {
    const day = dy < 10 ? `0${dy}` : dy;
    const hour = hr < 10 ? `0${hr}` : hr;
    const min = mn < 10 ? `0${mn}` : mn;
    const sec = sc < 10 ? `0${sc}` : sc;

    dayElement.textContent = day;
    hourElement.textContent = hour;
    minuteElement.textContent = min;
    secondElement.textContent = sec;

}

console.log(endtime);

sec = Math.floor(endtime / 1000) % 60;
min = Math.floor(endtime / 1000 / 60) % 60;
hour = Math.floor(endtime / 1000 / (60 * 60)) % 24;
day = Math.floor(endtime / 1000 / (60 * 60 * 24));

formatTime(day, hour, min, sec);

setInterval(() => {
    endtime -= 1000;
    sec = Math.floor(endtime / 1000) % 60;
    min = Math.floor(endtime / 1000 / 60) % 60;
    hour = Math.floor(endtime / 1000 / (60 * 60)) % 24;
    day = Math.floor(endtime / 1000 / (60 * 60 * 24));

    console.log(`day: ${day} hour: ${hour}, min: ${min}, sec: ${sec}`);

    formatTime(day, hour, min, sec);

}, 1000);

// Get endTime -> 14 days
// Get value for current time (seconds, minute, hour, day)
// Get the diff of current time from endTime
// Do this every second until timer is at zero 
