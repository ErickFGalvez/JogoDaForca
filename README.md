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
