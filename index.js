#! /usr/bin/env node
let balance = 10000;
let pin = 9988;
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "yourPin", type: "number", message: "Please enter your pin" }
]);
if (answer.yourPin != pin) {
    console.log("You have entered wrong pin");
}
else {
    console.log("The pin code you enterded is verified");
    const action = await inquirer.prompt([
        {
            message: "What do you want to do? ",
            type: "list",
            name: "option",
            choices: ["Check balance", "Withdraw Cash"]
        }
    ]);
    if (action.option == "Check balance") {
        console.log("Your balance is ", balance);
    }
    if (action.option == "Withdraw Cash") {
        const drawAmount = await inquirer.prompt([{
                message: "Enter amount you want to withdraw",
                type: "number",
                name: "amount"
            }]);
        if (drawAmount.amount > balance) {
            console.log("Insuffcint balance");
        }
        else {
            balance = balance - drawAmount.amount;
            console.log("You have with drawn ", drawAmount.amount, ". Your new balance is ", balance);
        }
    }
}
