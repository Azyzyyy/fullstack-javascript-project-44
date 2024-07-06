#!/usr/bin/env node
import { game } from "../../src/index.js";

const descriptionGame = `Find the greatest common divisor of given numbers.`;

const gameRound2 = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.ceil(Math.random() * 100);

    let a = num1;
    let b = num2;
    while (b !== 0) {
        [a, b] = [b, a % b];
    }

    const question = `${num1} ${num2}`;
    const correctAnswer = String(a);

    return [question, correctAnswer];
};

game(descriptionGame, gameRound2);