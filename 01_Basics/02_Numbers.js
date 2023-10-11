const num = 0;

// convert to string
// console.log(typeof(num.toString()));

const score = new Number(100);
// console.log(score);
// console.log(score.toFixed(2));

const otherNum = 23.8966;
// console.log(otherNum.toPrecision(3))

const newNum = 100000;
// console.log(newNum.toLocaleString("en-IN"))

// ******************************* Maths**************************

const mathNumber = 100;
// console.log(mathNumber);

// console.log(Math.abs(-4)); // for nagative to positive number
// console.log(Math.round(6.2));
// console.log(Math.floor(3.8));
// console.log(Math.ceil(8.2));
// console.log(Math.min(2,4,10,20));
// console.log(Math.max(2,4,10,20));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
