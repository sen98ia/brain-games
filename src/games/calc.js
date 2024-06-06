import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'What is the result of the expression?';

const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = randomNumberGenerator(0, operators.length - 1);
  return operators[randomIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  let result;
  if (operator === '+') {
    result = firstNumber + secondNumber;
  }
  if (operator === '-') {
    result = firstNumber - secondNumber;
  }
  if (operator === '*') {
    result = firstNumber * secondNumber;
  }
  return result;
};

const getCorrectAnswer = () => {
  const firstNumber = randomNumberGenerator(-50, 50);
  const secondNumber = randomNumberGenerator(0, 50);
  const operator = randomOperatorGenerator();
  const givenOperation = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = calculate(firstNumber, secondNumber, operator);
  return [givenOperation, String(rightAnswer)];
};

export default () => gameRun(gameRule, getCorrectAnswer);
