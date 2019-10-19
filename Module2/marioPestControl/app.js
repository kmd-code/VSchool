// event listener "change"

const marioForm = document.marioPest;
const totalCoins = document.getElementById("totalCoins")

marioForm.addEventListener("input", (event) => {
    event.preventDefault();

    let goombaCount = marioForm.goombasIn.value;
    let bobombsCount = marioForm.bobombsIn.value;
    let cheepCheepCount = marioForm.cheepCheepsIn.value;

    const goombaTotal = goombaCount * 5;
    const bobombsTotal = bobombsCount * 7;
    const cheepCheepTotal = cheepCheepCount * 11;

    const totalCost = goombaTotal + bobombsTotal + cheepCheepTotal;

    totalCoins.innerText = totalCost;
});
