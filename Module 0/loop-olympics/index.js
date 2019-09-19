//PRELIMINARIES --------------------------

for (i = 0; i <= 9; i++){
    console.log(i);
}

for (i = 9; i >= 0; i--){
    console.log(i);
}

let fruit = ["banana", "orange", "apple", "kiwi"]
for (i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

//BRONZE MEDAL ----------------------------

let num = [];
for (i = 0; i <= 9; i++){
    num.push(i);
}
console.log(num);

for (i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

let fruit = ["banana", "orange", "apple", "kiwi"];
let newFruit = [];
for (i = 0; i < fruit.length; i++) {
    if (i % 2 === 0) [
        newFruit.push(fruit[i])
    ]
}
console.log(newFruit);

//SILVER MEDAL -------------------------------

let newOccupations = [];
let newNames = [];
let peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
];

for (i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

for (i = 0; i < peopleArray.length; i++) {
    newNames.push(peopleArray[i].name);
    newOccupations.push(peopleArray[i].occupation);
}
console.log(newNames);
console.log(newOccupations);

for (i = 0; i < peopleArray.length; i++){
    if (i % 2 === 0){
        newNames.push(peopleArray[i].name);
    } else {
        newOccupations.push(peopleArray[i].occupation);
    }
}
console.log(newNames);
console.log(newOccupations);

//GOLD MEDAL --------------------------------

let grid = [];
let prev = [];
for (i = 0; i < 3; i++){
    for (i = 0; i < 3; i++){
        prev.push(0);
        grid.push(prev);
    }
}
console.log(grid);

let grid = [];
let prev = [];
for (i = 0; i < 1; i++) {
    for (k = 0; k < 3; k++){
        prev.push(0);
            if (prev.length === 3){
                grid.push(prev);
                prev = [];
            }
    }
    for (j = 0; j < 3; j++){
        prev.push(1);
            if (prev.length === 3){
                grid.push(prev);
                prev = [];
            }
    }
    for (g = 0; g < 3; g++){
        prev.push(2);
            if (prev.length === 3){
                grid.push(prev);
                prev = [];
            }
    }
}
console.log(grid)

let grid = [];
let prev = [];
for (i = 0; i < 3; i++){
    for (i = 0; i < 3; i++){
        prev.push(i);
        grid.push(prev);
    }
}

for (i = 0; i < 3; i++){
    for (i = 0; i < 9; i++){
        grid.fill(["x", "x", "x"], 0, grid.length);
    }
}

for (i = 0; i < grid.length; i++){
    for (j = 0; j < grid[i].length; j++){
        if (grid[i][j] !== "x"){
            grid[i][j] = "x"
        }
    }
}
