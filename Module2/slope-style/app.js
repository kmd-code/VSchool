// Green
collectAnimals = (...animals) => animals;

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//objectliterals ***HELP***
combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables});


combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"])

//destructuring
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`;
  
returnFirst = items => {
    const [firstItem] = items;
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

returnFavorites = ([firstFav, secondFav, thirdFav]) => `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`;

returnFavorites(favoriteActivities)

// rest and spread
combineAnimals = (...arr) => [...arr[0], ...arr[1], ...arr[2]];

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 


// ["dog", "cat", "mouse", "jackolope", "platypus"]

//more es6
product = (...numberArr) => {  
    let numbers = [...numberArr];
    return numbers.reduce((acc, number) => acc * number);
  }

product(1,1,1,10,5,2)

//more es6
unshift = ([...arr], ...letters) => [...arr, ...letters];

//double black
populatePeople = (names) => {
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,
            lastName
        }
    })
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

  