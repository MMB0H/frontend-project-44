import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const playRound = () => {
  const number = getRandomInRange();
  const correctAnswer = isEven(number) ? "yes" : "no";
  return [number, correctAnswer];
};

export default () => {
  game(description, playRound);
};
