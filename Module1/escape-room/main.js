let gameOver = false;
let foundKey = false;
let choiceList = ['Put hand in hole', 'Find the key', 'Open the door'];
let choice = "";
const readline = require("readline-sync");

console.log("You've been trapped in a room with 3 options to try and escape, choose wisely. It may be the last choice you make...");

// function makeChoice() {
//     choice = readline.keyInSelect(choiceList, "Which choice will you make?")
//     return choice;
// }


while (gameOver === false) {
    let choice = readline.keyInSelect(choiceList, "Which choice will you make?")
    if (choice === 1){
        console.log("You've found the key!"); 
        foundKey = true;
    } else if (choice == 2){
        if (foundKey === false){
            console.log("The door is locked!");
        } else {
            console.log("Sweet, sweet, freedom!");
            gameOver = true;
        }
    } else {
        console.log("You are dead.");
        gameOver = true;
    }
}
