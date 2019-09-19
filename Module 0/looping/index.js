for (let i = 0; i < 101; i++){
    if (i % 2 === 0){
        console.log("Number is Even");
    } else {
        console.log("Number is Odd");
    }
}

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let comp = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer"){
        comp++;
        
    }
}
console.log(comp);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let HER in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. Let HIM in")
        }
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough. Don't let HER in.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough. Don't let HIM in.")
    }
}

let light = [1,4,4,2,6];
let toggle = 0;
for (let i = 0; i < light.length; i++){
    toggle = light[i] + toggle;
    if (toggle % 2 === 0){
        console.log("The light was toggled " + toggle + " times. And is now OFF");
    } else {
        console.log("The light was toggled " + toggle + " times. And is now ON");
    }
}

