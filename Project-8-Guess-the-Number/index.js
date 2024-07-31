let lowOrHigh = document.querySelector(".loOrHi");
let prev = document.querySelector("#prev");
let rem = document.querySelector("#left");
let guess = document.querySelector("#guessValue");
let submit = document.querySelector("#subm");
let start = document.querySelector(".start");
const p = document.createElement("p");

let random = parseInt(Math.random() * 100 + 1);
let numGuesses = 10;
let newGame = true;

if (newGame) {
  submit.addEventListener("click", () => {
    val = guess.value;
    validate(val);
  });
}

function newgame() {
  console.log("wfeifjoejo");
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prev.innerHTML = "";
    numGuesses = 10;
    guess.innerHTML = "";
    rem.innerHTML = `10`;
    lowOrHigh.innerHTML = "";
    submit.removeAttribute("disabled");
    start.removeChild(p);
    newGame = true;
  });
}

function validate(val) {
  guess.value = "";
  if (val < 1 || val > 100 || isNaN(val)) {
    lowOrHigh.innerHTML = "Enter Valid input";
    return;
  }
  check(val);
}

function check(val) {
  rem.innerHTML = `${--numGuesses}`;
  prev.innerHTML += ` ${val} `;
  if (val < random) {
    lowOrHigh.innerHTML = "Your Input is low";
  } else if (val > random) {
    lowOrHigh.innerHTML = "Your Input is high";
  } else {
    lowOrHigh.innerHTML =
      "You Guessed it right" + ` In Only ${10 - numGuesses} chances`;
    endGame();
  }

  if (numGuesses === 0) {
    lowOrHigh.innerHTML = `You lost this one, the number is ${random}`;
    endGame();
  }
}

function endGame() {
  submit.setAttribute("disabled", "");
  playGame = false;
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  p.className = "newOne";
  start.appendChild(p);
  newgame();
}
