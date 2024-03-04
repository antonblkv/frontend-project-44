import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const gcd = (value1, value2) => {
  if (value2) return gcd(value2, value1 % value2);

  return Math.abs(value1);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandomIntInclusive();
  const number2 = getRandomIntInclusive();
  const expression = `${number1} ${number2}`;

  const correctResponse = String(gcd(number1, number2));

  return [expression, correctResponse];
};

export default () => console.log(gameEngine(gameDescription, getGameData));
