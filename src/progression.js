import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description = "What number is missing in the progression?";

const generateProgression = (length, step, hiddenIndex) => {
  const progression = [];
  const start = getRandomInRange();

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  return { progression, hiddenNumber };
};

const gameParameters = (length) => {
  const step = Math.round(Math.random() * 5);
  const hiddenIndex = Math.round(Math.random() * length);
  return { step, hiddenIndex };
};

const playRound = () => {
  const length = 10;
  const { step, hiddenIndex } = gameParameters(length);
  const { progression, hiddenNumber } = generateProgression(
    length,
    step,
    hiddenIndex
  );
  let answer = String(hiddenNumber);
  let question = `${progression}`;

  return [question, answer];
};

export default () => {
  game(description, playRound);
};
