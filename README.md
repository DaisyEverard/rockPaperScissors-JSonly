# rockPaperScissors-JSonly
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

a game of rockPaperScissors using JS alerts and logic. No visuals

## link to site

https://daisyeverard.github.io/rockPaperScissors-JSonly/

- [How It Works](#how-it-works)
- [Technologies](#technologies)
- [Issues and Solutions](#issues-and-solutions)
- [Future Development](#future-development-options)
- [Contacts](#contacts)

## How it works
This is a game of rock, paper, scissors. The rules are that players choose one of 
3 symbols independently. Rock beats scissors, scissors beat paper, and paper beats rock. 

- The user chooses their move with an input of R, P, or S with a prompt assigned to variable `userSymbol`
- An if statement checks if R, P, or S was returned and, if not, runs `userSymbolFunction` again. 
- computer choses a random number 0-2 where 0=Rock, 1=Paper, 2=Scissors
- A switch case corresponding to `computerNumber` (0, 1, or 2) sets up the situation for the computers choice.
- Each case has another nested switch case for the user's symbol (R, P, or S)
- each case has an alert with the outcome and computer's choice, then a break. 
- The end of the first-level switch case has a confirm using `playAgain` function.
- If player clicks OK the function calls `rockPaperScissors` again.
- If the player clicks cancel, the function ends and there's a `break`

## Technologies

- HTML
- JavaScript

## Issues and Solutions

1. Function not running
- forgot to put empty parentheses () when calling function. 

2. running all computer outcomes after selected one. 
- while `break;` was included after cases in each nested swich statement,
 it also needed to be included after each of the first-level swich statement's cases. 

3. The playAgain section at the end of the computer cases repeated 3 times. Trying to make this a function in first call results in error message:
- Jump target cannot cross function boundary
applied to `break;` lines. 
Defining `playAgain` before `rockPaperScissors` function would result in `rockPaperScissors` not being defined yet. 
Defining `playAgain` after `rockPaperScissors` would mean it couldn't be called within `rockPaperScissors`. 

The function was defined with a simple if statement, and `break` was used seperately to the function. 

4. The default at end of player choices also repeated 3 times.
default:
            alert("Invalid input"); 
            break;
Invalid input was instead determined after line 4 with an if statement in improve efficiency by only checking value once. To stop this causing unwanted looping inside the code, a new function `userSymbolFunction` was defined to be able to call itself. 

5. Code not stopping after cancel clicked on 'Play again?' prompt.
the playAgain if statement needed to have an else clause even if it's blank. 

## Future Development Options

- Add a UI where users can click an image of the option they want
- display results on page, rather than in alerts

## Contacts

- GitHub: [DaisyEverard](https://github.com/DaisyEverard)
- LinkedIn: [daisy-everard](https://www.linkedin.com/in/daisy-everard/)
- Email: msdeverard@gmail.com

## License

MIT license


