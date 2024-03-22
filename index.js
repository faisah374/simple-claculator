#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number,", type: "number", name: "seconnumber" },
    { message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "division"],
    }
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.seconnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.seconnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.seconnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.seconnumber);
}
else {
    console.log("please slect valid opertor");
}
