// console.log("A");
// console.log("l");
// console.log("t");
// console.log("A");
// console.log("f");

function sayMyName() {
  console.log("Altaf");
}
// sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// addTwoNumbers(5,3  ) // function calling with arguments

function multiply(param1, param2) {
  return param1 * param2;
}
const result = multiply(2, 2);
// console.log(result);

function loginMessage(userName) {
  if (!userName) {
    console.log("Please Enter User Name");
    return;
  }
  return `${userName} is just loggedIn`;
}
loginMessage("Altaf");
// console.log(loginMessage());
// console.log(loginMessage("Altaf"));

//rest operator in functions
function totalCartPrice(...item) {
  return item;
}
// console.log(totalCartPrice(20));
// console.log(totalCartPrice(20, 30, 50));

const user = {
  name: "Altaf",
  age: 30,
  isLoggedIn: false,
};

function handleObject(obj) {
  //   console.log(` user Name is ${obj.name} and his age ${obj.age}`);
}
// handleObject(user);

// handleObject({
//   name: "sam",
//   age: 25,
// });

const myArr = [10, 20, 30, 40];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([50, 60, 70, 80]));
