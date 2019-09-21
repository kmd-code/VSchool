function sum(num1, num2){
    return num1 + num2;
}

function largest(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

function evenOdd(num){
    if (num % 2 === 0){
        console.log("Number is Even");
    }
    console.log("Number is odd");
    
}

function stringTwenty(string){
    if (string.length <= 20) {
        console.log(string + string);
    } else
    console.log(string.substr(1,20));
    
}

// The bonus objectives are tough, need some guidance on those



for (i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i])
}

function fibo(num){
    let fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
        for (i = 2; i <= num; i++){
            fibo[i] = fibo[i - 1] + fibo[i - 2];
            console.log(fibo[i]);
    }
}


// Ripped off the code online, Im not entirely sure how it works

function charCount(string) {
const arr1 = string.split("")
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i++)
{
        for (let j = i; j < arr1.length; j++)
        {
                if (arr1[i] === arr1[j])
                 m++;
                if (mf < m)
                {
                  mf = m; 
                  item = arr1[i];
                }
        }
        m = 0;
}
console.log(`${item} ( ${mf} times ) `) ;
}