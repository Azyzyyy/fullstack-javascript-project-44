#!/usr/bin/env node
import getRandomInRange from './utils.js';

const brainProgression = () => {
  let start = getRandomInRange(1, 50);
  let difference = getRandomInRange(1, 10);
  const amountOfNum = 10;

  const progression = [];
  for (let i = 0; i <= amountOfNum; i += 1) {
    progression.push(start + difference * i);
  }

  const hiddenValue = () => {
    let randomIndex = Math.floor(Math.random() * progression.length);
    const hiddenNum = progression[randomIndex];
    progression[randomIndex] = '..';
    return hiddenNum;
  };

  const correctAnswer = String(hiddenValue());
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default brainProgression;
