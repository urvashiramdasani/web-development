var request = require('request')
request('https://www.google.com', function(error, response, body) {
	if(!error && response.statusCode == 200) {
		var parsedData = JSON.parse(body) // to convert body string to javascript object
		console.log(body) // typeof body
	}
})

// Steps to follow:
// mkdir directory
// cd directory
// npm init
// npm install --save express ejs request