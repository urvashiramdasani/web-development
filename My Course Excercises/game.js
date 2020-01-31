//create secret number
var secretNumber = 4;
//ask user for guess
var guess = prompt("Guess a number");
//check guess
if (guess==secretNumber) {
	alert("You Got It Right!!");
}
//otherwise, you got it wrong
else if(Number(guess)>secretNumber) {
	alert("Too High. Guess Again!");
}
else if(Number(guess)<secretNumber) {
	alert("Too Low. Guess Again!");
}
else {
	alert("WRONGGGG");
}
