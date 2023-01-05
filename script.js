
//counter variables
let n = 0; 
let win = 0;
let draw = 0;
let lose = 0; 

//Start of RPS function
function rockPaperScissors() {

  //Iteration counter
if (n >= 10) {
  alert("You've played 10 rounds! Here's how you did:\nWins: " + win +
  "\nLosses: " + lose +
  "\nDraws: " + draw); 
  win = 0;
  draw = 0;
  lose = 0;  
  n = 0;
} else {};
n += 1; 

  //player chooses symbol
  let userSymbol; 
  function userSymbolFunction() {
userSymbol = prompt("Let's play rock, paper, scissors! Please enter either 'R', 'P', or 'S'");
 // check if valid input was entered
 if (userSymbol !== "R" && userSymbol !== "P" && userSymbol !== "S") {
  alert("Invalid input, please try again (You must use capital letters)");
  userSymbolFunction(); 
}
  } 
  userSymbolFunction(); 

//computer generated number. "chooses symbol"
let computerNumber = Math.floor(Math.random() * 3); 

switch (computerNumber) {
    case 0: //computer chooses rock
    switch (userSymbol) {
        case "R": //player choices
          alert("Draw. Computer chose Rock" );
          draw += 1; 
          break; 
        case "P": 
          alert("You Win! Computer chose Rock");
          win += 1; 
          break; 
          case "S": 
          alert("Sorry, You Lose. Computer chose Rock");
          lose += 1; 
          break; 
          default:
            alert("Something went wrong, sorry about that"); 
            break; 
    }
     //Defining playAgain before first use
    function playAgain() {
      if (confirm("Play Again?")) {
        rockPaperScissors();
      } else {}
    }
    playAgain(); // playAgain first call
    break; 
    
    case 1: //computer chooses paper
    switch (userSymbol) {
        case "R":  //player choices
          alert("Sorry, You Lose. Computer chose paper" );
          lose += 1;
          break; 
        case "P": 
          alert("Draw. Computer chose paper");
          draw += 1; 
          break; 
          case "S": 
          alert("You win! Computer chose paper");
          win += 1;
          break; 
          default:
            alert("Something went wrong, sorry about that"); 
            break;
    } 
    playAgain(); 
    break;

    case 2:  //computer chooses scissors
    switch (userSymbol) {
        case "R":  //player choices
          alert("You Win! Computer chose scissors" );
          win += 1;
          break; 
        case "P": 
          alert("Sorry, You Lose. Computer chose scissors");
          lose += 1;
          break; 
          case "S": 
          alert("Draw. Computer chose scissors");
          draw += 1; 
          break; 
          default:
            alert("Something went wrong, sorry about that"); 
            break;
    }
    playAgain(); 
    break;

    default: //If computer doesn't produce 0, 1, or 2
      alert("Something went wrong on our end, sorry about that"); 
} 
}


rockPaperScissors(); 
