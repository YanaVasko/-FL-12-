let attempts;
let prize;
const minPrize = 25;
const averagePrize = 50;
const maxPrize = 100;
let isGuess;
let startOfRange = 0;
const firstEndOfRange = 8;
let endOfRange;
let totalPrize = 0;
let isNewGame = true;
const stepInRange = 4;
const stepInPrize = 2;
let userNumber;
let two = 2;
let three = 3;

let playGame = confirm('Do you want to play a game?');
if (playGame === false) {
  alert('You did not become a billionaire, but can.');
} else {
  while (playGame) {
    isGuess = false;
    if (isNewGame) {
      endOfRange = firstEndOfRange;
      prize = [minPrize, averagePrize, maxPrize];
    } else {
      endOfRange += stepInRange;
      prize[0] *= stepInPrize;
      prize[1] *= stepInPrize;
      prize[two] *= stepInPrize;
    }
    let randomNumber = Math.floor(
      Math.random() * (endOfRange - startOfRange + 1)
    );
    let i = 0;
    attempts = three;
    while (attempts > 0) {
      userNumber = +prompt(
        `Choose a roulette pocket number from ${startOfRange} to ${endOfRange}\n` +
          `Attempts left: ${attempts}\n` +
          `Total prize: ${totalPrize}$\n` +
          `Possible prize on current attempt: ${prize[two - i]}$`
      );
      if (userNumber === randomNumber) {
        isGuess = true;
        totalPrize += prize[two - i];
        break;
      }
      attempts--;
      i++;
    }

    if (!isGuess) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      playGame = confirm('Do you want to try again?');
      isNewGame = true;
    } else {
      isNewGame = confirm(
        `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?.`
      );
      if (!isNewGame) {
        alert(
          `Thank you for your participation. Your prize is: ${totalPrize}$`
        );
        playGame = confirm('Do you want to try again?');
        isNewGame = true;
      } else {
        isNewGame = false;
      }
    }
  }
}
