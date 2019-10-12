function largest(array){
    let x = -Infinity
    for (i = 0; i < array.length; i++){
        if (array[i] > x){
            x = array[i];
        }
    }
    return x;
}

function lettersWithStrings(array){
    let newArr = [];
    for (i = 0; i < array.length; i++){
        for(j = 0; j < array[i].length; j++){
            if (array[i][j].match(/[A-Z | a-z]/)){
                console.log(array[i]);
            }
        }
    }
}

function isDivisible(num1, num2){
    if (num1 % num2 != 0){
        return false;
    } return true;
}