const roundsCount = 3;

const getRandomInRange = (min = 0, max = 100) => Math.floor(min + Math.random() * (max - min + 1));

export {
  roundsCount,
  getRandomInRange
};
