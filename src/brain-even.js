import { getRandomInRange } from './utils.js';
import game from './index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const generateRound = () => {
  const question = getRandomInRange(5, 85);
  const correctAnswer = check(question);

  return [question, correctAnswer];
};

export default () => { game(description, generateRound) };
