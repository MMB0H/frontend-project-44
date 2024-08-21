import game from './index.js';
import { getRandomInRange } from './utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number2;
};

const generateRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));

  return [question, answer];
};

export default () => {
  game(description, generateRound);
};
