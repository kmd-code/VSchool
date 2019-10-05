
const inputBtn = document.getElementById("addItem");
const deleteBtn = document.getElementsByClassName("delete");
    
inputBtn.addEventListener("click",function(){
    const list = document.getElementById("list")
    let input = document.getElementById("input");
    let newItem = document.createElement("li")

    if (input.value != ''){
    newItem.innerHTML = "<div>" + input.value + "</div><button class='delete'>X</button>"
    list.appendChild(newItem);
    input.value = "";
    deleteRow();
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