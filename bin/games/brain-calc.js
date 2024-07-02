#!/usr/bin/env node
import QuestionandGreeting from "../src/cli.js";
import { game } from "../src/index.js";

QuestionandGreeting();
console.log(`What is the result of the expression?`);
const descriptionGame = `What is the result of the expression?`;

const gameRound = (minNum1, maxNum2, operators) => {
  minNum1 = Math.floor(Math.random() * 100);
  maxNum2 = Math.ceil(Math.random() * 100);
  operators = [`-`, `+`, `*`];

  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `Question: ${minNum1} ${operator} ${maxNum2}`;
  let correctAnswer;
  switch (question) {
    case "-":
      correctAnswer = minNum1 - maxNum2;
      break;
    case "+":
      correctAnswer = minNum1 + maxNum2;
      break;
    case "*":
      correctAnswer = minNum1 * maxNum2;
      break;
  }
  return [question, correctAnswer.toString()];
};

game(descriptionGame, gameRound);
