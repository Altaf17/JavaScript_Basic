const user = {
  userName: "Altaf",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} welcome to website`);
    // console.log(this, "inside object");
  },
};

// this keyword referse to current context

// user.welcomeMessage();
user.userName = "sam";

// user.welcomeMessage();

// console.log(this);

function thisOne() {
  console.log(this);
}
// thisOne();

// const arrowFun = (num1, num2) => {
//   return num1 + num2;
// };
// const arrowFun = (num1, num2) =>  num1 + num2;
const arrowFun = (num1, num2) => num1 + num2;

// console.log(arrowFun(2, 2));

const myarr = [1, 2, 3];
 myarr.forEach((item, index, arr) => item
);
// console.log(myarr);

// ****************************IIFE**************

(function addone() {
  // console.log("hello");
})();

(function addTwo() {
  // console.log("hello");
})();

(() => {
  // console.log("arrow IIFE");
})();
