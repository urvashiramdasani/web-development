var todos = [];
var input = prompt("What would you like to do?");
while(input!== "quit") {
	var input = prompt("What would you like to do?");
	if(input === "list") {
		console.log(todos)
	}
	else if(input === "new") {
		var newTodo = prompt("Enter new Todo : ");
		todos.push(newTodo);
	}
}
console.log("OK, YOU QUIT THE APP");