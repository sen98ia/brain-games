import gameRun from '../index.js';
import randomNumberGenerator from '../num.generator.js';

const gameRule = 'What number is missing in the progression?';

const progressionGenerator = () => {
  const randomProgression = [];
  let progressionNumber = randomNumberGenerator(-50, 50);
  randomProgression.push(progressionNumber);
  const progressionLength = randomNumberGenerator(5, 10);
  const progressionStep = randomNumberGenerator(-20, 20);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionNumber += progressionStep;
    randomProgression.push(progressionNumber);
  }
  return randomProgression;
};

const getCorrectAnswer = () => {
  const givenProgression = progressionGenerator();
  const randomIndex = randomNumberGenerator(0, givenProgression.length - 1);
  const rightAnswer = givenProgression[randomIndex];
  givenProgression[randomIndex] = '..';
  return [givenProgression, String(rightAnswer)];
};

export default () => gameRun(gameRule, getCorrectAnswer);
