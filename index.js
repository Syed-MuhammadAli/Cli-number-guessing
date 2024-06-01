#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//-------------//
// 1. Computer will generate ramdome number
// 2. User input for guessing number
// 3. Compare both generated numbers
// 4. Print result
//-------------//
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green("You guessed the correct number!"));
}
else {
    console.log(chalk.red("You guessed the wrong number!"));
}
console.log(`Random generated Number: ${randomNumber}`);
console.log(`Your Guessed Number: ${answer.userGuessedNumber}`);
