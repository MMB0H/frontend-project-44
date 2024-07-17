import game from "./index.js";

const description = "Описание ЭТОЙ игры";
let question = "";
let correctAnswer = "";

let playRound = () => {
  // ТУТ

  return [question, correctAnswer];
};

export default () => {
  game(description, playRound);
};
