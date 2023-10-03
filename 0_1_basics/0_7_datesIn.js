// Dates

const date = new Date();
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toLocaleString())

//const createDate= new Date(2023, 0 , 12)
//const createDate= new Date(2023, 0 , 12, 5, 3)
const createDate = new Date("01-12-2023"); // mm-dd-yyyy

console.log(createDate.toLocaleString());

//timestamp
let timestamp = Date.now();
// console.log(timestamp)
// console.log(createDate.getTime()) //current time
//console.log(Math.floor(Date.now() / 1000)); // current time in mili sec

const newDate = new Date();
//`${newDate.getDay()} and the time is`

console.log(newDate.toLocaleString('default' , {weekday : "short" , timeZone: ""}))