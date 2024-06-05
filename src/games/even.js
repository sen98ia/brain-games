import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = () => {
  const givenNumber = randomNumberGenerator();
  const rightAnswer = isEven(givenNumber) ? 'yes' : 'no';
  return [givenNumber, rightAnswer];
};

export default () => gameRun(gameRule, getCorrectAnswer);
