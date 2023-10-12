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
  // console.log(`Hello ${this.name}`);
};
// console.log(myObj.greetings());

// ************* PART2***************************

// const myApp = new Object();

const myApp = {};

myApp.name = "Skyline";
myApp.id = 123;
myApp.country = "india";

// console.log(myApp);

const User = {
  email: "altafsky17@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Altaf",
      lastName: "Hussain",
    },
  },
};
// console.log(User.fullName.userFullName.firstName);

//merged object

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
  { name: "altaf", id: 1 },
  { name: "john deo", id: 2 },
  { name: "xyz", id: 3 },
];

// console.log(user[1].name); // access objects by index

const userObj = {
  name: "altaf",
  isLoggedIn: false,
  city: "bidar",
  address: {
    street: "main",
  },
};

// access objects by keys and values and its return [];
// console.log(Object.keys(userObj));
// console.log(Object.values(userObj));
// console.log(Object.entries(userObj));
// console.log(userObj.hasOwnProperty("isLoggedIn"));

// object distructuring
const course = {
  js: "Javascript",
  price: 999,
  courseTeacher: "hitesh",
};

const {js,price,courseTeacher:instructor} = course
// console.log(instructor);
