import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const isPrime = (value) => {
  if (value < 2) return false;

  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) return false;
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomIntInclusive();

  const correctResponse = isPrime(number) ? 'yes' : 'no';

  return [number, correctResponse];
};

export default () => gameEngine(gameDescription, getGameData);
