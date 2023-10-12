var a = 10;
let b = 20;
const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

{
  // scope
}

var name = "Altaf";
let name1 = "Altaf";

if (true) {
  //block scope
  //   var name = "Abced"; // var have global scope
  let name1 = "johnDoe";
  //   console.log(name1, "INNER");
}
// console.log(name);
// console.log(name1, "OUTER");

//************Closures and scopes********************** */

function one() {
  const user = "Altaf";

  function two() {
    const city = "Bidar";
    console.log(user);
  }
  //   console.log(city);
  two();
}
// one();

if (true) {
  const name2 = "Altaf Hussain";
  if (name === "Altaf Hussain") {
    const city = " Delhi";
    console.log(name2 + city);
  }
  //   console.log(city);
}
// console.log(name2);

//********************************intersting */
// function can be access before its declaration
console.log(addOne(5));
function addOne(num) {
  return num + 1;
}
// addOne(5);



// function expression cant use before its declaration
console.log(addtwo(5));
const addtwo = function addTwo(num) {
  return num + 2;
};
// console.log(addtwo(5))








