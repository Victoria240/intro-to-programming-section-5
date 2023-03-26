// Initialize variables
let targetNumber = Math.floor(Math.random() * 100) + 1;
let remainingTries = 5;
let isGameWon = false;

// DOM elements
const form = document.querySelector('form');
const guessInput = document.getElementById('guess');
const resetButton = document.getElementById('reset');
const numberMessage = document.getElementById('number-message');
const triesMessage = document.getElementById('tries-message');
const guessMessage = document.getElementById('guess-message');
const resultMessage = document.getElementById('result-message');
const messagesDiv = document.getElementById('messages');

// Event listeners
form.addEventListener('submit', checkGuess);
resetButton.addEventListener('click', resetGame);

// Functions
function checkGuess(e) {
  e.preventDefault();
  const guess = parseInt(guessInput.value);
  if (guess === targetNumber) {
    isGameWon = true;
    guessInput.disabled = true;
    this.querySelector('button[type="submit"]').disabled = true;
    resultMessage.textContent = 'Guessed correctly!';
  } else {
    remainingTries--;
    if (remainingTries === 0) {
      guessInput.disabled = true;
      this.querySelector('button[type="submit"]').disabled = true;
      resultMessage.textContent = '0 guesses remaining';
    } else {
      guessInput.value = '';
      guessMessage.textContent = guess < targetNumber ? 'Too low' : 'Too high';
      triesMessage.textContent = `You have ${remainingTries} tries left`;
    }
  }
  numberMessage.textContent = `You guessed ${guess}`;
  messagesDiv.style.display = 'block';
  resetButton.style.display = 'block';
}

function resetGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  remainingTries = 5;
  isGameWon = false;
  guessInput.disabled = false;
  form.querySelector('button[type="submit"]').disabled = false;
  guessInput.value = '';
  numberMessage.textContent = '';
  triesMessage.textContent = '';
  guessMessage.textContent = '';
  resultMessage.textContent = '';
  messagesDiv.style.display = 'none';
  resetButton.style.display = 'none';
}







// const guessInput = document.getElementById('guess');
// const submitButton = document.getElementById('submit');
// const resetButton = document.getElementById('reset');
// const messages = document.getElementsByClassName('message');
// const tooHighMessage = document.getElementById('too-high');
// const tooLowMessage = document.getElementById('too-low');
// const maxGuessesMessage = document.getElementById('max-guesses');
// const numberOfGuessesMessage = document.getElementById('num-of-guesses');
// const correctMessage = document.getElementById('correct');

// let targetNumber;
// const attempts = 0;
// const maxNumberOfAttempts = 5;

// // Returns a random number from min (inclusive) to max (exclusive)
// // Usage:
// // > getRandomNumber(1, 50)
// // <- 32
// // > getRandomNumber(1, 50)
// // <- 11
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function checkGuess() {
//   // Get value from guess input element
//   const guess = parseInt(guessInput.value, 10);
//   attempts = attempts + 1;

//   hideAllMessages();

//   if (guess === targetNumber) {
//     numberOfGuessesMessage.style.display = '';
//     numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

//     correctMessage.style.display = '';

//     submitButton.disabled = true;
//     guessInput.disabled = true;
//   }

//   if (guess !== targetNumber) {
//     if (guess < targetNumber) {
//       tooLowMessage.style.display = '';
//     } else {
//       tooLowMessage.style.display = '';
//     }

//     const remainingAttempts = maxNumberOfAttempts - attempts;

//     numberOfGuessesMessage.style.display = '';
//     numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
//   }

//   if (attempts ==== maxNumberOfAttempts) {
//     submitButton.disabled = true;
//     guessInput.disabled = true;
//   }

//   guessInput.value = '';

//   resetButton.style.display = '';
// }

// function hideAllMessages() {
//   for (let elementIndex = 0; elementIndex <= messages.length; elementIndex++) {
//     messages[elementIndex].style.display = 'none';
//   }
// }

// funtion setup() {
//   // Get random number
//   targetNumber = getRandomNumber(1, 100);
//   console.log(`target number: ${targetNumber}`);

//   // Reset number of attempts
//   maxNumberOfAttempts = 0;

//   // Enable the input and submit button
//   submitButton.disabeld = false;
//   guessInput.disabled = false;

//   hideAllMessages();
//   resetButton.style.display = 'none';
// }

// submitButton.addEventListener('click', checkGuess);
// resetButton.addEventListener('click', setup);

// setup();
