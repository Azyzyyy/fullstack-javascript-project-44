#!/usr/bin/env node
import { game } from "../../src/index.js";

const descriptionGame = `What is the result of the expression?`;

const brainCalc = () => {
  const minNum1 = Math.floor(Math.random() * 100);
  const maxNum2 = Math.ceil(Math.random() * 100);
  const operators = ["-", "+", "*"];

  const operator = operators[Math.floor(Math.random() * operators.length)];
  let question, correctAnswer;

  switch (operator) {
    case "-":
      question = `Question: ${minNum1} - ${maxNum2}`;
      correctAnswer = minNum1 - maxNum2;
      break;
    case "+":
      question = `Question: ${minNum1} + ${maxNum2}`;
      correctAnswer = minNum1 + maxNum2;
      break;
    case "*":
      question = `Question: ${minNum1} * ${maxNum2}`;
      correctAnswer = minNum1 * maxNum2;
      break;
  }

  return [question, correctAnswer.toString()];
};

game(descriptionGame, brainCalc);
