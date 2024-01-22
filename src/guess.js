
//declaring a string of the alphabet.
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//function with two peramaters. The function first loops over every letter in the string. Then creats a button element. it usese the inner text to display the letter.

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerText = letter;
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    element.append(btn);
  });
}

export default setupGuesses;
