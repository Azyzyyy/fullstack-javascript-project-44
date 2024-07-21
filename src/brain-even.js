#!/usr/bin/env node
import getRandomInRange from './utils.js';

const evenOrOdd = () => {

  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const question = getRandomInRange(5, 85);
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};

export default evenOrOdd;
