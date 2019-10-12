const addForm = document.addition;
const subForm = document.subtract;
const mulForm = document.multiply;

const addResult = document.getElementById("addResult");
const subResult = document.getElementById("subResult");
const mulResult = document.getElementById("mulResult");

addForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    const num1 = parseFloat(addForm.num1.value);
    const num2 = parseFloat(addForm.num2.value);

    console.log(addResult.innerText);
    console.log(typeof addResult.innerText);

    addResult.innerText = num1 + num2;
});

subForm.addEventListener("submit", function(event){
    event.preventDefault();

    const num1 = parseFloat(subForm.num1.value);
    const num2 = parseFloat(subForm.num2.value);

    subResult.innerText = num1 - num2;
});

mulForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    const num1 = parseFloat(mulForm.num1.value);
    const num2 = parseFloat(mulForm.num2.value);

    mulResult.innerText = num1 * num2;
});