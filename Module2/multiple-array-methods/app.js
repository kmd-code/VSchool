
// people older than 18 = filterArray, then sort to sortedArray,
 var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr){
    const filterArr = arr.filter(people => people.age >= 18);
    const sortedArr = filterArr.sort((a, b) => a.lastName.localeCompare(b.lastName));
    // found localeCompare() - determines if a string comes before or after its comparison in a sort (returns 1, 0 or -1)

    return sortedArr.map((person) => `<li>${person.firstName} ${person.lastName} is ${person.age} years old.</li>`)
 }
 
 console.log(sortedOfAge(peopleArray));