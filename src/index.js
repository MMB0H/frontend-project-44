import readlineSync from "readline-sync";

const countRaund = 3;
const correctResultOfThisGame = "Correct!";
const negativeResultOfThisGame = "Incorect!";

export default (description, playRound) => {
  console.log("Welcome to the Brain Games!");
  const user = readlineSync.question("May I have your name? ");
  const userName = user.toUpperCase();
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < countRaund; i += 1) {
    const [number, correctAnswer] = playRound();
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log(`${correctResultOfThisGame}`);
    } else {
      console.log(
        `Your answer ${userAnswer} is ${negativeResultOfThisGame} Correct answer is ${correctAnswer}.`
      );
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
