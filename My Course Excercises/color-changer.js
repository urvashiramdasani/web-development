var button = document.querySelector("button")
var hasClicked = false

button.addEventListener("click",function() {
	if(hasClicked == false) {
		document.body.style.background = "purple"
	}
	else {
		document.body.style.background = "white" // can use toggle instead to add or remove class
	}
	hasClicked = !hasClicked
})