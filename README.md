# Jogo da Forca em JavaScript

Este é um simples jogo da forca implementado em JavaScript. O jogo é baseado em uma lista de palavras predefinidas, e o jogador tenta adivinhar a palavra, inserindo letras como palpites. O jogo tem uma representação visual da forca que é desenhada conforme o jogador faz palpites incorretos.

## Como Jogar

1. Abra o arquivo `index.html` em um navegador da web.
2. Insira uma letra como palpite na caixa de entrada.
3. Clique no botão "Palpite" para submeter sua escolha.
4. A palavra a ser adivinhada é exibida com espaços em branco para as letras desconhecidas.
5. O jogador tem um número limitado de tentativas para adivinhar a palavra antes de ser "enforcado".
6. O jogo informa se o jogador ganhou ou perdeu e revela a palavra correta.

## Estrutura do Código

O código está dividido em várias seções:

- **Lista de Palavras**: Uma lista de palavras predefinidas para o jogo.

- **Seleção Aleatória**: Seleção aleatória de uma palavra da lista para ser a palavra a ser adivinhada.

- **Inicialização do Jogo**: Inicialização de variáveis, criação de uma exibição inicial da palavra e configuração do ambiente de desenho da forca.

- **Desenho da Forca**: Função para desenhar partes da forca com base nos palpites incorretos.

- **Atualização da Exibição**: Atualização da exibição da palavra, tentativas restantes e letras já utilizadas.

- **Adivinhação de Letras**: Lógica para processar os palpites do jogador, atualizar a exibição e verificar se o jogador ganhou ou perdeu.

- **Event Listeners**: Adição de um ouvinte de eventos ao botão de palpite para acionar a função de adivinhação de letras.

## Visualização Gráfica

O estado da forca é visualizado por meio de um elemento de tela (`canvas`) que é atualizado à medida que o jogador faz palpites incorretos.

## Diagramas 

![WhatsApp Image 2023-11-05 at 16 13 01](https://github.com/ErickFGalvez/JogoDaForca/assets/128325280/f31ee59c-6a01-4c14-ac2a-e6aa47154401)
![WhatsApp Image 2023-11-05 at 16 12 21](https://github.com/ErickFGalvez/JogoDaForca/assets/128325280/bac4483f-cc2b-4e2d-a974-dd4762aba132)
![WhatsApp Image 2023-11-05 at 16 11 57](https://github.com/ErickFGalvez/JogoDaForca/assets/128325280/ae67143d-1188-4fdc-bbc5-68bca717f8da)
![WhatsApp Image 2023-11-05 at 16 11 38](https://github.com/ErickFGalvez/JogoDaForca/assets/128325280/22e28697-c6e2-4664-b4c0-69e5149ac29b)

## Segue codigo comentado

// Lista de palavras para o jogo da forca
const wordList = [
  "Beetlejuice",
  "Jack",
  "Edward",
  "Batman",
  "Chapeleiromaluco",
  "Timburton",
];

// Seleciona aleatoriamente uma palavra da lista
const wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];

// Inicialização de variáveis
let wordDisplay = [];
let guessesLeft = 6;
let lettersGuessed = [];

// Cria um array com underscores representando as letras da palavra a ser adivinhada
for (let i = 0; i < wordToGuess.length; i++) {
  wordDisplay.push("_");
}

// Obtenção do elemento canvas e contexto para desenhar a forca
const canvas = document.getElementById("hangmanCanvas");
const context = canvas.getContext("2d");

// Função para desenhar as partes da forca com base nos palpites incorretos
function drawHangman(incorrectGuesses) {
  // Limpando o canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhando as diferentes partes da forca com base nos palpites incorretos
  // Cada condição verifica o número de palpites incorretos e desenha uma parte correspondente
}

// Atualiza a exibição na tela com a palavra, tentativas restantes e letras já utilizadas
function updateDisplay() {
  document.getElementById("wordDisplay").innerText = wordDisplay.join(" ");
  document.getElementById("guessesLeft").innerText = "Tentativas restantes: " + guessesLeft;
  document.getElementById("lettersGuessed").innerText = "Letras já usadas: " + lettersGuessed.join(", ");
}

// Função para processar o palpite do jogador
function guessLetter() {
  // Obtém o valor do palpite da caixa de entrada e converte para minúsculas
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value.toLowerCase();

  // Verifica se o palpite é uma única letra minúscula que ainda não foi utilizada
  if (guess.length === 1 && /^[a-z]$/.test(guess) && !lettersGuessed.includes(guess)) {
    let found = false;
    // Verifica se a letra está na palavra a ser adivinhada e atualiza a exibição
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] === guess) {
        wordDisplay[i] = guess;
        found = true;
      }
    }

    // Se a letra não foi encontrada, reduz o número de tentativas e desenha a próxima parte da forca
    if (!found) {
      guessesLeft--;
      drawHangman(6 - guessesLeft);
    }

    // Adiciona a letra à lista de letras já utilizadas e atualiza a exibição
    lettersGuessed.push(guess);
    updateDisplay();

    // Verifica se o jogador ganhou ou perdeu
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
  // Limpa a caixa de entrada
  guessInput.value = "";
}

// Inicializa a exibição inicial na tela e adiciona um ouvinte de eventos ao botão de palpite
updateDisplay();
document.getElementById("guessButton").addEventListener("click", guessLetter);
