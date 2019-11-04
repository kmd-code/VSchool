// 1) Make an array that doubles the first array

function doubleNumbers(arr){
    return arr.map(num => num * 2);
}

console.log(doubleNumbers([2,5,100]));

// 2) Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.map(num => num.toString());
}

console.log(stringItUp([2, 5, 100]));

// 3) Capatalize each of an array name

function capatalizeNames(arr){
    return arr.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
}

console.log(capatalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt']));

// 4) Make an array of strings of the names

function namesOnly(arr){
    return arr.map(nameOnly => nameOnly.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// Make an array of strings of the names saying if they can go to the matrix or not

function makeStrings(arr){
    arr.map(function(namesOnly){
        if (namesOnly.age >= 18){
            return console.log(`${namesOnly.name} is old enough to see The Matrix`);
        } else if (namesOnly.age < 18){
            return console.log(`${namesOnly.name} is NOT old enough to see The Matrix`);
        }
    });
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// 6) Make an array of the names in h1's and the ages in h2's


function readyToPutInTheDOM(arr){
    return arr.map(function(dom){
        return "<h1>" + dom.name + "<h1><h2>" + dom.age + "<h2>";
    });  
};

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

