import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import setupWord from './src/word.js';
import { isLetterInWord } from './src/word.js';
import { revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

const gameSatusEl = document.querySelector("#game-status");

  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector('#word-container'), word);
  console.log(isLetterInWord(word[0]), '(should be true)');
console.log(isLetterInWord('1'), '(should be false)');


const handleGuess = (guessEvent, letter) => {
  const button = guessEvent.target;
  button.setAttribute('disabled', true);

  if (isLetterInWord(letter)) {
    revealLetterInWord(letter);
  } else {
    numWrong += 1;
    setSharkImage(document.querySelector('#shark-img'), numWrong);
  }

const isWordComplete = Array.from(
  document.querySelectorAll(".letter-box")
).every((el) => el.innerText !== "")
// isWordComplete will be true if all ".letter-box" elements have an innerText that is NOT ""
// isWordComplete will be false if any of the ".letter-box" elements have an innerText that is ""

if (isWordComplete || numWrong === 5) {
  document.querySelectorAll('button').forEach((btn) => {
    btn.setAttribute('disabled', true);
  });

  gameSatusEl.innerText = isWordComplete ? "You win!" : "You lose!";
}


};

setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};





initSharkwords();
