export const roundsCount = 3;

export const getRandomInRange = (min = 0, max = 100) => 
  Math.floor(min + Math.random() * (max - min + 1));
