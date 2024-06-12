import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = randomNumberGenerator(-100, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
