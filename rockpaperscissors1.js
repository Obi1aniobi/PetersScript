
/*let userInput = ['rock', 'paper', 'scissors'];


    function getUserChoice(userInput){
        userInput = userInput.toLowerCase;
        console.log(userInput);

        if (userInput === 'rock');
        console.log(userInput);
      } else {
        console.log('Error!: please enter correct word');
      }*/
      
      //I need to re-write the code above...



      //Math.floor rounds a number down to the nearest integer
      /*math.random method returns a random number from 0 (inclusive) 
      up to but not including 1 (exclusive)*/

      /*
      function getComputerChoice() {
        let randomNumber = math.floor(math.random() * 3);
        if (randomNumber = 0){
          console.log('rock');
        } else {
            console.log('error')
        }
            }

            //console.log(getUserChoice("Stone"));

            //Computers turn


function getComputerChoice() {
  let randomNumber = math.floor(math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;

    case 2:
    return 'scissors';
    break;

    
}

}

console.log(getComputerChoice());*/


let userInput = ["rock", "paper", "scissors", 'bomb'];

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  console.log(userInput);

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === 'Bomb'
  ) {
    return userInput;
  } else {
    console.log("Error: please enter correct tool!");
  }
}

console.log(getUserChoice("Stone"));

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() *3);


  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
}

//console.log(getComputerChoice());

let message = "";

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return (message = "Computer Wins this round!");
    } else {
      return (message = "You win!");
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return (message = "Computer wins this round!");
    } else {
      return "You win!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return (message = "You win!");
    } else {
      return (message = "Computer wins this round!");
    }
  }
  if(userChoice === 'bomb'){
    if(computerChoice === 'rock' ||
    computerChoice === 'paper' ||
    computerChoice === 'scissors')
    return message = 'You win!'
  } 
}

console.log(determineWinner("paper", "scissors"));

console.log(determineWinner("paper", "rock"));

console.log(determineWinner("scissors", "rock"));


function playGame(){
  
  let userChoice = getUserChoice('paper');
  let computerChoice = getComputerChoice('scissors');

  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




