class Player {
    constructor(name, totalCoins = 0, status = "Small", hasStar = false, gameActive = true){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }

    setName(namePicked){
        this.name = namePicked;
    }

    gotHit(){
        if (this.status === "Small"){
            this.status = "Dead"
            this.gameActive = false;
        } else if (this.status === "Big"){
            this.status = "Small"
        } else if (this.status === "Powered up"){
            this.status = "Big"
        }
    }

    gotPowerUp(){
        if (this.status === "Small"){
            this.status = "Big"
        } else if (this.status === "Big"){
            this.status = "Powered up"
        }
    }

    addCoin(){
        this.totalCoins++;
    }

    print(){
        console.log(`Name: ${this.name} 
Status: ${this.status} 
Coins: ${this.totalCoins}`)
    }
}

randomRange = () => Math.floor(Math.random() * 3);

const mario = new Player("Mario");

const gameLoop = setInterval(() => {
    const num = randomRange();

    if(mario.gameActive != false){
        if(num === 0){
            mario.gotHit();
        } else if (num === 1){
            mario.gotPowerUp();
        } else if (num === 2){
            mario.addCoin();
        }
        mario.print();
    } else {
        console.log("YOU HAVE DIED!")
        clearInterval(gameLoop)
    }
}, 1000)