// Return array that has only 5 or greater

function fiveAndGreaterOnly(arr) {
    const result = arr.filter(num => num >= 5)
    return result;
};

console.log(fiveAndGreaterOnly([3, 6, 8]))

// Return an array that only includes even numbers

function evensOnly(arr){
    const result = arr.filter(num => num % 2 === 0)
    return result;
}

console.log(evensOnly([3, 6, 8, 2, 5, 10]))

// Take array of strings and return only the ones that are 5 chars or less

function fiveCharOrFewerOnly(arr) {
    const result = arr.filter(word => word.length <= 5)
    return result;
}

console.log(fiveCharOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))

// With array of people objects, return a new array that has filtered out the ones who don't belong

function peopleWhoBelongToIlluminati(arr){
    const result = arr.filter(member => member.member === true)
    return result;
};

console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

// Make filtered list of people old enough to see the matrix

function ofAge(arr){
    const result = arr.filter(age => age.age >= 18)
    return result;
}

console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 