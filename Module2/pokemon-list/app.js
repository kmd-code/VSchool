const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);

        displayPokemon(data);
    } 
}

displayPokemon = (arr) => {
    for (let i = 0; i < arr.objects[0].pokemon.length; i++){
        h1 = document.createElement("h1");
        pokemon = arr.objects[0].pokemon[i].name;

        h1.textContent = pokemon.charAt(0).toUpperCase() + pokemon.substring(1)
        document.body.appendChild(h1);
    }
}

