const header = document.getElementById("header");
const messages = document.getElementById("messages");
const clearbtn = document.getElementById("clear-button");
let currentTheme = document.getElementById("theme-drop-down");
let inputBtn = document.getElementById("button");
let msg = 1;

header.innerHTML = "<h1>JavaScript Made This!!</h1> <h3><span class='name'>Kaydon</span> wrote this JavaScript</h3>"

//Clears the messages div
clearbtn.addEventListener("click", function(){
    messages.innerHTML = "";
});

//Makes a post, and alternates between left and right sides
inputBtn.addEventListener("click", function(){
    let input = document.getElementById("input");
    let post = document.createElement('div');
    if (msg === 1) {
        post.className = "message left";
        post.innerHTML = input.value;
        messages.appendChild(post);
        msg = 0;
    } else {
        post.className = "message right";
        post.innerHTML = input.value;
        messages.appendChild(post);
        msg = 1;
    }
});

//Changes the theme, learned the hard way that I need to declare the variables inside the function, or new posts wouldn't be changed by theme
function theme(){
    let right = document.querySelectorAll(".right");
    let left = document.querySelectorAll(".left");
    if (currentTheme.value === "theme-one"){
        right.forEach(function(x, index) {
            right[index].style.backgroundColor = "lightblue";
            right[index].style.color = "black";
        });
        left.forEach(function(x, index){
            left[index].style.backgroundColor = "burlywood";
            left[index].style.color = "black";
        });
    } else if (currentTheme.value === "theme-two"){
        right.forEach(function(x, index){
            right[index].style.backgroundColor = "red";
            right[index].style.color = "white";
        });
        left.forEach(function(x, index){
            left[index].style.backgroundColor = "black";
            left[index].style.color = "white";
        });
    }
};


