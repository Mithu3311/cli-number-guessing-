#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number - Done
// 2) User input for guessing number - Done
// 3) Compare user input with computer generated number and show result - Done 

const randomNumber = Math.floor(Math.random()* 25 + 1);

const answer = await inquirer.prompt([
    {
        name: "useGuessNumber",
        type: "number",
        message: "Please guess a number between 1 - 25:",
    },
]);

if(answer.useGuessNumber === randomNumber){
    console.log("Congraculations! You Guessed Right Number");
}else {
    console.log("Oh! Sorry You Guessed Wrong Number");
};

console.log(answer);