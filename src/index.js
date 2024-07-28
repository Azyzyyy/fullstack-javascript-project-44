import readlineSync from 'readline-sync';
import questionAndGreeting from './cli.js';

export default function game(description, generateRound) {
  const user = questionAndGreeting();
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (correctAnswer === answerUser.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
}
