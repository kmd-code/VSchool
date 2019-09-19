let square = document.getElementById("lrgSquare");
let color = document.getElementById("color");
let page = document.querySelector("body");


function yellow(){
    square.style.background = "yellow";
    color.style.color = "yellow";
}
function green(){
    square.style.background = "green";
    color.style.color = "green";
}
function red(){
    square.style.background = "red";
    color.style.color = "red";
}
function orange(){
    square.style.background = "orange";
    color.style.color = "orange";
}
function blue(){
    square.style.background = "blue";
    color.style.color = "blue";
}

square.addEventListener("mousedown", red);
square.addEventListener("mouseup", yellow);
square.addEventListener("dblclick", green);
document.addEventListener("scroll", orange);
square.addEventListener("mouseover", blue);

page.addEventListener("keyup", function(event){
    if(event.keyCode === 82){
        console.log("r was pushed");
        red();
    }
});

page.addEventListener("keyup", function(event){
    if(event.keyCode === 89){
        console.log("y was pushed");
        yellow();
    }
});

page.addEventListener("keyup", function(event){
    if(event.keyCode === 71){
        console.log("g was pushed");
        green();
    }
});

page.addEventListener("keyup", function(event){
    if(event.keyCode === 79){
        console.log("o was pushed");
        orange();
    }
});

page.addEventListener("keyup", function(event){
    if(event.keyCode === 66){
        console.log("b was pushed");
        blue();
    }
});