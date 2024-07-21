#!/usr/bin/env node
import game from '../../src/index.js';
import brainGcd from '../../src/brain-gcd.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

game(descriptionGame, brainGcd);
