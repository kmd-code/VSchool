// use .reduce() to combine all the numbers into one total

function total(arr){
    return arr.reduce(function(final, num){
        final += num;
        return final;
    })
};

console.log(total([1,2,3]));



function stringConcat(arr){
    return arr.join("")
}

console.log(stringConcat([1,2,3]));



function totalVotes(arr) {
    const voteCount = arr.reduce(function(final, voter){
        if (voter.voted){
            final++;
        }
        return final;
    }, 0);
    return voteCount;
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters));



 function shoppingSpree(arr) {
    const spreeCost = arr.reduce(function(final, item){
        final = item.price + final;
        return final;
    }, 0);  
    return spreeCost
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist));


 function flatten(arr) {
    const newArr = arr.reduce(function(final, each){
        return final.concat(each);
    }, []);
    return newArr;
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays));


 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce(function(final, voter){
        if(voter.age >= 18 && voter.age <= 25){
            final.youth++;
            if(voter.voted){
                final.youngVotes++;
            }
        }
        else if(voter.age >= 26 && voter.age <=35){
            final.mids++;
            if(voter.voted){
                final.midVotes++;
            }
        }
        else if(voter.age >= 36 && voter.age <= 55){
            final.olds++;
            if(voter.voted){
                final.oldVotes++;
            }
        }
        return final;
   }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0});
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
} */