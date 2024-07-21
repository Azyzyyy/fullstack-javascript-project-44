#!/usr/bin/env node
import game from '../../src/index.js';
import brainCalc from '../../src/brain-calc.js';

const descriptionGame = 'What is the result of the expression?';

game(descriptionGame, brainCalc);
