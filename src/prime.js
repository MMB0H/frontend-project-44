import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return "no";
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return "no";
    }
  }
  return "yes";
};

let generateRound = () => {
  const number = getRandomInRange();
  const question = `${number}`;
  const answer = String(isPrime(number));
  return [question, answer];
};

export default () => {
  game(description, generateRound);
};
