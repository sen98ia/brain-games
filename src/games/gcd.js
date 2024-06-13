import gameRun from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  let [a, b] = [firstNumber, secondNumber];
  while (a > 0 && b > 0) {
    if (a >= b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const result = Math.max(a, b);
  return result;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGCD(firstNumber, secondNumber));
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
