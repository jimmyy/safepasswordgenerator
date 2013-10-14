var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response){
	// console.log('passwordgenerator');
	var passwordgenerator = require('./passwordgenerator');
	response.send(passwordgenerator.generate_password(8, true));
});

app.get('/:symbol', function(req, response){
	var symbol = req.params.symbol;
	console.log('passwordgenerator');
	var passwordgenerator = require('./passwordgenerator');
	response.send(passwordgenerator.generate_password(length, symbol));
});

app.get('/:symbol/:length', function(req, response){
	var length = req.params.length;
	var symbol = req.params.symbol;
	console.log('passwordgenerator');
	var passwordgenerator = require('./passwordgenerator');
	response.send(passwordgenerator.generate_password(length, symbol));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
