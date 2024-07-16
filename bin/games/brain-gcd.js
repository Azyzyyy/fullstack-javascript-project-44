#!/usr/bin/env node
import game from '../../src/index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  const gcd = (a, b) => {
    let x = a;
    let y = b;
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };

  const valueGcd = gcd(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(valueGcd);

  return [question, correctAnswer];
};

game(descriptionGame, brainGcd);
