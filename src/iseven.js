import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange();
  const answer = String(isEven(number) ? "yes" : "no");
  return [number, answer];
};

export default () => {
  game(description, generateRound);
};
