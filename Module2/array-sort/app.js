const smToLrg = [1, 3, 5, 2, 90, 20];
const lrgToSm = [1, 3, 5, 2, 90, 20];
const strArr = ["dog", "wolf", "by", "family", "eaten"];
const alphArr = ["dog", "wolf", "by", "family", "eaten"];
const objArr = [
    {name: "Quiet Samurai", age: 22},
    {name: "Arrogant Ambassador", age: 100},
    {name: "Misunderstood Observer", age: 2},
    {name: "Unlucky Swami", age: 77}
]


// Smallest to Largest

smToLrg.sort((a, b) => a - b);

console.log(smToLrg);

// Largest to Smallest

lrgToSm.sort((a, b) => b - a);

console.log(lrgToSm)

// Shortest string to longest string

strArr.sort((a, b) => a.length - b.length);

console.log(strArr);

// Sort an array alphabetically 

alphArr.sort();

console.log(alphArr);

// Sort objects in array by age

objArr.sort((a, b) => a.age - b.age);

console.log(objArr);