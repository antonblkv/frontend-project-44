import {
  getNameAndWelcome, getActualResponse,
  getExpectedResponse, getExpression,
  getOperation, getRandomIntInclusive,
} from '../src/index.js';

export default () => {
  const answerOptions = ['yes', 'no'];
  const name = getNameAndWelcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const value1 = getRandomIntInclusive();
    const operation = getOperation(3);
    const expression = getExpression(value1);

    console.log(`Question: ${expression}`);
    const expectedResponseString = getExpectedResponse();
    const expectedResponse = answerOptions.indexOf(expectedResponseString);
    const actualResponse = getActualResponse(value1, 2, operation);

    if (expectedResponse === actualResponse) {
      console.log('Correct!');
    } else {
      return `'${answerOptions[expectedResponse]}' is wrong answer ;(. Correct answer was '${answerOptions[actualResponse]}'. Let's try again, ${name}!`;
    }
  }

  return `Congratulations!, ${name}`;
};
