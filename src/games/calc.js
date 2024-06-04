import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'What is the result of the expression?';

const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const operatorOptions = operators.length;
  const randomIndex = Math.floor(Math.random() * operatorOptions);
  return operators[randomIndex];
};

const getCorrectAnswer = () => {
  const firstNumber = randomNumberGenerator();
  const secondNumber = randomNumberGenerator();
  const operator = randomOperatorGenerator();
  const operation = `${firstNumber} ${operator} ${secondNumber}`;
  let rightAnswer;
  if (operator === '+') {
    rightAnswer = firstNumber + secondNumber;
  }
  if (operator === '-') {
    rightAnswer = firstNumber - secondNumber;
  }
  if (operator === '*') {
    rightAnswer = firstNumber * secondNumber;
  }
  return [operation, String(rightAnswer)];
};

export default () => gameRun(gameRule, getCorrectAnswer);
