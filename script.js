(() => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  let attempts = 0;
  while (attempts <= 3) {
    let userInput;
    if (attempts === 0) {
      userInput = parseInt(prompt("Please, guess a number between 1 - 10:"));
    } else if (attempts < 3) {
      userInput = parseInt(
        prompt("try again, Please, guess a number between 1 - 10:")
      );
    } else {
      alert(`faild, the number was ${randomNumber}! attempts = ${attempts}`);
    }

    if (userInput === randomNumber) {
      alert(
        `Success, the number was ${randomNumber}! attempts = ${attempts + 1}`
      );
      break;
    }
    attempts++;
  }
})();
