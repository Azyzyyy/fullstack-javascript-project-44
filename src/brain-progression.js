import { getRandomInRange } from './utils.js';
import game from './index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hiddenValue = (progression) => {
  const changeProgression = progression;
  const randomIndex = Math.floor(Math.random() * changeProgression.length);
  const hiddenNum = progression[randomIndex];
  changeProgression[randomIndex] = '..';
  return hiddenNum;
};

const generateRound = () => {
  const start = getRandomInRange(1, 50);
  const step = getRandomInRange(1, 10);
  const length = 10;

  const progression = generateProgression(start, step, length);

  const correctAnswer = String(hiddenValue(progression));
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => { game(description, generateRound) };
