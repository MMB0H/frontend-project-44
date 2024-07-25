import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

let playRound = () => {
  const number = getRandomInRange();
  const question = `${number}`;

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
  const correctAnswer = isPrime(number);
  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
