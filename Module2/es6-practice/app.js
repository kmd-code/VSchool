const name = "John"
let age = 101

// let and const

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// arrow function to replace .map

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => ({type: "carrot", name: carrot}));
}

// re-write filter 

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person) => person.friendly)
}

// rewrite to arrow functions
doMathSum = (a, b) => a + b;

var produceProduct = (a, b) => a * b;


// write a printstring function to return first/last name, and age

printString = (firstName, lastName, age) => `Hello ${firstName} ${lastName}, how does it feel to be ${age} years old?`;

// use shorthand to make the filter take only 1 line

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
filterForDogs = (arr) => arr.filter((animal) => animal.type === "dog" ? true : false);

// use template literals to write a function that returns name and location

temLit = (name, location) => `Hi ${name}! Welcome to ${location}. ${name}, if you need anything, feel free to ask the president of ${location}`;
         