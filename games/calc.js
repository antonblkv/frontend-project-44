import {
  getNameAndWelcome, getActualResponse,
  getExpectedResponse, getExpression,
  getOperation, getRandomIntInclusive,
} from '../src/index.js';

export default () => {
  const name = getNameAndWelcome();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const value1 = getRandomIntInclusive();
    const value2 = getRandomIntInclusive();
    const operation = getOperation(getRandomIntInclusive(0, 2));
    const expression = getExpression(value1, value2, operation);

    console.log(`Question: ${expression}`);
    const expectedResponse = Number(getExpectedResponse());
    const actualResponse = getActualResponse(value1, value2, operation);

    if (expectedResponse === actualResponse) {
      console.log('Correct!');
    } else {
      return `'${expectedResponse}' is wrong answer ;(. Correct answer was '${actualResponse}'. Let's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};
