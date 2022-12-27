let randomNumber1= Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
console.log(randomNumber2);
document.querySelector("div div img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
// document.getElementsByClassName("img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");