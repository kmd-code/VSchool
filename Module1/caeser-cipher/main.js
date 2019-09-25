let readline = require("readline-sync");
let input = readline.question("What phrase would you like to encrypt? ");
let shift = parseInt(readline.question("How many letters would you like to shift? "));

function caesarCipher(input, shift){
    return input.toLowerCase().replace(/[a-z]/g, c => String.fromCharCode((c.charCodeAt() - 97 + shift) % 26 + 97))
    }

let result = caesarCipher(input, shift);
console.log(result);

//ascii 97-122 a-z

