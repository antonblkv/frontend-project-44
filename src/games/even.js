import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = getRandomIntInclusive();
  const remainder = number % 2;

  const correctResponse = (remainder ? 'no' : 'yes');

  return [number, correctResponse];
};

export default () => console.log(gameEngine(gameDescription, getGameData));
