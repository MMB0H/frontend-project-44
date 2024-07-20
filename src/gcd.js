import game from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

let playRound = () => {
  const getNumber = () => Math.round(Math.random() * 100);
  const number1 = getNumber();
  const number2 = getNumber();

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
