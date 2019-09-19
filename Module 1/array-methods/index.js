let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();

fruit.shift();

let orangeIndex = fruit.indexOf("orange");

fruit.push(orangeIndex);

let vegetableLength = vegetables.length;

vegetables.push(vegetableLength);

let food = fruit.concat(vegetables);

food.splice(4, 2);

food.reverse();

food.join('');

console.log(food)

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);