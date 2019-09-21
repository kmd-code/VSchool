//PRELIMINARY -----------------------------------------------------------

if (5 > 3) {
    console.log("is greater than");
}

word = "cat";
if (word.length === 3){
    console.log("is the length");
}

if ("cat" === "dog"){
    console.log("they're equal");
} else {
    console.log("they're not equal");
}

//BRONZE MEDAL -----------------------------------------------------------

let person = {
    name: "Bobby",
    age: 12
}
if (person.age >= 18){
    console.log(person.name + " is allowed to go to the movie")
} else {
    console.log(person.name + " is NOT allowed to go to the movie.")
}

if (person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to see the movie");
}

if (person.name[0] === "B" && person.age >= 18){
    console.log(person.name + " is allowed to see the movie");
} else {
    console.log(person.name + " is not allowed to see the movie");
}

//SILVER MEDAL -------------------------------------------------------------

if (1 === "1"){
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}

if (1 <= 2 && 2 === 4){
    console.log("yes");
} else {
    console.log("no");
}

//GOLD MEDAL ----------------------------------------------------------------

if (typeof "dog" === "string"){
    console.log("It is a string");
}

if (typeof true === "boolean"){
    console.log("It is a boolean");
}

let def = ""
if (def){
    console.log("defined");
} else {
    console.log("not defined");
}

if ("s" > 12){
    console.log("s is greater than 12");
} else {
    console.log("s is not greater than 12");
}

let myNum = 10;
oddEven = (myNum % 2 === 0) ? "Number is EVEN" : "Number is ODD";
console.log(oddEven);