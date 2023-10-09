const form = document.querySelector('.form');
const button = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
let randomNumber = Math.round(Math.random() * 100 + 1);
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateInput(guess);
  });
}

function validateInput(guess) {
  if (guess < 0 || isNaN(guess) || guess > 100) {
    alert('Insert valid number.')
  } else {
    prevGuess.push(guess);
    if (prevGuess.length === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else {
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`; //imp
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(guess) {
  lowOrHigh.innerHTML = `<h2>${guess}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // key value pair (new)
  p.classList.add('button'); // imp
  p.innerHTML = `<h2 id = "newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  console.log(startOver)
  playGame = false;
  newGame();
}
function newGame() {
  const newButton = document.querySelector('#newGame');
  console.log(newButton)
  newButton.addEventListener('click', function (e) {
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled', ''); // imp
    startOver.removeChild(p);
    playGame = true;
  });
}
