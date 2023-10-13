// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5 ) {
//     console.log(`5 is Best Number`);
//   }
//   console.log(element);
// }

// for (let i = 1; i < 10; i++) {
//   console.log(`Parent loop and value is ${i}`);
//   for (let index = 1; index < 10; index++) {
//     // console.log(`child loop and value is ${index}`);
//     console.log(i + " * " + index + " = " + i * index);
//   }
// }

// const myArr = ["monday", "tuesday", "wednesday"];
// console.log(myArr.length);
// for (let index = 0; index < myArr.length; index++) {
//   console.log(myArr[index]);
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5 ){
//         console.log("Five is detected");
//         break
//     }
//     console.log(`value of index of ${index}`);

// }
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Five is detected");
    continue;
  }
  console.log(`value of index of ${index}`);
}
