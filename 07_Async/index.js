const sayName = () => {
  console.log("Altaf");
};
// setTimeout(sayName, 3000);

const changeText = () => {
  document.querySelector("h1").innerHTML = "Best JS Series";
};
// setTimeout(changeText, 1000);

const changeMe = setTimeout(changeText, 2000);
document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("clicked");
});

//+++++++++++++++++++++

const sayDate = (str) => {
  console.log(str, Date.now());
};

const intervalId = setInterval(sayDate, 1000, "Hello Date is");

clearInterval(intervalId);

let start;
const startChangeText = () => {
  if (!start) {
    start = setInterval(textchange, 1000);
    console.log("text is changed");
  }

  function textchange() {
    document.querySelector("#header").innerHTML = "Text is Changed Now";
  }
};
const stopChangeText = () => {
  clearInterval(start);
  start = null;
  console.log("Stopped");
};

document.querySelector("#stop1").addEventListener("click", stopChangeText);
document.querySelector("#start").addEventListener("click", startChangeText);
