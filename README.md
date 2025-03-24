# Classificador de Nível de Herói com DIO

Este projeto em JavaScript, proposto no desafio de lógica da DIO, classifica heróis com base em sua experiência (XP) e exibe seus nomes e níveis. Utilizei nomes dos personagens de Senhor dos anéis que é uma saga que gosto muito.

## Como Funciona

O código define um array de objetos `herois`, onde cada objeto representa um herói com seu nome e XP. Em seguida, ele itera por este array, determinando o nível de cada herói com base em seu XP e exibindo uma mensagem no console.

## Níveis de Herói

Os níveis são classificados da seguinte forma:

- **Ferro:** XP < 1.000
- **Bronze:** 1.001 <= XP <= 2.000
- **Prata:** 2.001 <= XP <= 5.000
- **Ouro:** 6.001 <= XP <= 7.000
- **Platina:** 7.001 <= XP <= 8.000
- **Ascendente:** 8.001 <= XP <= 9.000
- **Imortal:** 9.001 <= XP <= 10.000
- **Radiante:** XP > 10.000

## Como Executar

Para executar este código, você precisará de um ambiente Node.js instalado. Siga estes passos:

1. Clone o repositório para a sua máquina local.
2. Abra o terminal na pasta do projeto.
3. Execute o comando `node src/index.js`.

## Exemplo de Saída

- **O herói** de nome Sam está no nível Ferro
- **O herói** de nome Frodo está no nível Bronze
- **O herói** de nome Boromir está no nível Prata
- **O herói** de nome Grimli está no nível Ouro
- **O herói** de nome Aragorn está no nível Platina
- **O herói** de nome Legolas está no nível Ascendente
- **O herói** de nome Saruman está no nível Imortal
- **O herói** de nome Gendalf está no nível Radiante

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou correções de bugs.
