let readline = require("readline-sync");
let input = readline.question("What phrase would you like to encrypt? ").toLowerCase();
let shift = parseInt(readline.question("How many letters would you like to shift? "));
let result = [];

//ascii 97-122 a-z
// 97-109 (+13)
// else -13

for (i = 0; i < input.length; i++){
    if (input[i].match(/[a-z]/)){
        if (input[i].charCodeAt() <= 109){
            result.push(input[i].charCodeAt() + shift);
        } else {
            result.push(input[i].charCodeAt() - shift);
        }
    } else if (input[i].charCodeAt() === 32){
        result.push(input[i]);
    }
    result[i] = String.fromCharCode(result[i]);
}

result.join(" ");

console.log(result);