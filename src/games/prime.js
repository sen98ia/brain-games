import gameRun from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

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

const generateRound = () => {
  const question = getRandomNumber(-100, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
