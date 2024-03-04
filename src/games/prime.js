import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const isPrime = (value) => {
  if (value < 2) return 'no';

  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) return 'no';
  }

  return 'yes';
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const number = getRandomIntInclusive();

  const correctResponse = isPrime(number);

  return [number, correctResponse];
};

export default () => console.log(gameEngine(gameDescription, getGameData));
