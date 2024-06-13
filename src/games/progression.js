import gameRun from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const generateProgression = () => {
  const randomProgression = [];
  let progressionNumber = getRandomNumber(-50, 50);
  randomProgression.push(progressionNumber);
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(-20, 20);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionNumber += progressionStep;
    randomProgression.push(progressionNumber);
  }
  return randomProgression;
};

const generateRound = () => {
  const givenProgression = generateProgression();
  const randomIndex = getRandomNumber(0, givenProgression.length - 1);
  const rightAnswer = String(givenProgression[randomIndex]);
  givenProgression[randomIndex] = '..';
  const question = givenProgression.join(' ');
  return [question, rightAnswer];
};

export default () => gameRun(gameRule, generateRound);
