import readlineSync from 'readline-sync';

const countRound = 3;

const gameRun = (gameRule, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameRule);

  for (let i = 0; i < countRound; i += 1) {
    const [question, rightAnswer] = getCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default gameRun;
