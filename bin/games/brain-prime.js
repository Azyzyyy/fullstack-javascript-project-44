#!/usr/bin/env node
import game from '../../src/index.js';
import brainPrime from '../../src/brain-prime.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

game(descriptionGame, brainPrime);
