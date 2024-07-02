import readlineSync from "readline-sync";
import QuestionandGreeting from "../src/cli.js";

export const game = (descriptionGame, gameRound) => {
  const user = QuestionandGreeting();
  console.log(descriptionGame);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question("Your answer: ");

    if (correctAnswer === answerUser.toLowerCase()) {
      console.log("Correct!");
    } else {
      console.log(
        `"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};
