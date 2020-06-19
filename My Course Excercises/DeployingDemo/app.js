var express = require("express")
var app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
	res.render("home")
})

app.get("/about", function(req, res) {
	res.render("about")
})

var PORT = process.env.PORT || 3000 // this line needs to be modified in each project

app.listen(PORT, function(req, res) {
	console.log("Server is Running...")
})