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
// console.log("slice", myNewArr.slice(0, 1)); // slice method takes start and end index .its not return the end element.its return upto end value. and its not mouted orginal array
// console.log(" after slice", myNewArr);

// console.log("splice", myNewArr.splice(0, 1)); // splice method takes start and end index .its also return the end element . and its  mouted orginal array
// console.log("after splice", myNewArr);

// continous
const Heros = ["thor", "Ironman", "spiderman"];
const kidsFev = ["moto", "patlo", "doremon"];

const concateArray = kidsFev.concat(Heros); // merge to array and its return new array

// console.log(concateArray);

const allHeros = [...Heros, ...kidsFev]; // merged with spread operator
// console.log(allHeros);

const arr2 = [1, 2, 3, 4, 5, [6, 7], [8, 9, [10]]];
const flatArr = arr2.flat(Infinity);
// console.log(flatArr);

const xyz = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const fli = xyz.reduce((acc, curr) => {
  return acc.concat(curr);
});
// console.log(fli);

// console.log(Array.isArray("React"));
// console.log(Array.from("React"));
// console.log(Array.from({ name: "Altaf", city: "bidar" }));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
