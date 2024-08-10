import game from "./index.js";
import { getRandomInRange } from "./utils.js";

const description = "What number is missing in the progression?";

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playRound = () => {
  const start = getRandomInRange();
  const step = getRandomInRange(1, 5);
  const length = getRandomInRange(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInRange(0, length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = "..";
  const question = progression.join(",");
  return [question, answer];
};

export default () => {
  game(description, playRound);
};
