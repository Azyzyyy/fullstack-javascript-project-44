#!/usr/bin/env node

import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");

const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

function evenOrOdd() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function isEven(number) {
    return number % 2 === 0;
  }

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = randomNumber(10, 80);
    console.log("Question: " + `${getRandomNumber}`);
    const answerUser = readlineSync.question("Your answer: ");

    const correctAnswer = isEven(getRandomNumber) ? "yes" : "no";
    if (correctAnswer === answerUser.toLowerCase()) {
      console.log("Correct!");
    } else {
      console.log(
        `${answerUser} is wrong answer :(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`
      );
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

evenOrOdd();
