let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let newArr = [];

function forception(people, alphabet) {
    for (i = 0; i < people.length; i++){
        newArr.push(people[i] + ":");
        let newAlpha = alphabet.toUpperCase();
        for (j = 0; j < newAlpha.length; j++){
            newArr.push(newAlpha[j]);
        }
    }
}