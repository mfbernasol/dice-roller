var randomInt = Math.floor(Math.random()* 6) + 1;
var randomInt2 = Math.floor(Math.random()* 6) + 1;

var diceImage = "images/dice" + randomInt + ".png";
var diceImage2 = "images/dice" + randomInt2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",diceImage);
document.querySelectorAll("img")[1].setAttribute("src",diceImage2);


function rollDice(){
    var randomInt = Math.floor(Math.random()* 6) + 1;
    var randomInt2 = Math.floor(Math.random()* 6) + 1;

    var diceImage = "images/dice" + randomInt + ".png";
    var diceImage2 = "images/dice" + randomInt2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src",diceImage);
    document.querySelectorAll("img")[1].setAttribute("src",diceImage2);

    if(randomInt > randomInt2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    }else if(randomInt2 > randomInt){
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    }else {
        document.querySelector("h1").innerHTML = "It's a Draw."
    }
}


