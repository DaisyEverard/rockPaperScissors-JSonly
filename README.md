# rockPaperScissors-JSonly
a game of rockPaperScissors using JS alerts and logic. No visuals

## link to site

## How it works
This is a game of rock, paper, scissors. The rules are that players choose one of 
3 symbols independently. Rock beats scissors, scissors beat paper, and paper beats rock. 

- The user chooses their move with an input of R, P, or S in a prompt
- computer choses a random number 0-2 where 0=Rock, 1=Paper, 2=Scissors
- A switch case corresponding to `computerNumber` (0, 1, or 2) sets up the situation for the computers choice.
- Each case has another nested switch case for the user's symbol (R, P, or S)
- each case has an alert with the outcome and computer's choice, then a break. 
- The end of the first-level switch case has a confirm for playAgain.
- If player clicks OK the function calls itself
- If the player clicks cancel, the switch case breaks. 

## Issues and solutions

1. Function not running
- forgot to put empty parentheses () when calling function. 

2. running all computer outcomes after selected one. 
- while `break;` was included after cases in each nested swich statement,
 it also needed to be included after each of the first-level swich statement's cases. 

## Improvements/Unsolved Issues

The playAgain section at the end of the computer cases repeats 3 times. Trying to make this a function in first call results in error message:
- Jump target cannot cross function boundary
applied to `break;` lines. 
Defining `playAgain` before `rockPaperScissors` function would result in `rockPaperScissors` not being defined yet. 
Defining `playAgain` after `rockPaperScissors` would mean it couldn't be called within `rockPaperScissors`. 

## License

MIT license


