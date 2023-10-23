let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please Enter Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a number more then 1 ");
  } else if (guess > 100) {
    alert("Please enter a number less then 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over , Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("You Guessed is Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too Low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too High");
  }
};

const displayMessage = (msg) => {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
};

const displayGuess = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

const newGame = () => {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}  `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
  });
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id= "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};
