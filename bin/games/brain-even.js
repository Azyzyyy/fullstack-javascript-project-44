#!/usr/bin/env node
import game from '../../src/index.js';
import evenOrOdd from '../../src/brain-even.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

game(descriptionGame, evenOrOdd);
