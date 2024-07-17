import game from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

console.log(`Question: ${number1} ${number2}`);
const userAnswer = readlineSync.question("Your answer: ");

let playRound = () => {
  const getNumber = () => Math.round(Math.random() * 100);
  const number1 = getNumber();
  const number2 = getNumber();
  const gcd = (number2, number1) => {
    while (number1 !== 0) {
      let temp = number1;
      number1 = number2 % number1;
      number2 = temp;
    }
    return number2;
  };
  let correctAnswer = number2;
  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
