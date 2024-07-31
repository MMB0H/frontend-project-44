import readlineSync from "readline-sync";

const roundsCount = 3;
const correctResultOfThisGame = "Correct!";
const negativeResultOfThisGame = "wrong";

export default (description, playRound) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  // const userName = `${user[0].toUpperCase()}${user.slice(1)}`;
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [number, correctAnswer] = playRound();
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log(`${correctResultOfThisGame}`);
    } else {
      console.log(
        `'${userAnswer}' is ${negativeResultOfThisGame} answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
