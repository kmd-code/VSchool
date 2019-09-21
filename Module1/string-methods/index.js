function findMiddleIndex(string){
    return Math.floor(string.length / 2);   
}

function returnFirstHalf(string){
    return string.slice(0, findMiddleIndex(string));
}

function capitalizeAndLowercase(string){
    let firstHalf = returnFirstHalf(string);
    let backHalf = string.slice(findMiddleIndex(string));
    return firstHalf.toUpperCase() + backHalf;
}

function capitalize (string){
    let splitStr = string.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}