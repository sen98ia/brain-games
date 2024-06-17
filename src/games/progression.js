import gameRun from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(-50, 50);
  const step = getRandomNumber(-20, 20);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(start, step, length);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const rightAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
