import { getRandomInRange } from './utils.js';
import game from './index.js';

const description = 'What is the result of the expression?';

const calculation = (num1, num2, operators) => {
  switch (operators) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operators}`);
  }
};

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const generateRound = () => {
  const minNum1 = getRandomInRange(1, 100);
  const maxNum2 = getRandomInRange(1, 100);
  const operators = getRandomOperator();

  const correctAnswer = calculation(minNum1, maxNum2, operators).toString();
  const question = `${minNum1} ${operators} ${maxNum2}`;

  return [question, correctAnswer];
};

export default () => game(description, generateRound);
