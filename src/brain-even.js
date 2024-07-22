#!/usr/bin/env node
import { getRandomInRange } from './utils.js';

const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const evenOrOdd = () => {
  const question = getRandomInRange(5, 85);
  const correctAnswer = check(question);

  return [question, correctAnswer];
};

export default evenOrOdd;
