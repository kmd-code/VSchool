getData = () => {
    axios.get("https://api.vschool.io/kduvall/todo")
        .then(res => createTodos(res.data))
        .catch(err => console.log(err))
}

getData();

const todo = document.todo


todo.addEventListener("submit", event => {
    event.preventDefault();

    const newTodo = {
        "title": todo.title.value,
        "description": todo.description.value,
        "price": todo.price.value,
        "imgUrl": todo.imgURL.value
    }

    todo.title.value = "";
    todo.description.value = "";
    todo.price.value = "";
    todo.imgURL.value = "";

    axios.post("https://api.vschool.io/kduvall/todo", newTodo)
        .then(getData)
        .catch(err => console.log(err))
})

createTodos = (data) => {
    const todo = document.getElementById("todoList");
    clearList();
    for (let i = 0; i < data.length; i++){
        div = document.createElement("div");
        title = document.createElement("h2");
        price = document.createElement("h2");
        description = document.createElement("h2");
        image = document.createElement("img");

        checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.label = "todo";
        checkbox.checked = data[i].completed;

        price.textContent = `$${data[i].price}`;
        title.textContent = data[i].title;
        description.textContent = data[i].description;
        image.src = data[i].imgUrl;

        div.className = data[i].completed;
        div.id = data[i]._id;

        div.appendChild(checkbox);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(description);
        div.appendChild(image);

        todo.appendChild(div);
    }
    addButtons();
}

clearList = () => {
    const el = document.getElementById("todoList");
    while (el.firstChild){
        el.removeChild(el.firstChild);
    }
}

addButtons = () => {
    const el = document.getElementById("todoList").children;

    // add all buttons
    for (let i = 0; i < el.length; i++){
        delButton = document.createElement("button");
        delButton.textContent = "DELETE";
        delButton.className = "delete";

        el[i].appendChild(delButton);
    }


    // Event Listeners
    
    const delBtns = document.getElementsByClassName("delete");
    for (let i = 0; i < delBtns.length; i++){
        delBtns[i].addEventListener("click", () => {
            const id = delBtns[i].parentElement.id;
            axios.delete(`https://api.vschool.io/kduvall/todo/${id}`)
                .then(getData)
                .catch(err => console.log(err))
         })
    }
    
    const checkboxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener("click", () => {
            const id = checkboxes[i].parentElement.id;
            if(checkboxes[i].checked === true) {
                axios.put(`https://api.vschool.io/kduvall/todo/${id}`, {"completed": true})
                    .then(getData)
                    .catch(err => console.log(err))
            } else {
                axios.put(`https://api.vschool.io/kduvall/todo/${id}`, {"completed": false})
                    .then(getData)
                    .catch(err => console.log(err))
            }
            
        })
    }
}