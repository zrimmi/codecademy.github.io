const getUserChoice = userInput => {
  userInput=userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please choose rock, paper, or scissors!');
  }
}

//console.log(getUserChoice('gun'));

const getComputerChoice = () => {
  randchoice = Math.floor(Math.random() * 3);
  switch (randchoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    default:
      return 'scissors';
      break;
  }
}

//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'You bombed the computer!!!';
  }
  if (userChoice === computerChoice) {
    return 'You tied!';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

//console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
