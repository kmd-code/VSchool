const readline = require("readline-sync");

let num1 = readline.question("What is your first number? ");
let num2 = readline.question("What is your second number? ");
let op = readline.question("Would you like to 'add', 'sub', 'mul', or 'div'? ");
let result = "";

function add(num1, num2){
    return +num1 + +num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

if (op === 'add'){
    result = add(num1, num2);
} else if (op === 'sub'){
    result = subtract(num1, num2);
} else if (op === 'div'){
    result = divide(num1, num2);
} else if (op === 'mul'){
    result = multiply(num1, num2);
} 

console.log(result);
