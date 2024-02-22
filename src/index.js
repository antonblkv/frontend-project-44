import readlineSync from 'readline-sync';

export const getRandomIntInclusive = (min = 0, max = 100) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
};

export const getNameAndWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

export const getOperation = (numberOperation) => {
  const operations = ['+', '-', '*', '%'];

  return operations[numberOperation];
};

export const getExpression = (value1, value2 = '', operation = '') => {
 return `${value1} ${operation} ${value2}`;
};

export const getExpectedResponse = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export const getActualResponse = (value1, value2, operation) => {
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
      console.log("Неизвестная операция!");
 }
};
