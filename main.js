const dayElement = document.querySelector("#day");
const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");


let hours = 24;
let minutes = 59;
let seconds = 60;
let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 14);
let startDay = currentDate.getDate();


// setInterval(() => {
//     seconds -= 1;
//     console.log(`Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`);

//     if (seconds === 0) {
//         seconds = 60;
//         minutes -= 1;
//     }

//     if (minutes === 0) {
//         hours -= 1;
//     }

//     if (hours === 0) {
//         days -= 1;
//     }

// }, 1000);