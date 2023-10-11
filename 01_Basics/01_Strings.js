const firstName = "Altaf";
const lastName = "Hussain";
// concate methode
// const result = firstName +  lastName

// with template litrals
const result = `my name is ${firstName} ${lastName}`;
// console.log(result);

const gameName = new String("Altaf");
// console.log(gameName.length);// to find the length
// console.log(gameName[0]); // to find the index element of string
// console.log(gameName.toUpperCase()) // to upperCase
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(1)) ;
// console.log(gameName.indexOf("t"));

const newSubstr = gameName.substring(0, 4);
// console.log(newSubstr);

// const anotherstr = gameName.slice(0,4) // find the elements from start index to end index we can give the negative value also
const anotherstr = gameName.slice(-1, 4); // find the elements from start index to end index we can give the negative value also
// console.log(anotherstr);

const trimStr = " Altaf hussain ";
const trimResult = trimStr.trim();
// console.log(trimResult);

const replaceStr = "altaf.hussain.com";
const replaceResult = replaceStr.replace(".", "-");
// console.log(replaceResult);

// includes its check the given element is exist in string and return boolean value
const includesStr = "Md Altaf Hussain";
const includesResult = includesStr.includes("khan");
// console.log(includesResult);

// split is use to seprate the elements of string on the bases of seprater and return the array
const splitStr = "md Altaf Hussain";
const splitResult = splitStr.split(" ");
console.log(splitResult);
