import game from "../index.js";

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const getNumber = () => Math.round(Math.random() * 20);
const isEven = (number) => number % 2 === 0;

const playRound = () => {
  const number = getNumber();
  const correctAnswer = isEven(number) ? "yes" : "no";
  return [number, correctAnswer];
};

export default () => {
  game(description, playRound);
};
