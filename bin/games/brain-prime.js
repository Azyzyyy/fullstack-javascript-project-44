#!/usr/bin/env node
import { game } from "../../src/index.js";

const descriptionGame = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const brainPrime = () => {
    let number = Math.floor(Math.random() * 100);
    
    const primeNumber = (num) => {
    if (num < 2) {
        return 'no';
    }

    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
}

    const question = `${number}`;
    const correctAnswer = primeNumber(number);

    return [question, correctAnswer];
};

game(descriptionGame, brainPrime);