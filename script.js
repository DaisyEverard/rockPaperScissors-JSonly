
function rockPaperScissors() {
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
          break; 
        case "P": 
          alert("You Win! Computer chose Rock");
          break; 
          case "S": 
          alert("Sorry, You Lose. Computer chose Rock");
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
          break; 
        case "P": 
          alert("Draw. Computer chose paper");
          break; 
          case "S": 
          alert("You win! Computer chose paper");
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
          break; 
        case "P": 
          alert("Sorry, You Lose. Computer chose scissors");
          break; 
          case "S": 
          alert("Draw. Computer chose scissors");
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
