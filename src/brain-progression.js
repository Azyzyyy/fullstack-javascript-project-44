#!/usr/bin/env node
import { getRandomInRange } from './utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression;
};

const hiddenValue = (progression) => {
  let randomIndex = Math.floor(Math.random() * progression.length);
  const hiddenNum = progression[randomIndex];
  progression[randomIndex] = '..';
  return hiddenNum;
};

const brainProgression = () => {
  let start = getRandomInRange(1, 50);
  let step = getRandomInRange(1, 10);
  let length = 10;

  const progression = generateProgression(start, step, length);
  
  const correctAnswer = String(hiddenValue(progression));
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default brainProgression;
