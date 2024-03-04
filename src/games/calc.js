import gameEngine from '../index.js';
import getRandomIntInclusive from '../helper.js';

const getOperation = (numberOperation) => {
  const operations = ['+', '-', '*', '%'];

  return operations[numberOperation];
};

const getCorrectResponse = (value1, value2, operation) => {
  switch (operation) {
    case '+':
      return value1 + value2;

    case '-':
      return value1 - value2;

    case '*':
      return value1 * value2;

    case '%':
      return value1 % value2;

    default:
      console.log('Неизвестная операция!');
  }

  return null;
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomIntInclusive();
  const number2 = getRandomIntInclusive();
  const operation = getOperation(getRandomIntInclusive(0, 2));
  const expression = `${number1} ${operation} ${number2}`;

  const correctResponse = String(getCorrectResponse(number1, number2, operation));

  return [expression, correctResponse];
};

export default () => console.log(gameEngine(gameDescription, getGameData));
