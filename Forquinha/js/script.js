
// Lista de palavras para o jogo da forca
const wordList = [
  "beetlejuice",
  "jack",
  "edward",
  "batman",
  "chapeleiromaluco",
  "timburton",
];

// Seleciona aleatoriamente uma palavra da lista
const wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];


let wordDisplay = [];
let guessesLeft = 6;
let lettersGuessed = [];

for (let i = 0; i < wordToGuess.length; i++) {
  wordDisplay.push("_");
}

const canvas = document.getElementById("hangmanCanvas");
const context = canvas.getContext("2d");

function drawHangman(incorrectGuesses) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (incorrectGuesses >= 1) {
    context.beginPath();
    context.moveTo(20, 390);
    context.lineTo(100, 390);
    context.lineTo(60, 350);
    context.closePath();
    context.stroke();
  }

  if (incorrectGuesses >= 2) {
    context.beginPath();
    context.moveTo(60, 350);
    context.lineTo(60, 50);
    context.stroke();
  }

  if (incorrectGuesses >= 3) {
    context.beginPath();
    context.moveTo(60, 50);
    context.lineTo(150, 50);
    context.stroke();
  }

  if (incorrectGuesses >= 4) {
    context.beginPath();
    context.arc(150, 80, 30, 0, Math.PI * 2, false);
    context.stroke();
  }

  if (incorrectGuesses >= 5) {
    context.beginPath();
    context.moveTo(150, 110);
    context.lineTo(150, 250);
    context.stroke();
  }

  if (incorrectGuesses >= 6) {
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(120, 120);
    context.stroke();

    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(180, 120);
    context.stroke();
  }
}

function updateDisplay() {
  document.getElementById("wordDisplay").innerText = wordDisplay.join(" ");
  document.getElementById("guessesLeft").innerText = "Tentativas restantes: " + guessesLeft;
  document.getElementById("lettersGuessed").innerText = "Letras já usadas: " + lettersGuessed.join(", ");
}

function guessLetter() {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toLowerCase();

  if (guess.length === 1 && /^[a-z]$/.test(guess) && !lettersGuessed.includes(guess)) {
    let found = false;
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === guess) {
        wordDisplay[i] = guess;
        found = true;
      }
    }

    if (!found) {
      guessesLeft--;
      drawHangman(6 - guessesLeft);
    }

    lettersGuessed.push(guess);
    updateDisplay();

    if (wordDisplay.join("") === wordToGuess) {
      document.getElementById("wordDisplay").innerText = "Parabéns! Você ganhou. A palavra era: " + wordToGuess;
      document.getElementById("guessInput").disabled = true;
      document.getElementById("guessButton").disabled = true;
    } else if (guessesLeft === 0) {
      document.getElementById("wordDisplay").innerText = "Você perdeu! A palavra era: " + wordToGuess;
      document.getElementById("guessInput").disabled = true;
      document.getElementById("guessButton").disabled = true;
    }
  }
  guessInput.value = "";
}

updateDisplay();
document.getElementById("guessButton").addEventListener("click", guessLetter);
