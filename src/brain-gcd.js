#!/usr/bin/env node
import { getRandomInRange } from './utils.js';

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while(y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const brainGcd = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

export default brainGcd;