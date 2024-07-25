import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description = "What is the result of the expression?";
const operations = ["+", "-", "*"];

let playRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  let correctAnswer = 0;
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${number1} ${operation} ${number2}`;

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
  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
