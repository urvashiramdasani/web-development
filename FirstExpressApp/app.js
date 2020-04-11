var express = require("express")

var app = express()

// routes->
// order of routes matter
// if * route is put first, it will be always executed
app.get("/", function(req, res) {
	res.send("Hi there!")
})

app.get("/bye", function(req, res) {
	res.send("GoodBye!")
})

app.get("/dog", function(req, res) {
	res.send("MEOW!")
})

app.get("/r/:subredditName", function(req, res) {
	console.log(req.params) // params is a js object
	res.send("Welcome to reddits page")
})

app.get("/r/:subreddit/comments/:id/:title", function(req, res) {
	res.send("Welcome to the comments page!")
})

app.get("*", function(req, res) {
	res.send("YOU ARE A STAR!")
})

app.listen(3000, function() {
	console.log("Server has started...")
})

// npm init to create this file. to store express dependencies, we do npm install
// express --save