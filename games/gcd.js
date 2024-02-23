import {
  getNameAndWelcome, getExpectedResponse,
  getExpression, getRandomIntInclusive,
} from '../src/index.js';

const gcd = (value1, value2) => {
  if (value2) return gcd(value2, value1 % value2);

  return Math.abs(value1);
};

export default () => {
  const name = getNameAndWelcome();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const value1 = getRandomIntInclusive();
    const value2 = getRandomIntInclusive();
    const expression = getExpression(value1, value2);

    console.log(`Question: ${expression}`);
    const expectedResponse = Number(getExpectedResponse());
    const actualResponse = gcd(value1, value2);

    if (expectedResponse === actualResponse) {
      console.log('Correct!');
    } else {
      return `'${expectedResponse}' is wrong answer ;(. Correct answer was '${actualResponse}'. Let's try again, ${name}!`;
    }
  }

  return `Congratulations!, ${name}`;
};
