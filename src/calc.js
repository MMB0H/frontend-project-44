import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description = "What is the result of the expression?";

const getRandomOperator = () => {
  const operators = ["+", "-", "*"];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculation(number1, number2, operator));

  return [question, answer];
};

export default () => {
  game(description, generateRound);
};
