let randomNumber1= Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
// console.log(randomNumber2);
// document.querySelector("div div img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementById("i1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementById("i2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
if(randomNumber1>randomNumber2){
    document.getElementById("res").innerHTML = "🚩Player 1 Wins"
}else{
    document.getElementById("res").innerHTML = "Player 2 Wins🚩"
}