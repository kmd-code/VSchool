getData = () => {
    axios.get("https://api.vschool.io/kduvall/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

getData();

listData = (data) => {
    const todo = document.getElementById("todoList");
    clearList();

    for (let i = 0; i < data.length; i++){
        div = document.createElement("div");
        title = document.createElement("h1");
        price = document.createElement("h2");
        description = document.createElement("h2");
        image = document.createElement("img");

        title.textContent = data[i].title;
        price.textContent = data[i].price;
        description.textContent = data[i].description;
        image.src = data[i].imgUrl;

        div.className = data[i].completed;
        div.id = data[i]._id;

        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(description);
        div.appendChild(image);

        todo.appendChild(div);

    }

    addButtons();
}

addButtons = () => {
    const el = document.getElementById("todoList").children;

    for (let i = 0; i < el.length; i++){
    parent = el[i];
    delButton = document.createElement("button");
    doneButton = document.createElement("button");

    delButton.textContent = "X"
    doneButton.textContent = "O"

    delButton.addEventListener("click", (parent) => {
        console.log(parent.path[1].id);
        id = parent.path[1].id;
        axios.delete(`https://api.vschool.io/kduvall/todo/${id}`)
            .then(res => listData(res.data))
            .catch(err => console.log(err))
    })

    parent.appendChild(delButton);
    parent.appendChild(doneButton);
    }

}

// buttonEvent = () => {
    
// }

clearList = () => {
    const el = document.getElementById("todoList");
    while (el.firstChild){
        el.removeChild(el.firstChild);
    }
}

// deleteTodo = () => {
//     console.log(delButton.parentElement.id);
// }

// finishTodo = () => {
//     console.log(doneButton.parentElement.className);
// }



const todo = document.todo

todo.addEventListener("submit", event => {
    event.preventDefault();

    const newTodo = {
        "title": todo.title.value,
        "description": todo.description.value,
        "price": todo.price.value,
        "imgURL": todo.imgURL.value
    }

    todo.title.value = "";
    todo.description.value = "";
    todo.price.value = "";
    todo.imgURL.value = "";

    axios.post("https://api.vschool.io/kduvall/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})