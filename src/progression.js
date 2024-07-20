import game from "./index.js";

const description = "What number is missing in the progression?";

const generateProgression = (length, step, hiddenIndex) => {
  const progression = [];
  const start = Math.round(Math.random() * 30);

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = "..";

  return { progression, hiddenNumber };
};

const playRound = () => {
  const length = 10; // Длина прогрессии
  const step = Math.round(Math.random() * 5); // Шаг прогрессии
  const hiddenIndex = Math.round(Math.random() * length); // Индекс скрытого числа

  const { progression, hiddenNumber } = generateProgression(
    length,
    step,
    hiddenIndex
  );
  let correctAnswer = hiddenNumber;
  let question = `${progression}`;

  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
