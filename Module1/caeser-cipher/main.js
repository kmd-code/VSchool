let readline = require("readline-sync");
let input = readline.question("What phrase would you like to encrypt? ");
let shift = parseInt(readline.question("How many letters would you like to shift? "));

const caesarCipher = (input, shift) => {
    return (
        input.toLowerCase().replace(/[a-z]/g, letter => String.fromCharCode((letter.charCodeAt() - 97 + shift) % 26 + 97))
    )
}

let result = caesarCipher(input, shift);
console.log(result);

//ascii 97-122 a-z



