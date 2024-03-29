#! /usr/bin/env node
//BMI calculator in typescript.
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Ener your weight in (kg)",
        type: "number",
        name: "weightInKg"
    },
    {
        message: "Enter your hight in (m)",
        type: "number",
        name: "hightInM"
    },
]);
let bmi = answer.weightInKg / (answer.hightInM * answer.hightInM);
console.log(`your BMI is ${bmi}`);
