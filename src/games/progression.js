import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const getArrayProgression = () => {
  const lengthProgression = getRandomIntInclusive(5, 10);
  const stepSize = getRandomIntInclusive(1, 9);
  const arrayProgression = [getRandomIntInclusive(0, 10)];

  for (let i = 1; i < lengthProgression; i += 1) {
    arrayProgression.push(arrayProgression[i - 1] + stepSize);
  }

  return arrayProgression;
};

const getStringWithHiddenElement = (arrayProgression, indexHiddenElement) => {
  let stringWithHiddenElement = '';

  for (let i = 0; i < arrayProgression.length; i += 1) {
    stringWithHiddenElement += (i === indexHiddenElement ? '.. ' : `${arrayProgression[i]} `);
  }

  return stringWithHiddenElement;
};

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const arrayProgression = getArrayProgression();
  const indexHiddenElement = getRandomIntInclusive(0, arrayProgression.length - 1);
  const expression = getStringWithHiddenElement(arrayProgression, indexHiddenElement);

  const correctResponse = String(arrayProgression[indexHiddenElement]);

  return [expression, correctResponse];
};

export default () => gameEngine(gameDescription, getGameData);
