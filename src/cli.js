import readlineSync from 'readline-sync';
const greeting = (name) => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};
export { greeting };