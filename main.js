const dayElement = document.querySelector("#day");
const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 14); // 14 days

let endtime = (Date.parse(currentDate) - Date.now());
let sec, min, hour, day;

endtime += 1000; // So timer doesn't start at 13:23:59:59;

const timer = () => {

    sec = Math.floor(endtime / 1000) % 60;
    min = Math.floor(endtime / 1000 / 60) % 60;
    hour = Math.floor(endtime / 1000 / (60 * 60)) % 24;
    day = Math.floor(endtime / 1000 / (60 * 60 * 24));
    endtime -= 1000;

    formatTime(day, hour, min, sec);

}

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

timer();

setInterval(timer, 1000);
