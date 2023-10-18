const coding = ["javaScript", "python", "ruby", ""];

// const values = coding.forEach((item) => {
// //   console.log(item);
// return item
// });

// console.log(values); // forEach its not return anything just iterate values

const myNumbers = [1, 2, 3, 4, 5, 6];

// const NumValues = myNumbers.filter((item)=> item > 2)
// console.log(NumValues);

const NumValues = myNumbers.filter((item) => {
  return item > 2;
});
// console.log(NumValues);

const newNums = [];
myNumbers.forEach((item) => {
  if (item > 5) {
    newNums.push(item);
  }
});

// console.log(newNums);

const BooksNames = [
  { id: 1, title: "js", price: 999 },
  { id: 2, title: "HTML", price: 499 },
  { id: 3, title: "CSS", price: 699 },
  { id: 4, title: "React", price: 1999 },
];

const filteredBooks = BooksNames.filter((book) => {
  return book.id > 2 && book.price > 500;
});
// console.log(filteredBooks);
// console.log(BooksNames);

// ----------------------------------- Map --------------

const numbers = [5, 10, 15, 20];

const result = numbers.map((num) => num + 5);
// console.log(result);

const chaining = result
  .map((num) => num + 5)
  .filter((num) => num > 15)
  .map((num) => num * 2);
// console.log(chaining);

// ----------------------------------- reduce --------------

const myArr = [10, 20, 30, 40];

const reduceValues = myArr.reduce((acc, currValue) => {
  return acc + currValue;
}, 0);

// console.log(reduceValues);

const cartItems = [
  {
    id: 1,
    name: "mobile",
    price: 500,
  },
  {
    id: 2,
    name: "furniture",
    price: 50000,
  },
  {
    id: 3,
    name: "Television",
    price: 5000,
  },
];

const totalPrice = cartItems.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalPrice);
