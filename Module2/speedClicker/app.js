// html selectors
const timer = document.getElementById("time");
const visitClicks = document.getElementById("total");
const totalClicks = document.getElementById("totalClicks");
const page = document.querySelector("body");

// game variables
let thisClickTotal = parseInt(visitClicks.innerText);
let overallClickTotal = parseInt(localStorage.getItem("score"));
let timerOn = false;

let count = 30;
let intervalId;
timer.textContent = count;
totalClicks.textContent = overallClickTotal;

function decrementTimer(){
    timerOn = true;
    if (count === 0){
        clearInterval(intervalId);
        count = 30;
        timer.textContent = count;

        overallClickTotal = overallClickTotal + thisClickTotal;
        totalClicks.innerText = overallClickTotal;

        let score = overallClickTotal;
        localStorage.setItem("score", score);
            
        thisClickTotal = 0
        visitClicks.textContent = thisClickTotal;

        page.removeEventListener("click", clickFaster)
        timerOn = false;
    } else {
        count--;
        timer.textContent = count;
    }
}

function clickFaster(){
    thisClickTotal++
    visitClicks.innerText = thisClickTotal;
}

page.addEventListener("keyup", (event) => {
    if (event.keyCode === 32){
        if (timerOn === false){
            intervalId = setInterval(decrementTimer, 1000);
            page.addEventListener("click", clickFaster);
        } else {

        }
    }
});




