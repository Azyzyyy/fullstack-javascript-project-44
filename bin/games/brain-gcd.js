#!/usr/bin/env node
import { game } from "../../src/index.js";

const descriptionGame = `Find the greatest common divisor of given numbers.`;

const gameRound2 = () => {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.ceil(Math.random() * 100);

    while (num2 !== 0) {
        [num1, num2] = [num2, num1 % num2];
    }

    const question = `${num1} ${num2}`;
    const correctAnswer = String(num1);

    return [question, correctAnswer];
};

game(descriptionGame, gameRound2);