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
}