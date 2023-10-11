const arr = [1, 2, 3, 4, 5];
// console.log(arr);

//create array with new keyword
const mySkills = new Array("React", "JavaScripts");
// console.log(mySkills);

// Array methods

// console.log(arr.length);
// console.log(arr[0]); // we can access array by index of elements it start from 0
// arr.push(6); // to add element from last
// arr.pop(); // for remove the element from last
// arr.unshift(1)// add element from start
// arr.shift() // to remove the element from start

// console.log(arr.includes(5));
// console.log(arr.indexOf(5));

// console.log(arr);

const myArr = arr.join(); // converts to strings
// console.log(myArr);

const myNewArr = ["Altaf", "Adil", "Arham"];
console.log("slice",myNewArr.slice(0, 1)); // slice method takes start and end index .its not return the end element.its return upto end value. and its not mouted orginal array
console.log(" after slice", myNewArr);


console.log("splice", myNewArr.splice(0, 1));// splice method takes start and end index .its also return the end element . and its  mouted orginal array
console.log("after splice", myNewArr);
