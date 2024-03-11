import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const isEven = (number) => !(number % 2);

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const number = getRandomIntInclusive();

  const correctResponse = isEven(number) ? 'yes' : 'no';

  return [number, correctResponse];
};

export default () => gameEngine(gameDescription, getGameData);
