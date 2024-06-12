import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'What is the result of the expression?';

const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = randomNumberGenerator(0, operators.length - 1);
  return operators[randomIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  }
  if (operator === '-') {
    return firstNumber - secondNumber;
  }
  if (operator === '*') {
    return firstNumber * secondNumber;
  }
  return undefined;
};

const generateRound = () => {
  const firstNumber = randomNumberGenerator(-50, 50);
  const secondNumber = randomNumberGenerator(0, 50);
  const operator = randomOperatorGenerator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculate(firstNumber, secondNumber, operator));
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
