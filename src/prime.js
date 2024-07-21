import game from "./index.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

let playRound = () => {
  const number = Math.round(Math.random() * 100);
  const question = `${number}`;

  const isPrime = (number) => {
    if (number <= 1) {
      return "no";
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        // Не включая само число
        return "no";
      }
    }

    return "yes";
  };
  //   return number;
  // };
  const correctAnswer = isPrime(number);
  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
