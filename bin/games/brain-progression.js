#!/usr/bin/env node
import game from '../../src/index.js';
import brainProgression from '../../src/brain-progression.js';

const descriptionGame = 'What number is missing in the progression?';

game(descriptionGame, brainProgression);
