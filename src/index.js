import readlineSync from 'readline-sync';

const gameEngine = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const [expression, correctResponse] = getGameData();

    console.log(`Question: ${expression}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse === correctResponse) {
      console.log('Correct!');
    } else {
      return `'${userResponse}' is wrong answer ;(. Correct answer was '${correctResponse}'. Let's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

export default (gameDescription, getGameData) => console.log(
  gameEngine(gameDescription, getGameData),
);
