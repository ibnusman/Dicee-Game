
//first dice 
var plImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

var displayImage = Math.floor(Math.random() * plImages.length); // getting the random images for the first dice

// Secound dice
var secoundDice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

var displayDice = Math.floor(Math.random() * plImages.length);  //getting the random image for the secound dice 

//display images 
document.querySelector("img.img1").setAttribute("src", "images/" + plImages[displayImage]);

document.querySelector("img.img2").setAttribute("src", "images/" + secoundDice[displayDice]);

if (displayImage > displayDice) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (displayDice > displayImage) {
    document.querySelector("h1").textContent = "Player 2 Wins";
}
else {
    document.querySelector("h1").textContent = "Its a draw!";
}
