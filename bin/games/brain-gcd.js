#!/usr/bin/env node
import { game } from "../../src/index.js";

const descriptionGame = `Find the greatest common divisor of given numbers.`;

const brainGcd = () => {
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const valueGcd = gcd(num1, num2);

    const question = `${num1} ${num2}`;
    const correctAnswer = String(valueGcd);

    return [question, correctAnswer];
};

game(descriptionGame, brainGcd);