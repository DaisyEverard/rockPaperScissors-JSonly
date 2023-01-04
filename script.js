
function rockPaperScissors() {
  //player chooses symbol
let userSymbol = prompt("Let's play rock, paper, scissors! Please enter either 'R', 'P', or 'S'");

//computer generated number. "chooses symbol"
let computerNumber = Math.floor(Math.random() * 3); 
console.log(computerNumber);

switch (computerNumber) {
    case 0: //computer chooses rock
    switch (userSymbol) {
        case "R": //player choices
          alert("Draw. Computer chose Rock" );
          break; 
        case "P": 
          alert("You Win! Computer chose Rock");
          break; 
          case "S": 
          alert("Sorry, You Lose. Computer chose Rock");
          break; 
    }
      playAgain = confirm("Play Again?"); 
        if (playAgain) {
          rockPaperScissors(); 
        } else {
          break; 
        }
        break; 
    
    case 1: //computer chooses paper
    switch (userSymbol) {
        case "R":  //player choices
          alert("Sorry, You Lose. Computer chose paper" );
          break; 
        case "P": 
          alert("Draw. Computer chose paper");
          break; 
          case "S": 
          alert("You win! Computer chose paper");
          break; 
    }
    playAgain = confirm("Play Again?"); 
    if (playAgain) {
      rockPaperScissors(); 
    } else {
      break; 
    }
    break;  

    case 2:  //computer chooses scissors
    switch (userSymbol) {
        case "R":  //player choices
          alert("You Win! Computer chose scissors" );
          break; 
        case "P": 
          alert("Sorry, You Lose. Computer chose scissors");
          break; 
          case "S": 
          alert("Draw. Computer chose scissors");
          break; 
    }
    playAgain = confirm("Play Again?"); 
    if (playAgain) {
      rockPaperScissors(); 
    } else {
      break; 
    }
    break; 
}
}

rockPaperScissors(); 
