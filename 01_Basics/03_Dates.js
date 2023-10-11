const date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());


// const myCreatedDate = new Date(2023,2,15) // for the date
// console.log(myCreatedDate.toDateString());


// const myCreatedDate = new Date(2023,2,15,5,3) for the date and time
// console.log(myCreatedDate.toLocaleString());

// const myCreatedDate = new Date("11,10,2023") // for DDMMYY
const myCreatedDate = new Date("10,11,2023") // for MMDDYY
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

const dates = new Date();
// console.log(dates.getFullYear());
// console.log(dates.getMonth());
// console.log(dates.getDay());


// console.log(dates.toLocaleString("default",{
//     weekday: "long",
//     timeZone : ""
// }));