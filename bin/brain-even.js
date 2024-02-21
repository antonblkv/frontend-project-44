#!/usr/bin/env node;
import readlineSync from 'readline-sync';

const parityCheck = (namePlayer) => {
  let count = 0;
  const answerOptions = ['yes', 'no'];

  while (count !== 3) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const assumedParity = answerOptions.indexOf(answer);
    const realParity = randomNumber % 2;

    if (assumedParity === realParity) {
      console.log('Correct!');
      count += 1;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${answerOptions[realParity]}'. Let's try again, ${namePlayer}!`;
    }
  }

  return `Congratulations!, ${namePlayer}`;
};

console.log('node bin/brain-games.js.\nWelcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(parityCheck(name));
