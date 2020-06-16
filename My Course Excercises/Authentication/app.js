var express               = require("express"),
	app               	  = express(),
	mongoose              = require("mongoose"),
	bodyParser            = require("body-parser"),
	passport              = require("passport"),
	localStrategy 		  = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	User                  = require("./models/user")
	session               = require("express-session")

app.use(require("express-session")({
	secret: "Rusty is the best and cutest dog in the world",
	resave: false,
	saveUninitialized: false
}))
app.set("view engine", "ejs")
mongoose.connect("mongodb://localhost/auth_app")
app.use(passport.initialize())
app.use(passport.session()) // this one line was missing
app.use(bodyParser.urlencoded({extended: true}))

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.get("/", function(req, res) {
	res.render("home")
})

// middleware
app.get("/secret", isLoggedIn, function(req, res) {
	res.render("secret")
})

app.get("/register", function(req, res) {
	res.render("register")
})

app.post("/register", function(req, res) {
	User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
		if(err) {
			console.log(err)
			return res.render("register")
		}
		passport.authenticate("local")(req, res, function(err, user, info){
			res.redirect("/secret")
		})
	})
})

app.get("/login", function(req, res) {
	res.render("login")
})

app.post("/login", passport.authenticate("local", {
	successRedirect: "/secret",
	failureRedirect: "/login"
}), function(req, res) {
})

app.get("/logout", function(req, res) {
	req.logout()
	res.redirect("/")
})

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		next()
	}
	else res.redirect("/login")
}

app.listen(3000, function() {
	console.log("Server Started...")
})