#!/usr/bin/env node
import game from '../../src/index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenOrOdd = () => {
  const randomNumber = (min, max) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  };

  const isEven = (number) => number % 2 === 0 ? 'yes' : 'no';

  const question = randomNumber(5, 85);
  const correctAnswer = isEven(question);

  return [question, correctAnswer];
};

game(descriptionGame, evenOrOdd);
