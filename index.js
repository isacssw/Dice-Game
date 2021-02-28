//create a random number to image 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
//create a random number to image 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

//creating the string that points to the new img1 adress
var img1Attribute = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", img1Attribute);

//creating the string that points to the new img2 adress
var img2Attribute = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", img2Attribute);

// checking the game results
if (img1Attribute === img2Attribute) {
  //its a Draw!
  document.querySelector("h1").innerHTML = "Draw!";
} else if (img1Attribute > img2Attribute) {
  //Player1 wins
  document.querySelector("h1").innerHTML = "Play 1 Wins!🥇";
} else {
  //Player2 wins
  document.querySelector("h1").innerHTML = "Play 2 Wins!🥇";
}
