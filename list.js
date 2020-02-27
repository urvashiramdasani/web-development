var todos = [];
var input = prompt("What would you like to do?");
while(input!== "quit") {
	var input = prompt("What would you like to do?");
	if(input === "list") {
		listTodos()
	}
	else if(input === "new") {
		newTodos()
	}
	else if(input === "delete") {
		deleteTodos()
	}
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
	console.log("*******")
	todos.forEach(function(todo,i) {
		console.log(i+": "+todo)
	})
	console.log("*******")
}

function newTodos() {
	var newTodo = prompt("Enter new Todo : ");
	todos.push(newTodo);
	console.log("Added Todo")
}

function deleteTodos() {
	var index = prompt("Enter index of todo to delete : ")
	todos.splice(index,1)
	console.log("Deleted Todo")
}
