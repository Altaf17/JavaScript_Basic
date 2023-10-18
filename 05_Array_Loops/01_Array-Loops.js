// *************************for of
const myArr = [1, 2, 3, 4, 5];
// for (const arrValue of myArr) {
//   console.log(arrValue);
// }

const name = "Altaf Hussain";

// for (const nameStr of name) {
//   console.log(nameStr);
// }

// *************************for in
const user = {
  name: "altaf",
  age: 30,
  isLoggedIn: false,
};

// for (const key in user) {
//   console.log(`objects keys are ${key} and its values are ${user[key]}`);
//   //  console.log(key); // to access keys
//   //   console.log(user[key]); // to access value
// }

// const Temp = [1, 2, 3, 4, 5];

// for (const key in Temp) {
//   //   console.log(key); // its return the index
//   console.log(Temp[key]);
// }

//*************************************for each loop */

const arr = [1, 2, 3, 4, 5];

// arr.forEach((item) => console.log(item));

const coding = ["js", "python"];

coding.forEach((item) => {
  //   console.log(item);
});

// const printItems = (item)=>{
//  console.log(item);
// }

// coding.forEach(printItems)

// coding.forEach((item,index,arr)=> console.log(item,index,arr));



// +++++++++++++++++++++++++++ important ++++++++++++++++
const arrofObj = [
  { id: 0, name: "altaf" },
  { id: 1, name: "john" },
  { id: 2, name: "abcd" },
];

arrofObj.forEach((item) => console.log(item.name));
