#!/usr/bin/env node
import { game } from "../../src/index.js";

const descriptionGame = `What number is missing in the progression?`;

const gameRound3 = () => {
  let start = Math.floor(Math.random() * 50);
  let difference = Math.floor(Math.random() * 10);
  const amountOfNum = 10;

  const progression = [];
  for (let i = 0; i <= amountOfNum; i += 1) {
    progression.push(start + difference * i);
  }

  const hiddenValue = () => {
    let randomIndex = Math.floor(Math.random() * progression.length);
    const hiddenNum = progression[randomIndex];
    progression[randomIndex] = "..";
    return hiddenNum;
  };

  const correctAnswer = String(hiddenValue());
  const question = progression.join(" ");

  return [question, correctAnswer];
};

game(descriptionGame, gameRound3);
