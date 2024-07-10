import game from "./index.js";

const description = "What is the result of the expression?";

const operations = ["+", "-", "*"];
const getNumber = () => Math.round(Math.random() * 20);
const number1 = getNumber();
const number2 = getNumber();

const operation = operations[Math.floor(Math.random() * operations.length)];

let playRound = `${number1} ${operation} ${number2}`;
switch (operation) {
  case "+":
    correctAnswer = number1 + number2;
    break;
  case "-":
    correctAnswer = number1 - number2;
    break;
  case "*":
    correctAnswer = number1 * number2;
    break;
}

export default () => {
  game(description, playRound);
};
