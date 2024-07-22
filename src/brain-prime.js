#!/usr/bin/env node
import { getRandomInRange } from './utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const number = getRandomInRange(1, 100);

  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default brainPrime;
