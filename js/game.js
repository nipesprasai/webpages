//create secretNumber
var secretNumber = Math.random(7);
//ask user for guess
var guess = Number(prompt("Guess a number"));

//check if guess is right
if(guess === secretNumber){
	alert("You got it right!");
}

//check if guess is higher
else if(guess>secretNumber){
	alert("Too high. Guess Again!");
}

else{
	alert("Too low. Guess Again!");
}
