export const getRandomInRange = (min = 0, max = 100) => {
  const value = Math.floor(min + Math.random() * (max - min + 1));
  return value;
};

export const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};
