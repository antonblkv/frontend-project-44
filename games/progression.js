import {
  getNameAndWelcome,
  getExpectedResponse,
  getRandomIntInclusive,
} from '../src/index.js';

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

const getHideArrayElement = (arrayProgression, indexHiddenElement) => arrayProgression[indexHiddenElement];

export default () => {
  const name = getNameAndWelcome();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const arrayProgression = getArrayProgression();
    const indexHiddenElement = getRandomIntInclusive(0, arrayProgression.length - 1);
    const expression = getStringWithHiddenElement(arrayProgression, indexHiddenElement);

    console.log(`Question: ${expression}`);
    const actualResponse = getHideArrayElement(arrayProgression, indexHiddenElement);
    const expectedResponse = Number(getExpectedResponse());

    if (expectedResponse === actualResponse) {
      console.log('Correct!');
    } else {
      return `'${expectedResponse}' is wrong answer ;(. Correct answer was '${actualResponse}'. Let's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};
