
const inputBtn = document.getElementById("addItem");
const deleteBtn = document.getElementsByClassName("delete");
    
inputBtn.addEventListener("click",function(){
    const list = document.getElementById("list")
    let input = document.getElementById("input");
    let newItem = document.createElement("li")

    //
    const delBtn = document.createElement('button')
    delBtn.addEventListener("click", function(){
        deleteBtn[i].parentElement.style.display = "none"
    })

    if (input.value != ''){
    //newItem.innerHTML = "<div>" + input.value + "</div><button class='delete'>X</button>" 
    newItem.appendChild(delBtn)
    list.appendChild(newItem);
    input.value = "";
    //deleteRow();

    } else {
        alert("You must enter a ToDo!");
    }
});

deleteRow();


function deleteRow (){
    for (let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener("click", function(){
            deleteBtn[i].parentElement.style.display = "none"
        });
    }
}

