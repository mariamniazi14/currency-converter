#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\t WELCOME TO MariamNiazi - 'CURRENCY CONVERTOR'\n"))

// Define the list of currencies and thier exchange rates
let exchange_rate: any = {
    "USD": 1,     // Base Currency
    "EUR": 0.9,   // European Currency (Euro)
    "JYP": 113,   // Japenese Currency (Yen)
    "CAD": 1.3,   // Canadian Doller
    "AUD": 1.65,  // Australian Doller
    "PKR": 277,   // Pakistan Rupees
    "AED": 3.6,   // Dubai Currency (Dirham)
    "LIRA": 32,   // Turkish Lira
    "INR": 83,    // Indian Rupees
}

// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "AED", "LIRA", "INR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "AED", "LIRA", "INR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Perform currency conversion by using Formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_ammount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

// Fromula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_ammount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);