const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerText = letter;
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    element.append(btn);
  });
}

export default setupGuesses;
