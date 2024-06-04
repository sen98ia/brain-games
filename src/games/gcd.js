import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

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
  return String(result);
};

const getCorrectAnswer = () => {
  const firstNumber = randomNumberGenerator(1, 100);
  const secondNumber = randomNumberGenerator(1, 100);
  const givenNumbers = `${firstNumber} ${secondNumber}`;
  const rightAnswer = getGCD(firstNumber, secondNumber);
  return [givenNumbers, rightAnswer];
};

export default () => gameRun(gameRule, getCorrectAnswer);
