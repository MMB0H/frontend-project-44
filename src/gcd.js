import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description = "Find the greatest common divisor of given numbers.";

let playRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();

  const question = `${number1} ${number2}`;

  const gcd = (number2, number1) => {
    while (number1 !== 0) {
      let temp = number1;
      number1 = number2 % number1;
      number2 = temp;
    }
    return number2;
  };
  const correctAnswer = gcd(number2, number1);
  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
