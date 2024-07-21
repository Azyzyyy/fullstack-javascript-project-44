#!/usr/bin/env node
import getRandomInRange from './utils.js';

const brainPrime = () => {
  const number = getRandomInRange(1, 100);

  const primeNumber = (num) => {
    if (num < 2) {
      return 'no';
    }

    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const question = `${number}`;
  const correctAnswer = primeNumber(number);

  return [question, correctAnswer];
};

export default brainPrime;