const getRandomNumber = (min = 1, max = 9) => {
  const result = Math.floor(min + Math.random() * (max - min + 1));
  return result;
};

export default getRandomNumber;
