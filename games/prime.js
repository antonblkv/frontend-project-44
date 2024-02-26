import {
  getNameAndWelcome, getExpectedResponse,
  getExpression, getRandomIntInclusive,
} from '../src/index.js';

const isPrime = (value) => {
  if (value < 2) return 'no';

  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) return 'no';
  }

  return 'yes';
};

export default () => {
  const name = getNameAndWelcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const value = getRandomIntInclusive(0, 10);
    const expression = getExpression(value);

    console.log(`Question: ${expression}`);
    const expectedResponse = getExpectedResponse();
    const actualResponse = isPrime(value);

    if (expectedResponse === actualResponse) {
      console.log('Correct!');
    } else {
      return `'${expectedResponse}' is wrong answer ;(. Correct answer was '${actualResponse}'. Let's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};
