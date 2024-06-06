import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = () => {
  const givenNumber = randomNumberGenerator(-100, 100);
  const rightAnswer = isPrime(givenNumber) ? 'yes' : 'no';
  return [givenNumber, rightAnswer];
};

export default () => gameRun(gameRule, getCorrectAnswer);
