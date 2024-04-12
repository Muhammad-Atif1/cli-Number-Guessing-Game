#! /usr/bin/env node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6 :",
    }
]);
if (answers.UserGuessNumber === RandomNumber) {
    console.log("Congratulation! you guess a Right Number");
}
else {
    console.log("Ohh! You guessed a Wrong Number");
}
