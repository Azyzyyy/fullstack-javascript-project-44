#!/usr/bin/env node
import { getRandomInRange } from './utils.js';

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

const brainProgression = () => {
  const start = getRandomInRange(1, 50);
  const step = getRandomInRange(1, 10);
  const length = 10;

  const progression = generateProgression(start, step, length);

  const correctAnswer = String(hiddenValue(progression));
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default brainProgression;
