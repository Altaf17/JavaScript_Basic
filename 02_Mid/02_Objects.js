// object literals

const myObj = {
  name: "Altaf",
  age: 30,
  email: "altafsky17@gmail.com",
  city: "Bidar",
  isLoggedIn: false,
};

// console.log("before", myObj);
// console.log(myObj.name);
// console.log(myObj["name"]);

myObj.name = "hussain"; // value change of object
// console.log("after", myObj);

// Object.freeze(myObj); // we cant't muted values after freeze method
// myObj.city = "Hyd"

myObj.greetings = function () {
  console.log(`Hello ${this.name}`);
};
console.log(myObj.greetings());
