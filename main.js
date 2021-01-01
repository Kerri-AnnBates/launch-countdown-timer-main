const dayElement = document.querySelector("#day");
const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");


let startDay = 14 * 24 * 60 * 60;
let timer = 60 * 60 * 2;  // 2 hours
let seconds;
let minutes;
let hours;
let day;

// Bug with minutes display when hour starts at 1 hour.

setInterval(() => {
    hours = parseInt(timer / (60 * 60), 10);
    minutes = (minutes > 60) ? parseInt(timer / 60, 10) : parseInt((timer / 60) - 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;

    if (minutes == 60) {
        minutes = "00";
    }

    console.log(`${hours}:${minutes}:${seconds}`);
    timer--;

    // if (--timer < 0) {
    //     timer = duration;
    // }
}, 1000);