import gameRun from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(-50, 50);
  const secondNumber = getRandomNumber(0, 50);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculate(firstNumber, secondNumber, operator));
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
