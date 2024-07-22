#!/usr/bin/env node
import { getRandomInRange, getRandomOperator } from './utils.js';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default: 
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const brainCalc = () => {
  const minNum1 = getRandomInRange(1, 100);
  const maxNum2 = getRandomInRange(1, 100);
  const operator = getRandomOperator();

  const correctAnswer = calculation(minNum1, maxNum2, operator).toString();
  const question = `${minNum1} ${operator} ${maxNum2}`;

  return [question, correctAnswer];
};

export default brainCalc;
