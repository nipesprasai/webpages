var button = document.querySelector("button");
// var isPurple = false;


// Toggle the color by changing background 
/*button.addEventListener("click", function(){
	if(isPurple){
	//if white make it purple else make it white
	document.body.style.background = "white";
} else{
		document.body.style.background = "purple";
	}
	isPurple = !isPurple;
}); */


// Toggle the color by toggling the classlist
button.addEventListener("click", function(){
	
	document.body.classList.toggle("purple");
});